import React, { Fragment, useState } from 'react';

import icon2 from "../../Images/Icon/63.png"

const Archivo = () => {

    const datos = [
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo"
        }
    ]

    return (
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Ene-Abr 2022
                </p>
                <div className='cont_3'>
                    <div className='row'>
                        <div className='col s8'>        
                            <div className='row'>
                                
                                <div className='col s6'>
                                    <p className='texto_solicitud'>
                                        Nombre
                                    </p>
                                </div>
                                <div className='col s3'>
                                    <p className='texto_solicitud' style={{color:"#717579"}}>
                                        Correo
                                    </p>
                                </div>
                                <div className='col s3'>
                                    <p className='texto_solicitud' style={{color:"#717579"}}>
                                        Cuatrimestre
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {datos.map(dato => (
                            <div className='box_solicitud'>
                                <div className='row'>
                                    <div className='col s8'>
                                        <div className='row'>
                                            <p className='texto_solicitud_2'>
                                                {dato.fecha}
                                            </p>
                                            <div className='col s6'>
                                                <div className=''>
                                                
                                                    <p className='texto_solicitud'>
                                                        {dato.nombre}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col s3'>
                                                <p className='texto_solicitud'>
                                                    {dato.correo}
                                                </p>
                                            </div>
                                            <div className='col s3'>
                                                <p className='texto_solicitud' style={{display:"flex", alignItems:"center"}}>
                                                    {dato.cuatrimestre}
                                                </p>
                                            </div>
                                        </div>     
                                    </div>
                                    <div className='col s4'>
                                        <div className='row'>
                                            <div className='col s4 offset-s4'>
                                                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                                    {/* <img src={icon1} alt="" /> */}
                                                    <img src={icon2} alt="" />
                                                </div>
                                            </div>
                                            <div className='col s4'>
                                                <div href="/" className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                    <p>
                                                        ATENDIDO
                                                    </p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <a type="" className='btn_regresar' style={{backgroundColor:"#00496c"}}>
                                    Regresar
                                </a>
                            </div>
                        </div>
                        <div>
                            <ul class="pagination">
                                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                <li class="active"><a href="#!">1</a></li>
                                <li class="waves-effect"><a href="#!">2</a></li>
                                <li class="waves-effect"><a href="#!">3</a></li>
                                <li class="waves-effect"><a href="#!">4</a></li>
                                <li class="waves-effect"><a href="#!">5</a></li>
                                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Archivo;