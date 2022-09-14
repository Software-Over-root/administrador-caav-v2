import React, { Fragment, useState }  from 'react';

import { useAuth } from '../../Context/Context';

import SideNav from '../../Components/SideNav';
import FormularioEditar from '../../Components/FormularioEditar';
import View from './View';

import titulacionHelper from '../../Helpers/Titulacion';

const Titulacion = props => {
    const { editar } = useAuth();

    const actualizar = e => {
        e.preventDefault();
        console.log(editar);
        titulacionHelper.editarTitulacion(editar, editar._id);
    }


    return (
        <Fragment>
            <SideNav />
            <div className='row'>
                <FormularioEditar>
                    <p className='titulo_1_admin'>Editar titulacion</p>
                    <form onSubmit={actualizar}>
                        <div id='formularios'>
                            
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