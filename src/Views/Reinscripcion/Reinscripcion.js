import React, {Fragment, useEffect}  from 'react';
import M from "materialize-css";

import SideNav from '../../Components/SideNav';

import "./Reinscripcion.css";

import img1 from "../../Images/Icon/8.png";
import img2 from "../../Images/Icon/9.png";
import img3 from "../../Images/Icon/10.png";
import img4 from "../../Images/Icon/11.png";
import img5 from "../../Images/Icon/12.png";
import img6 from "../../Images/Icon/13.png";
import banco1 from '../../Images/logos/1.png';
import banco3 from '../../Images/logos/3.png';
import img12 from '../../Images/Icon/15.png';
import img13 from '../../Images/Icon/16.png';

import img58 from '../../Images/Icon/58.png';
import img59 from '../../Images/Icon/59.png';
import img60 from '../../Images/Icon/60.png';
import img61 from '../../Images/Icon/61.png';

import img14 from '../../Images/escritorio/Reinscripciones/1.png';
// FIXME: datos nuevos que no estaban en el anterior formulario, en el administrador actual no aparece:
// cp => codigo postal
// nombreEmergencia => nombre de la persona al cual esta asignado el numero de emergencia
// periodo => el periodo de inscripcion al cual estara inscrito
//Cambio de botones completado

