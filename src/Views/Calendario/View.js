import React, {useEffect, useState}  from 'react';
import Swal from 'sweetalert2';

import Loader from '../../Components/Loader';

import { useAuth } from '../../Context/Context';

import "./Calendario.css";

import img1 from "../../Images/escritorio/Calendario/1.png";

import calendarioHelper from '../../Helpers/Calendario';

// FIXME: error al descargar el calendario
const Calendario = props => {
    const { setEditar } = useAuth();

    const [bandera, setBander] = useState(false);
    const [diasMes, setDiasMes] = useState([]);
    const semana = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
    const mesString = [
        "Enero",
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Agosto", 
        "Septiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre"
    ];
    const [mes, setMes] = useState(new Date().getMonth());
    const [anio, setAnio] = useState(new Date().getFullYear());
    const [eventosActuales, setEventosActuales] = useState([]);

    const [eventos, setEventos] = useState([{}]);

    useEffect(() => {
        obtenerEventos();
    }, [props]);
    
    const agregarEvento = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_activado";
    }

    const actualizarEvento = evento => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        setEditar(evento);
    }

    const obtenerEventos = async () => {
        let res = await calendarioHelper.obtenerEventos();
        if (res.success) {
            setEventos(res.data);
            calcularCalendario(new Date().getMonth(), new Date().getFullYear(), res.data);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const proximoMes = () => {
        let numeroMes = mes + 1;
        let numeroAnio = anio;
        if (numeroMes === 12) {
            numeroMes = 0;
            numeroAnio = numeroAnio + 1;
            setAnio(numeroAnio);
        }
        setBander(false);
        setMes(numeroMes);
        calcularCalendario(numeroMes, numeroAnio, eventos);
    }

    const mesAnterior = () => {
        let numeroMes = mes - 1;
        let numeroAnio = anio;
        if (numeroMes < 0) {
            numeroMes = 11;
            numeroAnio = numeroAnio - 1;
            setAnio(numeroAnio);
        }
        setBander(false);
        setMes(numeroMes);
        calcularCalendario(numeroMes, numeroAnio, eventos);
    }

    const calcularCalendario = (mes, anio, data) => {
        let priemDia = new Date(anio, mes, 1);
        let ultimoDia = new Date(anio, mes + 1, 0);
        const mesArray = [];
        let obtenerDiaSemana = () => {
            if (priemDia.getDay() - 1 >= 0 ) {
                return(priemDia.getDay() - 1)
            } else {
                return(6)
            }
        };
        let diaSemana = obtenerDiaSemana();
        for (let diaNulo = 0; diaNulo < diaSemana; diaNulo++) {
            if (diaNulo % 7 === 0) {
                //lunes
                mesArray.push({dia: false, class:"calendario_lunes calendario_vacio"});
            } else {
                //demas dias
                mesArray.push({dia: false, class:"calendario_dia calendario_vacio"});
            }
        }
        for (let dia = 1; dia < ultimoDia.getDate() + 1; dia++) {
            let fecha = new Date(anio, mes, dia);
            let color = [];
            let busqueda = data.filter(evento => evento.dia === fecha.getDate() && evento.mes === fecha.getMonth());
            busqueda.map(evento => {
                color.push(evento.color);
            })
            let json;
            if (fecha.getDay() === 1) {
                //lunes
                json = {
                    color: color,
                    dia,
                    class: "calendario_lunes"
                }
            } else {
                //demas dias
                json = {
                    color: color,
                    dia,
                    class: "calendario_dia"
                }
            }
            mesArray.push(json);
        }
        
        setDiasMes(mesArray);
        setBander(true);
    }

    const verEventos = dia => {
        let busqueda = eventos.filter(evento => evento.dia === dia && evento.mes === mes);
        setEventosActuales(busqueda);
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
            <img src={img1} alt="" style={{width:"100%"}} />
            <div className='container'>
                <div className='center'>
                    <p className='titulo_1_nv calendario_movil_bajo' style={{marginTop:"15px"}}>Calendario</p>
                </div>
                {!bandera ? (
                    <Loader />
                ) : (
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                        <div className='calendario'>
                            <div className='header_calendario' style={{marginLeft:"5px"}}>
                                <div className='titulo_4_nv center_movil' style={{fontWeight:"bold"}}>
                                    <p>{mesString[mes]} {anio}</p>
                                </div>
                            </div>
                            <div className='calendario_semanas'>
                                {semana.map(semana => (
                                    <div className='dia_semana'>
                                        <p>{semana}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='calendario_dias'>
                                {diasMes.map(dia => (
                                    dia.dia ? (
                                        dia.color.length > 0 ? (
                                            <div onClick={() => verEventos(dia.dia)} className={'dia ' + dia.class} style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                                <p style={{margin:"0px"}}>{dia.dia}</p>
                                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                    {dia.color.map(color => (
                                                        <div className='punto' style={{background: color, margin:"0px 1px"}} />
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div onClick={() => setEventosActuales([])} className={'dia ' + dia.class}>
                                                <p>{dia.dia}</p>
                                            </div>
                                        )
                                    ) : (
                                        <div className={'dia_vacio ' + dia.class} />
                                    )
                                ))}
                            </div>
                        </div>
                        <div className='eventos'>
                            <p style={{fontSize:"20px", fontWeight:"bold", margin:"0px 35px"}}>Eventos</p>
                            <div className='componente_editable_padre'>
                                {eventosActuales.length != 0 ? (
                                    eventosActuales.map(evento => (
                                        <div onClick={() => {actualizarEvento(evento)}} className='componente_editable_2' style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                                            <div style={{display:"flex", justifyContent:"center"}}>
                                                <p style={{margin:"0px 10px"}}>{evento.fecha}</p>
                                            </div>
                                            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <div style={{borderRadius:"50%", width:"20px", height:"20px", background:evento.color}} />
                                                <p style={{margin:"0px 10px"}}>{evento.evento}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{textAlign:"center", marginTop:"20px"}}>
                                        <p>No hay eventos en esta fecha</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60px"}}>
                    <div style={{display:"flex", width:"100px", justifyContent:"space-between"}}>
                        <div className='flecha izq' onClick={mesAnterior} />
                        <div className='flecha dec' onClick={proximoMes} />
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"50px"}}>
                <div className='boton_1_nv' onClick={agregarEvento} style={{cursor:"pointer"}}>
                    <p>
                        Agregar Evento
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Calendario;