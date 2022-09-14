import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useAuth } from '../../Context/Context';

import "./FAQs.css";

const FAQs = porps => {
    const { setEditar, editar } = useAuth();

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });

    function createMarkup(pregunta) {
        return {__html: pregunta};
    }

    const actualizarPregunta = pregunta => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        vista.className = "col s9";
        setEditar(pregunta);

        let ckedittor_contenedor = document.getElementById("ckedittor_contenedor_editar");
        ReactDOM.render(
            <CKEditor
                data={pregunta.respuesta}
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditar({
                        ...pregunta,
                        ...editar,
                        respuesta: data
                    })
                } }
            />,
            ckedittor_contenedor
        );
    }

    return(
        <Fragment>
            <div className='container componente_editable_padre'>
                <ul class="collapsible_propio collapsible">

                    {porps.data.map(pregunta => (
                        <li onClick={() => {actualizarPregunta(pregunta)}} className='componente_editable_2'>
                            <div class="collapsible-header collapsible-header_propio" style={{justifyContent:"center"}}>
                                <i class="material-icons iconDown">
                                    arrow_drop_down
                                </i>
                                <i class="material-icons iconUp">
                                    arrow_drop_up
                                </i>
                                <p className='titulo_preguntas_nv' style={{textAlign:"center", margin:"0"}}>
                                    {pregunta.pregunta}
                                </p>
                            </div>
                            <div dangerouslySetInnerHTML={createMarkup(pregunta.respuesta)} class="collapsible-body collapsible-body_propio">
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default FAQs;