const Reinscripcion = props => {

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        var elems2 = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems2);

        var elems3 = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems3);
    });

    return (
        <Fragment>
            <SideNav/>
            <div>
                <img src={img14} style={{width:"100%"}}/>
                <div className='center container contenedor_movil_chico_re'>
                    <p className='titulo_1_nv' style={{marginBottom:'0', marginTop:"15px"}}>
                        Proceso de reinscripción
                    </p>
                    <p>
                        ¡Llena tu formato de reinscripción y realiza el pago correspondiente <br />
                        <b>en las fechas regulares,</b> para poder asegurar tu lugar y que quedes en tu mismo <br />
                        grupo, además de que no acumules faltas al no estar en listas!
                    </p>
                </div>

                <div className='container center'>
                    <div className='flex_padre_reinscripcion'>
                        <div className='box_reinscripcion_fechas'>
                            <p className='titulo_4_nv' style={{fontWeight:"bold"}}> 
                                Fechas y costos de reinscripción
                            </p>
                            <p>
                                Las clases inician el:<br/>
                                <b>29 de agosto de 2022.</b><br/><br/>

                                La fecha límite para reinscribirte <br/>
                                en período regular es el: <br/>
                                <b>16 de agosto de 2022.</b><br/><br/>

                                Costo de reinscripción en periodo regular:<br/>
                                <b>$2,400 MXN</b><br/><br/>

                                Fecha límite para reinscripción extemporánea:<br/>
                                <b>7 de septiembre de 2022.</b> <br/><br/>

                                Costo de reinscripción extemporánea:<br/>
                                <b>$3,400 MXN</b>
                            </p>  
                        </div>
                        
                        <div className='box_reinscripcion_costos' style={{padding:"0px", background:"#fff"}}>
                            <div style={{padding:"10px", background:"#00496C"}}>
                                <p className='titulo_4_nv' style={{fontWeight:"bold"}}> 
                                    Costos de licenciaturas
                                </p>
                                <p>
                                    Cuatrimestre:<br/>
                                    <b>$19,200 MXN</b> <br/>
                                    Se paga en 4 mensualidades de <br/>
                                    <span style={{fontWeight:"bold"}}>$4,800 MXN</span> 
                                    cada una,<br/> los dias 10 de cada mes.<br/><br/>

                                    Si se pagan las mensualidades después de <br/>
                                    estas fechas deberás pagar: <br/>
                                    <span style={{fontWeight:"bold"}}>$5,280 MXN.</span><br/><br/>
                                </p>  
                            </div>
                            <div className='padding_movil_re_1' style={{padding:"10px", background:"#A80938", marginTop:"10px"}}>
                                <p>
                                    ¡Puedes pagar el cuatrimestre <br />
                                    en una sola exhibición por sólo <b>$16,500 MXN</b> <br />
                                    liquidando antes del <b>20 de septiembre de 2022!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p style={{color:"#a80938", fontWeight:"bold", marginTop:"0px"}}>
                        Precios sujetos a cambio
                    </p>
                </div>

                <div className='container'>
                    <p className='titulo_1_nv center' style={{fontFamily:"Caav"}}>
                        Reinscripción en persona
                    </p>
                </div>

                <div className='row container contenedor_xch'>
                    <div className='col s12 m12 l6 center'>
                        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                            <img src={img1} className='imagen_titulacion'></img>                                                     
                            <p className='titulo_4_nv' style={{color:'#00496C', margin:'0', fontWeight:"bold"}}>
                                Horario
                            </p>
                            <p className='d2_texto_iconos' style={{marginTop: '0'}}>
                                Lunes a viernes de 10:00 am a 6:00 pm<br/>                              
                                Sábado de 10:00 am a 2:00 pm
                            </p>
                        </div>
                    </div>
                    <div className='col s12 m12 l6 center'>
                        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                            <img src={img2} className='imagen_titulacion'></img>                                     
                            <p className='titulo_4_nv' style={{color:'#00496C', margin:'0', fontWeight:"bold"}}>
                                Dónde se hace
                            </p>
                            <p style={{marginTop: '0'}}>
                                En nuestra sede Gance <br/>
                                <a href='https://goo.gl/maps/at3L1fYwyLib1qH98' target='blank' style={{color:"#A80938"}}>
                                    <u>Aquí está la ubicación</u>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='row container'>
                    <div className='col s12 m6 l4 center' style={{padding:"0px 10px"}}>
                        <img src={img3} className='imagen_titulacion'></img>                                     
                        <p style={{marginTop: '0'}}>
                            Para poder reinscribirte al siguiente <br />
                            cuatrimestre debes estar al <br />
                            corriente en el pago de tus colegiaturas.
                        </p>
                    </div>
                    <div className='col s12 m6 l4 center' style={{padding:"0px 10px"}}>
                        <img src={img4} className='imagen_titulacion'></img>                                   
                        <p style={{marginTop:'0'}}>
                            Pide en la recepción de la Sede Gance<br />
                            tu formato de reinscripción <br />
                            y llénalo con letra legible.
                        </p>
                    </div>
                    <div className='col s12 m6 l4 offset-m3 center' style={{padding:"0px 10px"}}>
                        <img src={img5} className='imagen_titulacion'></img>                                   
                        <p style={{marginTop: '0'}}>
                            Con el formato lleno, haz tu pago en <br />
                            efectivo, con cheque o con tarjeta, <br />
                            en Caja General de Gance.
                        </p>
                    </div>
                </div>

                <div className='fondo_reinscripcion'>
                    <div className='container'>
                        <p className='titulo_1_nv center' style={{margin:'0'}}>
                            Reinscripción en línea
                        </p>
                    </div>
                    <div className='container contenedor_xch row'>
                        <div className='col s12 m12 l6 center'>
                            <img src={img3} className='imagen_titulacion'></img>                               
                            <p style={{marginTop: '0'}}>
                                1. Para reinscribirte es necesario <br />
                                que estés al corriente con el pago <br />
                                de tus colegiaturas.
                            </p>
                        </div>
                        <div className='col s12 m12 l6 center'>
                            <img src={img6} className='imagen_titulacion'></img>            
                            <p className='d2_texto_iconos' style={{marginTop: '0'}}>
                                2. Haz el depósito por el monto <br />
                                de la reinscripción.
                            </p>
                        </div>
                    </div>
                    <div className='container'>
                        <p className='titulo_4_nv center' style={{fontWeight:'bold', marginTop:'0'}}>
                            Hay dos formas de hacerlo:
                        </p>
                    </div>
                    <div className='container contenedor_chico row' style={{display:"flex", alignItems:"stretch", flexWrap:"wrap"}}>
                        <div className='col s12 m12 l6' style={{margin:"10px 0px"}}>
                            <div style={{border: "solid 1px #970D19", padding:"20px", height:"100%"}}>
                                <img src={banco3} className='imagen_reinscripcion_bancos'></img>             
                                <p>
                                    En ventanilla con los siguientes datos: <br/>
                                    No. de Empresa: CEP 62841 (CAAV), <br/>
                                    y deberás proporcionar al cajero el nombre del alumno,<br/>
                                    para identificar quién realizó el depósito.<br/>
                                    (En tu ficha del depósito deberá aparecer tu nombre).
                                </p>  
                            </div>
                        </div>
                        <div className='col s12 m12 l6' style={{margin:"10px 0px"}}>
                            <div style={{border: "solid 1px #970D19", padding:"20px"}}>
                                <img src={banco1} className='imagen_reinscripcion_bancos'></img>
                                <p className='texto_reinscripcion_bancos'>
                                    Sólo acepta transferencias electrónicas con los siguientes datos: <br/>
                                    Beneficiario: <br/>
                                    Centro de Formación y Capacitación Audiovisual, S.C.<br/>
                                    (si no cabe completo abrévialo)<br/><br/>

                                    RFC. CFC950627R85<br/>
                                    Correo electrónico: tesoreria@caav.mx <br/>
                                    Concepto: nombre del alumno del que realizas el pago.<br/>
                                    Cuenta Clabe: 002320700156748553
                                </p>  
                            </div>
                        </div>
                    </div>
                    <div className='container contenedor_grande center'>
                        <p className='titulo_4_nv' style={{fontWeight:'bold'}}>
                            Proceso para reinscribirte:
                        </p>
                        <div className='row'>
                            <div className='col s12 m6 l3'>
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <img src={img58} alt="" className='imagen_titulacion'/>
                                    <p>
                                        1. Llena el formato de <br />
                                        reinscripción 
                                        <a href='#formulario-reinscripcion' style={{color:'#A80938', marginLeft:"4px"}}>
                                            <u><b>aquí</b></u>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <img src={img59} alt="" className='imagen_titulacion'/>
                                    <p>
                                        2. Adjunta en formato .pdf la ficha del <br />
                                        depósito de la reinscripción.
                                    </p>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <img src={img60} alt="" className='imagen_titulacion'/>
                                    <p>
                                        3. Recibirás un <br />
                                        acuse de recibo.
                                    </p>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <img src={img61} alt="" className='imagen_titulacion'/>
                                    <p>
                                        4. Si no te llega el acuse, escríbenos 
                                        <a href='mailto:tesoreria@caav.mx' style={{color:'#A80938', margin:"0px 4px"}}>
                                            <u><b>aquí</b></u>
                                        </a><br />
                                        para verificar que tu solicitud y pago <br />
                                        hayan sido recibidos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container contenedor_chico center'>
                    <p className='encabezadosCaav' style={{marginTop:"15px", color:"#00496C"}}>
                        <span className='encabezadosMonserrat'>
                            Reinscripción para estudiantes
                        </span> <br />
                        irregulares o de reingreso
                    </p>
                    <p>
                        Consulta la siguiente información de acuerdo a tu estatus académico:
                    </p>
                    <div className='row'>
                        <div className='col s12 m6 l6'>
                            <img src={img12} className='imagen_titulacion' ></img>
                            <p className='titulo_4_nv' style={{marginTop:'0', fontWeight:"bold"}}>
                                Estudiantes de reingreso
                            </p>
                            <p style={{marginTop:'0'}}>
                                Si estás reingresando, te reinscribiste antes de la fecha límite 
                                y no tienes materias pendientes por cursar o repetir, recibirás 
                                un correo de la Coordinación Académica con tu nombre de grupo a 
                                más tardar el <b>sábado 20 de agosto.</b><br/><br/>

                                Si no te llega el correo en esta fecha, envía un correo a Sofía Jiménez a
                                <a href='mailto:academia@caav.mx' style={{color:'#A80938', marginLeft:"4px"}}>
                                    <u>academia@caav.mx</u>
                                </a> con copia a <a href='mailto:jacqueline@caav.mx' style={{color:'#A80938'}}>
                                    <u>jacqueline@caav.mx</u>
                                </a>.
                            </p>
                        </div>
                        <div className='col s12 m6 l6'>
                            <img src={img13} className='imagen_titulacion' ></img>
                            <p className='titulo_4_nv' style={{marginTop:'0', fontWeight:"bold"}}>
                                Estudiantes vigentes irregulares <br />
                                y estudiantes de reingreso irregulares
                            </p>
                            <p style={{marginTop:'0'}}>
                                Si estás reingresando y tienes materias pendientes por cursar 
                                o repetir, es necesario que hagas un horario especial en la 
                                Coordinación Académica. Consulta el proceso y las fechas para 
                                hacer tu horario especial al final de este documento.  
                            </p>
                            <p>
                                <b style={{color:"#A80938"}}>Muy importante:</b> en caso de no hacer tu horario 
                                especial, no estarás en listas de asistencia y acumularás faltas. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className='fondo_reinscripcion_2'>
                    <div className='container'>
                        <div className='center'>
                            <p className='encabezadosCaav center' style={{color:'#00496C', margin:'0'}}>
                                <span className='encabezadosMonserrat'>
                                    Fechas y pasos a seguir 
                                </span><br />
                                para hacer tu horario especial
                            </p>
                            <p>
                                Lo primero es reinscribirte en línea o personalmente en la sede Gance. <br />
                                La fecha límite es el <b>16 de agosto del 2022.</b>
                            </p>
                        </div>
                        <div className='row' style={{marginBottom:"0px"}}>
                            <div className='col s12 m12 l6 center'>
                                <p style={{marginTop:'0'}}>
                                    <b>Si sigues estudiando en línea:</b><br/>
                                    Envía un correo <a href='mailto:academia@caav.mx' style={{color:'#A80938'}}>
                                        <u>aquí </u>
                                    </a> 
                                    antes del <b>18 de agosto <br/>
                                    a las 7:00 pm</b>, para concertar tu cita virtual. <br/><br/>

                                    <b>Horarios de citas: </b><br/>
                                    Viernes 19 de agosto, de 4:00 a 7:00 pm.
                                </p>
                            </div>
                            <div className='col s12 m12 l6 center'>
                                <p style={{marginTop:'0'}}>
                                    <b>Si estás estudiando en presencial:</b><br/>
                                    Acude a la Coordinación Académica<br/>
                                    con tu ficha de reinscripción.<br/><br/>

                                    <b>Horarios de citas: </b><br/>
                                    22, 23 y 24 de agosto, de 9:30 am a 1:00 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background:"#A80938", color:"#fff", padding:"10px 0"}}>
                    <div className='container contenedor_xch center'>
                        <p style={{margin:"0"}}>
                            Costo materia a repetir: <b>$3,000 MXN</b><br/><br/>
                            Si haces tu horario especial después de las fechas establecidas, el precio cambia: <br/>
                            una semana de retraso: <b>$3,500 MXN,</b> dos semanas de retraso: <b>$4,000 MXN.</b>
                        </p>
                    </div>
                </div>
                <div className='container center'>
                    <p style={{color:"#a80938", fontWeight:"bold"}}>
                        Precios sujetos a cambio
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Reinscripcion;