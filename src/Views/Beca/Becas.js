import React, {useEffect, useState}  from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import "./Becas.css";

import Preload from '../../Components/Preload';
import img1 from "../../Images/escritorio/Becas/1.png";
import icono1 from '../../Images/Icon/30.png'
import icono2 from '../../Images/Icon/31.png'
import icono3 from '../../Images/Icon/32.png'
import icono4 from '../../Images/Icon/33.png'
import icono5 from '../../Images/Icon/34.png'
import icono6 from '../../Images/Icon/35.png'
import icono7 from '../../Images/Icon/36.png'

import beca from "../../Docs/beca.pdf";

//FIXME: Arreglar las fechas en la base de datos 

const Becas = props => {

    const [state, setState] = useState({
        videos_filtrados: "",
        primer_video: ""
    });

    const [bandera, setBandera] = useState(true);

    useEffect(() => {
        console.log(props)
        if (props.fotos) {
            let videos_filtrados = [...props.videos]
            let primer_video = videos_filtrados.shift();
            setState({videos_filtrados, primer_video});
            setBandera(false);
        }
    }, [props.fotos]);

    return (
        <div>
            <img src={img1} style={{width:"100%"}} />

            <p className='titulo_1_nv center' style={{marginBottom:"0px", marginTop:"15px"}}>
                Becas
            </p>
            <div className='container center'>
                <p style={{marginTop:"0px"}}>
                    Existen dos formatos:
                </p>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", marginBottom:"0px"}}>
                    Becas por mérito,
                </p>
                <p style={{margin:"0px"}}>
                    de 25 a 75%, a partir del segundo cuatrimestre.
                </p>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", marginBottom:"0px"}}>
                    Gran Beca CAAV Anual
                </p>
                <p style={{margin:"0 0 15px 0"}}>
                    de 100% por toda tu licenciatura
                </p>
            </div>

            <div style={{padding:"1px", backgroundColor:"rgb(244, 244, 244)"}}>
                <p className='titulo_1_nv center' style={{marginBottom:"10px", marginTop:"5px"}}>
                    Becas por mérito
                </p>

                <div className='container center'>
                    <p>
                        El porcentaje de beca puede ser de 25, 50 o 75% en el costo de tu licenciatura, <br/>
                        según el reglamento de becas estatales de SICYT.
                    </p>
                    <p>
                        Se otorgan a partir del segundo cuatrimestre. <br/>
                        Es decir, una vez que concluyas el primer cuatrimestre, podrás solicitarla si cumples con 
                        estos requisitos:  
                    </p>
                    <div className='row'>
                        <div className='col s12 m6 l4'>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginBottom:"0px", color:"#00496C"}}>
                                Calificaciones
                            </p>
                            <p>
                                Tener un promedio mínimo de 90. <br/>
                                La escala de calificaciones de nuestro <br/>
                                reglamento institucional es de 0 a 100, <br/>
                                y la mínima aprobatoria es 70. <br/>
                            </p>
                        </div>
                        <div className='col s12 m6 l4'>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginBottom:"0px", color:"#00496C"}} >
                                Materias        
                            </p>
                            <p style={{marginLeft:"5px"}}>
                                Aprobar todas tus materias en <br/>
                                exámenes ordinarios y no tener <br/>
                                ninguna materia a repetir. <br/>
                            </p>
                        </div>
                        <div className='col s12 m6 l4'>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginBottom:"0px", color:"#00496C"}}>
                                Llenado de formato
                            </p>
                            <p style={{padding:"0px 4px", marginLeft:"3px"}}>
                                Llenar un formato para evaluar tu <br/>
                                situación económica y presentar los <br/>
                                comprobantes correspondientes. <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fondo_3'>
                <div className='container center'> 
                    <p style={{fontWeight:"bold"}}>
                        Esta información es analizada por un comité que asigna las becas a quienes demuestren necesitarla <br />
                        por su situación económica y merecerla por su desempeño académico.
                    </p>
                </div>
            </div>

            <div style={{backgroundColor:"rgb(244, 244, 244)", paddingBottom:"0px"}}>
                <div className='container center'>
                    <p className='titulo_1_nv' style={{margin:"0", paddingTop:"10px"}} >
                        Gran Beca CAAV Anual
                    </p>
                    <p style={{marginTop:"0px"}}>
                        Esta beca se otorga sólo una vez cada año, a la ganadora o ganador de nuestro concurso de video. <br />
                        Cada año se determina el tema del video, que debe tener estas características:
                    </p>
                    <div className='row' style={{marginBottom:"0px"}}>
                        <div className='col s12 m12 l6'>
                            <img src={icono7} className="icon_becas_2"></img>                            
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginTop:"0px", marginBottom:"0px"}}>
                                Creatividad        
                            </p>                               
                            <p>
                                <span>
                                    Debe ser creativo y original.<br/>
                                </span>
                                No importa si es tomado con celular, si es animado 
                                o en otro formato: lo que más nos interesa es el 
                                contenido y tu creatividad para resolverlo.
                            </p>
                        </div>
                        <div className='col s12 m12 l6'>
                            <img src={icono4}  className="icon_becas_2"></img>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginTop:"0px", marginBottom:"0px"}}>
                                Entrega      
                            </p>
                            <p>
                                <span>
                                    Debes enviar tu video 
                                    <a href="mailto:concursos@caav.mx" target='blanck' style={{color:"#A80938"}}> 
                                        <u> aquí</u>
                                    </a> 
                                </span>
                            </p>
                            <p>
                                En caso de que sea muy pesado, puedes usar la plataforma de 
                                envío de WeTransfer. Deberás poner en título tu nombre completo 
                                y en mensaje los datos solicitados del punto número 1 de la 
                                convocatoria. Recibirás un correo de confirmación de recibido.
                            </p>
                        </div>
                        <div className='col s12 m12 l6'>
                            <img src={icono5}  className="icon_becas_2"></img>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginTop:"0px", marginBottom:"0px"}}>
                                Duración        
                            </p>
                            <p>
                                <span>
                                    Debe durar máximo 59 segundos.<br/>
                                </span> 
                                Si pasa de esta duración, será automáticamente 
                                descalificado.
                            </p>
                        </div>
                        <div className='col s12 m12 l6'>
                            <img src={icono6}  className="icon_becas_2"></img>
                            <p className='titulo_4_nv' style={{fontFamily:"Caav", marginTop:"0px", marginBottom:"0px"}}>
                                Temática        
                            </p>
                            <p>
                                El tema de 2023 lo daremos a conocer en marzo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FIXME: este comentario se activa y desctiva */}
                {/* <div className='fondo_3'>
                    <div className='container center'> 
                        <p style={{fontWeight:"bold"}}>
                            La fecha límite para mandar tu video es: el 22 de abril del 2022 a las 23:59 
                            hora del centro de México.
                        </p>
                    </div>
                </div>
                <div className='container center'>
                    <p>
                        Gracias por llenar este formulario.<br/>
                        Debes recibir en tu correo, confirmación de tu registro <br/>
                        en un máximo de 72 horas naturales.<br/>
                        Si no la recibes en este tiempo, escribe
                        <a target='blanck' href="mailto:concursos@caav.mx" style={{color:"#A80938", marginLeft:"8px"}}>
                            aqui
                        </a>
                        <br/> 
                    </p>
                    <div  style={{display:"flex", justifyContent:"center"}}>
                        <a href={beca} target="blanck">
                            <div className='boton_1_nv' style={{width:"250px", margin:"0px"}}>
                                <p>
                                    Bases del concurso 2022
                                </p>                        
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>

            <div className='container contenedor_chico center'>
                <p className='encabezadosCaav' style={{marginTop:"10px"}}>
                    <span className='encabezadosMonserrat'> 
                        Conoce al ganador de la
                    </span><br />
                    Gran Beca CAAV Anual
                </p>
                <p>
                    Tú también podrías ganar la beca,<br/>
                    si haces un video muy original y creativo.
                </p>
                <p>
                    Inspírate con estos ejemplos, sin tratar de imitarlos.
                </p>
            </div>

            <div className='becas' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {bandera ? (
                    <Preload/>
                ) : (
                    <iframe 
                        src={state.primer_video.ruta} title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> 
                )}                    
            </div>

            <div className='fondo_1' style={{padding:"1px", marginTop:"10px"}}>
                <div className='container'>
                    <p className='titulo_1_nv center' style={{marginTop:"10px"}}>
                        Más ganadores de la Gran Beca CAAV Anual
                    </p>
                </div>
                <div className='flex_padre_7 becas_2'>
                    {bandera ? (
                        <Preload/>
                    ) : (
                        state.videos_filtrados.map(video => (
                            <div className='flex_2'>
                                <iframe 
                                    src={video.ruta} title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <p>
                                    {video.titulo}
                                </p>
                                
                            </div>
                        ))
                    )}  
                </div>
            </div>
        </div> 
    );
}


export default compose(
    firestoreConnect(props => [ 
        {
            collection: 'videos',
            where: [
                ['vista', '==', 'beca_caav']
            ]
        },
        {
            collection: 'fotos',
            where: [
                ['vista', '==', 'beca_caav']
            ]
        }
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        videos: ordered.videos,
        fotos: ordered.fotos
    }))
)(Becas);