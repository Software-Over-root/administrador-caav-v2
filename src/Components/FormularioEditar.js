import React from 'react';

const FormularioEditar = props => {
    return (
        <div className="ventana_editable_desactivada" id='ventana_editable_editar'>
            <div className='col s3'>
                
            </div>
            <div className='col s3 hijo_fixed'>
                <div className='sombra' style={{marginTop:"80px", maxHeight:"80vh", overflow:"auto"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default FormularioEditar;