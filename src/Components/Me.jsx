import gsap, { Bounce } from 'gsap'
import React, { useEffect } from 'react'
import yo from '../images/rostro.jpg'

function Me() {
    return (
        <div className="container col-10">
            <div className="row align-items-center">
                <div className="col me-text">
                    <h1 className='nombre'>Adan Enrique Ramirez Cisneros</h1>
                    <h2 className='titulos'>Programador Web / Desarrollador de Sofware</h2>
                    <p className='desc'>
                        Que tal, soy Adán Enrique Ramirez Cisneros un Ingeniero en
                        Desarrollo de Software al cual le gusta aprender nuevas tecnologias
                        en el area del software, tengo aficion por la programacion web
                    </p>
                </div>
                <div className="col me-img">
                    <img src={yo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Me