import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useAuth } from '../../Context/Context';

import "./FAQs.css";

const FAQs = porps => {
    const { setEditar, data, setIndex } = useAuth();

    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });

    function createMarkup(pregunta) {
        return {__html: pregunta};
    }

    const actualizarPregunta = (pregunta, index) => {
        let ventana = document.getElementById("ventana_editable_editar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        let cerrar = document.getElementById("invisible_cerrar");
        cerrar.className = "invisible_cerrar_activado";
        vista.className = "col s9";

        setEditar(pregunta);
        setIndex(index);
        //     console.log("entro 2");
        //     let ckedittor_contenedor = document.getElementById("ckedittor_contenedor_editar");
        //     let preguntaComponent = 
        //         <CKEditor
        //             data={pregunta.respuesta}
        //             editor={ ClassicEditor }
        //             onChange={ ( event, editor ) => {
        //                 console.log({event});
        //                 console.log({editar, index, pregunta, data});
        //                 const dataCk = editor.getData();

        //                 console.log({dataCk});

        //                 if (data.length > 0) {
        //                     console.log("if");
        //                     leerCkEditor(dataCk);
        //                 } else {
        //                     console.log("else");
        //                 }
        //             } }
        //         />
        //     ReactDOM.render(
        //         preguntaComponent,
        //         ckedittor_contenedor
        //     );
        // },200);
    }

    return(
        <Fragment>
            <div className='container componente_editable_padre'>
                <ul class="collapsible_propio collapsible">

                    {data.map((pregunta, index) => (
                        <li onClick={() => {actualizarPregunta(pregunta, index)}} className='componente_editable_2'>
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