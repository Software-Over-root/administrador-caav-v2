import React, { Fragment, useState }  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import directorioHelper from '../../Helpers/Directorio';

const Directorio = props => {
    const { editar } = useAuth();

    const [directorio, setDirectorio] = useState({
        ...editar
    });


    const leerDato = e => {
        setDirectorio({
            ...directorio,
            [e.target.name]: e.target.value
        });
    }

    const agregar = e => {
        e.preventDefault();
        directorioHelper.agregarDirectorio(directorio);
    }

    const actualizar = e => {
        e.preventDefault();
        directorioHelper.editarDirectorio(directorio, editar._id);
    }

    const eliminar = () => {
        directorioHelper.eliminarDirectorio(editar._id);
    }


    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Directorio</p>
                    <form onSubmit={agregar}>
                        <div className="input-field">
                            <input onChange={leerDato} id="nombre" name='nombre' type="text" className="validate" />
                            <label for="nombre">Nombre</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="puesto" name='puesto' type="text" className="validate" />
                            <label for="puesto">Puesto</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="correo" name='correo' type="text" className="validate" />
                            <label for="correo">Correo</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="numero" name='numero' type="text" className="validate" />
                            <label for="numero">Numero</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} id="posicion" name='posicion' type="text" className="validate" />
                            <label for="posicion">Posicion</label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar persona
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar directorio</p>
                    <form onSubmit={actualizar}>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.nombre} id="nombre" name='nombre' type="text" className="validate" />
                            <label className='active' for="nombre">Nombre</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.puesto} id="puesto" name='puesto' type="text" className="validate" />
                            <label className='active' for="puesto">Puesto</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.correo} id="correo" name='correo' type="text" className="validate" />
                            <label className='active' for="correo">Correo</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.numero} id="numero" name='numero' type="text" className="validate" />
                            <label className='active' for="numero">Numero</label>
                        </div>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.posicion} id="posicion" name='posicion' type="text" className="validate" />
                            <label className='active' for="posicion">Posicion</label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar persona
                            </button>
                        </div>
                    </form>
                    <div className='botonn_2_admin' style={{marginTop:"10px"}}>
                        <button onClick={eliminar}>
                            Eliminar persona
                        </button>
                    </div>
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default Directorio;