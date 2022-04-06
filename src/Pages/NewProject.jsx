import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase/firebase";

function NewProject() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        git: "",
        link: "",
        createdAt: Timestamp.now().toDate(),
    });
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = () => {
        if (
            !formData.title ||
            !formData.description ||
            !formData.git ||
            !formData.link ||
            !formData.image
        ) {
            toast.error("favor de llenar los campos");
            return;
        }
        const storageRef = ref(
            storage,
            `/images/${Date.now()}${formData.image.name}`
        );
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
        uploadImage.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (err) => {
                toast.error("hubo un error", err);
            },
            () => {
                setFormData({
                    title: "",
                    description: "",
                    git: "",
                    link: "",
                    image: "",
                });
                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const projectRef = collection(db, "proyectos");
                    addDoc(projectRef, {
                        title: formData.title,
                        description: formData.description,
                        imageUrl: url,
                        git: formData.git,
                        link: formData.link,
                        createdAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            toast.success("Proyecto subido al 100");
                            setProgress(0);
                        })
                        .catch((err) => {
                            toast.error("error", err);
                        });
                });
            }
        );
    };
    return (
        <div className="container">
            <div className="border p-3 mt-3 bg-light">
                <h2>Subir projecto</h2>
                <label htmlFor="">Titulo</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleChange(e)}
                />

                <label htmlFor="">Descripcion</label>
                <textarea
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                ></textarea>

                <label htmlFor="">Link Github</label>
                <input
                    type="text"
                    name="git"
                    className="form-control"
                    value={formData.git}
                    onChange={(e) => handleChange(e)}
                />

                <label htmlFor="">Link proyecto</label>
                <input
                    type="text"
                    name="link"
                    className="form-control"
                    value={formData.link}
                    onChange={(e) => handleChange(e)}
                />

                <label htmlFor="">Imagen</label>
                <input
                    type="file"
                    name="imageUrl"
                    accept="image/*"
                    className="form-control"
                    onChange={(e) => handleImageChange(e)}
                />

                {progress === 0 ? null : (
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped mt-2"
                            style={{ width: `${progress}%` }}
                        >
                            {`Subiendo imagen ${progress}%`}
                        </div>
                    </div>
                )}
                <button
                    className="form-control btn-primary mt-2"
                    onClick={handlePublish}
                >
                    Publicar
                </button>
            </div>
        </div>
    );
}

export default NewProject;
