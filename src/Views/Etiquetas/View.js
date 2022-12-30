import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader';

import { useAuth } from '../../Context/Context';

import icon2 from "../../Images/Icon/63.png";

import EtiquetasHelper from '../../Helpers/Etiquetas';

const View = () => {
    const { setEditar } = useAuth();

    const [etiquetas, setEtiquets] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        obtenerEtiquetas();
    },[]);

    const obtenerEtiquetas = async () => {
        let res = await EtiquetasHelper.obtenerEtiquetas();
        if (res.success) {
            setEtiquets(res.data);
            setFlag(true);
        } else {
            Swal.fire(
                'Error!',
                'No se lograron obtener las etiquetas, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const eliminarEtiqueta = id => {
        EtiquetasHelper.eliminarEtiqueta(id);
    }

    const agregarEtiqueta = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_activado";
    }

    const editarEtiqueta = etiqueta => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        setEditar(etiqueta);
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
            <div className='container center'>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Etiquetas para cursos
                </p>
                {!flag ? (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60vh"}}>
                        <Loader />
                    </div>
                ) : (
                    <div>
                        <p style={{marginLeft:"25px"}} className='texto_solicitud'>
                            Nombre
                        </p>
                        <div>
                            {etiquetas.map(etiqueta => (
                                <div className='box_solicitud'>
                                    <div className='row'>
                                        <div className='col s10'>
                                            <div style={{marginLeft:"25px"}} className=''>
                                                <p className='texto_solicitud'>
                                                    {etiqueta.nombre}
                                                </p>
                                            </div>   
                                        </div>
                                        <div className='col s2'>
                                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingRight:"25px"}}>
                                                <img style={{cursor:"pointer"}} onClick={() => {eliminarEtiqueta(etiqueta._id)}} src={icon2} alt="" />
                                                <button onClick={() => {editarEtiqueta(etiqueta)}} className='caja_status' style={{backgroundColor:"#00496C", border:"none"}}>
                                                    <p>
                                                        EDITAR
                                                    </p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='boton_2_nv'>
                        <button onClick={agregarEtiqueta} >
                            <p>Agregar etiqueta</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;