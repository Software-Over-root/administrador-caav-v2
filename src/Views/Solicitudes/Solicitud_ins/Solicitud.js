import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import "./Solicitud.css"

import icon1 from "../../../Images/Icon/64.png"

import reinscripcionesDataHelper from '../../../Helpers/ReinscripcionesData';


const Solicitud = () => {
    const [solicitud, setSolicitud] = useState({
        nombre:"Hugo Eduardo Guerrero García",
        domicilio:"Camino de las galeanas #30",
        colonia:"El cortijo san Agustin",
        ciudad:"tlajomulco",
        nombrePadre:"jose juan aceves alvarez",
        telefonoEmergencia:"33 2768 7866",
        domicilioEmpresa:"-",
        fecha:"5 de mayo",
        licenciatura:"Cine Digital",
        celular:"3325447632",
        email:"aceves_morfin@hotmail.com",
        nombreMadre:"karina morfin rodriguez",
        nombreEmpresa:"no trabajo",
        telefonoEmpresa:"-",
        formatoPago:"Un solo pago",
        status:1
    });

    useEffect(() => {
        let id = window.location.pathname.split("/")[2]
        obtenerData(id);
    },[]);

    const obtenerData = async (id) => {
        let res = await reinscripcionesDataHelper.obtenerUnData(id);
        console.log(res);
        if (res.success) {
            setSolicitud(res.data);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo obtner los datos, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const nuevoStatus = estatus => {
        let copiaData = {...solicitud};
        copiaData.estadoAlumno = !estatus;
        reinscripcionesDataHelper.editarData(copiaData, copiaData._id);
    }

    const archivar = () => {
        console.log("archivar");
        let copiaData = {...solicitud};
        copiaData.archivado = true;
        reinscripcionesDataHelper.editarData(copiaData, copiaData._id);
    }

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Solicitud de inscripción
                </p>
                <div className='box_solicitud_1'>
                    <div className='row'>
                        <div className='col s4'>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Nombre</p>
                                <p className='texto_solicitud_4'>{solicitud.nombre} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Domicilio</p>
                                <p className='texto_solicitud_4'>{solicitud.domicilio} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Colonia</p>
                                <p className='texto_solicitud_4'>{solicitud.colonia} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Ciudad</p>
                                <p className='texto_solicitud_4'>{solicitud.ciudad} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Nombre del Padre</p>
                                <p className='texto_solicitud_4'>{solicitud.nombrePadre} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Telefono de Emergencia</p>
                                <p className='texto_solicitud_4'>{solicitud.telefonoEmergencia} </p>
                            </div>
                            {/* <div className='cont_1'>
                                <p className='texto_solicitud_3'>Domicilio de la Empresa</p>
                                <p className='texto_solicitud_4'>{solicitud.domicilioEmpresa} </p>
                            </div> */}
                        </div>
                        <div className='col s4'>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Fecha de solicitud</p>
                                <p className='texto_solicitud_4'>{solicitud.fecha} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Licenciatura</p>
                                <p className='texto_solicitud_4'>{solicitud.licenciatura} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Celular</p>
                                <p className='texto_solicitud_4'>{solicitud.celular} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>E-mail</p>
                                <p className='texto_solicitud_4'>{solicitud.email} </p>
                            </div>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Nombre de la Madre</p>
                                <p className='texto_solicitud_4'>{solicitud.nombreMadre} </p>
                            </div>
                            {/* <div className='cont_1'>
                                <p className='texto_solicitud_3'>Empresa donde trabajas</p>
                                <p className='texto_solicitud_4'>{solicitud.nombreEmpresa} </p>
                            </div> */}
                            <div className='cont_1'>
                                <p className='texto_solicitud_3'>Telefono de la Empresa</p>
                                <p className='texto_solicitud_4'>{solicitud.telefonoEmpresa} </p>
                            </div>
                        </div>
                        <div className='col s4'>
                            <div className='cont_1'>
                                <p className='texto_solicitud_3 center' >Estado</p>
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
                                    {solicitud.estadoAlumno === false ? (
                                        <button onClick={() => {nuevoStatus(solicitud.estadoAlumno)}} className='caja_status_1'>
                                            <p>
                                                PENDIENTE
                                            </p>
                                        </button> 
                                    ) : (
                                        <button onClick={() => {nuevoStatus(solicitud.estadoAlumno)}} className='caja_status_2' >
                                            <p>
                                                ATENDIDO
                                            </p>
                                        </button>    
                                    )}
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", padding:"0px 15%"}}>
                                {/* <div className='cont_1 '>
                                    <p className='texto_solicitud_3'>Formato de pago</p>
                                    <p className='texto_solicitud_4'>{solicitud.formatoPago} </p>
                                </div> */}
                                <div>
                                    <p className='texto_solicitud_3'>Archivos</p>
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <button type="" className='btn_descarga'>
                                            Descargar
                                        </button>
                                    </div>
                                </div>
                                <button onClick={archivar} className='btn_archivar'>
                                    <img src={icon1} alt="" style={{}}/>
                                    Archivar
                                </button>
                                {/* <a type="" className='btn_archivar' style={{backgroundColor:"#970D19"}}>
                                    Regresar
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Solicitud;