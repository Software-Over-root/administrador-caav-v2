import React, {Fragment, useEffect, useState}  from 'react';
import ReactDOM from 'react-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import M from "materialize-css";
import Swal from 'sweetalert2';

import Loader from '../../Components/Loader';

import "./Profesores.css";
import profesoresHelper from "../../Helpers/Profesores";

import img1 from '../../Images/escritorio/Profesores/1.png';

import { useAuth } from '../../Context/Context';

// 0 => normal
// 1 => coordinador
// 2 => directivo

const Profesores = props => {
    const { setEditar, editar, data, setData, setIndex, setTipo } = useAuth();

    const [bandera, setBandera] = useState(false);


    useEffect(() => {
        obtenerProfesores();
    }, []);

    function createMarkup(materias) {
        return {__html: materias};
    }

    const funcionBloqueda = () => {
        Swal.fire(
            'Funcion bloqueada!',
            'No se puede usar esta funcion' ,
            'error'
        )
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
            setTimeout(() => {
                setData({profesor, coordinador, directivo});
                setBandera(true);

                setTimeout(() => {
                    var elems = document.querySelectorAll('.collapsible');
                    M.Collapsible.init(elems);
                }, 500);
            }, 1000);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const agregarProfesor = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_activado";

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

    const actualizarProfesor = (profesor, index, tipo) => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";

        setEditar(profesor);
        setIndex(index);
        setTipo(tipo);
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
            <img src={img1} style={{width:"100%"}}/>

            <div className='container'>
                <p className='titulo_1_nv center' style={{marginTop:"15px", color:"#00496c"}}>
                    Profesores
                </p> 
            </div>             
        
            <div className='container center' style={{marginTop:"25px"}}>
                {!bandera ? (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60vh"}}>
                        <Loader />
                    </div>
                ) : (
                    <Fragment>
                        <p className='titulo_1_nv' style={{color:"#00496c", marginBottom:"0px"}}>Principales</p>
                        <div id='profesores' className='container componente_editable_padre' style={{display:"flex", justifyContent:"center", flexWrap:"wrap", paddingBottom:"30px"}}>
                            {data.directivo.map((director, index) => (
                                <div onClick={() => {actualizarProfesor(director, index, 0)}} className='hijo_1 componente_editable_2'>
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
                            {data.coordinador.map((coordinador, index) => (
                                <div onClick={() => {actualizarProfesor(coordinador, index, 1)}} className='hijo_1 componente_editable_2'>
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
                            <button onClick={funcionBloqueda}> <p translate='no'>A</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>B</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>C</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>D</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>E</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>F</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>G</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>H</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>I</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>J</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>K</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>L</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>M</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>N</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>O</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>P</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>Q</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>R</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>S</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>T</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>U</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>V</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>W</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>X</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>Y</p> </button>
                            <button onClick={funcionBloqueda}> <p translate='no'>Z</p> </button>  
                        </div>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <div className='busqueda_cursos'>
                                <input onClick={funcionBloqueda} placeholder="Introduce nombre o materia" id="nombre_materia" name='nombre_materia' type="text" className="validate formulario" style={{textAlign: 'center'}}/>
                                <label for="nombre_materia"></label>
                            </div>
                        </div> 
                        <p className='titulo_1_nv center' style={{marginBottom:"0px", color:"#00496c"}}>
                            Profesores
                        </p> 
                        {data.length === 0 ? (
                            <p className='titulo_1_nv' style={{textAlign:"center"}}>No se encontraron coincidencias</p>
                        ) : (
                            <Fragment>
                                <div className='componente_editable_padre' style={{display:"flex", justifyContent:"center", alignItems:"stretch", flexWrap:"wrap", paddingBottom:"30px"}}>
                                    {data.profesor.map((profesor, index) => (
                                        <div onClick={() => {actualizarProfesor(profesor, index, 2)}} className='hijo_2 componente_editable_2'>
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
                        )}
                    </Fragment>
                )}

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