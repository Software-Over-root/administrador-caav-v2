import React, { Fragment }  from 'react';
import SideNav from '../../Components/SideNav';

import "./Aspirantes.css";

import img0 from "../../Images/escritorio/Admision/1.jpg";

import icon1 from "../../Images/Icon/23.png";
import icon2 from "../../Images/Icon/24.png";
import icon6 from "../../Images/Icon/27.png";
import icon8 from "../../Images/Icon/4.png";

import banco1 from '../../Images/logos/1.png';
import banco2 from '../../Images/logos/2.png';
import banco3 from '../../Images/logos/3.png';


const Aspirantes = props => {

    return (
        <Fragment>
            <SideNav />
            <div>
                <img src={img0}  style={{width:"100%"}} />

                <div className='container center contenedor_chico_asp'>
                    <p className='titulo_1_nv'style={{textAlign:"center", margin:"15px 0 0 0"}}>
                        Proceso de admisión
                    </p> 
                    <p>
                        Puedes hacerlo en línea o personalmente, en la sede Gance.<br/>
                        Ponte en contacto con un asesor, que te guiará en todo el proceso.
                    </p>
                    <p style={{background:"#00496C", padding:"15px 25px", display:"inline-block"}}>
                        <span style={{margin:"0px", fontWeight:"bold", color:"#fff"}}>
                            Inicio de clases:
                        </span><br />
                        <span className='titulo_4_nv' style={{margin:"0px", fontWeight:"bold", color:"#fff"}}>
                            29 de agosto de 2022
                        </span><br />
                        <span style={{fontWeight:"bold", marginBottom:"0px", color:"#fff"}}>
                            Próximos inicios<br/>
                            9 de enero de 2023<br/>
                            8 de mayo de 2023
                        </span>
                    </p>
                </div>

                <div className='container contenedor_xch center' style={{marginBottom:"20px"}}>
                    <p className='titulo_4_nv' style={{fontFamily:"Caav", marginTop:"0px"}}>
                        Sigue estos pasos
                    </p>
                    <p style={{fontWeight:"bold"}}>
                        Evaluación de perfil
                    </p>
                    <p>
                        Esta evaluación tiene un costo de <span style={{fontWeight:"bold"}}>$500 MXN. </span>
                        Puedes pagarla por medio de depósito o por transferencia bancaria.
                        Envía tu comprobante de pago <a href="mailto:jacqueline@caav.mx" style={{color:"#A80938"}}><u>aquí</u></a> con 
                        copia a tu asesor, que te dará acceso a la evaluación.
                    </p>
                    <p style={{fontWeight:"bold"}}>
                        Inscripción
                    </p>
                    <p>
                        Realiza el pago correspondiente, de <span style={{fontWeight:"bold"}}>$2,400 MXN</span> 
                        y tu primera mensualidad, de <span style={{fontWeight:"bold"}}>$4,800 MXN.</span> Puedes 
                        hacer el pago por depósito, transferencia o vía PayPal.
                    </p>
                    <p style={{fontWeight:"bold"}}>
                        Ficha de inscripción
                    </p>
                    <p>
                        Llena tu ficha <a style={{color:"#A80938 "}} href="/formato-inscripcion"><u> aquí. </u></a>
                        <br/>Ahí deberás adjuntar en imagen tus comprobantes de pago.
                    </p>
                    <p style={{fontWeight:"bold"}}>
                        Confirmación
                    </p>
                    <p>
                        En un periodo de 48 horas hábiles te llegará un correo de parte de caja general,
                        en el que te confirmarán tu inscripción, además de la fecha y hora en las que se 
                        te dará la charla de inducción
                    </p>
                    <p style={{fontWeight:"bold"}}>
                        Presentar documentos
                    </p>
                    <p>
                        Éstos son los documentos que debes presentar a más tardar el día de inicio 
                        de clases:<br/><br/>
                        <div style={{marginLeft:"30px"}}>
                            <span className='texto_admision_punto'>
                                Original y copia de acta de nacimiento (vigencia de no más de tres meses).<br/>
                            </span>
                            <span className='texto_admision_punto'>
                                Original y tres copias de certificado de bachillerato.<br/>
                            </span>
                            <span className='texto_admision_punto'>
                                CURP.<br/>
                            </span>
                            <span className='texto_admision_punto'>
                                Una fotografía tamaño infantil.<br/>
                            </span>
                            <span className='texto_admision_punto'>
                                Constancia de validación de certificado de bachillerato (oficio en hoja membretada de la preparatoria, 
                                donde se indique tu nombre completo, folio del certificado, y fecha de expedición del certificado, firmado y 
                                sellado por el director o coordinador de control escolar de tu preparatoria).
                            </span>
                        </div>
                    </p>
                    <p style={{color:"#a80938", fontWeight:"bold", marginTop:"0px"}}>
                        Precios sujetos a cambio
                    </p>
                </div>
                

                <div style={{background:"#F8F8F8"}}>
                    <div className='container contenedor_grande'>
                        <div>
                            <p className='titulo_1_nv center' style={{paddingTop:"10px"}}>
                                Datos para depósitos y transferencias
                            </p>    
                        </div>
                        <div className='flex_padre_4_pago'>
                            <div className='box_3'>
                                <div className='imagen_despositos'>
                                    <img className='depositos' src={banco3} />
                                </div>
                                <p style={{paddingRight:"10px"}}>
                                    Sólo depósitos en efectivo o cheque.<br/>
                                    Número de empresa CEP 62841 (CAAV)<br/>
                                    Debes dar al cajero:<br/>
                                    primer nombre y primer apellido del aspirante,
                                    seguidos de las letras AB.
                                </p>
                            </div>
                            <div className='box_8'>
                                <div className='imagen_despositos'>
                                    <img className='depositos' src={banco1} />
                                </div>
                                <p>
                                    Nombre: Centro de Formación y Capacitación Audiovisual, S.C.<br/>
                                    RFC: CFC950627R85 <br/>
                                    Clabe interbancaria: 002320700156748553<br/>
                                    Concepto: primer nombre y primer apellido del aspirante,
                                    seguidos de las letras AB.

                                </p>
                            </div>
                            <div className='box_4'>
                                <div className='imagen_despositos'>
                                    <img className='depositos' src={banco2} />
                                    
                                </div>
                                <a href="mailto:pagopaypal@caav.mx">
                                    <p  style={{color:"#A80938"}}>
                                        pagopaypal@caav.mx
                                    </p>
                                </a>
                            </div>
                        </div>                   
                    </div>
                </div>

                <div className='container' style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", padding:"20px 0px"}}>
                    <p style={{color:"#a80938", fontWeight:"bold", marginTop:"10px", width:"100%", textAlign:"center"}}>
                        Importante al hacer tu pago con PayPal
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/cyGFyaftyXs" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                </div>


                <div className='fondo_6'>
                    <div className='caja_1'>
                        <p className='titulo_4_nv' style={{color:"#fff", marginTop:"10px"}}>
                            Muy importante, para asegurar tu lugar:
                        </p>
                        <div>
                            <p>
                                Haz tu trámite de inscripción antes de la fecha límite: nuestro cupo es 
                                limitado y puede llenarse muy pronto.
                            </p>
                            <p>
                                Sólo hasta que tengas tu confirmación de inscripción, puedes considerarte 
                                inscrita o inscrito.<br/>
                                Si completaste tu trámite, y no has recibido confirmación, escribe 
                                <a href="mailto:tesoreria@caav.mx?body=¡Hola buen día!%0E¿Me podrías dar más información?"
                                    target='blank' style={{fontWeight:"bold"}}
                                > 
                                    <u> aquí </u>  
                                </a>

                            </p>
                            <p>
                                El costo de la inscripción no es reembolsable. El costo de tu primera mensualidad es reembolsable <br/>
                                sólo si decides darte de baja dentro de los primeros tres días de iniciado el ciclo escolar.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='container center'>
                    <p className='titulo_1_nv' style={{margin:"20px"}}>
                        Horarios y costos
                    </p>
                    <div className='row'>
                        <div className='col s12 m12 l4'>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={icon8} style={{width:"54px",height:"54px"}}></img>               
                            </div>
                            <p className='titulo_asp_nv' style={{fontWeight:"bold"}}>
                                Horario de clase
                            </p>
                            <p style={{marginTop:"0px"}}>
                                De lunes a viernes, de 8:00 am a 3:00 pm. <br /> 
                                Pueden programarse algunas sesiones el sábado.
                            </p>
                        </div>
                        <div className='col s12 m12 l4'>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={icon6} style={{width:"54px",height:"54px"}}></img>
                            </div>
                            <p className='titulo_asp_nv' style={{fontWeight:"bold"}}>
                                Examen extraordinario
                            </p>
                            <p style={{marginTop:"0px"}}>$1,500 MXN por asignatura.</p>
                        </div>
                        <div className='col s12 m12 l4'>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <img src={icon2} style={{width:"54px",height:"54px"}}></img>
                            </div>
                            <p  className='titulo_asp_nv' style={{fontWeight:"bold"}}>
                                Asignatura a repetir
                            </p>
                            <p style={{marginTop:"0px"}}>$3,000 MXN</p>
                        </div>
                    </div>

                    <div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={icon1} style={{width:"54px",height:"54px"}}></img>
                        </div>
                        <p className='titulo_asp_nv' style={{fontWeight:"bold"}}>
                            Costos de licenciaturas
                        </p>
                        <p style={{marginTop:"0px"}}>
                            Inscripción cuatrimestral <b>$2,400 MXN. </b><br />
                            Incluye seguro por accidentes escolares.
                        </p>
                        <p>
                            La colegiatura se paga en 4 mensualidades <br />
                            de <b>$4,800 MXN</b> cada una, antes del día 10 de cada mes.
                        </p>
                        <p>
                            Si se pagan las mensualidades después <br />
                            de esta fecha el costo es de <b>$5,280 MXN</b>
                        </p>
                        <p style={{color:"#fff", background:"#A80938", display:"inline-block", padding:"10px 20px"}}>
                            ¡Puedes pagar el cuatrimestre <br />
                            en una sola exhibición por sólo <b>$16,500 MXN!</b> <br />
                            Consulta condiciones
                        </p>
                    </div>
                    <p style={{color:"#a80938", fontWeight:"bold", marginTop:"0px"}}>
                        Precios sujetos a cambio
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Aspirantes;