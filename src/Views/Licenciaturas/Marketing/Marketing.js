import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Downloader from 'js-file-downloader';
import Swal from 'sweetalert2';

import folleto from '../../../Docs/Folleto-Marketing-Digital-Creativo.pdf';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import "./Marketing.css";

import video from '../../../Images/escritorio/Licenciaturas/Marketing/video/video.m4v';
import imagenVideo from '../../../Images/escritorio/Licenciaturas/Marketing/video/1.png';


import img2 from '../../../Images/escritorio/Licenciaturas/Marketing/1.png';
import logo_2 from '../../../Images/logos/logo_2.svg';
import icono_2 from '../../../Images/Icon/4_2.png';

const Marketing = props => {

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
                    Marketing <br />
                    <span className='encabezadosMonserrat'>
                        Digital Creativo
                    </span>
                </h1>
                <img src={logo_2} className="logo_yo_creo" alt="#yoCreo CAAV" />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <p className='titulo_frase'>
                        Yo creo en el poder de la comunicación. <br />
                        Yo creo en decir la verdad. <br />
                        Yo creo historias que convencen y enamoran.
                    </p>   
                </div>
                <iframe className='altura_video_licenciatura' style={{width:"100%"}}
                    src="https://www.youtube.com/embed/UBlRY0lv-Vw" 
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
                            Esta licenciatura está dirigida a las personas interesadas en 
                            desarrollar increíbles contenidos audiovisuales y estrategias de 
                            marketing para fines publicitarios en las redes sociales.
                        </p>
                        <p>
                            Estudiar Marketing Digital Creativo te dará las habilidades para crear 
                            eficientes estrategias de marketing en Internet y para generar mensajes 
                            que cautiven al público y den resultados a tus clientes. El sustento de 
                            tu trabajo -análisis, estrategia, planeación y creatividad, te ayudará 
                            a sobresalir entre tus colegas.
                        </p>
                        <p>
                            Vas a saber estudiar y evaluar a los diferentes consumidores digitales, 
                            desarrollar estrategias de mercado y de comunicación, planificar, 
                            organizar e implementar proyectos creativos y producir contenido audiovisual 
                            de alta calidad para tus campañas.
                        </p>
                        <p>
                            Es decir, vas a ser una persona experta en el marketing, la comunicación 
                            persuasiva, la publicidad y la comercialización a través de medios digitales.
                        </p>
                    </div>
                    <div className='texto_licenciatura_carrera' style={{display:"block"}}>
                        <p className='titulo_1_nv' style={{margin:"0px"}}>
                            Perfil de ingreso
                        </p>
                        <p style={{fontWeight:"bold"}}>
                            Intereses:
                        </p>
                        <div className='texto_lic_9 puntos_1_nv'>
                            <ul>
                                <li>Las redes sociales.</li>
                                <li>La mercadotecnia.</li>
                                <li>La publicidad y la comunicación.</li>
                                <li>La fotografía, el video y demás medios audiovisuales.</li>
                                <li>El emprendimiento de proyectos.</li>
                                <li>Las marcas y las empresas.</li>
                                <li>Las artes plásticas.</li>
                                <li>La música.</li>
                            </ul>
                        </div>
                        <p style={{fontWeight:"bold"}}>
                            Habilidades y destrezas:
                        </p>
                        <div className='texto_lic_9 puntos_1_nv'>
                            <ul>
                                <li>Pensamiento analítico, crítico, estratégico.</li>
                                <li>Creatividad.</li>
                                <li>Originalidad.</li>
                                <li>Capacidad de análisis.</li>
                                <li>Capacidad de síntesis.</li>
                                <li>Atención al detalle.</li>
                                <li>Capacidad para administrar el tiempo.</li>
                                <li>Intención de colaboración y de trabajar en equipo.</li>
                                <li>Aptitud para las relaciones públicas.</li>
                                <li>Capacidad para tomar decisiones.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container contenedor_chico' style={{marginTop:"15px"}}>
                <div className='center'>
                    <p className='titulo_4_nv'>
                        Tu campo de trabajo
                    </p>
                    <p>
                        En un mundo que cada vez consume más y más a través de los medios 
                        digitales, tu campo de trabajo se irá haciendo cada vez más vasto. <br/>
                        Nosotros te daremos las herramientas y el conocimiento para vender lo 
                        que tú quieras.
                    </p>
                    <p>
                        Podrás trabajar, por ejemplo, como:
                    </p>
                </div>                
                <div style={{marginLeft:"30px"}}>
                    <ul className='puntos'>
                        <li>Copywriter.</li>
                        <li>Estratega digital.</li>
                        <li>Creativo publicitario.</li>
                        <li>Influencer marketing.</li>
                        <li>Director de mercadotecnia digital.</li>
                        <li>Director de proyectos creativos o de contenidos.</li>
                        <li>Realizador y productor audiovisual para publicidad.</li>
                        <li>Community manager o social media manager (gestor de redes).</li>
                        <li>Coordinador de inteligencia y gestión de relación con el cliente.</li>
                    </ul>
                </div>
            </div>
            
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
                <a href='/proceso-admision'>
                    <div className='boton_licenciatura_4' style={{marginTop:"0px"}}>
                        Conoce el proceso de admisión
                    </div>
                </a>
            </div>
            
            <div className='center contenedor_d3' style={{background:"#FFB511", color:"#fff"}}>
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
                        justifyContent:"center", 
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
                        <img src={img2} className="imagen_licenciatura" alt="- Licenciatura en Marketing" />
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
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>1.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[0].dato)}</p>                               
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>2.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[1].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>3.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[2].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>4.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[3].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>5.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[4].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>6.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[5].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>7.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[6].dato)}</p>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>8.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[7].dato)}</p>     
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_m' style={{marginBottom:"-10px"}}>9.</p>
                                <p className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[8].dato)}</p> 
                            </div>
                            <div className='col s12' style={{marginTop:"30px", padding:"0px"}}>
                                <button onClick={download} className='boton_licenciatura_4'>
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
            doc: 'QeIUuxvx5XJrg7xSQedQ'
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        licenciatura: ordered.licenciatura && ordered.licenciatura[0]
    }))
)(Marketing);