import React, { Fragment } from 'react';

import "./Cine.css";

const Cine = () => {
    return(
        <Fragment>
            <div className='fondo_titulacion'>
                <div className='container contenedor_xch center' style={{paddingBottom:"1px", paddingTop:"1px"}}>
                    <p className='titulo_1_nv' style={{color:"#2D9495", marginBottom:"0px"}}>
                        Cine Digital
                    </p>
                    <p>
                        Nuestro proceso está diseñado para que puedas obtener tu título en cuanto 
                        termines tu último cuatrimestre. Debes realizar un producto audiovisual 
                        acompañado de una carpeta de investigación y una carpeta de producción. 
                        El proceso dura un año y se divide en tres etapas:
                    </p>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Séptimo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Carpeta de investigación.</li>
                        <li>2. Diario de campo: bitácora semanal de tus avances.</li>
                        <li>3. Primer tratamiento de guión.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Octavo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización del guión.</li>
                        <li>2. Carpeta de producción.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#2D9495", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Noveno</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización de producto audiovisual.</li>
                    </ul>
                </div>
            </div>
            <div className='container contenedor_xch center'>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
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
                    Es una libreta para llevar registro de tu trabajo desde el inicio hasta 
                    el final del proyecto. Se registran ideas, acontecimientos, situaciones, 
                    frases, comentarios, observaciones, lecturas, conversaciones, entrevistas, 
                    con la finalidad de que todo quede documentado.
                </p>
                <p style={{fontWeight:"bold"}}>3. Primer tratamiento de guion</p>
                <p>
                    Es el texto en que se expone, con los detalles necesarios para su realización, 
                    el contenido de tu producto audiovisual.
                </p>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
                    Contenido de la carpeta de producción
                </p>
                <div className='s_margen'>
                    <p>1. Introducción</p>
                    <p>2. Ficha técnica</p>
                    <p>3. Objetivos generales y particulares</p>
                    <p>4. Tagline</p>
                    <p>5. Logline</p>
                    <p>6. Sinopsis</p>
                    <p>7. Carta de director</p>
                    <p>8. Guion</p>
                    <p>9. Storyboard</p>
                    <p>10. Desglose | Break</p>
                    <p>11. Presupuesto</p>
                    <p>12. Ruta crítica general y cronograma</p>
                    <p>13. Visualización con referencias de:</p>
                    <p>13.1 Dirección</p>
                    <p>13.2 Fotografía</p>
                    <p>13.3 Dirección de arte</p>
                    <p>13.4 Vestuario</p>
                    <p>13.5 Sonido|musicalización</p>
                    <p>14. Casting (fotos frente ¾) (propuesta)</p>
                    <p>15. Crew list</p>
                    <p>16. Cast list</p>
                    <p>17. Shooting list</p>
                    <p>18. Plantillas de cámara e iluminación</p>
                    <p>19. Plan de rodaje</p>
                    <p>20. Contratos o cesión de derechos</p>
                    <p>21. Locaciones con mapa</p>
                    <p>22. Permisos del ayuntamiento correspondientes</p>
                    <p>23. Escaleta</p>
                    <p>24. Conclusiones</p>
                </div>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#2D9495"}}>
                    Presentación del proyecto final para titulación
                </p>
                <p style={{fontWeight:"bold"}}>
                    Producto audiovisual + Documento final, que contenga: Índice.
                </p>
                <div className='s_margen'>
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

export default Cine;