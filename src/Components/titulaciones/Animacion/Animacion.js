import React, { Fragment } from 'react';

import "./Animacion.css";

const Animacion = () => {
    return(
        <Fragment>
            <div className='fondo_titulacion'>
                <div className='container contenedor_xch center' style={{paddingBottom:"1px", paddingTop:"1px"}}>
                    <p className='titulo_1_nv' style={{color:"#752884", marginBottom:"0px"}}>
                        Animación
                    </p>
                    <p>
                        Nuestro proceso está diseñado para que puedas obtener tu título en cuanto 
                        termines tu último cuatrimestre. <br />
                        Debes realizar una animación de 30 segundos como mínimo, acompañada de una 
                        carpeta de investigación y una carpeta de producción. El proceso dura un año 
                        y se divide en tres etapas:
                    </p>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#752884", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Séptimo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Carpeta de investigación.</li>
                        <li>2. Diario de campo: bitácora semanal de tus avances.</li>
                        <li>3. Primer tratamiento de guión.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#752884", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Octavo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización del guión.</li>
                        <li>2. Carpeta de producción.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#752884", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Noveno</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización de producto audiovisual.</li>
                    </ul>
                </div>
            </div>
            <div className='container contenedor_xch center'>
                <p className='titulo_4_nv' style={{fontFamily:"Caav",color:"#752884"}}>
                    Contenido de la carpeta de invertigación
                </p>
                <p style={{fontWeight:"bold"}}>1. Investigación:</p>
                <ul>
                    <li>1.1. Planteamiento del tema y justificación: ¿qué quiero hacer?</li>
                    <li>1.2. Objetivos.</li>
                    <li>1.3. Elaboración de hipótesis.</li>
                    <li>1.4. Marco contextual: revisión de información acerca del tema.</li>
                    <li>1.5. Marco conceptual: visualización del alcance del estudio.</li>
                    <li>1.6. Marco teórico: revisión teórico-histórica del tema.</li>
                    <li>1.7. Metodología: ¿cómo voy a realizar mi trabajo?</li>
                </ul>
                <p style={{fontWeight:"bold"}}>2. Diario de campo</p>
                <p>
                    Es una libreta para llevar registro de tu trabajo desde el inicio 
                    hasta el final del proyecto. Se registran ideas, acontecimientos, 
                    situaciones, frases, comentarios, observaciones, lecturas, conversaciones 
                    y entrevistas, con la finalidad de que todo quede documentado.
                </p>
                <p style={{fontWeight:"bold"}}>3. Primer tratamiento de guion</p>
                <p>
                    Es el texto en que se expone, con los detalles necesarios para su realización, 
                    el contenido de tu producto audiovisual.
                </p>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#752884"}}>
                    Contenido de la carpeta de producción
                </p>
                <div className='s_margen'>
                    <p>1. Sinopsis breve.</p>
                    <p>2. Guion.</p>
                    <p>3. Storyboard.</p>
                    <p>4. Animatic con sonido.</p>
                    <p>5. Plan de producción y calendario.</p>
                    <p>6. Desglose de necesidades.</p>
                    <p>7. Carpeta de arte.</p>
                    <p>8. Diseño de personajes.</p>
                    <p>9. Presupuesto.</p>
                    <p>10. Texto del director.</p>
                    <p>11. Tres previsualizaciones de muestra del producto final en formato JPG.</p>
                </div>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#752884"}}>
                    Presentación del proyecto final para titulación
                </p>
                <p style={{fontWeight:"bold"}}>1. Animación de mínimo 30 segundos:</p>
                <p>
                    Puede ser: <br />
                    Producto animado (técnica libre). <br />
                    Muestra de corto o largometraje. <br />
                    Piloto de proyecto serializado interactivo. <br />
                </p>
                <p style={{fontWeight:"bold"}}>2. Documento final, que contenga:</p>
                <div className='s_margen'>
                    <p>Índice.</p>
                    <p>Introducción.</p>
                    <p>Carpeta de investigación.</p>
                    <p>Carpeta de producción.</p>
                    <p>Conclusiones.</p>
                    <p>Bibliografía y videografía.</p>
                    <p>Anexos, en caso de que sea necesario:</p>
                    <p>Contratos.</p>
                    <p>Documentos de investigación.</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Animacion;