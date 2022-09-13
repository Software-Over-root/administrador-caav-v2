import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Downloader from 'js-file-downloader';
import Swal from 'sweetalert2';

import folleto from '../../../Docs/Folleto-Animacion.pdf';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import "./Animacion.css";

import video from '../../../Images/escritorio/Licenciaturas/Animacion/video/video.m4v';
import imagenVideo from '../../../Images/escritorio/Licenciaturas/Animacion/video/1.png';


import logo_2 from '../../../Images/logos/logo_2.svg';
import img1 from '../../../Images/escritorio/Licenciaturas/Animacion/1.png';
import icono_1 from '../../../Images/Icon/3_1.png';
import icono_2 from '../../../Images/Icon/4_1.png';

const Animacion = props => {

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
                    Animación
                </h1>
                <img src={logo_2} className="logo_yo_creo" alt="#yoCreo CAAV" />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <p className='titulo_frase'>
                        Yo creo historias. <br />
                        Yo creo en el movimiento.<br />
                        Yo creo piezas de arte para tocar el alma.
                    </p>
                </div>
                <iframe className='altura_video_licenciatura' style={{width:"100%"}}
                    src="https://www.youtube.com/embed/WoesmXyMGGI" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            
            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                <div className='caja_5' style={{background:"#F2F2F2"}}>
                    <div className='texto_licenciatura_carrera'>
                        <p className='titulo_1_nv' style={{margin:"0px"}}>La carrera</p>
                        <p>
                            Esta licenciatura está diseñada para prepararte en los diferentes campos 
                            y procesos de la animación clásica y digital, como stop motion, 2D y 3D.
                        </p>
                        <p>
                            Al estudiarla, dominarás las habilidades técnicas y artísticas que te 
                            permitirán conectar con los espectadores, narrar historias extraordinarias 
                            y hacer uso de las tecnologías de producción presentes y futuras.
                        </p>
                        <p>
                            Sabrás diseñar personajes, fondos y videojuegos; crear storyboards, esculturas, 
                            ilustraciones, marionetas, maquetas, comics, videojuegos, realidad aumentada, 
                            realidad virtual, cortometrajes, videoclips, películas, contenidos culturales 
                            y proyectos artísticos, para diferentes medios de comunicación.
                        </p>
                        <p>
                            Aprenderás historia del cine, actuación, modelado, texturización, rigging, 
                            efectos visuales y gestión de proyectos.
                        </p>
                        <p>
                            Vas a ser una persona experta en la creación de contenidos y desarrollo de 
                            proyectos de animación e ilustración para medios interactivos, redes sociales, 
                            cine y televisión.
                        </p>
                        <p>
                            Esta carrera te dará la oportunidad de ser parte o líder de equipos calificados 
                            para realizar proyectos de animación, desde su etapa de conceptualización hasta 
                            la de distribución.
                        </p>
                    </div>
                    <div className='texto_licenciatura_cine_perfil_ingreso'>
                        <p className='titulo_1_nv left-desktop' style={{margin:"0px"}}>
                            Perfil de ingreso
                        </p>
                        <div>
                            <p style={{fontWeight:"bold"}}>
                                Intereses:
                            </p>
                            <div className='flex_movil_2'>
                                <div className='texto_lic_9 puntos_1_nv'>
                                    <ul>
                                        <li>Las historias, los relatos, los personajes, las ideas creativas.</li>
                                        <li>El arte en general.</li>
                                        <li>Los cómics, el animé y la ilustración.</li>
                                        <li>Las nuevas tecnologías, la luz, el movimiento.</li>
                                        <li>El appeal del diseño.</li>
                                        <li>La fotografía, el cine, los videojuegos, la música.</li>
                                    </ul>
                                </div>
                            </div>
                            <p style={{fontWeight:"bold"}}>
                                Habilidades y destrezas:
                            </p>
                            <div className='puntos_1_nv contenedor_habilidades_a'>
                                <ul>
                                    <li className="texto_lic_9">Facilidad para el dibujo.</li>
                                    <li className="texto_lic_9">Imaginación activa.</li>
                                    <li className="texto_lic_9">Capacidad narrativa.</li>
                                    <li className="texto_lic_9">Facilidad para la composición digital o manual.</li>
                                    <li className="texto_lic_9">Observación.</li>
                                    <li className="texto_lic_9">Gusto por el cine, medios audiovisuales y artes gráficas.</li>
                                    <li className="texto_lic_9">Curiosidad.</li><li className="texto_lic_9">Disciplina.</li>
                                    <li className="texto_lic_9">Personalidad creativa e innovadora.</li>
                                    <li className="texto_lic_9">Atención al detalle.</li>
                                    <li className="texto_lic_9">Determinación y dedicación.</li>
                                    <li className="texto_lic_9">Manejo de herramientas tecnológicas.</li>
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
                        haciendo cada vez más vasto. Por ejemplo:
                    </p>
                </div>
                <div style={{marginLeft:"30px"}}>
                    <ul className='puntos'>
                        <li>Televisoras.</li>
                        <li>Dirección de arte.</li>
                        <li>Arte 3D generalista.</li>
                        <li>Producción ejecutiva.</li>
                        <li>Desarrollo de apps y redes sociales.</li>
                        <li>Casas de producción cinematográfica.</li>
                        <li>Empresas de efectos especiales digitales.</li>
                        <li>Ilustración para audiovisuales e impresos.</li>
                        <li>Casas de animación:</li>
                        <ul className='puntos' style={{paddingLeft:"15px"}}>
                            <li>Animación de motion graphics.</li>
                            <li>Animación de personajes en 2D y 3D.</li>
                            <li>Animación de efectos visuales en 2D y 3D.</li>
                            <li>Empresas desarrolladoras de videojuegos y medios interactivos.</li>
                        </ul>
                        <li>Dirección de proyectos multidisciplinarios de entretenimiento o comunicación.</li>
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
                    <div className='boton_licenciatura_1' style={{marginTop:"0px"}}>
                        Conoce el proceso de admisión
                    </div>
                </a>
            </div>
            
            <div className='center contenedor_d3' style={{background:"#B612C5", color:"#fff"}}>
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
                        ESLI20111428
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

            <div className='row' style={{display:"flex", flexWrap:"wrap", alignItems:"stretch", marginBottom:"0px"}}>
                <div className='col s12 m12 l5' style={{padding:"0px"}}>
                    <div style={{height:"100%"}}>
                        <img src={img1} className="imagen_licenciatura" alt="Licenciatura en Animación Digital" />
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
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>1.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[0].dato)}</p>                               
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>2.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[1].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>3.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[2].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>4.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[3].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>5.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[4].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>6.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[5].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>7.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[6].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>8.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[7].dato)}</p>     
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_a' style={{marginBottom:"-10px"}}>9.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[8].dato)}</p> 
                            </div>
                            <div className='col s12' style={{marginTop:"30px", padding:"0px"}}>
                                <button onClick={download} className='boton_licenciatura_1'>
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
            doc: 'bPeGmf4JAbCTUk7Hf6A0'
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        licenciatura: ordered.licenciatura && ordered.licenciatura[0]
    }))
)(Animacion);