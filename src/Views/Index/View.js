import React, {Fragment}  from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

import "./Index.css";

import video1 from '../../Images/escritorio/Index/video/video_1.m4v';
import imagenVideo from '../../Images/escritorio/Index/video/1.png';

//licenciaturas
import img1 from '../../Images/escritorio/Index/1.png';
import img2 from '../../Images/escritorio/Index/2.png';
import img3 from '../../Images/escritorio/Index/3.png';
import img4 from '../../Images/escritorio/Index/4.png';
// graduados
import imgEg1 from '../../Images/escritorio/Index/graduados/ArturoAlmanza.png';
import imgEg2 from '../../Images/escritorio/Index/graduados/AlejandroyCristina.png';
import imgEg3 from '../../Images/escritorio/Index/graduados/AlejandraMartinez.png';
import imgEg4 from '../../Images/escritorio/Index/graduados/Fabriciodela mora.png';

import img5 from '../../Images/escritorio/Index/5.jpg';
import CarruselImagenes from '../../Components/CarruselImagenes/CarruselImagenes';

import imgCarrusel1 from '../../Images/escritorio/Index/carruselNoticias/1.png';
import imgCarrusel2 from '../../Images/escritorio/Index/carruselNoticias/2.png';
import imgCarrusel3 from '../../Images/escritorio/Index/carruselNoticias/3.png';
import imgCarrusel4 from '../../Images/escritorio/Index/carruselNoticias/4.png';



