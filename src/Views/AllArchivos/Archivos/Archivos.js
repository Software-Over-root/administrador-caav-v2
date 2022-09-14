import React, { Fragment, useState, useEffect } from 'react';

import SideNav from '../../../Components/SideNav';
import "./Archivos.css"

import icon1 from "../../../Images/Icon/66.png"

const Archivos = () => {

    useEffect(() => {
        let nombre = window.location.pathname.split("/")[2]
        setArchivos({
            ...archivos,
            nombre: nombre.toUpperCase()
        })
    },[]);

    const [archivos, setArchivos] = useState({
        nombre:"Licenciatura",
        datos: [
            {
                nombre:"Sep-Dic",
                fecha:"2022"
            }
        ]
    });

    return(
        <Fragment>
            <SideNav />
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    {archivos.nombre}
                </p>
                <div className='cont_2'>
                    
                    <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>
                        {archivos.datos.map(dato => (
                            <a href='/archivo' className='box_archivos_2'>
                                <img src={icon1} alt="" />
                                <p>
                                    {dato.nombre} <br />
                                    {dato.fecha}
                                </p>            
                            </a>
                        ))}
                    </div>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <a type="" className='btn_regresar'>
                            Regresar
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Archivos;