import React, { Fragment, useEffect }  from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Loader from '../../Components/Loader';

import "./Directorio.css";

import icono_tel from "../../Images/Icon/2.png";
import icono_whats from "../../Images/Icon/54.png";
import icono_mail from "../../Images/Icon/1.png";

import tel from '../../Images/Icon/38.png';
import mail from '../../Images/Icon/37.png';
import whats from '../../Images/Icon/39.png';

import img1 from '../../Images/escritorio/Directorio/1.png';


const Directorio = props => {

    return (
        <div>
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
                    
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginBottom:"20px"}}>
                    {!props.directorio ? (
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50vh", width:"100%"}}>
                            <Loader />
                        </div>
                    ) : (
                        props.directorio.map((dato) => (
                            <div className='contenedor_directorio_1'>
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
            </div>   
        </div>       
    );

}


export default compose(
    firestoreConnect(props => [ 
        { 
            collection: 'directorio',
            orderBy: 'posicion'
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        directorio: (ordered.directorio)
    }))
)(Directorio);