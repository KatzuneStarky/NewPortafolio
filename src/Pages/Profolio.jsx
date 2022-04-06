import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import img1 from '../images/fondo2.jpg'

function Profolio() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const projectRef = collection(db, "proyectos")
        const q = query(projectRef, orderBy("createdAt", "asc"))
        onSnapshot(q, (snapshot) => {
            const projects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProjects(projects)
        })
    }, [])
    return (
        <div className='projects'>
            <h1 className="project-heading">
                Mis Proyectos
            </h1>
            {
                projects.length === 0 ?
                    (
                        <p className='na'>No hay nada</p>
                    ) : (
                        projects.map(({id, title, description, imageUrl, git, link}) =>
                            <div className="project-container" key={id}>
                                <div className="project-card">
                                    <img src={imageUrl} alt="" className='project-img' />
                                    <div className="project-content">
                                        <h1 className="project-tittle">{title}</h1>
                                        <p className="project-info">
                                            {description}
                                        </p>
                                        <div className="project-btn-grp">
                                            <button className="project-btn github">
                                                <a href={git} target={"_blank"}>Ver Github</a>
                                            </button>
                                            <button className="project-btn live">
                                                <a href={link} target={"_blank"}>Ver Demo</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
            }
        </div>
    )
}

export default Profolio