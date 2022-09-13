import React, { Fragment, useEffect, useState } from 'react';
import M from 'materialize-css';

import { useAuth } from '../../Context/Context';

import "./FAQs.css";

const FAQs = porps => {
    const { setEditar } = useAuth();
    const [flag, setFlag] = useState(false);

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
        let vista = document.getElementById("vista_preguntas");
        vista.className = "col s9";
        setEditar(pregunta);
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