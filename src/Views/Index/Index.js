import React, { Fragment } from 'react';

import SideNav from '../../Components/SideNav';
import FormularioAgregar from '../../Components/FormularioAgregar';
import View from './View';

import img1 from '../../Images/escritorio/Index/1.png';

const Index = () => {

    const actualizar = () => {
        console.log("actualizar");
    }
    
    return (
        <Fragment>
            <SideNav/>
            <div className='row'>
                <FormularioAgregar>
                    <p className='titulo_1_admin'>Licenciatras</p>
                    <img src={img1} alt="Licenciatura en Cinematografía" style={{width:"100%"}} />
                    <div className='botonn_1_admin'>
                        <button>
                            Remplazar Imagen
                        </button>
                    </div>
                    <div class="input-field">
                        <input id="titulo" type="text" class="validate" />
                        <label for="titulo">Titulo</label>
                    </div>
                    <div className='botonn_1_admin'>
                        <button onClick={actualizar}>
                            Actualizar
                        </button>
                    </div>
                </FormularioAgregar>
                <View/>
            </div>
        </Fragment>
    );
};

export default Index;