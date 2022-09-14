import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import M from "materialize-css";
import Swal from 'sweetalert2';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "./Titulacion.css";

import { useAuth } from '../../Context/Context';
import titulacionHelper from '../../Helpers/Titulacion';

import Animacion from '../../Components/titulaciones/Animacion/Animacion';
import Cine from '../../Components/titulaciones/Cine/Cine';
import Publicidad from '../../Components/titulaciones/Publicidad/Publicidad';
import Multimedia from '../../Components/titulaciones/Multimedia/Multimedia';
import imgTitulacion from '../../Images/escritorio/Titulacion/1.png';

const Titulacion = props => {
    const { setEditar, editar } = useAuth();
    const [titulaciones, setTitulaciones] = useState([{}]);
    const [titulacionInfo, setTitulacionInfo] = useState({});

    useEffect(() => {
        if (titulaciones.length === 1) {
            obtenerTitulaciones();
        }
        setEditar({
            ...editar,
            ...titulacionInfo
        })
    },[titulacionInfo]);

    const obtenerTitulaciones = async () => {
        let res = await titulacionHelper.obtenerTitulaciones();
        if (res.success) {
            setTitulaciones(res.data);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const cambiarLicenciatura = licenciatura => {
        // console.log("buscar licenciatura");
        if (licenciatura === 0) {
            //animacion
            setEditar(titulaciones[3]);
            ReactDOM.render(
                <Animacion titulacion={titulaciones[3]} />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 1) {
            //cine
            setEditar(titulaciones[0]);
            ReactDOM.render(
                <Cine titulacion={titulaciones[0]} />,
                document.getElementById('contenedor_licenciatura')
            );
            
        } else if (licenciatura === 2) {
            //publicidad
            setEditar(titulaciones[2]);
            ReactDOM.render(
                <Publicidad titulacion={titulaciones[2]} />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 3) {
            //multimedia
            setEditar(titulaciones[1]);
            ReactDOM.render(
                <Multimedia titulacion={titulaciones[1]} />,
                document.getElementById('contenedor_licenciatura')
            );
        }
        setTimeout(() => {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 500);
    }

    const actualizarTitulacion = () => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";

        ReactDOM.render(
            <Fragment>
                <p>Descripcion</p>
                <CKEditor
                    data={editar.descripcion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            descripcion: data
                        })
                    } }
                />
                <p>7° cuatrimestre</p>
                <CKEditor
                    data={editar.cuatrimestre7}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            cuatrimestre7: data
                        })
                    } }
                />
                <p>8° cuatrimestre</p>
                <CKEditor
                    data={editar.cuatrimestre8}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            cuatrimestre8: data
                        })
                    } }
                />
                <p>9° cuatrimestre</p>
                <CKEditor
                    data={editar.cuatrimestre9}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            cuatrimestre9: data
                        })
                    } }
                />
                <p>Carpeta de investigacion</p>
                <CKEditor
                    data={editar.carpeta_investigacion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            carpeta_investigacion: data
                        })
                    } }
                />
                <p>Presentacion final</p>
                <CKEditor
                    data={editar.presentacion_final}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            presentacion_final: data
                        })
                    } }
                />
                <p>Carpeta de produccion</p>
                <CKEditor
                    data={editar.carpeta_produccion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setTitulacionInfo({
                            ...titulacionInfo,
                            carpeta_produccion: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("formularios")
        );
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
        {/* <div id='vista_titulacion' className='col s12' style={{padding:"0"}}> */}
            <img src={imgTitulacion} style={{width:"100%"}} alt="Titulacion CAAV" />           
            
            <div className='container contenedor_xch center'>
                <p className='titulo_1_nv' style={{margin:"15px 0 10px 0"}}>
                    Titulación
                </p>
                <p style={{marginTop:"0px"}}>
                    En nuestra universidad, el plan de estudios está diseñado para que tengas tu título
                    justo al terminar el noveno cuatrimestre.
                </p>
                <p className='titulo_4_nv' style={{fontFamily:"Caav"}}>
                    Éstos son los pasos:
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>
                    Inscripción
                </p>
                <p style={{marginTop:"0px"}}>
                    Solicita tu formato de inscripción en control escolar y llénala con tus datos.
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>
                    Presentación de documentos
                </p>
                <p style={{marginTop:"0px"}}>
                    Entrega en Control Escolar, en la Sede Griffith:
                    <ul className='puntos'>
                        <li>Ficha de inscripción llena.</li>
                        <li>Carta de liberación de servicio social.</li>
                        <li>Certificado de licenciatura.</li>
                        <li>El importe de $5,800 MXN correspondiente.</li>
                    </ul>
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>Entrega de proyecto</p>
                <p style={{marginTop:"0px"}}>
                    Entrega en Control Escolar, en la Sede Griffith:
                    <ul className='puntos'>
                        <li>Tu proyecto audiovisual.</li>
                        <li>Tres copias de tu proyecto  de titulación en formato APA.</li>
                    </ul>
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>Revisión</p>
                <p style={{marginTop:"0px"}}>
                    En un término de tres semanas, tres sinodales revisarán tu proyecto.<br />
                    Al terminar este plazo, te entregarán el formato APA con sus correcciones y 
                    observaciones. A partir de ese momento tendrás una semana para hacer las 
                    correcciones y enviar a aprobación final.
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>Diseño final</p>
                <p style={{marginTop:"0px"}}>
                    Una vez probado tu proyecto, debes darle diseño editorial para presentación 
                    final y entregar cuatro tomos de éste. 
                </p>
                <p style={{fontWeight:"bold", marginBottom:"0px"}}>Examen</p>
                <p style={{marginTop:"0px"}}>
                    Se asignará una fecha para tu examen profesional, al que asistirá nuestra 
                    Directora, los sinodales y, si lo deseas, cinco invitados tuyos.
                </p>
                <div className='row' style={{margin:"0px", marginBottom:"10px"}}>
                    <div className='col s6 m3 l3 xl3'>
                        <div className='boton_1_d3'>
                            <button onClick={() => {cambiarLicenciatura(0)}} type="">
                                <p>
                                    Animación
                                </p>
                            </button>                           
                        </div>
                    </div>
                    <div className='col s6 m3 l3 xl3'>
                        <div className='boton_2_d3'>
                            <button onClick={() => {cambiarLicenciatura(1)}} type="">
                                <p>
                                    Cine Digital
                                </p>
                            </button>                           
                        </div>
                    </div>
                    <div className='col s6 m3 l3 xl3'>
                        <div className='boton_3_d3'>
                            <button onClick={() => {cambiarLicenciatura(3)}} type="">
                                <p>
                                    Multimedia
                                </p>
                            </button>                           
                        </div>
                    </div>
                    <div className='col s6 m3 l3 xl3'>
                        <div className='boton_4_d3'>
                            <button onClick={() => {cambiarLicenciatura(2)}} type="">
                                <p>
                                    Marketing
                                </p>
                            </button>                           
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={actualizarTitulacion} id='contenedor_licenciatura' style={{marginBottom:"20px"}}>

            </div>
        </div>
    );
}

export default Titulacion;