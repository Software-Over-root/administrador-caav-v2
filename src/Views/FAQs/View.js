import React, {useEffect, useState}  from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useAuth } from '../../Context/Context';

import preguntasHelpers from '../../Helpers/Preguntas_frecuentes';

import "./Preguntas.css";

import img4 from "../../Images/escritorio/Faqs/1.png";

import FAQs from '../../Components/FAQs/FAQs'

const Preguntas = props => {
    const { setEditar, editar } = useAuth();
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
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_activado";

        let ckedittor_contenedor = document.getElementById("ckedittor_contenedor");
        ReactDOM.render(
            <CKEditor
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setEditar({
                        ...editar,
                        respuesta: data
                    })
                } }
            />,
            ckedittor_contenedor
        );
    }


    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
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