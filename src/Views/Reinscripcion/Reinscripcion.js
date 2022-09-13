import React, { Fragment, useState }  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import reinscripcionHelper from '../../Helpers/ReinscripcionVista';

const Directorio = props => {
    const { editar, setEditar } = useAuth();

    const leerDato = e => {
        setEditar({
            ...editar,
            [e.target.name]: e.target.value
        });
    }

    const actualizar = e => {
        e.preventDefault();
        reinscripcionHelper.editarReinscripcion(editar, editar._id);
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar vista</p>
                    <form onSubmit={actualizar}>
                        <p>Fechas y costos de reinscripción</p>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.inicio} id="inicio" name='inicio' type="text" className="validate" />
                            <label className='active' for="inicio">Las clases inician el:</label>
                        </div>
                        <div className="input-field" style={{marginTop:"30px"}}>
                            <input onChange={leerDato} defaultValue={editar.fecha_fin_1} id="fecha_fin_1" name='fecha_fin_1' type="text" className="validate" />
                            <label style={{top:"-12px"}} className='active' for="fecha_fin_1">La fecha límite para reinscribirte en período regular es el:</label>
                        </div>
                        <div className="input-field" style={{marginTop:"30px"}}>
                            <input onChange={leerDato} defaultValue={editar.costo_reinscripcion} id="costo_reinscripcion" name='costo_reinscripcion' type="text" className="validate" />
                            <label style={{top:"-12px"}} className='active' for="costo_reinscripcion">Costo de reinscripción en periodo regular:</label>
                        </div>
                        <div className="input-field" style={{marginTop:"30px"}}>
                            <input onChange={leerDato} defaultValue={editar.fecha_fin_2} id="fecha_fin_2" name='fecha_fin_2' type="text" className="validate" />
                            <label style={{top:"-12px"}} className='active' for="fecha_fin_2">Fecha límite para reinscripción extemporánea:</label>
                        </div>
                        <div className="input-field" style={{marginTop:"30px"}}>
                            <input onChange={leerDato} defaultValue={editar.costo_reinscripcion_atrasada} id="costo_reinscripcion_atrasada" name='costo_reinscripcion_atrasada' type="text" className="validate" />
                            <label style={{top:"-12px"}} className='active' for="costo_reinscripcion_atrasada">Costo de reinscripción extemporánea:</label>
                        </div>

                        <p>Costos de licenciaturas</p>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_total} id="costo_total" name='costo_total' type="text" className="validate" />
                            <label className='active' for="costo_total">Cuatrimestre:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_mensualidad} id="costo_mensualidad" name='costo_mensualidad' type="text" className="validate" />
                            <label className='active' for="costo_mensualidad">4 mensualidades de:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_mensualidad_atrasado} id="costo_mensualidad_atrasado" name='costo_mensualidad_atrasado' type="text" className="validate" />
                            <label className='active' for="costo_mensualidad_atrasado">Con los siguientes vencimientos:</label>
                        </div>
                        {/* <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.inicio} id="inicio" name='inicio' type="text" className="validate" />
                            <label className='active' for="inicio">Después de estas fechas</label>
                        </div> */}
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_unico_pago} id="costo_unico_pago" name='costo_unico_pago' type="text" className="validate" />
                            <label className='active' for="costo_unico_pago">En una sola exhibición:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.fecha_fin_3} id="fecha_fin_3" name='fecha_fin_3' type="text" className="validate" />
                            <label className='active' for="fecha_fin_3">Fecha límite para el pago</label>
                        </div>


                        <p>Horario especial</p>
                        <p>En linea</p>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.fecha_fin_4} id="fecha_fin_4" name='fecha_fin_4' type="text" className="validate" />
                            <label className='active' for="fecha_fin_4">Fecha limite:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.horario_1} id="horario_1" name='horario_1' type="text" className="validate" />
                            <label className='active' for="horario_1">Horario:</label>
                        </div>


                        <p>Presencial</p>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.horario_2} id="horario_2" name='horario_2' type="text" className="validate" />
                            <label className='active' for="horario_2">Horario:</label>
                        </div>


                        <p>Costo materias</p>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_materia} id="costo_materia" name='costo_materia' type="text" className="validate" />
                            <label className='active' for="costo_materia">Costo de materia a repetir:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_materia_atrasado} id="costo_materia_atrasado" name='costo_materia_atrasado' type="text" className="validate" />
                            <label className='active' for="costo_materia_atrasado">Costo con 1 semana de retraso:</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.costo_materia_atrasado_2} id="costo_materia_atrasado_2" name='costo_materia_atrasado_2' type="text" className="validate" />
                            <label className='active' for="costo_materia_atrasado_2">Costo con 2 semana de retraso:</label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar reinscripcion
                            </button>
                        </div>
                    </form>
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default Directorio;