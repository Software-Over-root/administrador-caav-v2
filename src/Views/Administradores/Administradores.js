import React, { Fragment, useEffect, useState } from 'react';
import SideNav from '../../Components/SideNav';

import adminsHelper from '../../Helpers/Admin';

import img63 from "../../Images/Icon/63.png";

const Administradores = () => {
    const [administradores, setAdministradores] = useState([{}]);

    useEffect(() => {
        obtenerAdmins();
    },[]);

    const obtenerAdmins = async () => {
        let res = await adminsHelper.obtenerAdmins();
        if (res.success) {
            setAdministradores(res.data);
        } else {
            console.log("else");
        }
    }

    const eliminar = id => {
        console.log(id);
        adminsHelper.eliminarAdmin(id);
    }

    return (
        <Fragment>
            <SideNav />
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Usuarios administradores
                </p>
                <div>
                    <div className='cont_solicitud'>
                        <div className='row'>
                            <div className='col s8'>        
                                <div className='row'>
                                    
                                    <div className='col s6'>
                                        <p className='texto_solicitud'>
                                            Nombre
                                        </p>
                                    </div>
                                    <div className='col s3'>
                                        <p className='texto_solicitud' style={{color:"#717579"}}>
                                            Correo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {administradores.map(dato => (
                                <div className='box_solicitud'>
                                    <div className='row'>
                                        <div className='col s8'>
                                            <div className='row'>
                                                <div className='col s6'>
                                                    <div className=''>
                                                        <p className='texto_solicitud'>
                                                            {dato.tipoMostrar}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col s3'>
                                                    <p className='texto_solicitud'>
                                                        {dato.correo}
                                                    </p>
                                                </div>
                                            </div>     
                                        </div>
                                        <div className='col s4'>
                                            <div className='row'>
                                                <div className='col s2 offset-s4'>
                                                    <div onClick={() => {eliminar(dato._id)}} style={{cursor:"pointer"}}>
                                                        <img src={img63} alt="" style={{width:"30px"}} />
                                                    </div>
                                                </div>
                                                <div className='col s4 offset-s2'>
                                                    <a href={`/administrador/${dato._id}`} className='caja_status' style={{backgroundColor:"#00496C"}}>
                                                        <p>
                                                            EDITAR
                                                        </p>
                                                    </a>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col s12' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <a href='/administrador-agregar' className='caja_status_2' >
                                <p>
                                    Agregar Administrador
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};
 
export default Administradores;