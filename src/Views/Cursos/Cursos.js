import React, { Fragment, useEffect, useState } from 'react';
import SideNav from '../../Components/SideNav';
import Swal from 'sweetalert2';
import cursosHelper from "../../Helpers/Cursos";

import Loader from '../../Components/Loader';

import "./Cursos.css";

const Cursos = () => {
    const [titulo, setTitulo] = useState("Cursos y Diplomados");
    const [flag, setFlag] = useState(false);
    const [cursos, setCursos] = useState([]);
    const areas = [
        "",
        "Animación, Animé y Cómic",
        "Audio, Radio y Voz",
        "Cine y Video",
        "Dibujo, Ilustración y Pintura",
        "Diseño",
        "Emprendimiento",
        "Escritura y Narrativa",
        "Fotografía",
        "Las Artes",
        "Marketing Digital y la Web",
        "Multimedia y Videojuegos"
    ]

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    useEffect(() => {
        let area = window.location.pathname.split("/")[2];
        console.log(area);
        if (area === "1") {
            setTitulo("Animación, Animé y Cómic");
        } else if (area === "2") {
            setTitulo("Audio, Radio y Voz");
        } else if (area === "3") {
            setTitulo("Cine y Video");
        } else if (area === "4") {
            setTitulo("Dibujo, Ilustración y Pintura");
        } else if (area === "5") {
            setTitulo("Diseño");
        } else if (area === "6") {
            setTitulo("Emprendimiento");
        } else if (area === "7") {
            setTitulo("Escritura y Narrativa");
        } else if (area === "8") {
            setTitulo("Fotografía");
        } else if (area === "9") {
            setTitulo("Las Artes");
        } else if (area === "10") {
            setTitulo("Marketing Digital y la Web");
        } else if (area === "11") {
            setTitulo("Multimedia y Videojuegos");
        } else {
            setTitulo("Error...");
        }
        obtenerCursos(area);
    },[]);

    const obtenerCursos = async tipo => {
        let res = await cursosHelper.obtenerUnCursoArea(tipo);
        if (res.success) {
            setCursos(res.data);
            setFlag(true);
        } else {
            Swal.fire(
                'Error!',
                'No se lograron obtener los cursos, codigo: ' + res.code ,
                'error'
            )
        }
    }

    function createMarkup(materias) {
        return {__html: materias};
    }

    return (
        <Fragment>
            <SideNav />
            <div className='container'>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    {titulo}
                </p>
                {!flag ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <div id='cursos' className='flex_padre_2_d3'>
                        {cursos.map(curso => (
                            <div className='hijo_3_d3 hover-3'>
                                <div 
                                    style={{
                                        border:"solid 1px #707070",
                                        display:"flex",
                                        flexDirection:"column",
                                        height:"100%"
                                    }}
                                >
                                    <div>
                                        <a href={`/curso/${curso.nombre}`}>
                                            <div className='imagen-hover-3' style={{color:"black"}}>
                                                <div className='contenedor-hover-3'>
                                                    <img src={curso.imagen_externa} alt={curso.nombre} 
                                                        style={{
                                                            width:"100%", 
                                                            borderBottom:"solid 2px #707070"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {curso.modalidad.includes("1") && (
                                        <div className='tipo_curso tipo_precencial'>
                                            <p>Presencial</p>
                                        </div>
                                    )}
                                    {curso.modalidad.includes("2") && (
                                        <div className='tipo_curso tipo_hibrido'>
                                            <p>Híbrido</p>
                                        </div>
                                    )}
                                    {curso.modalidad.includes("3") && (
                                        <div className='tipo_curso tipo_video'>
                                            <p>Videorreunión</p>
                                        </div>
                                    )}
                                    {curso.modalidad.includes("4") && (
                                        <div className='tipo_curso tipo_classroom'>
                                            <p>Classroom</p>
                                        </div>
                                    )}
    
                                    {/* formato de enseñanza */}
                                    {curso.formato.includes("1") && (
                                        <div className='tipo_curso_2 tipo_talleres'>
                                            <p>Taller</p>
                                        </div>
                                    )}
                                    {curso.formato.includes("2") && (
                                        <div className='tipo_curso_2 tipo_cursos'>
                                            <p>Curso</p>
                                        </div>
                                    )}
                                    {curso.formato.includes("3") && (
                                        <div className='tipo_curso_2 tipo_diplomados'>
                                            <p>Diplomado</p>
                                        </div>
                                    )}
                                    {/* fin de formato de enseñanza */}
    
                                    <div style={{
                                        padding:"30px 10px 10px 10px", 
                                        height:"100%",
                                        display:"flex",
                                        flexDirection:"column",
                                        justifyContent:"space-between"
                                    }}>
                                        <div>
                                            {curso.area.map(numero_area => (
                                                <p className='curso_d3'>{areas[numero_area]}</p>
                                            ))}
                                            <p className='curso_titulo_d3'>{curso.nombre}</p>
                                            <p className='curso_impartido_d3'>Impartido por {curso.fechas[0].tutor}</p>
                                            <div dangerouslySetInnerHTML={createMarkup(curso.descripcion_externa)}></div>
                                        </div>
                                        <div>
                                            {/* <p className='curso_titulo_d3' style={{fontSize:"20px"}}>${curso.data_pago.costo_total}</p> */}
                                            {curso.data_pago.costo_mensual ? (
                                                <p className='curso_pagos_d3'>3 mensualidades de ${curso.data_pago.costo_mensual}</p>
                                            ) : (
                                                <p className='curso_pagos_d3' style={{color:"#fff"}}>.</p>
                                            )}
                                            {curso.data_pago.costo_contado ? (
                                                <p className='curso_pagos_d3' style={{color:"#A80938"}}>Pago de contado ${curso.data_pago.costo_contado}</p>
                                            ) : (
                                                <p className='curso_pagos_d3' style={{color:"#fff"}}>.</p>
                                            )}
                                            {curso.data_pago.costo_sabatino && (
                                                <p className='curso_pagos_d3'>Consulta metodologia de pago.</p>
                                            )}

                                            {/* <p style={{marginTop:"0px"}}>{curso.fechas[0].fecha}</p> */}
                                            {<p style={{marginTop:"0px"}}>
                                                Del {new Date(curso.fechas[0].fecha_inicio).getDate()} de {meses[new Date(curso.fechas[0].fecha_inicio).getMonth()]} al {new Date(curso.fechas[0].fecha_fin).getDate()} de {meses[new Date(curso.fechas[0].fecha_fin).getMonth()]} de  {new Date(curso.fechas[0].fecha_fin).getFullYear()}
                                            </p>}

                                            <div className='center' style={{marginBottom:"20px", marginTop:"30px"}}>
                                                <a href={`/curso/${curso.nombre}`} className='curso_boton_d3'>Conoce más</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Cursos;