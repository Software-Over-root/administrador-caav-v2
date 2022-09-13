import React, { Fragment } from 'react';

import "./Multimedia.css";

const Multimedia = () => {
    return(
        <Fragment>
            <div className='fondo_titulacion'>
                <div className='container contenedor_xch center' style={{paddingBottom:"1px", paddingTop:"1px"}}>
                    <p className='encabezadosCaav' style={{color:"#47BFDA", marginBottom:"0px", lineHeight:"22px"}}>
                        Multimedia <br />
                        <span className='encabezadosMonserrat' style={{fontSize:"13px"}}>
                            Arte Digital y Medios Interactivos
                        </span>
                    </p>
                    <p>
                        Nuestro proceso está diseñado para que puedas obtener tu título en cuanto 
                        termines tu último cuatrimestre. <br />
                        Debes realizar un producto audiovisual acompañado de una carpeta de 
                        investigación y una carpeta de producción. El proceso dura un año y se 
                        divide en tres etapas:
                    </p>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#47BFDA", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Séptimo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Carpeta de investigación.</li>
                        <li>2. Diario de campo: bitácora semanal de tus avances.</li>
                        <li>3. Primer tratamiento de guión.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#47BFDA", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Octavo</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización del guión.</li>
                        <li>2. Carpeta de producción.</li>
                    </ul>
                    <p className='titulo_4_nv' style={{lineHeight:"25px", color:"#47BFDA", marginBottom:"0px"}}>
                        <span style={{fontFamily:"Caav"}}>Noveno</span><br />
                        cuatrimestre
                    </p>
                    <ul style={{marginTop:"0px"}}>
                        <li>1. Realización de producto audiovisual.</li>
                    </ul>
                </div>
            </div>
            <div className='container contenedor_xch center'>
                <p className='titulo_4_nv' style={{fontFamily:"Caav",color:"#47BFDA"}}>
                    Contenido de la carpeta de investigación
                </p>
                <p style={{fontWeight:"bold"}}>1. Investigación:</p>
                <ul>
                    <li>
                        1.1. Planteamiento del tema y justificación: ¿Qué quiero hacer? Por qué es 
                        importante hacer este trabajo, por qué elegí este tema, para qué servirá, 
                        cómo ayudará o aportará al espectador verlo.
                    </li>
                    <li>1.2. Objetivos</li>
                    <li>1.3. Elaboración de hipótesis</li>
                    <li>1.4. Marco contextual: revisión de información acerca del tema</li>
                    <li>1.5. Marco conceptual: visualización del alcance del estudio</li>
                    <li>1.6. Marco teórico: revisión teórico-histórica del tema</li>
                    <li>
                        1.7. Metodología: ¿cómo voy a realizar mi trabajo?: técnicas de producción, 
                        plan de grabación y obtención de las imágenes necesarias, diario de campo, 
                        bibliografía, referencias estéticas.
                    </li>
                </ul>
                <p style={{fontWeight:"bold"}}>2. Diario de campo</p>
                <p>
                    Es una libreta para llevar registro de tu trabajo desde el inicio hasta el 
                    final del proyecto.
                </p>
                <p>
                    Se registran ideas, acontecimientos, situaciones, frases, comentarios, 
                    observaciones, lecturas, conversaciones y entrevistas, con la finalidad 
                    de que todo quede documentado.
                </p>
                <p style={{fontWeight:"bold"}}>3. Primer tratamiento de guion</p>
                <ul>
                    <li>3.1. Identificación y definición del entorno del proyecto.</li>
                    <li>3.2. Definición de sus objetivos generales y específicos.</li>
                    <li>3.3. Definición de las características de los usuarios.</li>
                    <li>3.4. Definición o propuesta de contenidos.</li>
                    <li>
                        3.5. Definición de los niveles y formas de interacción con los usuarios 
                        e interfaces.
                    </li>
                    <li>
                        3.6. Propuesta de la orientación del producto y del modelo conceptual a 
                        emplear en su estructura.
                    </li>
                </ul>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#47BFDA"}}>
                    Contenido de la carpeta de producción
                </p>
                <div className='s_margen'>
                    <p>1. Guión multimedia final.</p>
                    <p>2. Plan de producción y cronograma.</p>
                    <p>3. Presupuesto.</p>
                    <p>4. Diseño de acuerdo al proyecto.</p>
                    <p>4.1. Diseño de la arquitectura del sistema.</p>
                    <p>4.2. Descripción detallada de los contenidos.</p>
                    <p>4.3. Diseño del funcionamiento o tratamiento del contenido.</p>
                    <p>4.4. Elaboración de los diálogos humano‐sistema o interfaz (storyboard).</p>
                    <p>4.5. Descripción detallada de los medios a emplear.</p>
                    <p>4.6. Descripción del hardware y de los dispositivos físicos de interacción.</p>
                    <p>4.7. Descripción precisa del software a emplear.</p>
                    <p>4.8. Diseño detallado del plan para las actividades futuras.</p>
                    <p>5. Diseño de controles.</p>
                    <p>5.1. Elaboración de la maqueta o prototipo.</p>
                    <p>5.2. Elaboración de la documentación del diseño.</p>
                    <p>6. Producción multimedia (360).</p>
                    <p>6.1. Configuración y obtención completa de la plataforma tecnológica.</p>
                    <p>6.2. Realización de los diversos elementos media.</p>
                    <p>6.3. Desarrollo de los procesos y/o programas informáticos.</p>
                    <p>6.4. Realización de las diversas pruebas individuales.</p>
                    <p>6.5. Integración de todos los componentes y pruebas generales o integrales.</p>
                    <p>6.6. Elaboración del informe de producción.</p>
                    <p>6.7. Liberación y comercialización del producto.</p>
                    <p>7. Elaboración del master.</p>
                    <p>7.1. Impresión y empaquetado del producto.</p>
                    <p>7.2. Distribución y venta.</p>
                    <p>7.3. Evaluación para la creación de nuevas versiones, actualizaciones o productos.</p>
                    <p>8. Anexos: contratos, etc.</p>
                </div>
                <p className='titulo_4_nv' style={{fontFamily:"Caav", color:"#47BFDA"}}>
                    Presentación del proyecto final para titulación
                </p>
                <p style={{fontWeight:"bold"}}>1. Producto audiovisual</p>
                <p>
                    Presentación de al menos 30 segundos de animación del producto final.
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

export default Multimedia;