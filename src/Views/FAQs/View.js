import React, {useEffect, useState}  from 'react';
import Swal from 'sweetalert2';

import { useAuth } from '../../Context/Context';

import preguntasHelpers from '../../Helpers/Preguntas_frecuentes';

import "./Preguntas.css";

import img4 from "../../Images/escritorio/Faqs/1.png";


import FAQs from '../../Components/FAQs/FAQs'

const Preguntas = props => {
    const { setEditar } = useAuth();
    const [preguntas, setPreguntas] = useState([{}]);

    useEffect(() => {
        obtenerPreguntas();
    }, []);
    
    const obtenerPreguntas = async () => {
        let res = await preguntasHelpers.obtenerPreguntas();
        if (res.success) {
            setPreguntas(res.data);
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            )
        }
    }

    const agregarPregunta = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vista_preguntas");
        vista.className = "col s9";
    }


    return (
        <div id='vista_preguntas' className='col s12' style={{padding:"0"}}>
            <img src={img4} style={{width:"100%"}}/>
            
            <p className='titulo_1_nv' style={{ textAlign:"center", margin:"15px 0px" }}>
                    FAQ's
            </p>

            <FAQs data={preguntas}/>

            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className='boton_1_nv' onClick={agregarPregunta} style={{cursor:"pointer"}}>
                    <p>
                        Agregar Pregunta
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Preguntas;