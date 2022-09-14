import React, { Fragment, useState } from 'react';
import SideNav from '../../../Components/SideNav';

import "../../Solicitudes/Solicitud_reinscripcion/SolicitudReinscripcion.css"

import img1 from "../../../Images/Icon/65.png"

const ArchivosReinscripcion = () => {

    return(
        <Fragment>
            <SideNav />
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Archivo de inscripciones                
                </p>
                <div className='cont_solicitud' style={{display:"flex", justifyContent:"space-evenly", alignItems:"stretch", flexWrap:"wrap"}}>
                    <div className='flex_archivo'>
                        <a href='/archivos/cine' className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Cine Digital
                            </p>
                        </a>
                    </div>
                    <div className='flex_archivo'>
                        <a href='/archivos/animacion' className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Animación
                            </p>
                        </a>
                    </div>
                    <div className='flex_archivo'>
                        <a href='/archivos/multimedia' className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Multimedia
                            </p>
                        </a>
                    </div>
                    <div className='flex_archivo'>
                        <a href='/archivos/marketing' className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Marketing
                            </p>
                        </a>
                    </div>
                    <div className='flex_archivo'>
                        <a href='/archivos/publicidad' className='box_archivos'>
                            <img src={img1} alt="" />
                            <p>
                                Publicidad
                            </p>
                        </a>
                    </div>

                    
                </div>
            </div>
        </Fragment>
    )
}

export default ArchivosReinscripcion;