import React, { Fragment, useState }  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import directorioHelper from '../../Helpers/Directorio';

const Titulacion = props => {
    const { editar } = useAuth();

    const actualizar = e => {
        e.preventDefault();
        // directorioHelper.editarDirectorio(directorio, editar._id);
    }


    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar titulacion</p>
                    <form onSubmit={actualizar}>
                        <div id='descripcion_titulacion'>
                            
                        </div>
                        <div id='7_cuatrimestre'>

                        </div>
                        <div id='8_cuatrimestre'>

                        </div>
                        <div id='9_cuatrimestre'>

                        </div>
                        <div id='carpeta_investigacion'>

                        </div>
                        <div id='carpeta_produccion'>
                            
                        </div>
                        <div id='presentacion_final'>

                        </div>

                        <div className='botonn_1_admin' style={{marginTop:"10px"}}>
                            <button type='submit'>
                                Actualizar titulacion
                            </button>
                        </div>
                    </form>
                </FormularioEditar>
                <View/>
                
            </div>
        </Fragment>
    );
}


export default Titulacion;