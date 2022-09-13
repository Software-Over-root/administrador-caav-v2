import React, { Fragment } from 'react';

import "./Cine.css";

const Cine = props => {

    function createMarkup(materias) {
        return {__html: materias};
    }

    return(
        <Fragment>
            <div className='fondo_titulacion' style={{position:"relative", zIndex:"-9"}}>
                <div className='container contenedor_xch center' style={{paddingBottom:"1px", paddingTop:"1px"}}>
                    <p className='titulo_1_nv' style={{color:"#2D9495", marginBottom:"0px"}}>
                        Cine Digital
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(props.titulacion.descripcion)}></div>

                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Séptimo</span><br />
                        cuatrimestre
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(props.titulacion.cuatrimestre7)}></div>

                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Octavo</span><br />
                        cuatrimestre
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(props.titulacion.cuatrimestre8)}></div>

                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Noveno</span><br />
                        cuatrimestre
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(props.titulacion.cuatrimestre9)}></div>
                </div>
            </div>
            <div className='container contenedor_xch center'>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
                    Contenido de la carpeta de invertigación
                </p>
                <div dangerouslySetInnerHTML={createMarkup(props.titulacion.carpeta_investigacion)}></div>

                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
                    Contenido de la carpeta de producción
                </p>
                <div dangerouslySetInnerHTML={createMarkup(props.titulacion.carpeta_produccion)}></div>

                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
                    Presentación del proyecto final para titulación
                </p>
                <div dangerouslySetInnerHTML={createMarkup(props.titulacion.presentacion_final)}></div>
            </div>
        </Fragment>
    );
}

export default Cine;