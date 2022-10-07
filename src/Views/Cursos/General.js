import React, { Fragment, useEffect, useState }  from 'react';
import Swal from 'sweetalert2';
import M from 'materialize-css';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import Loader from '../../Components/Loader';
import View from './View';

import { useAuth } from '../../Context/Context';

import icon1 from "../../Images/administrador/iconos/1.png";
import icon63 from "../../Images/Icon/63.png";


const General = () => {
    const { editar, setEditar, index, data, setData, tipo } = useAuth();

    const [flag, setFlag] = useState(false);
    const [flagFechas, setFlagFechas] = useState(true);
    const [curso, setCurso] = useState({
        gratis: false
    });
    const [instance, setInstance] = useState({});
    const [fechas, setFechas] = useState([]);
    const [dataPago, setDataPago] = useState({});

    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instance = M.FormSelect.init(elems);
        setInstance(instance);
    }, []);


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
        } else {
            value = instance[1].getSelectedValues();
        }
        setCurso({
            ...curso,
            [e.target.name]: value
        })
        console.log({value});
    }

    const leerFecha = (e, index) => {
        e.preventDefault();
        let copiaFechas = [...fechas];

        copiaFechas[index][e.target.name] = e.target.value;

        setFechas(copiaFechas);
    }

    const agregarFecha = e => {
        e.preventDefault();
        setFechas([
            ...fechas,
            {
                dias:"",
                horario:"",
                fecha:"",
                sesiones:"",
                duracion:"",
                tutor:""
            }
        ])
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
        
                console.log({copiaFechas});
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

    const agregarFoto = e => {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', (evt) => {
            setCurso({
                ...curso,
                archivo: fileReader.result
            });
        });
        fileReader.readAsDataURL(e.target.files[0]);
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

    const agregar = e => {
        e.preventDefault();
        let body = {
            ...curso,
            ...editar,
            fechas,
            data_pago: dataPago
        }

        console.log(body);
    }

    const actualizarCurso = () => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Profesores</p>
                    
                    <form onSubmit={agregar}>
                        <p>Ficha exterior</p>
                        <img alt="imagagen subida" width="100%" src={curso.imagen_externa}></img>
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
                            <select name='area' onChange={leerOpciones} multiple>
                                <option value="1">Artes visuales</option>
                                <option value="2">Fotografía e imagen</option>
                                <option value="3">Multimedia e internet</option>
                                <option value="4">Video y cine</option>
                                <option value="5">Diseño y publicidad</option>
                                <option value="6">Animación y cómic</option>
                                <option value="7">Escritura y guión</option>
                                <option value="8">Audio y radio</option>
                            </select>
                            <label>Area</label>
                        </div>
                        <div class="input-field">
                            <select placeholder='Modalidad' name='modalidad' onChange={leerOpciones} multiple>
                                <option value="1">Presencial</option>
                                <option value="2">Híbrido</option>
                                <option value="3">Videorreunión</option>
                                <option value="4">Google Classroom</option>
                            </select>
                            <label>Modalidad</label>
                        </div>
                        <div class="input-field">
                            <select placeholder='formato' name='formato' onChange={leerOpciones} multiple>
                                <option value="1">Taller</option>
                                <option value="2">Cursos</option>
                                <option value="3">Diplomados</option>
                            </select>
                            <label>Formato</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="nombre" name='nombre' type="text" className="validate" />
                            <label for="nombre">Nombre del curso</label>
                        </div>

                        <p>Descripcion Externa</p>
                        <div id='descripcion_externa_nuevo'>
                            
                        </div>

                        <p>Ficha interna</p>
                        <img alt="imagagen subida" width="100%" src={curso.imagen_interna}></img>
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
                                            <input defaultValue={fechas[index].dias} onChange={e => {leerFecha(e, index)}} id={"dias_" + index} name='dias' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"dias_" + index}>Días</label>
                                        </div>
                                        <div className="input-field">
                                            <input defaultValue={fechas[index].horario} onChange={e => {leerFecha(e, index)}} id={"horario_" + index} name='horario' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"horario_" + index}>Horario</label>
                                        </div>
                                        <div className="input-field">
                                            <input defaultValue={fechas[index].fecha} onChange={e => {leerFecha(e, index)}} id={"fecha_" + index} name='fecha' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"fecha_" + index}>Fecha</label>
                                        </div>
                                        <div className="input-field">
                                            <input defaultValue={fechas[index].sesiones} onChange={e => {leerFecha(e, index)}} id={"sesiones_" + index} name='sesiones' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"sesiones_" + index}>Sesiones</label>
                                        </div>
                                        <div className="input-field">
                                            <input defaultValue={fechas[index].duracion} onChange={e => {leerFecha(e, index)}} id={"duracion_" + index} name='duracion' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"duracion_" + index}>Duración</label>
                                        </div>
                                        <div className="input-field">
                                            <input defaultValue={fechas[index].tutor} onChange={e => {leerFecha(e, index)}} id={"tutor_" + index} name='tutor' type="text" className="validate" />
                                            <label className={fechas[index].dias != "" && "active"} for={"tutor_" + index}>Tutor</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div class="input-field">
                            <select name='forma_pago' onChange={leerDato}>
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
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_mensual" name='costo_mensual' type="text" className="validate" />
                                        <label for="costo_mensual">Mensualidades</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_contado" name='costo_contado' type="text" className="validate" />
                                        <label for="costo_contado">Pago de contado</label>
                                    </div>
                                </div>
                            )}
                            {curso.forma_pago === "2" && (
                                <div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                </div>
                            )}
                            {curso.forma_pago === "3" && (
                                <div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_total" name='costo_total' type="text" className="validate" />
                                        <label for="costo_total">Costo Total</label>
                                    </div>
                                    <div className="input-field">
                                        <input onChange={leerPago} id="costo_sabatino" name='costo_sabatino' type="text" className="validate" />
                                        <label for="costo_sabatino">Costo Sabatino</label>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p>Gratis para alumnos activos</p>
                        <div class="switch">
                            <label>
                                No
                                <input onChange={() => {
                                    setCurso({...curso, gratis:!curso.gratis})
                                }} type="checkbox" />
                                <span class="lever"></span>
                                Si
                            </label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar curso
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar profesor</p>
                    {!flag ? (
                        <Loader />
                    ) : (
                        <form onSubmit={actualizarCurso}>
                            <img alt="imagagen subida" width="100%" src={curso.archivo}></img>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input onChange={agregarFoto} type="file" />
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>
                            </div>
                            <div className="input-field">
                                <input onChange={leerDato} defaultValue={curso.categoria} id="categoria" name='categoria' type="text" className="validate" />
                                <label className='active' for="categoria">Puesto</label>
                            </div>
                            <div className="input-field">
                                <input onChange={leerDato} defaultValue={curso.nombre} id="nombre" name='nombre' type="text" className="validate" />
                                <label className='active' for="nombre">Nombre</label>
                            </div>

                            <div id='ckedittor_contenedor_editar'>
                                <p>Materias</p>
                                
                            </div>

                            {/* <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                                <button type='submit'>
                                    Actualizar profesor
                                </button>
                            </div> */}
                        </form>
                    )}
                    {/* <div className='botonn_2_admin' style={{marginTop:"10px"}}>
                        <button onClick={eliminar}>
                            Eliminar profesor
                        </button>
                    </div> */}
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default General;