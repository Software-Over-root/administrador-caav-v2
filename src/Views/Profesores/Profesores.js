import React, { Fragment, useEffect, useState }  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import profesoresHelper from '../../Helpers/Profesores';

const Profesores = props => {
    const { editar, setEditar } = useAuth();

    const [profesores, setProfesores] = useState({
        tipo: 0,
        archivo:"",
        ...editar
    });

    useEffect(() => {
        setProfesores({
            ...profesores,
            ...editar
        });
    },[editar]);


    const leerDato = e => {
        setProfesores({
            ...profesores,
            [e.target.name]: e.target.value
        });
    }

    const agregarFoto = e => {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function(evt){
            setProfesores({
                ...profesores,
                archivo: fileReader.result
            });
        });
        fileReader.readAsDataURL(e.target.files[0]);
    }

    const actualizarFoto = e => {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function(evt){
            setEditar({
                ...editar,
                archivo: fileReader.result
            });
        });
        fileReader.readAsDataURL(e.target.files[0]);
    }

    const agregar = e => {
        e.preventDefault();
        let body = {
            ...editar,
            ...profesores
        }
        profesoresHelper.agregarProfesor(body);
    }

    const actualizar = e => {
        e.preventDefault();
        profesoresHelper.editarProfesor(profesores, profesores._id);
    }

    const eliminar = () => {
        profesoresHelper.eliminarProfesor(profesores._id);
    }


    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Profesores</p>
                    <form onSubmit={agregar}>
                        <img alt="imagagen subida" width="100%" src={profesores.archivo}></img>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input onChange={actualizarFoto} type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="categoria" name='categoria' type="text" className="validate" />
                            <label for="categoria">Puesto</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="nombre" name='nombre' type="text" className="validate" />
                            <label for="nombre">Nombre</label>
                        </div>

                        <div id='ckedittor_contenedor'>
                            <p>Materias</p>
                            
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar profesor
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar profesor</p>
                    <form onSubmit={actualizar}>
                        <img alt="imagagen subida" width="100%" src={profesores.archivo}></img>
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
                            <input onChange={leerDato} defaultValue={profesores.categoria} id="categoria" name='categoria' type="text" className="validate" />
                            <label className='active' for="categoria">Puesto</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={profesores.nombre} id="nombre" name='nombre' type="text" className="validate" />
                            <label className='active' for="nombre">Nombre</label>
                        </div>

                        <div id='ckedittor_contenedor_editar'>
                            <p>Materias</p>
                            
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar profesor
                            </button>
                        </div>
                    </form>
                    <div className='botonn_2_admin' style={{marginTop:"10px"}}>
                        <button onClick={eliminar}>
                            Eliminar profesor
                        </button>
                    </div>
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default Profesores;