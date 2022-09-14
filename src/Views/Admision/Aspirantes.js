import React, {Fragment, useEffect, useState}  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import aspirantesHelper from '../../Helpers/Aspirantes';


const Aspirantes = props => {
    const { editar, setEditar } = useAuth();

    const [admision, setAdmision] = useState({
        ...editar
    });

    const leerDato = e => {
        setEditar({
            ...editar,
            [e.target.name]: e.target.value
        });
    }

    const actualizar = e => {
        e.preventDefault();
        console.log(editar);
        aspirantesHelper.editarAspirantes(editar, editar._id);
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar admision</p>
                    <form onSubmit={actualizar}>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.inicio} id="inicio" name='inicio' type="text" class="validate" />
                            <label className='active' for="inicio">Fecha</label>
                        </div>

                        <p>Proximos inicios</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.fecha_1} id="fecha_1" name='fecha_1' type="text" class="validate" />
                            <label className='active' for="fecha_1">Primera fecha</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.fecha_2} id="fecha_2" name='fecha_2' type="text" class="validate" />
                            <label className='active' for="fecha_2">Segunda fecha</label>
                        </div>

                        <p>Sigue estos pasos</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.evaluacion_costo} id="evaluacion_costo" name='evaluacion_costo' type="text" class="validate" />
                            <label className='active' for="evaluacion_costo">Evaluacion de perfil</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.inscripcion_costo_1} id="inscripcion_costo_1" name='inscripcion_costo_1' type="text" class="validate" />
                            <label className='active' for="inscripcion_costo_1">Primer pago</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.inscripcion_costo_2} id="inscripcion_costo_2" name='inscripcion_costo_2' type="text" class="validate" />
                            <label className='active' for="inscripcion_costo_2">Segundo pago</label>
                        </div>

                        <p>Horarios y costos</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.horario} id="horario" name='horario' type="text" class="validate" />
                            <label className='active' for="horario">Horario de classes</label>
                        </div>

                        <p>Examen extraordinario</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.extraordinario} id="extraordinario" name='extraordinario' type="text" class="validate" />
                            <label className='active' for="extraordinario">Costo</label>
                        </div>

                        <p>Asignatura a repetir</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.repetir} id="repetir" name='repetir' type="text" class="validate" />
                            <label className='active' for="repetir">Costo</label>
                        </div>

                        <p>Cosots de licenciatura</p>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.licenciatur_costo_1} id="licenciatur_costo_1" name='licenciatur_costo_1' type="text" class="validate" />
                            <label className='active' for="licenciatur_costo_1">Inscripcion cuatrimestral</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.licenciatur_costo_2} id="licenciatur_costo_2" name='licenciatur_costo_2' type="text" class="validate" />
                            <label className='active' for="licenciatur_costo_2">Colegiatura mensual</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.licenciatur_costo_3} id="licenciatur_costo_3" name='licenciatur_costo_3' type="text" class="validate" />
                            <label className='active' for="licenciatur_costo_3">Colegiatura mensual despues de la fecha</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.total} id="total" name='total' type="text" class="validate" />
                            <label className='active' for="total">Colegiatura por cuatrimestre una exibicion</label>
                        </div>
                        <div className='botonn_1_admin'>
                            <button type='submit'>
                                Actualizar vista
                            </button>
                        </div>
                    </form>
                </FormularioEditar>
                <View/>
            </div>
        </Fragment>
    );
}

export default Aspirantes;