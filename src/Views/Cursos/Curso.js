import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import M from 'materialize-css';


import FormularioEditar from '../../Components/FormularioEditar';
import SideNav from '../../Components/SideNav';
import Loader from '../../Components/Loader';

import CursosHelper from "../../Helpers/Cursos";
import EtiquetasHelper from '../../Helpers/Etiquetas';

import "./Curso.css";

import icon1 from "../../Images/administrador/iconos/1.png";
import icon63 from "../../Images/Icon/63.png";


const Curso = props => {
    const [curso, setCurso] = useState({});
    const [etiquetas, setEtiquetas] = useState({});
    const [flag, setFlag] = useState(false);
    const [carrusel, setCarrusel] = useState(0);
    const modailida = ["", "Presencial", "Híbrido", "Videorreunión", "Google Classroom"];
    const formato = ["", "Taller", "Curso", "Diplomado"];
    const nivel = ["", "Básico", "Intermedio", "Avanzado", "Básico / Intermedio"];
    const areas = [
        "Animación, Animé y Cómic",
        "Audio, Radio y Voz",
        "Cine y Video",
        "Dibujo, Ilustración y Pintura",
        "Diseño",
        "Emprendimiento",
        "Escritura y Narrativa",
        "Fotografía",
        "Las Artes",
        "Marketing Digital y la Web",
        "Multimedia y Videojuegos"
    ];
    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    // variables formulario
    const [instance, setInstance] = useState({});
    const [flagFechas, setFlagFechas] = useState(true);
    const [pickerInfo, setPickerInfo] = useState("");
    const [descripcionExterna, setDescripcionExterna] = useState("");
    const [descripcionInterna, setDescripcionInterna] = useState("");
    const [contenido, setContenido] = useState("");
    const [fechas, setFechas] = useState([]);
    // fin - variables formulario

    useEffect(() => {
        obtenerCurso();
        window.addEventListener("scroll", () => { 
            let elemento = document.getElementById("curso_fixme");
            let imagen_estatica = document.getElementById("imagen_estatica");
            let imagen_estatica_bottom = imagen_estatica.getBoundingClientRect().bottom;
            if (imagen_estatica_bottom <= 0) {
                if (elemento.className === "curso_fijo") {
                    elemento.className = "curso_fixme";
                }
            } else {
                if (elemento.className === "curso_fixme") {
                    elemento.className = "curso_fijo";
                }
            }
        });
    },[]);

    const actualizarFechaInicio = (date, index) => {
        // console.log({date, index});
        let copiaFechas = [...fechas];
        console.log({copiaFechas});
        copiaFechas[index].fecha_inicio = date;
        setFechas(copiaFechas);
    }

    const actualizarFechaFin = (date, index) => {
        // console.log({date, index});
        let copiaFechas = [...fechas];
        copiaFechas[index].fecha_fin = date;
        setFechas(copiaFechas);
    }

    const obtenerCurso = async () => {
        let nombre = window.location.pathname.split("/")[2];
        let res = await CursosHelper.obtenerUnCursoNombre(nombre);
        if (res.success) {
            setCurso(res.data[0]);
            setDescripcionExterna(res.data[0].descripcion_externa);
            setDescripcionInterna(res.data[0].descripcion_interna);
            setContenido(res.data[0].contenido);
            obtenerEtiquetas(res.data[0].etiquetas);
            setFechas(res.data[0].fechas);
            
            // actualizarPicker(res);
        } else {
            Swal.fire(
                'Error!',
                'No se lograron obtener el curso, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const obtenerEtiquetas = async (ids) => {
        let res = await EtiquetasHelper.obtenerEtiquetasIDs(ids);
        if (res.success) {
            setEtiquetas(res.data);
            setFlag(true);
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        } else {
            Swal.fire(
                'Error!',
                'No se lograron obtener las etiquetas, codigo: ' + res.code ,
                'error'
            )
        }
    }

    function createMarkup(materias) {
        return {__html: materias};
    }

    const actualizarCurso = () => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        // despues de pintar el formulario
        let ckedittor_contenedor = document.getElementById("descripcion_externa_nuevo");
        ReactDOM.render(
            <CKEditor
                editor={ ClassicEditor }
                config={ {
                    toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ]
                } }
                data={descripcionExterna}
                onChange={ ( event, editor ) => {
                    function removeTags(str) {
                        if ((str===null) || (str===''))
                            return false;
                        else
                            str = str.toString();

                        return str.replace( /(<([^>]+)>)/ig, '');
                    }
                    
                    const data = editor.getData();

                    let res = removeTags(data)

                    if (res.split("").length > 100) {
                        Swal.fire(
                            'Límite alcanzado!',
                            'El límite de caracteres es de 100' ,
                            'error'
                        )
                    } else {
                        setDescripcionExterna(data);
                    }

                } }
            />,
            ckedittor_contenedor
        );

        let ckedittor_contenedor_2 = document.getElementById("seccion_interna_nuevo");
        ReactDOM.render(
            <Fragment>
                <div>
                    <p>Descripcion Interna</p>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ]
                        } }
                        data={descripcionInterna}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setDescripcionInterna(data);
                        } }
                    />
                </div>
                <div style={{marginTop:"20px"}}>
                    <p>Contenido del curso</p>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ]
                        } }
                        data={contenido}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setContenido(data);
                        } }
                    />
                </div>
            </Fragment>,
            ckedittor_contenedor_2
        );

        var elems = document.querySelectorAll('select');
        var instance = M.FormSelect.init(elems);
        setInstance(instance);

        actualizarPicker();
    }

    const actualizarPicker = () => {
        // let fechas = res.fechas
        setTimeout(() => {
            var elems = document.querySelectorAll('.datepicker');

            fechas.map((fecha, index) => {
                M.Datepicker.init(elems[index * 2], {
                    onSelect: data => {
                        actualizarFechaInicio(data, index);
                    },
                    setDefaultDate: true,
                    defaultDate: new Date(fecha.fecha_inicio)
                });
                M.Datepicker.init(elems[(index * 2) + 1], {
                    onSelect: data => {
                        actualizarFechaFin(data, index);
                    },
                    setDefaultDate: true,
                    defaultDate: new Date(fecha.fecha_fin)
                });
            })
        }, 500);
    }

    // funciones del formulario
    const leerDato = e => {
        setCurso({
            ...curso,
            [e.target.name]: e.target.value
        });
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

    const agregarFecha = e => {
        e.preventDefault();
        let copiaFechas = [...curso.fechas];
        copiaFechas.push({
            dias:"",
            horario:"",
            fecha:"",
            sesiones:"",
            duracion:"",
            tutor:""
        });
        setCurso({
            ...curso,
            fechas: copiaFechas
        })
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
                let copiaFechas = [...curso.fechas];
        
                copiaFechas.splice(index, 1);
                setCurso({
                    ...curso,
                    fechas: copiaFechas
                });

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

    const leerFecha = (e, index) => {
        e.preventDefault();
        let copiaFechas = [...curso.fechas];

        copiaFechas[index][e.target.name] = e.target.value;

        setCurso({
            ...curso,
            fechas: copiaFechas
        });
    }

    const leerPago = e => {
        let copiaPago = {...curso.data_pago};
        copiaPago[e.target.name] = e.target.value;

        setCurso({
            ...curso,
            data_pago: copiaPago
        });
    }

    const actualizarCarrusel = e => {
        if (e.target.files.length === 6) {
            let imagenes = [];

            for (let index = 0; index < 6; index++) {
                const imagen = e.target.files[index];
                console.log({imagen});
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
        console.log(e.target.files);
    }

    const activar = () => {

        var fecha = document.querySelectorAll('.datepicker');
        M.Datepicker.init(fecha[0], {
            onSelect: data => {
                setPickerInfo({
                    "fecha_inicio": data
                })
            },
            // defaultDate: new Date();
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

    const actualizarCursoForm = e => {
        e.preventDefault();

        let body = {
            ...curso,
            descripcion_externa: descripcionExterna,
            descripcion_interna: descripcionInterna,
            contenido,
            fechas
        }

        console.log(body);

        if (
            body.contenido === undefined ||
            body.descripcion_externa === undefined ||
            body.descripcion_interna === undefined ||
            body.nivel === undefined ||
            body.imagen_externa === undefined ||
            body.imagen_interna === undefined ||
            body.imagen_externa === "" ||
            body.imagen_interna === "" ||
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

        CursosHelper.editarCurso(body, curso._id);
    }

    const eliminarCurso = e => {
        e.preventDefault();
        CursosHelper.eliminarCurso(curso._id);
    }
    // fin de las funciones del formulario

    return (
        <Fragment>
            <SideNav />
            <div className="row">
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar curso</p>
                    {!flag ? (
                        <Loader />
                    ) : (
                        <form onSubmit={actualizarCursoForm}>
                            <p>Ficha exterior</p>
                            <img alt="imagen subida" style={{width:"100%"}} src={curso.imagen_externa}></img>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input name='imagen_externa' onChange={actualizarFoto} type="file" />
                                </div>
                                <div class="file-path-wrapper">
                                    <input name='imagen_externa' class="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>
                            </div>
                            <div class="input-field">
                                <select name='area' onChange={leerOpciones} multiple required>
                                    {curso.area.includes("1") ? (
                                        <option value="1" selected>Animación, Animé y Cómic</option>
                                    ) : (
                                        <option value="1">Animación, Animé y Cómic</option>
                                    )}
                                    {curso.area.includes("2") ? (
                                        <option value="2" selected>Audio, Radio y Voz</option>
                                    ) : (
                                        <option value="2">Audio, Radio y Voz</option>
                                    )}
                                    {curso.area.includes("3") ? (
                                        <option value="3" selected>Cine y Video</option>
                                    ) : (
                                        <option value="3">Cine y Video</option>
                                    )}
                                    {curso.area.includes("4") ? (
                                        <option value="4" selected>Dibujo, Ilustración y Pintura</option>
                                    ) : (
                                        <option value="4">Dibujo, Ilustración y Pintura</option>
                                    )}
                                    {curso.area.includes("5") ? (
                                        <option value="5" selected>Diseño</option>
                                    ) : (
                                        <option value="5">Diseño</option>
                                    )}
                                    {curso.area.includes("6") ? (
                                        <option value="6" selected>Emprendimiento</option>
                                    ) : (
                                        <option value="6">Emprendimiento</option>
                                    )}
                                    {curso.area.includes("7") ? (
                                        <option value="7" selected>Escritura y Narrativa</option>
                                    ) : (
                                        <option value="7">Escritura y Narrativa</option>
                                    )}
                                    {curso.area.includes("8") ? (
                                        <option value="8" selected>Fotografía</option>
                                    ) : (
                                        <option value="8">Fotografía</option>
                                    )}
                                    {curso.area.includes("9") ? (
                                        <option value="9" selected>Las Artes</option>
                                    ) : (
                                        <option value="9">Las Artes</option>
                                    )}
                                    {curso.area.includes("10") ? (
                                        <option value="10" selected>Marketing Digital y la Web</option>
                                    ) : (
                                        <option value="10">Marketing Digital y la Web</option>
                                    )}
                                    {curso.area.includes("11") ? (
                                        <option value="11" selected>Multimedia y Videojuegos</option>
                                    ) : (
                                        <option value="11">Multimedia y Videojuegos</option>
                                    )}
                                </select>
                                <label>Area</label>
                            </div>
                            <div class="input-field">
                                <select placeholder='Modalidad' name='modalidad' onChange={leerOpciones} multiple required>
                                    {curso.modalidad.includes("1") ? (
                                        <option value="1" selected>Presencial</option>
                                    ) : (
                                        <option value="1">Presencial</option>
                                    )}
                                    {curso.modalidad.includes("2") ? (
                                        <option value="2" selected>Híbrido</option>
                                    ) : (
                                        <option value="2">Híbrido</option>
                                    )}
                                    {curso.modalidad.includes("3") ? (
                                        <option value="3" selected>Videorreunión</option>
                                    ) : (
                                        <option value="3">Videorreunión</option>
                                    )}
                                    {curso.modalidad.includes("4") ? (
                                        <option value="4" selected>Google Classroom</option>
                                    ) : (
                                        <option value="4">Google Classroom</option>
                                    )}
                                </select>
                                <label>Modalidad</label>
                            </div>
                            <div class="input-field">
                                <select placeholder='formato' name='formato' onChange={leerOpciones} multiple required>
                                    {curso.formato.includes("1") ? (
                                        <option value="1" selected>Taller</option>
                                    ) : (
                                        <option value="1">Taller</option>
                                    )}
                                    {curso.formato.includes("2") ? (
                                        <option value="2" selected>Curso</option>
                                    ) : (
                                        <option value="2">Curso</option>
                                    )}
                                    {curso.formato.includes("3") ? (
                                        <option value="3" selected>Diplomado</option>
                                    ) : (
                                        <option value="3">Diplomado</option>
                                    )}
                                </select>
                                <label>Formato</label>
                            </div>
                            <div class="input-field">
                                <select name='nivel' onChange={leerDato} required>
                                    {curso.nivel === "1" ? (
                                        <option value="1" selected>Básico</option>
                                    ) : (
                                        <option value="1">Básico</option>
                                    )}
                                    {curso.nivel === "2" ? (
                                        <option value="2" selected>Intermedio</option>
                                    ) : (
                                        <option value="2">Intermedio</option>
                                    )}
                                    {curso.nivel === "3" ? (
                                        <option value="3" selected>Avanzado</option>
                                    ) : (
                                        <option value="3">Avanzado</option>
                                    )}
                                    {curso.nivel === "4" ? (
                                        <option value="4" selected>Básico / Intermedio</option>
                                    ) : (
                                        <option value="4">Básico / Intermedio</option>
                                    )}
                                </select>
                                <label>Nivel del Curso</label>
                            </div>
                            <div className="input-field">
                                <input onChange={leerDato} defaultValue={curso.nombre} id="nombre" name='nombre' type="text" className="validate" required />
                                <label className="active" for="nombre">Nombre del curso</label>
                            </div>

                            <p>Descripcion Externa</p>
                            <div id='descripcion_externa_nuevo'>
                                
                            </div>

                            <p>Ficha interna</p>
                            <p>Imagen Principal</p>
                            <img alt="imagen subida" style={{width:"320px"}} src={curso.imagen_interna}></img>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input name='imagen_interna' onChange={actualizarFoto} type="file" />
                                </div>
                                <div class="file-path-wrapper">
                                    <input name='imagen_interna' class="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>
                            </div>

                            <div id='seccion_interna_nuevo'>
                                
                            </div>

                            <div className="input-field">
                                <input onChange={leerDato} defaultValue={curso.requisitos} id="requisitos" name='requisitos' type="text" className="validate" required />
                                <label className="active" for="requisitos">Requisitos del curso</label>
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
                                    {curso.fechas.map((fecha, index) => (
                                        <div>
                                            <div>
                                                <p style={{fontWeight:"bold"}}>Fecha {index + 1}</p>
                                                <div onClick={e => {eliminarFecha(e, index)}} style={{width:"25px", height:"25px", cursor:"pointer"}}>
                                                    <img src={icon63} alt="" style={{width:"100%"}} />
                                                </div>
                                            </div>
                                            <div className="input-field">
                                                <input defaultValue={curso.fechas[index].dias} onChange={e => {leerFecha(e, index)}} id={"dias_" + index} name='dias' type="text" className="validate" required />
                                                <label className={curso.fechas[index].dias != "" && "active"} for={"dias_" + index}>Días</label>
                                            </div>
                                            <div className="input-field">
                                                <input defaultValue={curso.fechas[index].horario} onChange={e => {leerFecha(e, index)}} id={"horario_" + index} name='horario' type="text" className="validate" required />
                                                <label className={curso.fechas[index].dias != "" && "active"} for={"horario_" + index}>Horario</label>
                                            </div>
                                            <div>
                                            <p>Fecha: {}</p>
                                                <input type="text" placeholder="Inicio" name="fecha_inicio" id={"fecha_" + index} class="datepicker" required  />
                                                <input type="text" placeholder="Fin" name="fecha_fin" id={"fecha_" + index} class="datepicker" required  />
                                            </div>
                                            <div className="input-field">
                                                <input defaultValue={curso.fechas[index].sesiones} onChange={e => {leerFecha(e, index)}} id={"sesiones_" + index} name='sesiones' type="text" className="validate" required />
                                                <label className={curso.fechas[index].dias != "" && "active"} for={"sesiones_" + index}>Numero de sesiones</label>
                                            </div>
                                            <div className="input-field">
                                                <input defaultValue={curso.fechas[index].duracion} onChange={e => {leerFecha(e, index)}} id={"duracion_" + index} name='duracion' type="text" className="validate" required />
                                                <label className={curso.fechas[index].dias != "" && "active"} for={"duracion_" + index}>Total de horas</label>
                                            </div>
                                            <div className="input-field">
                                                <input defaultValue={curso.fechas[index].tutor} onChange={e => {leerFecha(e, index)}} id={"tutor_" + index} name='tutor' type="text" className="validate" required />
                                                <label className={curso.fechas[index].dias != "" && "active"} for={"tutor_" + index}>Tutor</label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div class="input-field">
                                <select name='forma_pago' onChange={leerDato} required>
                                    {curso.forma_pago === "1" ? (
                                        <option value="1" selected>3 mensualidades</option>
                                    ) : (
                                        <option value="1">3 mensualidades</option>
                                    )}
                                    {curso.forma_pago === "2" ? (
                                        <option value="2" selected>Pago de contado</option>
                                    ) : (
                                        <option value="2">Pago de contado</option>
                                    )}
                                    {curso.forma_pago === "3" ? (
                                        <option value="3" selected>Precio con descuento</option>
                                    ) : (
                                        <option value="3">Precio con descuento</option>
                                    )}
                                </select>
                                <label>Formas de pago</label>
                            </div>

                            <div>
                                {curso.forma_pago === "1" && (
                                    <div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_total} id="costo_total" name='costo_total' type="text" className="validate" required />
                                            <label className="active" for="costo_total">Costo Total</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_mensual} id="costo_mensual" name='costo_mensual' type="text" className="validate"  required/>
                                            <label className="active" for="costo_mensual">Mensualidades</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_contado} id="costo_contado" name='costo_contado' type="text" className="validate" required/>
                                            <label className="active" for="costo_contado">Pago de contado</label>
                                        </div>
                                    </div>
                                )}
                                {curso.forma_pago === "2" && (
                                    <div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_total} id="costo_total" name='costo_total' type="text" className="validate" required />
                                            <label className="active" for="costo_total">Costo Total</label>
                                        </div>
                                    </div>
                                )}
                                {curso.forma_pago === "3" && (
                                    <div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_total} id="costo_total" name='costo_total' type="text" className="validate" required />
                                            <label className="active" for="costo_total">Costo Total</label>
                                        </div>
                                        <div className="input-field">
                                            <input onChange={leerPago} defaultValue={curso.data_pago.costo_sabatino} id="costo_sabatino" name='costo_sabatino' type="text" className="validate" required />
                                            <label className="active" for="costo_sabatino">Costo Sabatino</label>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p>Carrusel de 6 imagenes</p>
                            <div style={{position:"relative", overflow:"auto", display:"flex", width:"323px"}}>
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
                            <img alt="imagen subida" style={{width:"320px"}} src={curso.imagen_gif}></img>
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
                            <img alt="imagen subida" style={{width:"320px"}}  src={curso.imagen_indvidual}></img>
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
                                            curso.etiquetas.includes(etiqueta._id) ? (
                                                <option value={etiqueta._id} selected>{etiqueta.nombre}</option>
                                            ) : (
                                                <option value={etiqueta._id}>{etiqueta.nombre}</option>
                                            )
                                        ))}
                                    </select>
                                    <label>Etiquetas</label>
                                </div>
                            )}

                            <p>Gratis para alumnos activos</p>
                            <div>
                                <p>
                                    <label>
                                        {curso.gratis ? (
                                            <input name="gratis" type="radio" checked onChange={() => {
                                                setCurso({...curso, gratis:true})
                                            }} />
                                        ) : (
                                            <input name="gratis" type="radio" onChange={() => {
                                                setCurso({...curso, gratis:true})
                                            }} />
                                        )}
                                        <span>Si</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        {!curso.gratis ? (
                                            <input name="gratis" type="radio" checked onChange={() => {
                                                setCurso({...curso, gratis:false})
                                            }} />
                                        ) :(
                                            <input name="gratis" type="radio" onChange={() => {
                                                setCurso({...curso, gratis:false})
                                            }} />
                                        )}
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
                                    Actualizar curso
                                </button>
                            </div>
                        </form>
                    )}
                    <div className='botonn_2_admin' style={{marginTop:"10px"}}>
                        <button onClick={eliminarCurso}>
                            Eliminar curso
                        </button>
                    </div>
                </FormularioEditar>
            </div>
            <div className="row">
                <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
                    <div className='container border'>
                        <div></div>
                    </div>
                    <div className="container componente_editable_padre">
                        {!flag ? (
                            <div>
                                <Loader />
                            </div>
                        ) : (
                            <Fragment>
                                <div style={{margin:"100px 0"}} className='flex_padre_2_d3'>
                                    <div className='hijo_3_d3 hover-3'>
                                        <div 
                                            style={{
                                                border:"solid 1px #707070",
                                                display:"flex",
                                                flexDirection:"column",
                                                height:"100%"
                                            }}
                                        >
                                            <div>
                                                <a href={`/curso/${curso.nombre}`}>
                                                    <div className='imagen-hover-3' style={{color:"black"}}>
                                                        <div className='contenedor-hover-3'>
                                                            <img src={curso.imagen_externa} alt={curso.nombre} 
                                                                style={{
                                                                    width:"100%", 
                                                                    borderBottom:"solid 2px #707070"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {curso.modalidad.includes("1") && (
                                                <div className='tipo_curso tipo_precencial'>
                                                    <p>Presencial</p>
                                                </div>
                                            )}
                                            {curso.modalidad.includes("2") && (
                                                <div className='tipo_curso tipo_hibrido'>
                                                    <p>Híbrido</p>
                                                </div>
                                            )}
                                            {curso.modalidad.includes("3") && (
                                                <div className='tipo_curso tipo_video'>
                                                    <p>Videorreunión</p>
                                                </div>
                                            )}
                                            {curso.modalidad.includes("4") && (
                                                <div className='tipo_curso tipo_classroom'>
                                                    <p>Classroom</p>
                                                </div>
                                            )}
            
                                            {/* formato de enseñanza */}
                                            {curso.formato.includes("1") && (
                                                <div className='tipo_curso_2 tipo_talleres'>
                                                    <p>Taller</p>
                                                </div>
                                            )}
                                            {curso.formato.includes("2") && (
                                                <div className='tipo_curso_2 tipo_cursos'>
                                                    <p>Curso</p>
                                                </div>
                                            )}
                                            {curso.formato.includes("3") && (
                                                <div className='tipo_curso_2 tipo_diplomados'>
                                                    <p>Diplomado</p>
                                                </div>
                                            )}
                                            {/* fin de formato de enseñanza */}
            
                                            <div style={{
                                                padding:"30px 10px 10px 10px", 
                                                height:"100%",
                                                display:"flex",
                                                flexDirection:"column",
                                                justifyContent:"space-between"
                                            }}>
                                                <div>
                                                    {curso.area.map(numero_area => (
                                                        <p className='curso_d3'>{areas[numero_area]}</p>
                                                    ))}
                                                    <p className='curso_titulo_d3'>{curso.nombre}</p>
                                                    <p className='curso_impartido_d3'>Impartido por {curso.fechas[0].tutor}</p>
                                                    <div dangerouslySetInnerHTML={createMarkup(descripcionExterna)}>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='curso_titulo_d3' style={{fontSize:"20px"}}>${curso.data_pago.costo_total}</p>
                                                    {curso.data_pago.costo_mensual ? (
                                                        <p className='curso_pagos_d3'>3 mensualidades de ${curso.data_pago.costo_mensual}</p>
                                                    ) : (
                                                        <p className='curso_pagos_d3' style={{color:"#fff"}}>.</p>
                                                    )}
                                                    {curso.data_pago.costo_contado ? (
                                                        <p className='curso_pagos_d3' style={{color:"#A80938"}}>Pago de contado ${curso.data_pago.costo_contado}</p>
                                                    ) : (
                                                        <p className='curso_pagos_d3' style={{color:"#fff"}}>.</p>
                                                    )}
                                                    {curso.data_pago.costo_sabatino && (
                                                        <p className='curso_pagos_d3'>Consulta metodologia de pago.</p>
                                                    )}

                                                    {/* <p style={{marginTop:"0px"}}>{curso.fechas[0].fecha}</p> */}
                                                    {<p style={{marginTop:"0px"}}>
                                                        Del {new Date(curso.fechas[0].fecha_inicio).getDate()} de {meses[new Date(curso.fechas[0].fecha_inicio).getMonth()]} al {new Date(curso.fechas[0].fecha_fin).getDate()} de {meses[new Date(curso.fechas[0].fecha_fin).getMonth()]} de  {new Date(curso.fechas[0].fecha_fin).getFullYear()}
                                                    </p>}
                                                    
                                                    <div className='center' style={{marginBottom:"20px", marginTop:"30px"}}>
                                                        <a href={`/curso/${curso.nombre}`} className='curso_boton_d3'>Conoce más</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <img id="imagen_estatica" src={curso.imagen_interna} alt={curso.nombre} 
                                    style={{
                                        width:"100%"
                                    }}
                                />
                                <div className="row">
                                    <div className="col s12 m12 l8 xl8">
                                        <p className="titulo_1_nv" style={{color:"#AE4DEB", marginBottom:"10px"}}>{curso.nombre}</p>
                                        <div>
                                            <img src={curso.carrusel_imagenes[carrusel]} alt={curso.nombre} style={{width:"100%"}} />
                                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                                {curso.carrusel_imagenes.map((imagen, index) => (
                                                    <div style={{width:"15.5%"}}>
                                                        <img src={imagen} alt={curso.nombre} onClick={() => {setCarrusel(index)}} style={{width:"100%"}} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="informacion_curso" dangerouslySetInnerHTML={createMarkup(descripcionInterna)}>
                                        </div>
                                        <img src={curso.imagen_gif} alt={curso.nombre} style={{width:"100%"}} />
                                        <ul class="collapsible collapsible_curso">
                                            <li className='active' style={{background:"#AE4DEB", borderRadius:"20px"}}>
                                                <div class="collapsible-header collapsible-header_curso">Contenido del curso</div>
                                                <div class="collapsible-body collapsible-body_curso" dangerouslySetInnerHTML={createMarkup(contenido)}></div>
                                            </li>
                                        </ul>
                                        <p className="encabezadosMonserrat" style={{fontWeight:"bold", color:"#AE4DEB"}}>Próximas fechas</p>
                                        {fechas.map((fecha, index) => (
                                            <div style={{marginBottom:"25px"}}>
                                                <p className="titulo_2_nv" style={{margin:"0px", color:"#AE4DEB"}}>Fecha {index + 1}:</p>
                                                <p style={{fontWeight:"bold", margin:"0px"}}>Del {new Date(curso.fechas[index].fecha_inicio).getDate()} de {meses[new Date(curso.fechas[index].fecha_inicio).getMonth()]} al {new Date(curso.fechas[index].fecha_fin).getDate()} de {meses[new Date(curso.fechas[index].fecha_fin).getMonth()]} de  {new Date(curso.fechas[index].fecha_fin).getFullYear()}</p>
                                                <p style={{margin:"0px"}}><b>Días:</b> {fecha.dias}</p>
                                                <p style={{margin:"0px"}}><b>Horario:</b> {fecha.horario} horas</p>
                                                <p style={{margin:"0px"}}><b>Número de sesiones:</b> {fecha.sesiones}</p>
                                                <p style={{margin:"0px"}}><b>Total de horas:</b> {fecha.duracion}</p>
                                                <p style={{margin:"0px"}}><b>Docente:</b> {fecha.tutor}</p>
                                            </div>
                                        ))}
                                        <div className="inversiones">
                                            <p className="encabezadosMonserrat" style={{fontWeight:"bold", marginBottom:"15px"}}>Inversión</p>
                                            {curso.data_pago.costo_contado && (
                                                <p className="encabezadosMonserrat" style={{fontWeight:"bold"}}>${curso.data_pago.costo_contado} MXN de contado</p>
                                            )}
                                            {curso.data_pago.costo_mensual && (
                                                <p>3 mensualidades de: ${curso.data_pago.costo_mensual} MXN</p>
                                            )}
                                            {curso.gratis && (
                                                <p style={{fontWeight:"bold"}}>Si eres estudiante de nuestras licenciaturas $ 000 MXN</p>
                                            )}
                                            <p style={{fontStyle:"italic"}}>Precios sujetos a cambio sin previo aviso.</p>
                                        </div>
                                        <img src={curso.imagen_indvidual} alt={curso.nombre} style={{width:"100%", marginBottom:"35px"}} />
                                        <div className="pagar_curso">
                                            <p className="encabezadosMonserrat" style={{fontWeight:"bold", marginBottom:"15px"}}>Cómo pagar</p>
                                            <p>1. Solicita tu ficha de inscripción</p>
                                            <p>2. Haz tu pago:</p>
                                            <p style={{fontWeight:"bold"}}>En persona, en la Caja General de la Sede Gance:</p>
                                            <p style={{marginLeft:"35px"}}>• En efectivo</p>
                                            <p style={{marginLeft:"35px"}}>• Con tarjeta de débito o crédito</p>
                                            <p style={{marginLeft:"35px"}}>• Con cheque</p>
                                            <p style={{fontWeight:"bold"}}>En ventanilla de Banorte o Banamex.</p>
                                            <p style={{fontWeight:"bold"}}>O desde la app de tu banco, por transferencia bancaria.</p>
                                            <p>3. Envía tu ficha de inscripción llena y tu comprobante de pago aquí para apartar tu lugar.</p>
                                            <p>4. Recibirás un correo de bienvenida para confirmar tu lugar.</p>
                                        </div>
                                        <div className="inversiones">
                                            <p className="encabezadosMonserrat" style={{fontWeight:"bold", marginBottom:"15px"}}>Importante:</p>
                                            <p style={{fontWeight:"bold"}}>
                                                Todo curso, taller o diplomado puede suspenderse o postergarse, en caso de que 
                                                no reúna el quórum mínimo necesario y te devolveremos tu dinero o puedes usarlo 
                                                para tomarlo cuando éste se abra, o a cuenta de otro producto de nuestro catálogo.
                                                <br/><br/>
                                                Por otro lado, si decides no asistir o te das de baja, no recibirás devolución de tu pago.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col s12 m12 l4 xl4">
                                        <div id="curso_fixme" className="curso_fijo">
                                            <div className="seccion_curso_fixme">
                                                <p className="encabezadosMonserrat" style={{fontWeight:"bold", color:"#AE4DEB", marginBottom:"1px"}}>${curso.data_pago.costo_total} MXN</p>
                                                {curso.data_pago.costo_mensual && (
                                                    <p style={{margin:"0px", color:"#464646"}}>3 mensualidades de: ${curso.data_pago.costo_mensual} MXN</p>
                                                )}
                                                {curso.gratis && (
                                                    <p style={{fontWeight:"bold", color:"#8A6AAC", marginTop:"1px"}}>Si eres estudiante de nuestras licenciaturas $ 000 MXN</p>
                                                )}
                                            </div>
                                            <div className="divider" />
                                            <div className="seccion_curso_fixme">
                                                <div style={{margin:"0 0 15px 35px"}}>
                                                    <p style={{margin:"0px", fontWeight:"bold", color:"#464646"}}>Nivel</p>
                                                    <p style={{margin:"0px", color:"#5ABF3F"}}>{nivel[curso.nivel]}</p>
                                                </div>
                                                <div style={{margin:"0 0 15px 35px"}}>
                                                    <p style={{margin:"0px", fontWeight:"bold", color:"#464646"}}>Formato</p>
                                                    <div style={{display:"flex", flexWrap:"wrap"}}>
                                                        {curso.formato.map((formato_numero, index) => (
                                                            <p style={{margin:"0 5px 0 0", color:"#F49A3F"}}>
                                                                {formato[formato_numero]} {index < curso.formato.length - 1 && (",")}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div style={{margin:"0 0 15px 35px"}}>
                                                    <p style={{margin:"0px", fontWeight:"bold", color:"#464646"}}>Modalidad</p>
                                                    <div style={{display:"flex", flexWrap:"wrap"}}>
                                                        {curso.modalidad.map((modaidad_numero, index) => (
                                                            <p style={{margin:"0 5px 0 0", color:"#64C5DD"}}>
                                                                {modailida[modaidad_numero]} {index < curso.modalidad.length - 1 && (",")}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div style={{margin:"0 0 15px 35px"}}>
                                                    <p style={{margin:"0px", fontWeight:"bold", color:"#F9007A"}}>Requieres</p>
                                                    <p style={{margin:"0px", color:"#464646"}}>{curso.requisitos}</p>
                                                </div>
                                                <div>
                                                    <p style={{margin:"0px", fontWeight:"bold", color:"#464646"}}>Relacionados con tu búsqueda:</p>
                                                    <div style={{display:"flex", flexWrap:"wrap"}}>
                                                        {etiquetas.map(etiqueta => (
                                                            <div style={{display:"flex"}}>
                                                                <p className="etiqueta">{etiqueta.nombre}</p><p className="etiqueta_fin">.</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="seccion_curso_fixme">
                                                <p className="boton_curso">¡Quiero inscribirme!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                    </div>
                    <div onClick={() => {actualizarCurso()}} className='container efecto_blur'></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Curso;