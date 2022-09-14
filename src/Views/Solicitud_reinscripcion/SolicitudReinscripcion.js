import React, { Fragment, useState } from 'react';

import "./SolicitudReinscripcion.css"

import icon1 from "../../Images/Icon/62.png";
import icon2 from "../../Images/Icon/63.png";


const SolicitudReinscripcion = () => {

    const [cine, setCine] = useState([
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 0
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 1
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 1
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 0
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 0
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 0
        },
        {
            nombre:"Hugo Eduardo Guerrero García",
            fecha:"3 DE MAYO 2022",
            correo:"hugo@gmail.com",
            cuatrimestre:"Octavo",
            status: 1
        }
    ])
    const [animacion, setAnimacion] = useState([
        {
            nombre:"Oscar Isaac Lopez Rojas",
            fecha:"8 DE JULIO 2022",
            correo:"oscar@gmail.com",
            cuatrimestre:"Septimo",
            status: 0
        },
        {
            nombre:"Oscar Isaac Lopez Rojas",
            fecha:"8 DE JULIO 2022",
            correo:"oscar@gmail.com",
            cuatrimestre:"Septimo",
            status: 1
        },
        {
            nombre:"Oscar Isaac Lopez Rojas",
            fecha:"8 DE JULIO 2022",
            correo:"oscar@gmail.com",
            cuatrimestre:"Septimo",
            status: 0
        },
        {
            nombre:"Oscar Isaac Lopez Rojas",
            fecha:"8 DE JULIO 2022",
            correo:"oscar@gmail.com",
            cuatrimestre:"Septimo",
            status: 1
        },
        {
            nombre:"Oscar Isaac Lopez Rojas",
            fecha:"8 DE JULIO 2022",
            correo:"oscar@gmail.com",
            cuatrimestre:"Septimo",
            status: 0
        }
    ]);
    const [multimedia, setMultimedia] = useState([
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 0
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 0
        } ,
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 0
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 1
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 1
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 1
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 1
        },
        {
            nombre:"Edwin Ivan Rubio Navarro",
            fecha:"4 DE ENERO 2022",
            correo:"edwin@gmail.com",
            cuatrimestre:"Tercero",
            status: 0
        }
    ])
    const [marketing, setMarketing] = useState([
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 0
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 1
        },
        {
            nombre:"Mauricio Javier Ramirez Rodriguez",
            fecha:"26 DE AGOSTO 2022",
            correo:"mauricio@gmail.com",
            cuatrimestre:"Primero",
            status: 0
        } 
    ]);

    const [estadoActualCine, setEstadoActualCine] = useState([{}]);
    const [estadoActualAnimacion, setEstadoActualAnimacion] = useState([{}]);
    const [estadoActualMultimedia, setEstadoActualMultimedia] = useState([{}]);
    const [estadoActualMarketing, setEstadoActualMarketing] = useState([{}]);

    const SolicitudesCine = solicitud => {
        if (solicitud == 0) {
            let filtro = cine.filter(dato => dato.status === 0);
            console.log(filtro);
            setEstadoActualCine(filtro);
        } if (solicitud == 1) {
            let filtro = cine.filter(dato => dato.status === 1);
            console.log(filtro);
            setEstadoActualCine(filtro);
        } if (solicitud == 2) {
            setEstadoActualCine(cine)
            console.log(estadoActualCine);
        }
    }
    const SolicitudesAnimacion = solicitud => {
        if (solicitud == 0) {
            let filtro = animacion.filter(dato => dato.status === 0);
            setEstadoActualAnimacion(filtro);
        } if (solicitud == 1) {
            let filtro = animacion.filter(dato => dato.status === 1);
            setEstadoActualAnimacion(filtro);
        } if (solicitud == 2) {
            setEstadoActualAnimacion(animacion)
        }
    }
    const SolicitudesMultimedia = solicitud => {
        if (solicitud == 0) {
            let filtro = multimedia.filter(dato => dato.status === 0);
            setEstadoActualMultimedia(filtro);
        } if (solicitud == 1) {
            let filtro = multimedia.filter(dato => dato.status === 1);
            setEstadoActualMultimedia(filtro);
        } if (solicitud == 2) {
            setEstadoActualMultimedia(multimedia)
        }
    }
    const SolicitudesMarketing = solicitud => {
        if (solicitud == 0) {
            let filtro = marketing.filter(dato => dato.status === 0);
            setEstadoActualMarketing(filtro);
        } if (solicitud == 1) {
            let filtro = marketing.filter(dato => dato.status === 1);
            setEstadoActualMarketing(filtro);
        } if (solicitud == 2) {
            setEstadoActualMarketing(marketing)
        }
    }
    
    return(
        <Fragment>
            <div style={{textAlign:"center"}}>
                <p className='titulo_solicitud'>
                    Solicitud de reinscripción
                </p>

                <div>
                    <p className='titulo_solicitud'>
                        Cine Digital
                    </p>
                    <div className='cont_solicitud'>
                        <div style={{display:"flex", justifyContent:"left"}}>
                            <button type="" onClick={() => {SolicitudesCine(2)}} className="btn_solicitud" >
                                Todos
                            </button>
                            <button type="" onClick={() => {SolicitudesCine(0)}} className="btn_solicitud" >
                                Pendientes
                            </button>
                            <button type="" onClick={() => {SolicitudesCine(1)}} className="btn_solicitud" >
                                Atendidos
                            </button>   
                        </div>
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
                            {estadoActualCine.map(dato => (
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
                                                    {dato.status == 0 ? (
                                                        <a href="/" className='caja_status'>
                                                            <p>
                                                                PENDIENTE
                                                            </p>
                                                        </a>

                                                    ) : (
                                                        <a href="/" className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                            <p>
                                                                ATENDIDO
                                                            </p>
                                                        </a>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <p className='titulo_solicitud'>
                        Animacion
                    </p>
                    <div className='cont_solicitud'>
                        <div style={{display:"flex", justifyContent:"left"}}>
                            <button type="" onClick={() => {SolicitudesAnimacion(2)}} className="btn_solicitud" >
                                Todos
                            </button>
                            <button type="" onClick={() => {SolicitudesAnimacion(0)}} className="btn_solicitud" >
                                Pendientes
                            </button>
                            <button type="" onClick={() => {SolicitudesAnimacion(1)}} className="btn_solicitud" >
                                Atendidos
                            </button>   
                        </div>
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
                            {estadoActualAnimacion.map(dato => (
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
                                                    {dato.status == 0 ? (
                                                        <a href="/" className='caja_status'>
                                                            <p>
                                                                PENDIENTE
                                                            </p>
                                                        </a>

                                                    ) : (
                                                        <a href="/" className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                            <p>
                                                                ATENDIDO
                                                            </p>
                                                        </a>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>

                <div>
                    <p className='titulo_solicitud'>
                        Multimedia
                    </p>
                    <div className='cont_solicitud'>
                        <div style={{display:"flex", justifyContent:"left"}}>
                            <button type="" onClick={() => {SolicitudesMultimedia(2)}} className="btn_solicitud" >
                                Todos
                            </button>
                            <button type="" onClick={() => {SolicitudesMultimedia(0)}} className="btn_solicitud" >
                                Pendientes
                            </button>
                            <button type="" onClick={() => {SolicitudesMultimedia(1)}} className="btn_solicitud" >
                                Atendidos
                            </button>   
                        </div>
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
                            {estadoActualMultimedia.map(dato => (
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
                                                    {dato.status == 0 ? (
                                                        <a href="/" className='caja_status'>
                                                            <p>
                                                                PENDIENTE
                                                            </p>
                                                        </a>

                                                    ) : (
                                                        <a href="/" className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                            <p>
                                                                ATENDIDO
                                                            </p>
                                                        </a>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>

                <div>
                    <p className='titulo_solicitud'>
                        Marketing
                    </p>
                    <div className='cont_solicitud'>
                        <div style={{display:"flex", justifyContent:"left"}}>
                            <button type="" onClick={() => {SolicitudesMarketing(2)}} className="btn_solicitud" >
                                Todos
                            </button>
                            <button type="" onClick={() => {SolicitudesMarketing(0)}} className="btn_solicitud" >
                                Pendientes
                            </button>
                            <button type="" onClick={() => {SolicitudesMarketing(1)}} className="btn_solicitud" >
                                Atendidos
                            </button>   
                        </div>
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
                            {estadoActualMarketing.map(dato => (
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
                                                    {dato.status == 0 ? (
                                                        <a href="/" className='caja_status'>
                                                            <p>
                                                                PENDIENTE
                                                            </p>
                                                        </a>

                                                    ) : (
                                                        <a href="/" className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                            <p>
                                                                ATENDIDO
                                                            </p>
                                                        </a>
                                                    )}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default SolicitudReinscripcion;