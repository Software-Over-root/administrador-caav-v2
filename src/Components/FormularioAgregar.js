import React from 'react';

const FormularioAgregar = props => {
    const cerrar = e => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable_desactivada";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s12";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_desactivado";
    }

    return (
        <div className="ventana_editable_desactivada" id='ventana_editable_agregar'>
            <div className='col s3'>
                
            </div>
            <div className='col s3 hijo_fixed'>
                <div className='sombra' style={{marginTop:"80px", maxHeight:"50vh", overflow:"auto"}}>
                    {props.children}
                </div>
            </div>
            <div id='invisible_cerrar_agregar' onClick={cerrar} className='invisible_cerrar_desactivado' />
        </div>
    );
};

export default FormularioAgregar;