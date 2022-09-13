import React, {useState, Fragment}  from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import preguntasHelper from '../../Helpers/Preguntas_frecuentes';


const Preguntas = props => {
    const { editar } = useAuth();

    const [pregunta, setPregunta] = useState({
        campo: 0,
        ...editar
    });


    const leerDato = e => {
        setPregunta({
            ...pregunta,
            [e.target.name]: e.target.value
        });
    }

    const agregar = e => {
        e.preventDefault();
        preguntasHelper.agregarPregunta(pregunta);
    }

    const actualizar = e => {
        e.preventDefault();
        preguntasHelper.editarPregunta(pregunta, editar._id);
    }

    const eliminar = () => {
        preguntasHelper.eliminarPregunta(editar._id);
    }


    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>FAQ's</p>
                    <form onSubmit={agregar}>
                        <div className="input-field">
                            <input onChange={leerDato} id="pregunta" name='pregunta' type="text" className="validate" />
                            <label for="pregunta">Pregunta</label>
                        </div>

                        <div>
                            <p>Respuesta</p>
                            <CKEditor
                                editor={ ClassicEditor }
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setPregunta({
                                        ...pregunta,
                                        respuesta: data
                                    })
                                } }
                            />
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar pregunta
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar Calendario</p>
                    <form onSubmit={actualizar}>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.pregunta} id="pregunta" name='pregunta' type="text" className="validate" />
                            <label className='active' for="pregunta">Pregunta</label>
                        </div>

                        <div>
                            <p>Respuesta</p>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={editar.respuesta}
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setPregunta({
                                        ...pregunta,
                                        respuesta: data
                                    })
                                } }
                            />
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar evento
                            </button>
                        </div>
                    </form>
                    <div className='botonn_2_admin' style={{marginTop:"10px"}}>
                        <button onClick={eliminar}>
                            Eliminar evento
                        </button>
                    </div>
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}

export default Preguntas;