import React, {Fragment, useEffect, useState}  from 'react';
import ReactDOM from 'react-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import ReactHtmlParser from 'react-html-parser';
import M from "materialize-css";
import Swal from 'sweetalert2';

import "./Profesores.css";
import profesoresHelper from "../../Helpers/Profesores";

import img1 from '../../Images/escritorio/Profesores/1.png';

import { useAuth } from '../../Context/Context';

// 0 => normal
// 1 => coordinador
// 2 => directivo

const Profesores = props => {
    const { setEditar, editar } = useAuth();

    const [porfesores, setProfesores] = useState([]);
    const [todosPorfesores, setTodosPorfesores] = useState([]);
    const [coordinadores, setCoordinadores] = useState([]);
    const [directivos, setDirectivos] = useState([]);
    const [bandera, setBandera] = useState(false);
    const [banderaProfesores, setBanderaProfesores] = useState(true);
    const [profesoresSeleccionados, setProfesorSeleccion] = useState([]);
    const [indexProfesores, setIndexProfesores] = useState(0);


    useEffect(() => {
        obtenerProfesores();
    }, []);

    function createMarkup(materias) {
        return {__html: materias};
    }

    const obtenerProfesores = async () => {
        let res = await profesoresHelper.obtenerProfesores();
        if (res.success) {
            let profesor = [];
            let coordinador = [];
            let directivo = [];
            res.data.map(profesorData => {
                if (profesorData.tipo === 0) {
                    profesor.push(profesorData);
                } else if (profesorData.tipo === 1) {
                    coordinador.push(profesorData);
                } else if (profesorData.tipo === 2) {
                    directivo.push(profesorData);
                }
            });
            setTodosPorfesores({profesor, coordinador, directivo});
            setTimeout(() => {
                ordenarTodosProfesores({profesor, coordinador, directivo});
            }, 1000);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const ordenarTodosProfesores = (profesores_params) => {
        if (profesores_params.profesor.length > 0) {
            let arrayTemporal = [];
            let arrayProfesores = [];
            let indexProfesor = 0;
            profesores_params.profesor.map((profesor, index, array) => {
                arrayTemporal.push(profesor);
                indexProfesor = indexProfesor + 1;
                if (indexProfesor % 8 === 0 && indexProfesor !== 0) {
                    arrayProfesores.push(arrayTemporal);
                    arrayTemporal = [];
                    indexProfesor = 0;
                } else if (index + 1 === array.length) {
                    arrayProfesores.push(arrayTemporal);
                    arrayTemporal = [];
                }
            });
            setProfesores(arrayProfesores);
            setProfesorSeleccion(arrayProfesores[0]);
        }
        if (profesores_params.coordinador.length > 0) {
            setCoordinadores(profesores_params.coordinador);
        }
        if (profesores_params.directivo.length > 0) {
            setDirectivos(profesores_params.directivo)
            setBandera(true);

            setTimeout(() => {
                var elems = document.querySelectorAll('.collapsible');
                M.Collapsible.init(elems);
            }, 500);
        }
    }

    const ordenarNombre = letra => {
        setBandera(false);
        let profesoresOrdenados = [];
        todosPorfesores.map(profesor => {
            if (letra === profesor.nombre.split("")[0]) {
                profesoresOrdenados.push(profesor);
            }
        })
        setProfesorSeleccion(profesoresOrdenados);
        setTimeout(() => {
            setBandera(true);
            window.location.replace("#profesores");
            setTimeout(() => {
                var elems = document.querySelectorAll('.collapsible');
                M.Collapsible.init(elems);
            }, 500);
        }, 1000)
    }

    const mostrarMas = clic => {
        if (porfesores.length === indexProfesores + 1) {
            Swal.fire(
                'Se acabaron',
                'Son todos los profesores del CAAV',
                'success'
            )
        } else {
            let profesoresSeleccionadosNuevos = profesoresSeleccionados;
            let index = indexProfesores + 1;
            porfesores[index].map(profesor => {
                profesoresSeleccionadosNuevos.push(profesor);
            });
            setProfesorSeleccion(profesoresSeleccionadosNuevos);
            setIndexProfesores(index);
            setTimeout(() => {
                var elems = document.querySelectorAll('.collapsible');
                M.Collapsible.init(elems);
            }, 500);
        }
    }

    const enter = e => {
        let tecla = (document.all) ? e.keyCode : e.which;
        if (tecla==13) {
            window.location.replace("#profesores");
        }
    }

    const busqueda = e => {
        setBanderaProfesores(false);
        let letras = e.target.value;
        let profesoresFiltro = todosPorfesores
        let filtro;
        setTimeout(() => {
            if (letras === "") {
                let arrayTemporal = [];
                let arrayProfesores = [];
                let indexProfesor = 0;
                todosPorfesores.map((profesor, index, array) => {
                    arrayTemporal.push(profesor);
                    indexProfesor = indexProfesor + 1;
                    if (indexProfesor % 8 === 0 && indexProfesor !== 0) {
                        arrayProfesores.push(arrayTemporal);
                        arrayTemporal = [];
                        indexProfesor = 0;
                    } else if (index + 1 === array.length) {
                        arrayProfesores.push(arrayTemporal);
                        arrayTemporal = [];
                    }
                });
                setProfesores(arrayProfesores);
                filtro = arrayProfesores[0];
            } else {
                filtro = profesoresFiltro.filter(profesor => {
                    let busqueda = profesor.nombre.toUpperCase().indexOf(letras.toUpperCase())
                    if (busqueda >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
                console.log(filtro);
                profesoresFiltro = filtro;
            }
            setProfesorSeleccion(filtro);
            setBanderaProfesores(true);
            setTimeout(() => {
                var elems = document.querySelectorAll('.collapsible');
                M.Collapsible.init(elems);
            }, 500);
        }, 1000);
    }

    const agregarProfesor = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_profesores");
        vista.className = "col s9";

        let ckedittor_contenedor = document.getElementById("ckedittor_contenedor");
        ReactDOM.render(
            <CKEditor
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditar({
                        ...editar,
                        materias: data
                    })
                } }
            />,
            ckedittor_contenedor
        );
    }

    const actualizarProfesor = profesor => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_profesores");
        vista.className = "col s9";
        setEditar(profesor);

        let ckedittor_contenedor = document.getElementById("ckedittor_contenedor_editar");
        ReactDOM.render(
            <CKEditor
                data={profesor.materias}
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditar({
                        ...editar,
                        materias: data
                    })
                } }
            />,
            ckedittor_contenedor
        );
    }

    return (
        <div id='vista_profesores' className='col s12' style={{padding:"0"}}>
            <img src={img1} style={{width:"100%"}}/>

            <div className='container'>
                <p className='titulo_1_nv center' style={{marginTop:"15px", color:"#00496c"}}>
                    Profesores
                </p> 
            </div>             
        
            <div className='container center' style={{marginTop:"25px"}}>
                {!bandera ? (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60vh"}}>
                        <h1>cargando ...</h1>
                    </div>
                ) : (
                    <Fragment>
                        <p className='titulo_1_nv' style={{color:"#00496c", marginBottom:"0px"}}>Principales</p>
                        <div id='profesores' className='container componente_editable_padre' style={{display:"flex", justifyContent:"center", flexWrap:"wrap", paddingBottom:"30px"}}>
                            {directivos.map(director => (
                                <div onClick={() => {actualizarProfesor(director)}} className='hijo_1 componente_editable_2'>
                                    <div>
                                        <div className='imagen_profesores'>
                                            <div className='imagen-hover-1' style={{color:"black"}}>
                                                <div className='contenedor-hover-1'>
                                                    <img src={director.archivo} alt={director.nombre} style={{width:"100%"}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='imagen_profesores'>
                                            <ul class="collapsible_propio collapsible" style={{margin:"0px"}}>
                                                <li style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                                                    <div class="collapsible-header collapsible-header_propio-profesor">
                                                        <div>
                                                            <p className='texto_nombre_prof_2' style={{margin:"0px"}}>
                                                                {director.nombre} 
                                                            </p>
                                                            <p style={{margin:"0px", fontSize:"13px", fontStyle:"italic"}}>
                                                                {director.categoria} 
                                                            </p>
                                                        </div>
                                                        {director.materias && (
                                                            <Fragment>
                                                                <i class="material-icons iconDown" style={{margin:'0px', marginTop:"19px"}}>
                                                                    arrow_drop_down
                                                                </i>
                                                                <i class="material-icons iconUp" style={{margin:'0px', marginTop:"19px"}}>
                                                                    arrow_drop_up
                                                                </i>
                                                            </Fragment>
                                                        )}
                                                    </div>
    
                                                    {director.materias && (
                                                        <div class="collapsible-body collapsible-body_profesores" style={{width:"100%"}}>
                                                            <span>
                                                                <div dangerouslySetInnerHTML={createMarkup(director.materias)} className='texto_materias'>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className='titulo_1_nv' style={{color:"#00496c", marginBottom:"0px"}}>Coordinadores de Licenciatura</p>
                        <div className='container componente_editable_padre' style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", paddingBottom:"30px"}}>
                            {coordinadores.map(coordinador => (
                                <div onClick={() => {actualizarProfesor(coordinador)}} className='hijo_1 componente_editable_2'>
                                    <div>
                                        <div className='imagen_profesores'>
                                            <div className='imagen-hover-1' style={{color:"black"}}>
                                                <div className='contenedor-hover-1'>
                                                    <img src={coordinador.archivo} alt={coordinador.nombre} style={{width:"100%"}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='imagen_profesores'>
                                            <ul class="collapsible_propio collapsible" style={{margin:"0px"}}>
                                                <li style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                                                    <div class="collapsible-header collapsible-header_propio-profesor">
                                                        <p className='texto_nombre_prof_2'>
                                                            {coordinador.nombre} 
                                                        </p>
                                                        <i class="material-icons iconDown" style={{margin: '0px'}}>
                                                            arrow_drop_down
                                                        </i>
                                                        <i class="material-icons iconUp" style={{margin: '0px'}}>
                                                            arrow_drop_up
                                                        </i>
                                                    </div>
    
                                                    <div class="collapsible-body collapsible-body_profesores" style={{width:"100%"}}>
                                                        <span>
                                                            <div dangerouslySetInnerHTML={createMarkup(coordinador.materias)} className='texto_materias'>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='buscador_profesores' style={{marginTop:"20px"}}>
                            <button onClick={() => {ordenarNombre("A")}}> <p translate='no'>A</p> </button>
                            <button onClick={() => {ordenarNombre("B")}}> <p translate='no'>B</p> </button>
                            <button onClick={() => {ordenarNombre("C")}}> <p translate='no'>C</p> </button>
                            <button onClick={() => {ordenarNombre("D")}}> <p translate='no'>D</p> </button>
                            <button onClick={() => {ordenarNombre("E")}}> <p translate='no'>E</p> </button>
                            <button onClick={() => {ordenarNombre("F")}}> <p translate='no'>F</p> </button>
                            <button onClick={() => {ordenarNombre("G")}}> <p translate='no'>G</p> </button>
                            <button onClick={() => {ordenarNombre("H")}}> <p translate='no'>H</p> </button>
                            <button onClick={() => {ordenarNombre("I")}}> <p translate='no'>I</p> </button>
                            <button onClick={() => {ordenarNombre("J")}}> <p translate='no'>J</p> </button>
                            <button onClick={() => {ordenarNombre("K")}}> <p translate='no'>K</p> </button>
                            <button onClick={() => {ordenarNombre("L")}}> <p translate='no'>L</p> </button>
                            <button onClick={() => {ordenarNombre("M")}}> <p translate='no'>M</p> </button>
                            <button onClick={() => {ordenarNombre("N")}}> <p translate='no'>N</p> </button>
                            <button onClick={() => {ordenarNombre("O")}}> <p translate='no'>O</p> </button>
                            <button onClick={() => {ordenarNombre("P")}}> <p translate='no'>P</p> </button>
                            <button onClick={() => {ordenarNombre("Q")}}> <p translate='no'>Q</p> </button>
                            <button onClick={() => {ordenarNombre("R")}}> <p translate='no'>R</p> </button>
                            <button onClick={() => {ordenarNombre("S")}}> <p translate='no'>S</p> </button>
                            <button onClick={() => {ordenarNombre("T")}}> <p translate='no'>T</p> </button>
                            <button onClick={() => {ordenarNombre("U")}}> <p translate='no'>U</p> </button>
                            <button onClick={() => {ordenarNombre("V")}}> <p translate='no'>V</p> </button>
                            <button onClick={() => {ordenarNombre("W")}}> <p translate='no'>W</p> </button>
                            <button onClick={() => {ordenarNombre("X")}}> <p translate='no'>X</p> </button>
                            <button onClick={() => {ordenarNombre("Y")}}> <p translate='no'>Y</p> </button>
                            <button onClick={() => {ordenarNombre("Z")}}> <p translate='no'>Z</p> </button>  
                        </div>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <div className='busqueda_cursos'>
                                <input onChange={busqueda} onKeyPress={e => {enter(e)}} placeholder="Introduce nombre o materia" id="nombre_materia" name='nombre_materia' type="text" className="validate formulario" style={{textAlign: 'center'}}/>
                                <label for="nombre_materia"></label>
                            </div>
                        </div> 
                        <p className='titulo_1_nv center' style={{marginBottom:"0px", color:"#00496c"}}>
                            Profesores
                        </p> 
                        {!banderaProfesores ? (
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"40vh"}}>
                                <h1>cargando ...</h1>
                            </div>
                        ) : (
                            profesoresSeleccionados.length === 0 ? (
                                <p className='titulo_1_nv' style={{textAlign:"center"}}>No se encontraron coincidencias</p>
                            ) : (
                                <Fragment>
                                    <div className='componente_editable_padre' style={{display:"flex", justifyContent:"center", alignItems:"stretch", flexWrap:"wrap", paddingBottom:"30px"}}>
                                        {profesoresSeleccionados.map((profesor) => (
                                            <div onClick={() => {actualizarProfesor(profesor)}} className='hijo_2 componente_editable_2'>
                                                <div>
                                                    <div className='imagen_profesores'>
                                                        <div className='imagen-hover-1' style={{color:"black"}}>
                                                            <div className='contenedor-hover-1'>
                                                                <img src={profesor.archivo} alt={profesor.nombre} style={{width:"100%"}} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='imagen_profesores'>
                                                        <ul class="collapsible_propio collapsible">
                                                            <li style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                                                                <div class="collapsible-header collapsible-header_propio-profesor">
                                                                    <p className='texto_nombre_prof_2'>
                                                                        {profesor.nombre} 
                                                                    </p>
                                                                    <i class="material-icons iconDown" style={{margin: '0px'}}>
                                                                        arrow_drop_down
                                                                    </i>
                                                                    <i class="material-icons iconUp" style={{margin: '0px'}}>
                                                                        arrow_drop_up
                                                                    </i>
                                                                </div>
        
                                                                <div class="collapsible-body collapsible-body_profesores" style={{width:"100%"}}>
                                                                    <span>
                                                                        <div dangerouslySetInnerHTML={createMarkup(profesor.materias)} className='texto_materias'>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Fragment>
                            )
                        )}
                    </Fragment>
                )}

                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='boton_2_nv'>
                        <button onClick={() => {mostrarMas()}} >
                            <p>Ver más...</p>
                        </button>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='boton_2_nv'>
                        <button onClick={agregarProfesor} >
                            <p>Agregar profesor</p>
                        </button>
                    </div>
                </div>
            </div>          
        </div>
    );
}

export default Profesores;