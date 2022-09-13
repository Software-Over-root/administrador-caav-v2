import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Downloader from 'js-file-downloader';
import Swal from 'sweetalert2';

import folleto from '../../../Docs/Folleto-Cine-Digital.pdf';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import "./Cine.css";

import video from '../../../Images/escritorio/Licenciaturas/Cine/video/video.m4v';
import imagenVideo from '../../../Images/escritorio/Licenciaturas/Cine/video/1.png';


import logo_2 from '../../../Images/logos/logo_2.svg';
import img1 from '../../../Images/escritorio/Licenciaturas/Cine/2.jpg';
import img2 from '../../../Images/escritorio/Licenciaturas/Cine/1.png';
import icono_1 from '../../../Images/Icon/3.png';
import icono_2 from '../../../Images/Icon/4.png';

const Cine = props => {

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
            <video style={{width:"100%"}} id='video' autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className='container center' style={{marginBottom:"20px"}}>
                <h1 className='encabezadosCaav' style={{marginTop:"15px"}}>
                    <span className='encabezadosMonserrat'>
                        Licenciatura en
                    </span><br />
                    Cine Digital
                </h1>
                <img src={logo_2} className="logo_yo_creo" alt="#yoCreo CAAV" />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <p className='titulo_frase'>
                        Yo creo relatos. <br />
                        Yo creo en las emociones. <br />
                        Yo creo imágenes que se quedan en el corazón.
                    </p>
                </div>
                <iframe className='altura_video_licenciatura' style={{width:"100%"}}
                    src="https://www.youtube.com/embed/zz1n2CyF9AI" 
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
                            El cine es movimiento: imágenes y emociones en movimiento. Es un pilar 
                            de la cultura contemporánea. El cine conjuga las artes, la comunicación y 
                            la tecnología. Es fundamental para el mundo del entretenimiento, de la 
                            comunicación y de la publicidad.
                        </p>
                        <p>
                            Nuestra licenciatura en cine digital es nuestra propuesta para narrar 
                            historias increíbles, usando toda la tecnología moderna, para que lo hagas 
                            sin límites.
                        </p>
                        <p>
                            En CAAV entrenamos tu ojo, tu mente y tu intuición, construimos tu 
                            capacidad narrativa y expandimos tus talentos. Te mostramos muchos 
                            caminos creativos, para que elijas el que quieras o traces el tuyo propio.
                        </p>
                        <p>
                            Esta fascinante licenciatura combina la experiencia práctica y 
                            teórica de los procesos creativos implicados en la preproducción, 
                            producción, generación de guion, dirección, fotografía, postproducción, 
                            edición y tecnología de medios, para la creación de obras cinematográficas
                            de corta o larga duración.
                        </p>
                        <p>
                            Al terminar tu licenciatura podrás producir y realizar cine, televisión 
                            y video, y hacer magníficos productos artísticos, educativos, culturales 
                            y comerciales.
                        </p>
                        <p>
                            Esta licenciatura está dirigida a personas que sienten una profunda 
                            necesidad de contar historias y tienen aprecio por las manifestaciones 
                            artísticas, quienes tienen pasión por el cine y sienten amor por la 
                            cultura audiovisual, por la música, las letras, el arte y la fotografía, 
                            y que están dispuestas a invertir su tiempo a la disciplina de entrenar 
                            sus sentidos y talentos en este arte.
                        </p>
                    </div>              
                    <div className='texto_licenciatura_carrera'>
                        <p className='titulo_1_nv left-desktop' style={{margin:"0px"}}>
                            Perfil de ingreso
                        </p>
                        <div className='flex_padre_licenciatura'>
                            <div className='flex_hijo_licenciatura_1'>
                                <p style={{fontWeight:"bold"}}>Intereses:</p>
                                <div className='flex_movil_lic' style={{textAlign:"left"}}> 
                                    <div className='texto_s_margen'>
                                        <p>El cine.</p>
                                        <p>Las historias.</p>
                                        <p>Las letras.</p>
                                        <p>Los personajes.</p>
                                        <p>La música.</p>
                                        <p>Las artes plásticas.</p>
                                        <p>La expresión visual.</p>
                                    </div>
                                    <div className='texto_s_margen'>
                                        <p>El movimiento.</p>
                                        <p>Los medios digitales.</p>
                                        <p>La fotografía.</p>
                                        <p>El mundo creativo.</p>
                                        <p>La tecnología.</p>
                                        <p>Los videojuegos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex_hijo_licenciatura_2'>
                                <p style={{fontWeight:"bold"}}>Habilidades y destrezas:</p>
                                <div className='margin_licenciatura' style={{textAlign:"left"}}>
                                    <p className='texto_s_margen'>Capacidad de síntesis.</p>
                                    <p className='texto_s_margen'>Avidez por aprender.</p>
                                    <p className='texto_s_margen'>Amor por la lectura, la música, las artes.</p>
                                    <p className='texto_s_margen'>Deseos profundos de contar historias.</p>
                                    <p className='texto_s_margen'>Pensamiento crítico.</p>
                                    <p className='texto_s_margen'>Apertura a nuevas ideas.</p>
                                    <p className='texto_s_margen'>Creatividad.</p>
                                    <p className='texto_s_margen'>Sensibilidad.</p>
                                    <p className='texto_s_margen'>Capacidad de análisis.</p>
                                    <p className='texto_s_margen'>Disciplina.</p>
                                    <p className='texto_s_margen'>Disposición al trabajo en equipo.</p>
                                    <p className='texto_s_margen'>Deseos de enfrentar desafíos.</p>
                                </div>
                            </div>
                        </div>
                        {/* <img src={img2} alt="" style={{width:"100%"}}/> */}
                    </div>
                </div>            
            </div>

            <div className='container contenedor_chico' style={{marginTop:"15px"}}>
                <div className='center'>
                    <p className='titulo_4_nv' style={{fontWeight:"bold"}}>
                        Tu campo de trabajo
                    </p>
                    <p>
                        En un mundo que cada vez consume y requiere más y más medios audiovisuales para el 
                        entretenimiento y la vida cotidiana, tu campo de trabajo se irá haciendo cada vez más 
                        vasto. Por ejemplo:
                    </p>
                </div>
                <div style={{marginLeft:"30px"}}>
                    <ul className='puntos'>
                        <li>Televisoras.</li>
                        <li>Casas de animación.</li>
                        <li>Diseño de planes de producción.</li>
                        <li>Casas de producción cinematográfica.</li>
                        <li>Empresas de efectos especiales digitales.</li>
                        <li>Empresas desarrolladoras de videojuegos.</li>
                        <li>Departamentos de comunicación de empresas y escuelas.</li>
                        <li>Dirección de películas, series de televisión, documentales.</li>
                        <li>Escritura de guiones para series, películas, documentales y comerciales.</li>
                        <li>Dirección de videoclips, spots de televisión y cualquier producto audiovisual. </li>
                        <li>
                            Supervisión de cuestiones artísticas, organizativas y comerciales de 
                            empresas audiovisuales.
                        </li>
                    </ul>
                </div>
                <p className='center'>
                    Y vas a tener la visión y capacidad para desarrollar tu propia empresa: 
                    por ejemplo, una casa de producción cinematográfica, de efectos especiales, 
                    de casting, de locaciones, de sonido o de postproducción.
                </p>
            </div>

            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
                <a href='/proceso-admision'>
                    <div className='boton_licenciatura_2' style={{marginTop:"0px"}}>
                        Conoce el proceso de admisión
                    </div>
                </a>
            </div>
            
            {/* nos quedamos aqui */}
            <div className='fondo_2' style={{textAlign:"center"}}>
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
                         ESLI20111446
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
                    <img src={icono_2} alt="" className='imagen_lic' style={{ontSize:"17px"}} />
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
                        <img src={img1} className="imagen_licenciatura" alt="Licenciatura en Cine" />
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
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>1.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[0].dato)}</div>                               
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>2.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[1].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>3.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[2].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>4.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[3].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>5.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[4].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>6.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[5].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>7.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[6].dato)}</div>
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>8.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[7].dato)}</div>     
                            </div>
                            <div className='hijo_1_d3'>
                                <p className='numero_d3_l' style={{marginBottom:"-10px"}}>9.</p>
                                <div className='texto_lic_8'>{ReactHtmlParser(props.licenciatura.semestres[8].dato)}</div> 
                            </div>
                            <div className='col s12' style={{margin:"30px 0px", padding:"0px"}}>
                                <button onClick={download} className='boton_lic_folleto'>
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
            doc: 'jPqfeeRBvVXFr2KTTjgx'
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        licenciatura: ordered.licenciatura && ordered.licenciatura[0]
    }))
)(Cine);