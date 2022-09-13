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

    useEffect(() => {
        obtenerTitulaciones();
    },[]);

    const obtenerTitulaciones = async () => {
        let res = await titulacionHelper.obtenerTitulaciones();
        console.log(res);
        if (res.success) {
            setTitulaciones(res.data);
            // setFlag(true);
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
            ReactDOM.render(
                <Animacion titulacion={titulaciones[3]} />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 1) {
            //cine
            ReactDOM.render(
                <Cine titulacion={titulaciones[0]} />,
                document.getElementById('contenedor_licenciatura')
            );
            
        } else if (licenciatura === 2) {
            //publicidad
            ReactDOM.render(
                <Publicidad titulacion={titulaciones[2]} />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 3) {
            //multimedia
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

    const actualizarTitulacion = persona => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_titulacion");
        vista.className = "col s9";

        ReactDOM.render(
            <Fragment>
                <p>Descripcion</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("descripcion_titulacion")
        );

        ReactDOM.render(
            <Fragment>
                <p>7° cuatrimestre</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("7_cuatrimestre")
        );

        ReactDOM.render(
            <Fragment>
                <p>8° cuatrimestre</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("8_cuatrimestre")
        );

        ReactDOM.render(
            <Fragment>
                <p>9° cuatrimestre</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("9_cuatrimestre")
        );

        ReactDOM.render(
            <Fragment>
                <p>Carpeta de investigacion</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("carpeta_investigacion")
        );

        ReactDOM.render(
            <Fragment>
                <p>Carpeta de produccion</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("carpeta_produccion")
        );

        ReactDOM.render(
            <Fragment>
                <p>Presentacion final</p>
                <CKEditor
                    // data={profesor.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setEditar({
                            ...editar,
                            materias: data
                        })
                    } }
                />
            </Fragment>,
            document.getElementById("presentacion_final")
        );
    }

    return (
        <div id='vista_titulacion' className='col s12' style={{padding:"0"}}>
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
            <div id='contenedor_licenciatura' onClick={actualizarTitulacion} className='componente_editable_padre' style={{marginBottom:"20px"}}>

            </div>
        </div>
    );
}

export default Titulacion;