import React, {useState, Fragment}  from 'react';

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
        let body = {
            ...pregunta,
            ...editar
        }
        preguntasHelper.agregarPregunta(body);
    }

    const actualizar = e => {
        e.preventDefault();
        let body = {
            ...editar,
            ...pregunta
        }
        console.log(body);
        preguntasHelper.editarPregunta(body, editar._id);
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

                        <div id='ckedittor_contenedor'>
                            <p>Respuesta</p>
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

                        <div id='ckedittor_contenedor_editar'>
                            <p>Respuesta</p>
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