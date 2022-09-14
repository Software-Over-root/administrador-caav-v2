import React, { Fragment, useState } from 'react';

import "../Solicitud_reinscripcion/SolicitudReinscripcion.css"

import img1 from "../../Images/Icon/65.png"

const ArchivosReinscripcion = () => {

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Archivo de reinscripciones                
                </p>
                <div className='cont_solicitud' style={{display:"flex", justifyContent:"space-evenly", alignItems:"stretch", flexWrap:"wrap"}}>
                    <div className='flex_archivo'>
                        <button className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Cine Digital
                            </p>
                        </button>
                    </div>
                    <div className='flex_archivo'>
                        <button className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Animación
                            </p>
                        </button>
                    </div>
                    <div className='flex_archivo'>
                        <button className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Multimedia
                            </p>
                        </button>
                    </div>
                    <div className='flex_archivo'>
                        <button className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Marketing
                            </p>
                        </button>
                    </div>
                    <div className='flex_archivo'>
                        <button className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Publicidad
                            </p>
                        </button>
                    </div>

                    
                </div>
            </div>
        </Fragment>
    )
}

export default ArchivosReinscripcion;