const Index = props => {

    const imagenesCarrusel = [
        {
            src: imgCarrusel1,
            titulo: "Noticia 1"
        },
        {
            src: imgCarrusel2,
            titulo: "Noticia 2"
        },
        {
            src: imgCarrusel3,
            titulo: "Noticia 3"
        },
        {
            src: imgCarrusel4,
            titulo: "Noticia 4"
        }
    ];

    const estudiantes = [
        {
            nombre: "Arturo Almanza",
            titulo: "Egresado del CAAV, de Animación.",
            informacion: 
                <div>
                    <p>
                        En abril de 2013 obtuvo una beca en la Vancouver Film School, una de 
                        las diez mejores universidades de animación en el mundo.
                    </p>
                    <p>
                        Actualmente vive en Vancouver y trabaja para el estudio Proof Inc.
                    </p>
                </div>,
            video: "https://youtu.be/jXT0lZTZeXo",
            imagen: imgEg1
        },
        {
            nombre: "Alejandro Torres y Cristina León",
            titulo: "Egresados del CAAV, de Cine Digital.",
            informacion: 
                <div>
                    <p>
                        En 2012, fundaron Clack Audiovisual, y producen contenidos 
                        para marcas como Red Bull, Nike y Vans.
                    </p>
                    <p>
                        Actualmente viven en la CDMX.
                    </p>
                </div>,
            video: "https://youtu.be/vbceWYe_hBY",
            imagen: imgEg2
        },
        {
            nombre: "Alejandra Martínez",
            titulo: "Egresada del CAAV, de Publicidad.",
            informacion: 
                <div>
                    <p>
                        Trabaja en Terán/TBWA,
                        una de las agencias de publicidad
                        más importantes de México y el mundo,
                        para marcas como Palacio de Hierro, Nissan,
                        GNP y BBVA Bancomer.
                    </p>
                </div>,
            video: "https://youtu.be/6lD8pHQAPJs",
            imagen: imgEg3
        },
        {
            nombre: "Fabriccio de la Mora",
            titulo: "Egresado del CAAV, de Multimedia.",
            informacion: 
                <div>
                    <p>
                        Trabaja como desarrollador de software
                        y es creador multidisciplinario.
                        Ha creado muchas apps, entre las que están
                        8Bit Drums Pro y Explorador Urbano.
                        Ha trabajado en proyectos como
                        Par Ásito y Feedback Workship.

                    </p>
                </div>,
            video: "https://youtu.be/rGduWnY36cc",
            imagen: imgEg4
        }
    ]

    const editarLicenciatura = licenciatura => {
        console.log(licenciatura);
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_index");
        vista.className = "col s9";
    }

    const editarVideo = id => {
        console.log(id);
    }

    return (
        <div id='vista_index' className='col s12'>
            <video style={{width:"100%"}} id='video' autoPlay muted="muted" loop poster={imagenVideo}>
                <source src={video1} type="video/mp4" />
            </video>
            <div className='container center'>
                <p className='encabezadosCaav' style={{marginTop:"15px"}}>
                    <span className='encabezadosMonserrat'>
                        Elige la licenciatura que guíe tu camino creativo. 
                    </span><br />
                    Todas te llevan a la realización.
                </p>
                <div className='componente_editable_padre'>
                    <div className='row'>
                        <div className='componente_editable' onClick={() => {editarLicenciatura("cine")}}>
                            <div className='col s6 m6 l3'>
                                <div className='imagen_efecto_1' style={{color:"black"}}>
                                    <div className='contenedor_effecto_1'>
                                        <img src={img1} alt="Licenciatura en Cinematografía" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <p className='titulo_2_nv'>
                                    Cine Digital
                                </p>
                            </div>
                        </div>
                        <div className='componente_editable' onClick={() => {editarLicenciatura("multimedia")}}>
                            <div className='col s6 m6 l3' style={{color:"black"}}>
                                <div className='imagen_efecto_1' style={{color:"black"}}>
                                    <div className='contenedor_effecto_1'>
                                        <img src={img3} alt="Licenciatura diseño multimedia" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <p className='titulo_2_nv'>
                                    Multimedia, Arte Digital <br/>
                                    y Medios Interactivos
                                </p>
                            </div>
                        </div>
                        <div className='componente_editable' onClick={() => {editarLicenciatura("animacion")}}>
                            <div className='col s6 m6 l3' style={{color:"black"}}>
                                <div className='imagen_efecto_1' style={{color:"black"}}>
                                    <div className='contenedor_effecto_1'>
                                        <img src={img2} alt="Licenciatura en Animación" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <p className='titulo_2_nv'>
                                    Animación
                                </p>
                            </div>
                        </div>
                        <div className='componente_editable' onClick={() => {editarLicenciatura("marketing")}}>
                            <div className='col s6 m6 l3' style={{color:"black"}}>
                                <div className='imagen_efecto_1' style={{color:"black"}}>
                                    <div className='contenedor_effecto_1'>
                                        <img src={img4} alt="Licenciatura en Marketing Digital" style={{width:"100%"}} />
                                    </div>
                                </div>
                                <p className='titulo_2_nv'>
                                    Marketing <br /> 
                                    Digital Creativo <br />
                                    <span style={{color:"#A80B38"}}>¡NUEVA!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{background:"#F8F8F8", paddingTop:"30px", paddingBottom:"30px"}}>
                <div className='container'>
                    {/* fixme: arregla carusel */}
                    {/* {window.screen.width <= 980 ? (
                        <Carousel className="carrusel_propio_1 center_flex" show={1} slide={1} transition={0.5} responsive={true}>
                            {imagenesCarrusel.map(imagen => (
                                <div className='floating' style={{padding:"0px 10px", margin:"10px 0px"}}>
                                    <img src={imagen.src} alt={imagen.titulo} style={{width:"100%"}} />
                                </div>
                            ))}
                        </Carousel>
                    ):(
                        <Carousel className="carrusel_propio_1 center_flex" show={3} slide={1} transition={0.5} responsive={true}>
                            {imagenesCarrusel.map(imagen => (
                                <div className='floating' style={{padding:"0px 10px", margin:"10px 0px"}}>
                                    <img src={imagen.src} alt={imagen.titulo} style={{width:"100%"}} />
                                </div>
                            ))}
                        </Carousel>
                    )} */}
                </div>
            </div>

            <div className='center container'>
                <p className='titulo_1_nv' style={{marginTop:"10px", marginBottom:"0px"}}>Lo que nos hace únicos</p>
                <p>
                    Nuestro amor por las historias <br/>
                    y por el arte de contarlas con vividez, <br/>
                    con imaginación, con lenguajes nuevos <br/>
                    y creativos, que a lo largo del tiempo <br/>
                    hemos ido enriqueciendo y perfeccionando.
                </p>
                <p>
                    Nuestra historia de casi 30 años <br/>
                    de ir un paso adelante: <br/>
                    hemos marcado el camino, <br/>
                    y lo seguiremos haciendo.
                </p>
                <h1 className='titulo_4_nv' style={{margin:"0", fontWeight:"bold", marginBottom:"10px"}}>CAAV</h1>
                <div className='componente_editable_padre'>
                    <div className='row'>
                        <div onClick={() => {editarVideo("id 1")}} className='col s12 m6 componente_editable' style={{padding:"10px"}}>
                            <div>
                                <iframe className='contenedor_1_index' style={{width:"100%", position:"relative", zIndex:"-999"}}
                                    src="https://www.youtube.com/embed/Ae3LGJyob6I" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <p className='titulo_2_nv'>Daniel Varela, nuestro director, te habla del CAAV</p>
                        </div>
                        <div onClick={() => {editarVideo("id 2")}} className='col s12 m6 componente_editable' style={{padding:"10px"}}>
                            <div>
                                <iframe className='contenedor_1_index' style={{width:"100%", position:"relative", zIndex:"-999"}}
                                    src="https://www.youtube.com/embed/Fj_k3tZ93-8" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <p className='titulo_2_nv'>Conoce en un minuto la esencia del CAAV</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fixme: arregla carusel */}
            {/* <div className='container row'>
                <p className='titulo_1_nv' style={{textAlign:"center"}}>Blog</p>
                {!blogs ? (
                    <Loader />
                ) : (
                    <Carousel className="carrusel_propio_1 center_flex" show={carrusel} slide={1} transition={0.5} responsive={true}>
                        {props.blogs.map(blog => (
                            <div style={{padding:"0px 20px"}}>
                                <a href={`/blog/${blog.titulo}`}>
                                    <div className='imagen_efecto_1' style={{color:"black"}}>
                                        <div className='contenedor_effecto_1'>
                                            <img src={blog.rutaExterna} alt={blog.titulo} style={{width:"100%"}} />
                                        </div>
                                    </div>
                                    <p className='titulo_2_nv' style={{color:"black", textAlign:"center"}}>{blog.tituloExterno}</p>
                                </a>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div> */}

            <div className='container center'>
                <p className='encabezadosCaav' style={{marginBottom:"10px"}}>
                    <span className='encabezadosMonserrat'>El set donde suceden </span>
                    <br/>nuestras historias
                </p>
            </div>

            <div className='container'>
                <CarruselImagenes />
            </div>

            {/* <div style={{margin:"20px 0px 40px 0px"}}>
                <p className='encabezadosCaav margen_movil_index' style={{textAlign:"center", marginTop:"40px", marginBottom:"10px"}}>
                    Egresados CAAV <br />
                    <span className='encabezadosMonserrat'>y sus historias de realización</span>
                </p>
                {window.screen.width <= 980 ? (
                    <Carousel className="carrusel_propio" show={1} slide={1} transition={0.5} responsive={true}>
                        {estudiantes.map(estudiante => (
                            <div className='contenedor_egresados'>
                                <div style={{textAlign:"center"}}>
                                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                        <div style={{height:"130px", marginBottom:"20px"}}>
                                            <img src={estudiante.imagen} alt="caav egresados" style={{width:"130px", borderRadius:"50%"}} />
                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <p className='titulo_3_nv' style={{margin:"0px", fontWeight:"bold"}}>{estudiante.nombre}</p>
                                            <p className='titulo_3_nv' style={{margin:"0px", fontWeight:"bold"}}>{estudiante.titulo}</p>
                                        </div>
                                    </div>
                                    <div style={{textAlign:"center"}}>
                                        {estudiante.informacion}
                                    </div>
                                    <a target='blanck' href={estudiante.video} className="boton_egresados">Ver video</a>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <Carousel className="carrusel_propio" show={2} slide={2} transition={0.5} responsive={true}>
                        {estudiantes.map(estudiante => (
                            <div className='contenedor_2_index' style={{background:"#ffffff"}}>
                                <div style={{padding:"20px", background:"#00496C", height:"370px", margin:"10px"}}>
                                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column", height:"100%"}}>
                                        <div>
                                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <div style={{height:"130px"}}>
                                                    <img src={estudiante.imagen} alt="caav egresados" style={{width:"130px", borderRadius:"50%"}} />
                                                </div>
                                                <div style={{marginLeft:"15px"}}>
                                                    <p className='titulo_3_nv' style={{margin:"0px", color:"#fff"}}>{estudiante.nombre}</p>
                                                    <p className='titulo_3_nv' style={{margin:"0px", color:"#fff"}}>{estudiante.titulo}</p>
                                                </div>
                                            </div>
                                            <div style={{color:"#fff", textAlign:"center", padding:"0px 24px"}}>
                                                {estudiante.informacion}
                                            </div>
                                        </div>
                                        <div style={{textAlign:"center"}}>
                                            <a target='blanck' href={estudiante.video} className="boton_egresados">Ver video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div> */}

            <div className='flex_padre_1_nv' style={{background:"#F8F8F8"}}>
                <div className='flex_hijo_1_nv'>
                    <img src={img5} alt="Licenciatura Audiovisuales" style={{width:"100%"}} />
                </div>
                <div className='flex_hijo_1_nv contenedor_3_index'>
                    <h1 className='titulo_1_nv' style={{marginBottom:"0px", marginTop:"10px"}}>Cursos y diplomados</h1>
                    <p>
                        Tenemos más de 130 cursos y diplomados, <br />
                        clasificados en ocho áreas de conocimiento.
                    </p>
                    <p>
                        No necesitas ser alumno del CAAV para tomarlos, <br />
                        ni tener conocimientos previos para muchos de ellos, <br />
                        ya que están pensados para todo tipo de público, <br />
                        con diferentes intereses y de distintas edades.
                    </p>
                    <div className='boton_1_nv'>
                        <a href="/cursos-diplomados">
                            <p>
                                Conócelos todos
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            <div className='center'>
                <p className='encabezadosCaav'>
                    Estamos en una de las zonas <br />
                    <span className='encabezadosMonserrat'>
                        más céntricas y llenas de vida de la ciudad.
                    </span>
                </p>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.962817160152!2d-103.37224418507336!3d20.671091686193154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae058d2f4fd3%3A0x209823d3fba8d0af!2sCAAV%20Universidad%20de%20Medios%20Audiovisuales!5e0!3m2!1ses-419!2smx!4v1643735295418!5m2!1ses-419!2smx" 
                style={{width:"100%", height:"500px",  border:"none"}}>
            </iframe>

        </div>
    );
}

export default Index;
