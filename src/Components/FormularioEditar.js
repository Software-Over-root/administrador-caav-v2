import React, { Fragment } from 'react';

const FormularioEditar = props => {
    const cerrar = e => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable_desactivada";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s12";
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_desactivado";
    }

    return (
        <Fragment>
            <div className="ventana_editable_desactivada" id='ventana_editable_editar'>
                <div className='col s3'>
                    
                </div>
                <div className='col s3 hijo_fixed'>
                    <div>
                        <div className='sombra' style={{marginTop:"80px", maxHeight:"80vh", overflow:"auto"}}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div id='invisible_cerrar' onClick={cerrar} className='invisible_cerrar_desactivado' />
        </Fragment>
    );
};

export default FormularioEditar;