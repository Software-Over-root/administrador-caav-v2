import React, { Fragment, useEffect, useState } from 'react';
import M from "materialize-css";
import Swal from 'sweetalert2';

import ReactDOM from 'react-dom';
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

import Loader from '../../Components/Loader';

const Titulacion = props => {
    const { setEditar, editar } = useAuth();
    const [titulaciones, setTitulaciones] = useState([{}]);
    const [flag, setFlag] = useState(false);
    const [index, setIndex] = useState(false);

    useEffect(() => {
        if (titulaciones.length === 1) {
            obtenerTitulaciones();
        }
        setEditar({
            ...editar
        })
    },[]);

    const obtenerTitulaciones = async () => {
        let res = await titulacionHelper.obtenerTitulaciones();
        if (res.success) {
            setTitulaciones(res.data);
            setEditar(res.data);
            setFlag(true);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const cambiarLicenciatura = licenciatura => {
        console.log("--------------------");
        console.log("cambiar titulacion");
        console.log(titulaciones);
        if (licenciatura === 0) {
            //cine
            console.log("cine");
            setIndex(0);
        } else if (licenciatura === 1) {
            //multimedia
            console.log("multimedia");
            setIndex(1);
        } else if (licenciatura === 2) {
            //marketing
            console.log("marketing");
            setIndex(2);
        } else if (licenciatura === 3) {
            //animacion
            console.log("animacion");
            setIndex(3);
        }
        // setEditar(titulaciones);

        setTimeout(() => {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 100);
    }

    const actualizarTitulacion = () => {
        console.log("cambiar licenciatura");

        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        console.log({"actual": editar[index], index, editar, titulaciones});

        ReactDOM.render(
            <Fragment>
                <p>Descripcion</p>
                <CKEditor
                    data={titulaciones[index].descripcion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();

                        console.log({copiaEditar, index});
                        // console.log({index, editarLicenciatura});

                        // editarLicenciatura.descripcion = data;
                        // setEditarLicenciatura(editarLicenciatura);

                        copiaEditar[index]["descripcion"] = data;
                        setEditar(copiaEditar);
                    } }
                />
                <p>7° cuatrimestre</p>
                <CKEditor
                    data={titulaciones[index].cuatrimestre7}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["cuatrimestre7"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.cuatrimestre7 = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
                <p>8° cuatrimestre</p>
                <CKEditor
                    data={titulaciones[index].cuatrimestre8}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["cuatrimestre8"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.cuatrimestre8 = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
                <p>9° cuatrimestre</p>
                <CKEditor
                    data={titulaciones[index].cuatrimestre9}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["cuatrimestre9"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.cuatrimestre9 = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
                <p>Carpeta de investigacion</p>
                <CKEditor
                    data={titulaciones[index].carpeta_investigacion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["carpeta_investigacion"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.carpeta_investigacion = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
                <p>Presentacion final</p>
                <CKEditor
                    data={titulaciones[index].presentacion_final}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["presentacion_final"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.presentacion_final = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
                <p>Carpeta de produccion</p>
                <CKEditor
                    data={titulaciones[index].carpeta_produccion}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaEditar = [...titulaciones];
                        const data = editor.getData();
                        
                        copiaEditar[index]["carpeta_produccion"] = data;
                        setEditar(copiaEditar);

                        // editarLicenciatura.carpeta_produccion = data;
                        // setEditarLicenciatura(editarLicenciatura);
                    } }
                />
            </Fragment>,
            document.getElementById("formularios")
        );
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
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
                {!flag ? (
                    <div>
                        <Loader  />
                    </div>
                ) : (
                    <div className='row' style={{margin:"0px", marginBottom:"10px"}}>
                        <div className='col s6 m3 l3 xl3'>
                            <div className='boton_1_d3'>
                                <button onClick={() => {cambiarLicenciatura(3)}} type="">
                                    <p>
                                        Animación
                                    </p>
                                </button>                           
                            </div>
                        </div>
                        <div className='col s6 m3 l3 xl3'>
                            <div className='boton_2_d3'>
                                <button onClick={() => {cambiarLicenciatura(0)}} type="">
                                    <p>
                                        Cine Digital
                                    </p>
                                </button>                           
                            </div>
                        </div>
                        <div className='col s6 m3 l3 xl3'>
                            <div className='boton_3_d3'>
                                <button onClick={() => {cambiarLicenciatura(1)}} type="">
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
                )}
            </div>
            <div onClick={actualizarTitulacion} id='contenedor_licenciatura' style={{marginBottom:"20px"}}>
                {index === 0 && (
                    <Cine titulacion={titulaciones[0]}/>
                )}
                {index === 1 && (
                    <Multimedia titulacion={titulaciones[1]} />
                )}
                {index === 2 && (
                    <Publicidad titulacion={titulaciones[2]} />
                )}
                {index === 3 && (
                    <Animacion titulacion={titulaciones[3]} />
                )}
            </div>
        </div>
    );
}

export default Titulacion;