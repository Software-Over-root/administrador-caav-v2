import React, { Fragment, useState } from 'react';

import icon1 from "../../Images/Icon/67.png"
import icon2 from "../../Images/Icon/68.png"
import icon3 from "../../Images/Icon/69.png"
import icon4 from "../../Images/Icon/70.png"

import "./Estudiantes.css"

const Estudiantes = () => {

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Estudiantes
                </p>
                <div className='flex_padre'>
                    <a href="" className='box_estudiantes'>
                        <img src={icon1} alt="" />
                        <p>
                            Horarios
                        </p>
                    </a>
                    <a href="" className='box_estudiantes'>
                        <img src={icon2} alt="" />
                        <p>
                            Horarios <br/>
                            de examenes
                        </p>
                    </a>

                    <a href="" className='box_estudiantes'>
                        <img src={icon3} alt="" />
                        <p>
                            Derecho <br/>
                            a examen
                        </p>
                    </a>

                    <a href="" className='box_estudiantes'>
                        <img src={icon4} alt="" />
                        <p>
                            Calificaciones
                        </p>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Estudiantes;