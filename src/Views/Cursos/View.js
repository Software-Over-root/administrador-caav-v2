import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

import { useAuth } from '../../Context/Context';


const View = () => {
    const { setEditar, editar, setCaracteres } = useAuth();

    const agregarCurso = () => {
        let ventana = document.getElementById("ventana_editable_agregar");
        ventana.className = "ventana_editable col s3";
        let vista = document.getElementById("vistas_generales");
        vista.className = "col s9";
        let cerrar = document.getElementById("invisible_cerrar_agregar");
        cerrar.className = "invisible_cerrar_activado";

        

        let ckedittor_contenedor = document.getElementById("descripcion_externa_nuevo");
        ReactDOM.render(
            <CKEditor
                editor={ ClassicEditor }
                config={ {
                    toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ],
                } }
                onChange={ ( event, editor ) => {
                    // console.log("entro 1");
                    function removeTags(str) {
                        if ((str===null) || (str===''))
                            return false;
                        else
                            str = str.toString();
                            let res = str.replace("&nbsp;", ' ')

                        return res.replace( /(<([^>]+)>)/ig, '');
                    }
                    
                    const data = editor.getData();

                    let res = removeTags(data);
                    let total = 0;

                    if (res) {
                        total = res.split("").length;
                    }

                    setCaracteres(total);

                    if (total > 100) {
                        Swal.fire(
                            'Límite alcanzado!',
                            'El límite de caracteres es de 100' ,
                            'error'
                        )
                    } else {
                        // console.log("entro en els de externa");
                        setEditar({
                            ...editar,
                            descripcion_externa: data
                        })
                    }

                } }
            />,
            ckedittor_contenedor
        );

        let ckedittor_contenedor_2 = document.getElementById("seccion_interna_nuevo");
        ReactDOM.render(
            <Fragment>
                <div>
                    <p>Descripcion Interna</p>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ]
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setEditar({
                                ...editar,
                                descripcion_interna: data
                            })
                        } }
                    />
                </div>
                <div style={{marginTop:"20px"}}>
                    <p>Contenido del curso</p>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: [ 'heading', 'bold', 'italic', 'link', 'bulletedList', 'undo', 'redo' ]
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setEditar({
                                ...editar,
                                contenido: data
                            })
                        } }
                    />
                </div>
            </Fragment>,
            ckedittor_contenedor_2
        );
    }

    return (
        <div id='vistas_generales' className='col s12' style={{padding:"0"}}>
            <div className='container center'>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Cursos, talleres y diplomados
                </p>
                <div className='row'>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/1">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Animación, Animé y Cómic</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/2">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Audio, Radio y Voz</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/3">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Cine y Video</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/4">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Dibujo, Ilustración y Pintura</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/5">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Diseño</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/6">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Emprendimiento</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/7">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Escritura y Narrativa</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/8">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Fotografía</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/9">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Las Artes</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/10">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Marketing Digital y la Web</p>
                            </div>
                        </a>
                    </div>
                    <div className='col s3' style={{padding:"10px"}}>
                        <a href="/cursos/11">
                            <div className='blog_box_1' >
                                <p style={{color:"#fff", fontWeight:"bold", fontSize:"25px"}}>Multimedia y Videojuegos</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className='boton_2_nv'>
                        <button onClick={agregarCurso} >
                            <p>Agregar Curso</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;