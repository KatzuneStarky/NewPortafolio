import React from "react";
import { Link } from "react-router-dom";
import cv from '../Docs/CV - Ramirez Cisneros Adan Enrique.pdf'
import yo from '../images/rostro.jpg'

function About() {
    return (
        <div className="container">
            <div className="sobre-mi">
                <div className="image-card">
                    <div className="img-img">
                        <img src={yo} alt="" style={{width: "100%", height: "100%"}} />
                    </div>
                    <h3 className="nombre">Adan Ramirez</h3>
                    <hr />
                    <h4 className="titulo">Ingeniero en Software</h4>
                    <div className="project-btn-grp">
                        <button className="project-btn github">
                            <a href={cv} download>Decargar CV</a>
                        </button>
                        <button className="project-btn github">
                            <Link to={"/contact"}>Contacto</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="skill">
                <h1>Acerca De</h1>
                <p>
                    Que tal, soy Adán Enrique Ramirez Cisneros un Ingeniero en
                    Desarrollo de Software al cual le gusta aprender nuevas tecnologias
                    en el area del software, tengo aficion por la programacion web
                </p>
                <h2>Habilidades</h2>
                <div className="tSkill">
                    <div className="skills">
                        <div className="details">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="bar">
                            <div id="html-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="bar">
                            <div id="css-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>JAVASCRIPT</span>
                            <span>70%</span>
                        </div>
                        <div className="bar">
                            <div id="js-bar"></div>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="details">
                            <span>REACT JS</span>
                            <span>50%</span>
                        </div>
                        <div className="bar">
                            <div id="react-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
