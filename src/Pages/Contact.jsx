import React, { useRef } from "react";
import { FaFacebook, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        try {
            emailjs.sendForm('service_c8rvoyj', 'template_cw5hm5u', form.current, 'egy5hF29kyDURzd19')
            e.target.reset()
            toast.success("Mensaje enviado!!")
        } catch (err) {
            toast.error("Mensaje no enviado")
        }
    };
    return (
        <div className="container contact-form">
            <div className="container-fluid">
                <div className="left-container">
                    <div className="left-top-containt">
                        <span>Contacto</span>
                    </div>
                    <div className="left-center-containt">
                        <ul>
                            <li>
                                <a href="" target={"_blank"}>
                                    <i><FaFacebook /></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target={"_blank"}>
                                    <i><FaLinkedin /></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target={"_blank"}>
                                    <i><FaTelegram /></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target={"_blank"}>
                                    <i><FaGithub /></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="left-bottom-containt">
                        <span>Telefono: (+52) 612-30-5-09-06</span>
                        <span>Correo Electronico: adan141098@hotmail.com</span>
                    </div>
                </div>

                <div className="right-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder="Nombre" required />
                        <input type="email" name="email" placeholder="Correo electronico" required />
                        <input type="number" placeholder="Numero contacto" />
                        <textarea
                            rows="10"
                            placeholder="Mensaje"
                            name="message"
                            style={{ resize: "none" }}
                        ></textarea>

                        <div className="btn">
                            <button type="reset">Cancelar</button>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
