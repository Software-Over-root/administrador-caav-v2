import React, { Fragment, useEffect, useState }  from 'react';
import Swal from 'sweetalert2';

import "./Directorio.css";

import icono_tel from "../../Images/Icon/2.png";
import icono_whats from "../../Images/Icon/54.png";
import icono_mail from "../../Images/Icon/1.png";
import tel from '../../Images/Icon/38.png';
import mail from '../../Images/Icon/37.png';
import whats from '../../Images/Icon/39.png';
import img1 from '../../Images/escritorio/Directorio/1.png';

import directorioHelper from '../../Helpers/Directorio';
import { useAuth } from '../../Context/Context';


const Directorio = props => {
    const { setEditar } = useAuth();

    const [flag, setFlag] = useState(false);
    const [directorio, setDirectorio] = useState([{}]);

    useEffect(() => {
        obtenerDirectorio();
    },[]);

    const obtenerDirectorio = async () => {
        let res = await directorioHelper.obtenerDirectorios();
        if (res.success) {
            setDirectorio(res.data);
            setFlag(true);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const agregarPersona = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_directorio");
        vista.className = "col s9";
    }

    const actualizarPregunta = persona => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_directorio");
        vista.className = "col s9";
        setEditar(persona);
    }

    return (
        <div id='vista_directorio' className='col s12' style={{padding:"0"}}>
            <img src={img1} style={{width:"100%"}}/>

            <div className='container center'>
                <p className='encabezadosCaav' style={{margin:"15px 0px 10px 0px"}}>
                    <span className='encabezadosMonserrat'>Dinos en qué </span><br/>
                    podemos ayudarte.
                </p>
                <p>
                    Nuestro horario de atención es de lunes a viernes<br/>
                    de 10:00 am a 6:00 pm y sábados de 10:00 am a 2:00 pm.
                </p>
                <p>
                    Lerdo de Tejada #2071 entre calle Marsella y Chapultepec,<br/>
                    Colonia Americana, Guadalajara, Jalisco, México.
                </p>
                <div className='row'>
                    <div className='col s12 m4 l4'>
                        <img src={whats} style={{width:"20px", marginBottom:"-5px", marginTop:"10px"}} />
                        <a target='blanck' href="https://wa.me/523318958778?text=¡Hola buen día! ¿Me podrías dar información?">
                            <p style={{color:"black"}}>
                                WhatsApp: +52 1 33 1895 8778
                            </p>
                        </a>
                    </div>
                    <div className='col s12 m4 l4'>
                        <img src={tel} style={{width:"20px", marginBottom:"-5px", marginTop:"10px"}} />
                        <a target='blanck' href="tel:3336152964">
                            <p style={{color:"black", marginBottom:"0px"}}>33 36 15 29 64</p>
                        </a>
                        <a target='blanck' href="tel:3335877825">
                            <p style={{color:"black", margin:"0px"}}>33 35 87 78 25</p>
                        </a>
                        <a target='blanck' href="tel:3335877824">
                            <p style={{color:"black", margin:"0px"}}>33 35 87 78 24</p>
                        </a>
                        <a target='blanck' href="tel:3336158470">
                            <p style={{color:"black", marginTop:"0px"}}>33 36 15 84 70</p>
                        </a>
                    </div>
                    <div className='col s12 m4 l4'>
                        <img src={mail} style={{width:"20px", marginBottom:"-5px", marginTop:"10px"}} />
                        <a target='blanck' href="mailto:info@caav.mx?Subject=¡Hola buen día! &body=¡Hola buen día!%0E¿Me podrías dar más información?">
                            <p style={{color:"black"}}>
                                info@caav.mx
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='container center'>
                <p className='encabezadosCaav' style={{margin:"15px 0px 10px 0px"}}>
                    <span className='encabezadosMonserrat'>¿Necesitas contactar a </span><br/>
                    alguien en particular?
                </p>
                    
                <div className='componente_editable_padre' style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginBottom:"20px", paddingBottom:"20px"}}>
                    {!flag ? (
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh", width:"100%"}}>
                            <h1>cargando...</h1>
                        </div>
                    ) : (
                        directorio.map((dato) => (
                            <div onClick={() => {actualizarPregunta(dato)}} className='contenedor_directorio_1 componente_editable_2'>
                                <div className='contenedor_directorio'>
                                    <div>
                                        <p className='texto_directorio'>
                                            {dato.puesto}
                                        </p>
                                        <p className='texto_directorio_desc'>
                                            {dato.nombre}
                                        </p>                         
                                    </div>
                                    <div className='cuadrado'>
                                        {dato.numero && (
                                            <Fragment>
                                                <div className='hover_directorio_d3'>
                                                    {dato.whatsapp ? (
                                                        <a target="_blanck" href={'https://wa.me/52' + dato.numero + '?text=¡Hola buen día! ¿Me podrías dar más información?'}>
                                                            <img src={icono_whats}></img>                           
                                                        </a>
                                                    ) : (
                                                        <a target="_blanck" href={'tel:' + dato.numero}>
                                                            <img src={icono_tel}></img>                           
                                                        </a>
                                                    )}
                                                </div>
                                                <div className='hover_directorio_d3' style={{marginLeft: '25px'}}>
                                                    <a target="_blanck" href={'mailto:' + dato.correo + '?Subject=¡Hola buen día! &body=¡Hola buen día!%0E¿Me podrías dar más información?'} type="">
                                                        <img src={icono_mail}></img>
                                                    </a>
                                                </div>
                                            </Fragment>
                                        )}
                                    </div>                                                                                          
                                </div>
                            </div>
                        ))
                    )}                
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div className='boton_1_nv' onClick={agregarPersona} style={{cursor:"pointer"}}>
                        <p>
                            Agregar Persona
                        </p>
                    </div>
                </div>
            </div>   
        </div>       
    );

}


export default Directorio;