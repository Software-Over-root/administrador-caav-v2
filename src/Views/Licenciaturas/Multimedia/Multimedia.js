import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Downloader from 'js-file-downloader';
import Swal from 'sweetalert2';

import folleto from '../../../Docs/Folleto-Multimedia.pdf';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import "./Multimedia.css";

import video from '../../../Images/escritorio/Licenciaturas/Multimedia/video/video.m4v';
import imagenVideo from '../../../Images/escritorio/Licenciaturas/Multimedia/video/1.png';


import img1 from '../../../Images/escritorio/Licenciaturas/Multimedia/1.jpg';
import icono_1 from '../../../Images/Icon/3.png';
import icono_2 from '../../../Images/Icon/4.png';
import logo_2 from '../../../Images/logos/logo_2.svg';


const Multimedia = props => {

    const download = () => {
        new Downloader({ 
            url: folleto
        }).then(function () {
            // console.log("descargando");
        }).catch(function (error) {
            console.log(error);
            Swal.fire(
                'Error',
                'Error al descargar archivo',
                'error'
            )
        }); 
    }

    return(
        <Fragment>
            <video style={{width:"100%"}} id='video' autoPlay muted loop poster={imagenVideo}>
                <source src={video} type="video/mp4" />
            </video>
            <div className='container center' style={{marginBottom:"20px"}}>
                <h1 className='encabezadosCaav' style={{marginTop:"15px"}}>
                    <span className='encabezadosMonserrat'>
                        Licenciatura en
                    </span><br />
                    Multimedia <br />
                    <span className='encabezadosMonserrat'>
                    Arte Digital y Medios Interactivos
                    </span>
                </h1>
                <img src={logo_2} className="logo_yo_creo" alt="#yoCreo CAAV" />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <p className='titulo_frase' >
                        Yo creo en la imaginación. <br />
                        Yo creo con luz y con palabras. <br />
                        Yo creo en transformarlo todo.
                    </p>
                </div>
                <iframe className='altura_video_licenciatura' style={{width:"100%"}}
                    src="https://www.youtube.com/embed/Qw2UHBd1uYY" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>

            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                <div className='caja_5' style={{background:"#F2F2F2", paddingBottom:"20px"}}>
                    <div className='texto_licenciatura_carrera'>
                        <p className='titulo_1_nv' style={{margin:"0px"}}>La carrera</p>
                        <p>
                            Esta licenciatura combina el lado estructurado de una ingeniería con el 
                            lado creativo del arte.
                        </p>
                        <p>
                            Está orientada a personas que tienen un gran interés por los medios 
                            interactivos y por la computación y desean utilizarlos como una herramienta 
                            de creación.
                        </p>
                        <p>
                            Su plan de estudios está diseñado para formarte como profesional en la 
                            realización de propuestas multimedia que puedan aplicarse al arte contemporáneo, 
                            el cine, la educación, el entretenimiento, la comunicación y la publicidad.

                        </p>
                        <p>
                            Al terminar la licenciatura sabrás desarrollar de manera integral videojuegos, 
                            aplicaciones,  páginas web y experiencias inmersivas. Vas a saber usar y crear 
                            tecnologías interactivas, vas a tener conocimientos, habilidades y destrezas 
                            del campo de las ciencias de la comunicación y de la informática y sabrás 
                            generar y manipular el audio y video en tiempo real.
                        </p>
                        <p>
                            Todo lo que hagas podrá tener una aplicación práctica. Es decir, que no sólo 
                            harás cosas que se verán geniales, sino que serán muy útiles.
                        </p>
                    </div>
                    <div className='texto_licenciatura_cine_perfil_ingreso'>
                        <p className='titulo_1_nv left-desktop' style={{margin:"0px"}}>
                            Perfil de ingreso
                        </p>
                        <div className='width_tablet'>
                            <p style={{fontWeight:"bold"}}>
                                Intereses:
                            </p>
                            <div className='flex_movil_5'>
                                <div className='texto_lic_9 puntos_2_nv'>
                                    <ul>
                                        <li style={{lineHeight:"25px"}}>La tecnología, las computadoras, todos los dispositivos modernos.</li>
                                        <li>La interactividad, el arte y la comunicación.</li>
                                        <li>El Internet.</li>
                                        <li>La fotografía, el cine, los videojuegos.</li>
                                        <li>Las historias, el arte, la luz, el color, el movimiento.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex_movil_6 width_tablet'>
                            <p style={{fontWeight:"bold"}}>
                                Habilidades y destrezas:
                            </p>
                            <div className='texto_lic_9 puntos_2_nv contenedor_habilidades_m'>
                                <ul>
                                    <li>Mente creativa.</li>
                                    <li>Pensamiento lógico.</li>
                                    <li>Pensamiento analítico.</li>
                                    <li>Deseo de crear.</li>
                                    <li>Deseo de afrontar retos y solucionar problemas.</li>
                                    <li>Disposición para la colaboración.</li>
                                    <li>Capacidad de comunicación.</li>
                                    <li>Adaptabilidad.</li>
                                    <li>Flexibilidad.</li>
                                    <li>Apertura a nuevas experiencias.</li>
                                    <li>Comprensión de computadoras y dispositivos móviles.</li>
                                    <li>Uso de software.</li>
                                    <li>Sensibilidad.</li>
                                    <li>Avidez de aprender.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container contenedor_chico' style={{marginTop:"15px"}}>
                <div className='center'>
                    <p className='titulo_4_nv' style={{fontWeight:"bold"}}>
                        Tu campo de trabajo
                    </p>
                    <p>
                        En un mundo que cada vez consume y requiere más y más medios audiovisuales 
                        para el entretenimiento y la vida cotidiana, tu campo de trabajo se irá 
                        haciendo cada vez más vasto.  Por ejemplo:
                    </p>
                </div>
                <div style={{marginLeft:"30px"}}>
                    <ul className='puntos'>
                        <li>Animación digital.</li>
                        <li>Arte digital independiente.</li>
                        <li>Producción de espectáculos.</li>
                        <li>Departamentos de comunicación.</li>
                        <li>Casas de producción cinematográfica.</li>
                        <li>Empresas de efectos especiales digitales.</li>
                        <li>Desarrollo de software para efectos especiales.</li>
                        <li>Programación de videojuegos para diversas plataformas.</li>
                        <li>Producción y postproducción de video para distintos medios.</li>
                        <li>Control de hardware para proyectos multidisciplinarios, artísticos y comerciales.</li>
                    </ul>
                </div>
                <p className='center'>
                    Y vas a tener la visión y capacidad para desarrollar tu propia empresa: por ejemplo, 
                    una casa de producción cinematográfica, de efectos especiales, de casting, de locaciones, 
                    de sonido o de postproducción.
                </p>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
                <a href='/proceso-admision'>
                    <div className='boton_licenciatura_3' style={{marginTop:"0px"}}>
                        Conoce el proceso de admisión
                    </div>
                </a>
            </div>

            <div className='center contenedor_d3' style={{background:"#77ACF1", color:"#fff"}}>
                <p className='titulo_5_nv' style={{margin:"0px", fontWeight:"bold"}}>
                    Inicio de clases:
                </p>
                <p className='titulo_fecha_nv' style={{margin:"0px"}}>
                    29 de agosto de 2022
                </p>
                <p className='titulo_5_nv' style={{fontWeight:"bold", marginBottom:"0px"}}>
                    Próximos inicios<br/>
                    9 de enero de 2023<br/>
                    8 de mayo de 2023
                </p>
            </div>

            <div className='contenedor_2_d3 flex_padre_cine' style={{background:"#E4E4E4"}}>
                <div className='flex_1'
                    style={{
                        display:"flex", 
                        // justifyContent:"center", 
                        alignItems:"center", 
                        flexDirection:"column",
                        textAlign:"center"
                    }}
                >
                    <img src={icono_1} alt="" className='imagen_lic' style={{fontSize:"14px"}} />
                    <p className='titulo_4_nv' style={{marginBottom:"0px"}}>
                        Incorporación SEP
                    </p>
                    <p style={{marginTop:"0px"}}>
                        ESLI20111441
                    </p>
                </div>
                <div className='flex_1'
                    style={{
                        display:"flex", 
                        // justifyContent:"center", 
                        alignItems:"center", 
                        flexDirection:"column",
                        textAlign:"center"
                    }}
                >
                    <img src={icono_2} alt="" className='imagen_lic' style={{fontSize:"14px"}} />
                    <p className='titulo_4_nv' style={{marginBottom:"0px"}}>
                        Horario
                    </p>
                    <p style={{marginTop:"0px"}}>
                        De lunes a viernes, de 8:00 am a 3:00 pm. <br />
                        Pueden programarse algunas sesiones el sábado.
                    </p>
                </div>
            </div>
            
            <div className='row' style={{display:"flex", flexWrap:"wrap", alignItems:"stretch", marginBottom:"0px"}} >
                <div className='col s12 m12 l5' style={{padding:"0px"}}>
                    <div style={{height:"100%"}}>
                        <img src={img1} className="imagen_licenciatura" alt="Licenciatura en Multimedia" />
                    </div>
                </div>
                <div className='col s12 m12 l7' style={{background:"#fff"}}>
                    <p className='encabezadosCaav contenedor_lic_plan' style={{marginTop:"20px", marginBottom:"0px"}}>
                        Esto es lo que aprenderás <br />
                        <span className='encabezadosMonserrat'>
                            Plan de estudios, en nueve cuatrimestres
                        </span>
                    </p>
                    {!props.licenciatura ? (
                        <div className="container center-align" style={{marginTop:'20%', marginBottom:'20%'}}>
                            <div class="preloader-wrapper big active">
                                <div class="spinner-layer spinner-red darken-4-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex_2_d3 contenedor_lic_plan'>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>1.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[0].dato)}</p>                               
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>2.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[1].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>3.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[2].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>4.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[3].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>5.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[4].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>6.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[5].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>7.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[6].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>8.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[7].dato)}</p>     
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_mu' style={{marginBottom:"-10px"}}>9.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[8].dato)}</p> 
                            </div>
                            <div className='col s12' style={{marginTop:"30px", padding:"0px"}}>
                                <button onClick={download} className='boton_licenciatura_3'>
                                    Descargar folleto
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default compose(
    firestoreConnect(props => [ 
        { 
            collection: 'licenciatura',
            doc: 'z34BksM8bqfZu96rwA6g'
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        licenciatura: ordered.licenciatura && ordered.licenciatura[0]
    }))
)(Multimedia);