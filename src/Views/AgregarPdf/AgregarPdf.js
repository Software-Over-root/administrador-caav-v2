import React, { Fragment, useState } from 'react';

import	"../Horarios/Horario.css"

const AgregarPdf = () => {

    return(
        <Fragment>
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Agregar PDF
                </p>
                <div className='cont_horario'>
                    <form action="#">
                        <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" multiple />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                        </div>

                        <div className='flex_padre_2'>
                            
                            <div className='flex_pdf'>
                                <p className='texto_pdf'>
                                    Nombre del archivo
                                </p>
                                <div class="input-field col s6">
                                    <input id="archivo" type="text" class="validate"  style={{width:"100%"}}/>
                                    <label for="archivo"></label>
                                </div>
                            </div>

                            <div className='flex_pdf' style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                                <p className='texto_pdf'>
                                    Calificación
                                </p>
                                <div>
                                    <p>
                                        <label>
                                            <input id="indeterminate-checkbox" type="checkbox" />
                                            <span className='texto_pdf_2'>Licenciaturas</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input id="indeterminate-checkbox" type="checkbox" />
                                            <span className='texto_pdf_2'>Cuatrimestre</span>
                                        </label>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}> 
                            <button href='/' className='btn_h1'>
                                Agregar archivo
                            </button>
                            <button href="" className='btn_h2'>
                                Regresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default AgregarPdf;