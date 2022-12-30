import React, { Fragment, useEffect, useState }  from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactDOM from 'react-dom';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import Loader from '../../Components/Loader';
import View from './View';

import profesoresHelper from '../../Helpers/Profesores';


const Profesores = props => {
    const { editar, setEditar, index, data, setData, tipo } = useAuth();

    const [flag, setFlag] = useState(false);
    const [profesores, setProfesores] = useState({
        tipo: 0,
        archivo:"",
        ...editar
    });
    const [materias, setMaterias] = useState("");

    useEffect(() => {
        setFlag(false);

        setProfesores({
            ...profesores,
            ...editar
        });
        
        setTimeout(() => {
            setFlag(true);
        }, 100);

        setTimeout(() => {
            let ckedittor_contenedor = document.getElementById("ckedittor_contenedor_editar");
            ReactDOM.render(
                <CKEditor
                    data={editar.materias}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        let copiaData = {...data};

                        const dataEditor = editor.getData();
                        setMaterias(dataEditor);

                        if (tipo === 0) {
                            // directivo
                            copiaData.directivo[index]["materias"] = dataEditor
                            setData(copiaData);
                        } else if (tipo === 1) {
                            // coordinador
                            copiaData.coordinador[index]["materias"] = dataEditor
                            setData(copiaData);
                        } else {
                            // profesor
                            copiaData.profesor[index]["materias"] = dataEditor
                            setData(copiaData);
                        }
                    } }
                />,
                ckedittor_contenedor
            );
        }, 200);
    },[editar]);


    const leerDato = e => {
        let copiaData = {...data};

        setProfesores({
            ...profesores,
            [e.target.name]: e.target.value
        });

        if (tipo === 0) {
            // directivo
            copiaData.directivo[index][e.target.name] = e.target.value
            setData(copiaData);
        } else if (tipo === 1) {
            // coordinador
            copiaData.coordinador[index][e.target.name] = e.target.value
            setData(copiaData);
        } else {
            // profesor
            copiaData.profesor[index][e.target.name] = e.target.value
            setData(copiaData);
        }
    }

    const agregarFoto = e => {
        let copiaData = {...data};
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function(evt){
            setProfesores({
                ...profesores,
                archivo: fileReader.result
            });

            if (tipo === 0) {
                // directivo
                copiaData.directivo[index]["archivo"] = fileReader.result
                setData(copiaData);
            } else if (tipo === 1) {
                // coordinador
                copiaData.coordinador[index]["archivo"] = fileReader.result
                setData(copiaData);
            } else {
                // profesor
                copiaData.profesor[index]["archivo"] = fileReader.result
                setData(copiaData);
            }
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
        let copiaProfesor = {...profesores};
        copiaProfesor.materias = materias;

        profesoresHelper.editarProfesor(copiaProfesor, profesores._id);
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
                        <img alt="imagen subida" width="100%" src={profesores.archivo}></img>
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
                    {!flag ? (
                        <Loader />
                    ) : (
                        <form onSubmit={actualizar}>
                            <img alt="imagen subida" width="100%" src={profesores.archivo}></img>
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
                    )}
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