import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FormularioAgregar = props => {
    return (
        <div className="ventana_editable_desactivada" id='ventana_editable_agregar'>
            <div className='col s3'>
                
            </div>
            <div className='col s3 hijo_fixed'>
                <div className='sombra' style={{marginTop:"80px", maxHeight:"50vh", overflow:"auto"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default FormularioAgregar;