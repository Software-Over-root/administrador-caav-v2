import React, { Fragment, useEffect, useState }  from 'react';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import FormularioEditar from '../../Components/FormularioEditar';
import Loader from '../../Components/Loader';
import View from './View';

import { useAuth } from '../../Context/Context';

import EtiquetasHelper from '../../Helpers/Etiquetas';

const Etiquetas = () => {
    const { editar } = useAuth();

    const [etiqueta, setEtiqueta] = useState({
        nombre: ""
    });

    useEffect(() => {
        setEtiqueta(editar)
    }, [editar]);


    const leerDato = e => {

        setEtiqueta({
            ...etiqueta,
            [e.target.name]: e.target.value
        });
        
    }

    const agregarEtiqueta = e => {
        e.preventDefault();
        EtiquetasHelper.agregarEtiqueta(etiqueta);
    }

    const actualizarEtiqueta = e => {
        e.preventDefault();
        EtiquetasHelper.editarEtiqueta(etiqueta, editar._id);
    }

    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Etiquetas</p>
                    
                    <form onSubmit={agregarEtiqueta}>
                        <div className="input-field">
                            <input onChange={leerDato} id="nombre" name='nombre' type="text" className="validate" />
                            <label for="nombre">Nombre del etiqueta</label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Agregar etiqueta
                            </button>
                        </div>
                    </form>
                </FormularioAgregar>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar etiqueta</p>
                    <form onSubmit={actualizarEtiqueta}>
                        <div className="input-field">
                            <input onChange={leerDato} defaultValue={editar.nombre} id="nombre" name='nombre' type="text" className="validate" />
                            <label className='active' for="nombre">Nombre</label>
                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar profesor
                            </button>
                        </div>
                    </form>
                </FormularioEditar>
                <View/>
            </div>
        </Fragment>
    );
}


export default Etiquetas;