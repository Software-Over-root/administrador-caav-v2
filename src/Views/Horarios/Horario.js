import React, { Fragment, useState } from 'react';

import icon1 from "../../Images/Icon/63.png"

import "./Horario.css"

const Horario = () => {

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center", marginBottom:"10px"}}>
                    Horarios
                </p>
                <div className='cont_horario'>
                    <div className='fondo_horarios'>
                        <div className='texto_pass'>
                            <p style={{fontWeight:"bold"}}> 
                                Contraseña:
                            </p>
                            <p style={{color:"#707070"}}>
                                123143
                            </p>
                            <button type="" className='btn_horario'>
                                Cambiar
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='box_horario'>
                            <p>
                                Horarios primeros
                            </p>
                            <button type="" style={{background:"none", border:"none"}}>
                                <img src={icon1} alt="" />
                            </button>
                        </div>
                        <div className='box_horario'>
                            <p>
                                Horarios segundos
                            </p>
                            <button type="" style={{background:"none", border:"none"}}>
                                <img src={icon1} alt="" />
                            </button>
                        </div>
                        <div className='box_horario'>
                            <p>
                                Horarios terceros
                            </p>
                            <button type="" style={{background:"none", border:"none"}}>
                                <img src={icon1} alt="" />
                            </button>
                        </div>
                        <div className='box_horario'>
                            <p>
                                Horarios cuartos
                            </p>
                            <button type="" style={{background:"none", border:"none"}}>
                                <img src={icon1} alt="" />
                            </button>
                        </div>
                        <div className='box_horario'>
                            <p>
                                Horarios quintos
                            </p>
                            <button type="" style={{background:"none", border:"none"}}>
                                <img src={icon1} alt="" />
                            </button>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}> 
                        <a href='/' className='btn_h1'>
                            Agregar archivo
                        </a>
                        <a href="" className='btn_h2'>
                            Regresar
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Horario;