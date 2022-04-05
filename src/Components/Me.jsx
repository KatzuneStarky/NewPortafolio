import gsap, { Bounce } from 'gsap'
import React, { useEffect } from 'react'
import img1 from '../images/fondo2.jpg'

function Me() {

    const timeline = gsap.timeline()
    useEffect(() => {
        const nombre = document.querySelector(".nombre")
        timeline.from(nombre, {
            opacity: 0,
            x: -50,
            y: -50,
            duration: 1,
            stagger: 0.3,
            ease: Bounce.easeOut
        })
    }, [])

    return (
        <div className="container col-10">
            <div className="row align-items-center">
                <div className="col me-text">
                    <h1 className='nombre'>Adan Enrique Ramirez Cisneros</h1>
                    <h2>Programador Web / Desarrollador de Sofware</h2>
                    <p>
                        Que tal, soy Adán Enrique Ramirez Cisneros un Ingeniero en
                        Desarrollo de Software al cual le gusta aprender nuevas tecnologias
                        en el area del software, tengo aficion por la programacion web
                    </p>
                </div>
                <div className="col me-img">
                    <img src={img1} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default Me