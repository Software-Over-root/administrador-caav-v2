import React, { Fragment, useEffect, useState }  from 'react';
import Swal from 'sweetalert2';
import M from 'materialize-css';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import Loader from '../../Components/Loader';
import View from './View';

import { useAuth } from '../../Context/Context';

import EtiquetasHelper from '../../Helpers/Etiquetas';
import CursosHelper from '../../Helpers/Cursos';

import icon1 from "../../Images/administrador/iconos/1.png";
import icon63 from "../../Images/Icon/63.png";


const General = () => {
    const { editar, caracteres } = useAuth();

    const [flag, setFlag] = useState(false);
    const [flagFechas, setFlagFechas] = useState(true);
    const [curso, setCurso] = useState({
        gratis: false,
        oferta_relampago: false,
        carrusel_imagenes: []
    });
    const [instance, setInstance] = useState({});
    const [dataPago, setDataPago] = useState({});
    const [pickerInfo, setPickerInfo] = useState("");

    const [fechas, setFechas] = useState([]);
    const [fechasInicio, setFechasInicio] = useState([]);
    const [fechasFin, setFechasFin] = useState([]);

    const [etiquetas, setEtiquets] = useState([]);

    useEffect(() => {
        if (editar || pickerInfo) {
            setCurso({
                ...curso,
                ...editar,
                ...pickerInfo
            })
        } 

        if (!flag) {
            obtenerEtiquetas();
        }

    }, [editar, pickerInfo]);

    const obtenerEtiquetas = async () => {
        let res = await EtiquetasHelper.obtenerEtiquetas();
        if (res.success) {
            setEtiquets(res.data);
            setFlag(true);
        } else {
            Swal.fire(
                'Error!',
                'No se lograron obtener las etiquetas, codigo: ' + res.code ,
                'error'
            )
        }

        var elems = document.querySelectorAll('select');
        var instance = M.FormSelect.init(elems);
        setInstance(instance);
    }

    const leerDato = e => {
        setCurso({
            ...curso,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "forma_pago")
            setDataPago({});
        
    }

    const leerOpciones = e => {
        e.preventDefault();
        let value;
        if (e.target.name === "area") {
            value = instance[0].getSelectedValues();
        } else  if (e.target.name === "modalidad") {
            value = instance[1].getSelectedValues();
        } else  if (e.target.name === "formato") {
            value = instance[2].getSelectedValues();
        } else  if (e.target.name === "etiquetas") {
            value = instance[5].getSelectedValues();
        } else {
            value = instance[5].getSelectedValues();
        }
        setCurso({
            ...curso,
            [e.target.name]: value
        })
    }

    const leerFecha = (e, index) => {
        e.preventDefault();
        let copiaFechas = [...fechas];

        copiaFechas[index][e.target.name] = e.target.value;

        setFechas(copiaFechas);
    }

    const leerFechaRelampago = e => {
        e.preventDefault();
        let fechaRelampagoCopia = {...curso.fecha_relampago}
        fechaRelampagoCopia[e.target.name] = e.target.value;
        console.log(fechaRelampagoCopia);
        setCurso({
            ...curso,
            fecha_relampago: fechaRelampagoCopia
        });
    }

    const agregarFecha = e => {
        e.preventDefault();
        let fechaLengthDoble = [...fechas].length * 2;
        let fechaLength = fechas.length;
        
        if (fechaLength > 0 ) {
            let fechasString = JSON.stringify(fechas[fechaLength - 1]);

            if (fechasString.includes("vacio") || fechasInicio.length < fechaLength || fechasFin.length < fechaLength) {
                Swal.fire(
                    'Error!',
                    'Faltan datos por llenar',
                    'error'
                )
                return false;
            }
        }

        setFechas([
            ...fechas,
            {
                dias:"vacio",
                horario:"vacio",
                sesiones:"vacio",
                duracion:"vacio",
                tutor:"vacio"
            }
        ]);

        setTimeout(() => {
            var elems = document.querySelectorAll('.datepicker');
            M.Datepicker.init(elems[fechaLengthDoble], {
                onSelect: data => {
                    let copiaFechasInicio = [
                        ...fechasInicio,
                        {
                            fecha_inicio:"vacio"
                        }
                    ];
                    copiaFechasInicio[copiaFechasInicio.length - 1]["fecha_inicio"] = data;
                    setFechasInicio(copiaFechasInicio);
                }
            });
            M.Datepicker.init(elems[fechaLengthDoble + 1], {
                onSelect: data => {
                    let copiaFechasFin = [
                        ...fechasFin,
                        {
                            fecha_fin:"vacio"
                        }
                    ];
                    copiaFechasFin[copiaFechasFin.length - 1]["fecha_fin"] = data;
                    setFechasFin(copiaFechasFin);
                }
            });
        },500);
    }

    const eliminarFecha = (e, index) => {
        e.preventDefault();
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar la fechaa?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setFlagFechas(false);
                let copiaFechas = [...fechas];
        
                copiaFechas.splice(index, 1);
        
                setFechas(copiaFechas);

                setTimeout(() => {
                    Swal.fire(
                        'Eliminación exitosa',
                        'La fecha se elimino correctamente' ,
                        'succes'
                    )
                    setFlagFechas(true);
                }, 500);
            } else if (result.isDenied) {
                Swal.fire(
                    'Eliminación cancelada',
                    'La fecha quedo intacta' ,
                    'succes'
                )
            }
        })
    }

    const leerPago = e => {
        setDataPago({
            ...dataPago,
            [e.target.name]: e.target.value
        })
    }

    const actualizarFoto = e => {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', (evt) => {
            setCurso({
                ...curso,
                [e.target.name]: fileReader.result
            });
        });
        fileReader.readAsDataURL(e.target.files[0]);
    }

    const actualizarCarrusel = e => {
        if (e.target.files.length === 6) {
            let imagenes = [];

            for (let index = 0; index < 6; index++) {
                const imagen = e.target.files[index];
                let fileReader = new FileReader();
                fileReader.addEventListener('load', (evt) => {
                    imagenes.push(fileReader.result);

                    if (index === 5) {
                        setCurso({
                            ...curso,
                            [e.target.name]: imagenes
                        });
                    }
                });
                fileReader.readAsDataURL(imagen);
            }

        } else {
            e.target.value = "";
            Swal.fire(
                'Error!',
                'Debes seleccionar 6 imagenes',
                'error'
            )
        }
    }

    const agregar = e => {
        e.preventDefault();
        let copiaFechas = [...fechas];

        fechas.map((fecha, index) => {
            copiaFechas[index]["fecha_inicio"] = fechasInicio[index].fecha_inicio;
            copiaFechas[index]["fecha_fin"] = fechasFin[index].fecha_fin;
        });

        let body = {
            ...curso,
            ...editar,
            fechas: copiaFechas,
            data_pago: dataPago
        }

        if (
            body.contenido === undefined ||
            body.descripcion_externa === undefined ||
            body.descripcion_interna === undefined ||
            body.nivel === undefined ||
            body.fechas.length === 0 ||
            // body.etiquetas === undefined ||
            body.data_pago.costo_total === undefined
        ) {
            Swal.fire(
                'Error!',
                'Faltan datos por llenar',
                'error'
            )
            return false;
        }

        CursosHelper.agregarCurso(body);
    }

    // oferta relampago
    const activar = () => {

        var fecha = document.querySelectorAll('.datepicker');
        M.Datepicker.init(fecha[0], {
            onSelect: data => {
                setPickerInfo({
                    "fecha_inicio": data
                })
            }
        });
        M.Datepicker.init(fecha[1], {
            onSelect: data => {
                setPickerInfo({
                    "fecha_fin": data
                })
            }
        });

        var hora = document.querySelectorAll('.timepicker');
        M.Timepicker.init(hora[0], {
            onSelect: (hora, minutos) => {
                setPickerInfo({
                    "hora_inicio": [hora, minutos]
                })
            }
        });
        M.Timepicker.init(hora[1], {
            onSelect: (hora, minutos) => {
                setPickerInfo({
                    "hora_fin": [hora, minutos]
                })
            }
        });
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Cursos</p>
                    
                    <form onSubmit={agregar}>
                        <p>Ficha exterior</p>
                        <img alt="imagen subida" width="100%" src={curso.imagen_externa}></img>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input name='imagen_externa' onChange={actualizarFoto} type="file" required />
                            </div>
                            <div class="file-path-wrapper">
                                <input name='imagen_externa' class="file-path validate" type="text" placeholder="Upload one or more files" required />
                            </div>
                        </div>
                        <div class="input-field">
                            <select name='area' onChange={leerOpciones} multiple required>
                                <option value="1">Animación, Animé y Cómic</option>
                                <option value="2">Audio, Radio y Voz</option>
                                <option value="3">Cine y Video</option>
                                <option value="4">Dibujo, Ilustración y Pintura</option>
                                <option value="5">Diseño</option>
                                <option value="6">Emprendimiento</option>
                                <option value="7">Escritura y Narrativa</option>
                                <option value="8">Fotografía</option>
                                <option value="9">Las Artes</option>
                                <option value="10">Marketing Digital y la Web</option>
                                <option value="11">Multimedia y Videojuegos</option>
                            </select>
                            <label>Area</label>
                        </div>
                        <div class="input-field">
                            <select placeholder='Modalidad' name='modalidad' onChange={leerOpciones} multiple required>
                                <option value="1">Presencial</option>
                                <option value="2">Híbrido</option>
                                <option value="3">Videorreunión</option>
                                <option value="4">Google Classroom</option>
                            </select>
                            <label>Modalidad</label>
                        </div>
                        <div class="input-field">
                            <select placeholder='formato' name='formato' onChange={leerOpciones} multiple required>
                                <option value="1">Taller</option>
                                <option value="2">Curso</option>
                                <option value="3">Diplomado</option>
                            </select>
                            <label>Formato</label>
                        </div>
                        <div class="input-field">
                            <select name='nivel' onChange={leerDato} required>
                                <option value="0" disabled selected>Selecciona una opcion</option>
                                <option value="1">Básico</option>
                                <option value="2">Intermedio</option>
                                <option value="3">Avanzado</option>
                                <option value="4">Básico / Intermedio</option>
                            </select>
                            <label>Nivel del Curso</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="nombre" name='nombre' type="text" className="validate" required />
                            <label for="nombre">Nombre del curso</label>
                        </div>

                        <p>Descripcion Externa</p>
                        <p>Caracteres: {caracteres}</p>
                        <div id='descripcion_externa_nuevo'>
                            
                        </div>

                        <p>Ficha interna</p>
                        <p>Imagen Principal</p>
                        <img alt="imagen subida" width="100%" src={curso.imagen_interna}></img>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input name='imagen_interna' onChange={actualizarFoto} type="file" required  />
                            </div>
                            <div class="file-path-wrapper">
                                <input name='imagen_interna' class="file-path validate" type="text" placeholder="Upload one or more files" required  />
                            </div>
                        </div>

                        <div id='seccion_interna_nuevo'>
                            
                        </div>

                        <div className="input-field">
                            <input onChange={leerDato} id="requisitos" name='requisitos' type="text" className="validate" required  />
                            <label for="requisitos">Requisitos del curso</label>
                        </div>

                        {!flagFechas ? (
                            <div>
                                <Loader />
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <p>Próximas fechas</p>
                                    <div className='boton_agregar_formulario' onClick={agregarFecha}>
                                        <img src={icon1} alt="" style={{width:"23px"}} />
                                    </div>
                                </div>
                                {fechas.map((fecha, index) => (
                                    <div>
                                        <div>
                                            <p style={{fontWeight:"bold"}}>Fecha {index + 1}</p>
                                            <div onClick={e => {eliminarFecha(e, index)}} style={{width:"25px", height:"25px", cursor:"pointer"}}>
                                                <img src={icon63} alt="" style={{width:"100%"}} />
                                            </div>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={e => {leerFecha(e, index)}} id={"dias_" + index} name='dias' type="text" className="validate" required  />
                                            <label className={fechas[index].dias != "" && "active"} for={"dias_" + index}>Días</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={e => {leerFecha(e, index)}} id={"horario_" + index} name='horario' type="text" className="validate" required  />
                                            <label className={fechas[index].dias != "" && "active"} for={"horario_" + index}>Horario</label>
                                        </div>
                                        <div>
                                            <p>Fecha: {}</p>
                                            <input type="text" placeholder="Inicio" name="fecha_inicio" id={"fecha_" + index} class="datepicker" required  />
                                            <input type="text" placeholder="Fin" name="fecha_fin" id={"fecha_" + index} class="datepicker" required  />
                                        </div>
                                        <div className="input-field">
                                            <input onChange={e => {leerFecha(e, index)}} id={"sesiones_" + index} name='sesiones' type="text" className="validate" required  />
                                            <label className={fechas[index].dias != "" && "active"} for={"sesiones_" + index}>Numero de sesiones</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={e => {leerFecha(e, index)}} id={"duracion_" + index} name='duracion' type="text" className="validate" required  />
                                            <label className={fechas[index].dias != "" && "active"} for={"duracion_" + index}>Total de horas</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={e => {leerFecha(e, index)}} id={"tutor_" + index} name='tutor' type="text" className="validate" required  />
                                            <label className={fechas[index].dias != "" && "active"} for={"tutor_" + index}>Tutor</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div class="input-field">
                            <select name='forma_pago' onChange={leerDato} required >
                                <option value="0" disabled selected>Selecciona una opcion</option>
                                <option value="1">3 mensualidades</option>
                                <option value="2">Pago de contado</option>
                                <option value="3">Precio con descuento</option>
                            </select>
                            <label>Formas de pago</label>
                        </div>

                        <div>
                            {curso.forma_pago === "1" && (
                                <div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" required  />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_mensual" name='costo_mensual' type="text" className="validate" required  />
                                        <label for="costo_mensual">Mensualidades</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_contado" name='costo_contado' type="text" className="validate" required  />
                                        <label for="costo_contado">Pago de contado</label>
                                    </div>
                                </div>
                            )}
                            {curso.forma_pago === "2" && (
                                <div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" required  />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                </div>
                            )}
                            {curso.forma_pago === "3" && (
                                <div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" required  />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_sabatino" name='costo_sabatino' type="text" className="validate" required  />
                                        <label for="costo_sabatino">Costo Sabatino</label>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p>Carrusel de 6 imagenes</p>
                        <div style={{position:"relative", overflow:"auto", display:"flex"}}>
                            {curso.carrusel_imagenes.map(imagen => (
                                <img alt="imagen subida" style={{width:"100%", height:"100%"}} src={imagen}></img>
                            ))}
                        </div>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input name='carrusel_imagenes' onChange={actualizarCarrusel} type="file" multiple />
                            </div>
                            <div class="file-path-wrapper">
                                <input name='carrusel_imagenes' class="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>

                        <p>Imagen GIF</p>
                        <img alt="imagen subida" width="100%" src={curso.imagen_gif}></img>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input name='imagen_gif' onChange={actualizarFoto} type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input name='imagen_gif' class="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>

                        <p>Imagen Individual</p>
                        <img alt="imagen subida" width="100%" src={curso.imagen_indvidual}></img>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input name='imagen_indvidual' onChange={actualizarFoto} type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input name='imagen_indvidual' class="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>

                        {!flag ? (
                            <p>Cargando etiquetas...</p>
                        ) : (
                            <div class="input-field">
                                <select name='etiquetas' onChange={leerOpciones} multiple>
                                    {etiquetas.map(etiqueta => (
                                        <option value={etiqueta._id}>{etiqueta.nombre}</option>
                                    ))}
                                </select>
                                <label>Etiquetas</label>
                            </div>
                        )}

                        <p>Gratis para alumnos activos</p>
                        <div>
                            <p>
                                <label>
                                    <input name="gratis" type="radio" onChange={() => {
                                        setCurso({...curso, gratis:true})
                                    }} />
                                    <span>Si</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="gratis" type="radio" onChange={() => {
                                        setCurso({...curso, gratis:false})
                                    }} />
                                    <span>No</span>
                                </label>
                            </p>
                        </div>

                        {/* <p>Oferta relampago</p>
                        <div class="switch">
                            <label>
                                No
                                <input onChange={() => {
                                    setCurso({
                                        ...curso, 
                                        oferta_relampago:!curso.oferta_relampago,
                                        fecha_relampago:{
                                            dias:"",
                                            horario:"",
                                            fecha:"",
                                            sesiones:"",
                                            duracion:"",
                                            tutor:""
                                        }
                                    })
                                    setTimeout(() => {
                                        activar();
                                    }, 100)
                                }} type="checkbox" />
                                <span class="lever"></span>
                                Si
                            </label>
                        </div> */}

                        {curso.oferta_relampago && (
                            <div>
                                <div className="input-field">
                                    <input onChange={leerPago} id="descuento_relampago" name='descuento_relampago' type="text" className="validate" />
                                    <label for="descuento_relampago">Descuento</label>
                                </div>
                                <p>Comienzo</p>
                                <div className="input-field">
                                    <input id="fecha_inicio" name='fecha_inicio' type="text" class="datepicker" />
                                    <label for="fecha_inicio">Fecha</label>
                                </div>
                                <div className="input-field">
                                    <input id="hora_inicio" name='hora_inicio' type="text" class="timepicker" />
                                    <label for="hora_inicio">Hora</label>
                                </div>
                                <p>Fin</p>
                                <div className="input-field">
                                    <input id="fecha_fin" name='fecha_fin' type="text" class="datepicker" />
                                    <label for="fecha_fin">Fecha</label>
                                </div>
                                <div className="input-field">
                                    <input id="hora_fin" name='hora_fin' type="text" class="timepicker" />
                                    <label for="hora_fin">Hora</label>
                                </div>

                                <div>
                                    <p>Fecha de oferta relampago</p>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="dias_relampago" name='dias' type="text" className="validate" />
                                        <label for="dias_relampago">Días</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="horario_relampago" name='horario' type="text" className="validate" />
                                        <label for="horario_relampago">Horario</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="fecha_relampago" name='fecha' type="text" className="validate" />
                                        <label for="fecha_relampago">Fecha</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="sesiones_relampago" name='sesiones' type="text" className="validate" />
                                        <label for="sesiones_relampago">sesiones</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="duracion_relampago" name='duracion' type="text" className="validate" />
                                        <label for="duracion_relampago">Duración</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerFechaRelampago} id="tutor_relampago" name='tutor' type="text" className="validate" />
                                        <label for="tutor_relampago">Tutor</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar curso
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default General;