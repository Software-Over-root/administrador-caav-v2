import React, { Fragment, useEffect, useState } from 'react';
import SideNav from '../../Components/SideNav';

import adminsHelper from '../../Helpers/Admin';


const AgregarAdministrador = () => {
    const [administrador, setAdministrador] = useState({});

    const leerDato = e => {
        setAdministrador({
            ...administrador,
            [e.target.name]: e.target.value
        });
    }

    const agregar = e => {
        e.preventDefault();
        adminsHelper.agregarAdmin(administrador);
    }

    return (
        <Fragment>
            <SideNav />
            <div>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    Agregar administrador
                </p>
                <div className='box_solicitud_1'>
                    <form onSubmit={agregar}>
                        <div className='row'>
                            <div class="input-field col s4">
                                <input onChange={leerDato} defaultValue={administrador.tipoMostrar} name='tipoMostrar' id="tipoMostrar" type="text" class="validate" />
                                <label for="tipoMostrar">Nombre</label>
                            </div>
                            <div class="input-field col s4">
                                <input onChange={leerDato}  defaultValue={administrador.correo} name='correo' id="correo" type="text" class="validate" />
                                <label for="correo">E-mail</label>
                            </div>
                            <div class="input-field col s4">
                                <input onChange={leerDato}  defaultValue={administrador.password} name='password' id="password" type="text" class="validate" />
                                <label for="password">Contraseña</label>
                            </div>
                            <div className='col s12'>
                                <p className='texto_solicitud_3 center'>Tipo de usuario</p>
                                <div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                        <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "0" ? (
                                                <input checked required value="0" onChange={leerDato} name="tipo" type="radio" />
                                            ) :(
                                                <input required value="0" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador General</span>
                                        </label>
                                    </div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                    <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "1" ? (
                                                <input checked required value="1" onChange={leerDato} name="tipo" type="radio" />
                                            ) :(
                                                <input required value="1" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador de Cursos</span>
                                        </label>
                                    </div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                        <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "2" ? (
                                                <input required checked value="2" onChange={leerDato} name="tipo" type="radio" />
                                            ) :(
                                                <input required value="2" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador de Multimedia</span>
                                        </label>
                                    </div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                        <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "3" ? (
                                                <input required checked value="3" onChange={leerDato} name="tipo" type="radio" />
                                            ) :(
                                                <input required value="3" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador de Inscripciones y Reinscripciones</span>
                                        </label>
                                    </div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                        <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "4" ? (
                                                <input required checked value="4" onChange={leerDato} name="tipo" type="radio" />
                                            ) :(
                                                <input required value="4" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador de Alumnos</span>
                                        </label>
                                    </div>
                                    <div className='col s4' style={{margin:"10px 0px"}}>
                                        <label style={{padding:'0 40px 0 0'}}>
                                            {administrador.tipo === "5" ? (
                                                <input required checked value="5" onChange={leerDato} name="tipo" type="radio" />
                                            ) : (
                                                <input required value="5" onChange={leerDato} name="tipo" type="radio" />
                                            )}
                                            <span id="font-text2">Administrador de Finanzas</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col s12' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <button type='submit' className='caja_status_2' >
                                        <p>
                                            Agregar
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AgregarAdministrador;