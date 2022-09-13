import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import M from "materialize-css";

import SideNav from '../../Components/SideNav';

import "./Titulacion.css";

import Animacion from '../../Components/titulaciones/Animacion/Animacion';
import Cine from '../../Components/titulaciones/Cine/Cine';
import Publicidad from '../../Components/titulaciones/Publicidad/Publicidad';
import Multimedia from '../../Components/titulaciones/Multimedia/Multimedia';
import imgTitulacion from '../../Images/escritorio/Titulacion/1.png';

const Titulacion = props => {

    const cambiarLicenciatura = licenciatura => {
        // console.log("buscar licenciatura");
        if (licenciatura === 0) {
            //animacion
            ReactDOM.render(
                <Animacion />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 1) {
            //cine
            ReactDOM.render(
                <Cine />,
                document.getElementById('contenedor_licenciatura')
            );
            
        } else if (licenciatura === 2) {
            //publicidad
            ReactDOM.render(
                <Publicidad />,
                document.getElementById('contenedor_licenciatura')
            );
        } else if (licenciatura === 3) {
            //multimedia
            ReactDOM.render(
                <Multimedia />,
                document.getElementById('contenedor_licenciatura')
            );
        }
        setTimeout(() => {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 500);
    }

    return (
        <Fragment>
            <SideNav/>
            <div>
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
                <div id='contenedor_licenciatura' style={{marginBottom:"20px"}}>
                    {/* <Animacion /> */}
                </div>
            </div>
        </Fragment>
    );
}

export default Titulacion;