import React, {Fragment, useEffect, useState}  from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import ReactHtmlParser from 'react-html-parser';
import M from "materialize-css";
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader';

import "./Profesores.css";

import img1 from '../../Images/escritorio/Profesores/1.png';

const Profesores = props => {
    const [porfesores, setProfesores] = useState([]);
    const [coordinadores, setCoordinadores] = useState([]);
    const [directivos, setDirectivos] = useState([]);
    const [bandera, setBandera] = useState(false);
    const [banderaProfesores, setBanderaProfesores] = useState(true);
    const [profesoresSeleccionados, setProfesorSeleccion] = useState([]);
    const [indexProfesores, setIndexProfesores] = useState(0);


    useEffect(() => {
        if (props.profesor) {
            let arrayTemporal = [];
            let arrayProfesores = [];
            let indexProfesor = 0;
            props.profesor.map((profesor, index, array) => {
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
        if (props.coordinador) {
            setCoordinadores(props.coordinador);
        }
        if (props.directivo) {
            setDirectivos(props.directivo)
            setBandera(true);

            setTimeout(() => {
                var elems = document.querySelectorAll('.collapsible');
                M.Collapsible.init(elems);
            }, 500);
        }
    }, [props.profesor, props.coordinador, props.directivo]);

    const ordenarNombre = letra => {
        setBandera(false);
        let profesoresOrdenados = [];
        props.profesor.map(profesor => {
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
        let profesoresFiltro = props.profesor
        let filtro;
        setTimeout(() => {
            if (letras === "") {
                let arrayTemporal = [];
                let arrayProfesores = [];
                let indexProfesor = 0;
                props.profesor.map((profesor, index, array) => {
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

    return (
        <div>
            <img src={img1} style={{width:"100%"}}/>

            <div className='container'>
                <p className='titulo_1_nv center' style={{marginTop:"15px", color:"#00496c"}}>
                    Profesores
                </p> 
            </div>             
        
            <div className='container center' style={{marginTop:"25px"}}>
                {!bandera ? (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60vh"}}>
                        <Loader/>
                    </div>
                ) : (
                    <Fragment>
                        <p className='titulo_1_nv' style={{color:"#00496c", marginBottom:"0px"}}>Principales</p>
                        <div id='profesores' className='container' style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                            {directivos.map(director => (
                                <div className='hijo_1'>
                                    <div>
                                        <div className='imagen_profesores'>
                                            <div className='imagen-hover-1' style={{color:"black"}}>
                                                <div className='contenedor-hover-1'>
                                                    <img src={director.ruta} alt={director.nombre} style={{width:"100%"}} />
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
                                                                {director.puesto} 
                                                            </p>
                                                        </div>
                                                        {director.materias1 && (
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
    
                                                    {director.materias1 && (
                                                        <div class="collapsible-body collapsible-body_profesores">
                                                            <span>
                                                                <div className='texto_materias'>
                                                                    {ReactHtmlParser(director.materias1)}
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
                        <div className='container' style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                            {coordinadores.map(coordinador => (
                                <div className='hijo_1'>
                                    <div>
                                        <div className='imagen_profesores'>
                                            <div className='imagen-hover-1' style={{color:"black"}}>
                                                <div className='contenedor-hover-1'>
                                                    <img src={coordinador.ruta} alt={coordinador.nombre} style={{width:"100%"}} />
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
    
                                                    <div class="collapsible-body collapsible-body_profesores">
                                                        <span>
                                                            <div className='texto_materias'>
                                                                {ReactHtmlParser(coordinador.materias1)}
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
                                <Loader/>
                            </div>
                        ) : (
                            profesoresSeleccionados.length === 0 ? (
                                <p className='titulo_1_nv' style={{textAlign:"center"}}>No se encontraron coincidencias</p>
                            ) : (
                                <Fragment>
                                    <div style={{display:"flex", justifyContent:"center", alignItems:"stretch", flexWrap:"wrap"}}>
                                        {profesoresSeleccionados.map((profesor) => (
                                            <div className='hijo_2'>
                                                <div>
                                                    <div className='imagen_profesores'>
                                                        <div className='imagen-hover-1' style={{color:"black"}}>
                                                            <div className='contenedor-hover-1'>
                                                                <img src={profesor.ruta} alt={profesor.nombre} style={{width:"100%"}} />
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
        
                                                                <div class="collapsible-body collapsible-body_profesores">
                                                                    <span>
                                                                        <div className='texto_materias'>
                                                                            {ReactHtmlParser(profesor.materias1)}
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
            </div>          
        </div>
    );
}

export default compose(
    firestoreConnect(props => [
        { 
            collection: 'profesor',
            where: [
                ['normal', '==', true]
            ]
        },
        { 
            collection: 'profesor',
            where: [
                ['coordinador', '==', true]
            ],
            storeAs:"coordinador"
        },
        { 
            collection: 'profesor',
            where: [
                ['directivo', '==', true]
            ],
            storeAs:"directivo"
        }
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        profesor: (ordered.profesor),
        coordinador: (ordered.coordinador),
        directivo: (ordered.directivo)
    }))
)(Profesores);