import React, {Fragment, useEffect, useState}  from 'react';
import M from 'materialize-css';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import calendarioHelper from '../../Helpers/Calendario';


const Calendario = props => {
    const { editar } = useAuth();

    const [calendario, setCalendario] = useState({
        color: "#000000",
        ...editar
    });

    useEffect(() => {
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {
            format: "mmmm, dd, yyyy",
            onSelect: seleccionarFecha
        });
    },[]);

    const leerDato = e => {
        setCalendario({
            ...calendario,
            [e.target.name]: e.target.value
        });
    }

    const seleccionarFecha = fecha => {

        let mes = fecha.getMonth();
        let dia = fecha.getDate();
        let anio = fecha.getFullYear();

        setCalendario({
            ...calendario,
            dia,
            mes, 
            anio
        });
    }

    const agregar = e => {
        e.preventDefault();
        calendarioHelper.agregarEvento(calendario);
    }

    const actualizar = e => {
        e.preventDefault();
        calendarioHelper.editarEvento(calendario, editar._id);
    }

    const eliminar = () => {
        calendarioHelper.eliminarEvento(editar._id);
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Calendario</p>
                    <form onSubmit={agregar}>
                        <div class="input-field">
                            <input type="text" class="datepicker" placeholder='Fecha' />
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} id="fecha" name='fecha' type="text" class="validate" />
                            <label for="fecha">Fecha escrita</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} id="evento" name='evento' type="text" class="validate" />
                            <label for="evento">Titulo del evento</label>
                        </div>
                        <div class="input-field">
                            <p for="color">Color</p>
                            <input onChange={leerDato} id="color" name='color' type="color" class="validate" />
                        </div>
                        <div className='botonn_1_admin'>
                            <button type='submit'>
                                Agregar Evento 
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar Calendario</p>
                    <form onSubmit={actualizar}>
                        <div class="input-field">
                            <input type="text" class="datepicker" placeholder='Fecha' />
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.fecha} id="fecha" name='fecha' type="text" class="validate" />
                            <label className='active' for="fecha">Fecha escrita</label>
                        </div>
                        <div class="input-field">
                            <input onChange={leerDato} defaultValue={editar.evento} id="evento" name='evento' type="text" class="validate" />
                            <label className='active' for="evento">Titulo del evento</label>
                        </div>
                        <div class="input-field">
                            <p for="color">Color</p>
                            <input onChange={leerDato} defaultValue={editar.color} id="color" name='color' type="color" class="validate" />
                        </div>
                        <div className='botonn_1_admin'>
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

export default Calendario;