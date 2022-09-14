import React, { Fragment, useState } from 'react';

import "./Archivos.css"

import icon1 from "../../Images/Icon/66.png"

const Archivos = () => {

    const archivos = {
        nombre:"Cine Digital",
        datos: [
            {
                nombre:"Ene-Abr",
                fecha:"2022"
            },
            {
                nombre:"Ene-Abr",
                fecha:"2021"
            },
            {
                nombre:"May-Ago",
                fecha:"2021"
            },
            {
                nombre:"Sep-Dic",
                fecha:"2021"
            },
            {
                nombre:"Ene-Abr",
                fecha:"2020"
            },
            {
                nombre:"May-Ago",
                fecha:"2020"
            },
            {
                nombre:"Sep-Dic",
                fecha:"2020"
            }
        ]
    }
    
    const obtenerArchiso = (archivos) => {

    }

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    {archivos.nombre}
                </p>
                <div className='cont_2'>
                    <div className='box_archivos_2'>
                        <img src={icon1} alt="" />
                        <p>
                            Ene-Abr <br/>
                            2022
                        </p>            
                    </div>
                    
                    <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        <div className='box_archivos_2'>
                            <img src={icon1} alt="" />
                            <p>
                                Ene-Abr <br/>
                                2022
                            </p>            
                        </div>
                        
                    </div>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <a type="" className='btn_regresar'>
                            Regresar
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Archivos;