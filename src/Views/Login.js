import React, { useState } from 'react';
import Swal from 'sweetalert2';

import logo from "../Images/logo.png";

import adminsHelper from '../Helpers/Admin';
import { useAuth } from '../Context/Context';

const Login = () => {
    const [login, setLogin] = useState({});
    const { user, setUser } = useAuth();

    const leerDato = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const inicioSesion = async e => {
        console.log(user);
        e.preventDefault();
        let res = await adminsHelper.login(login.correo, login.password);
        console.log(res);
        if (res.data.length > 0) {
            setUser({
                nombre:res.data[0].tipoMostrar, 
                tipo:res.data[0].tipo, 
                id:res.data[0]._id, 
                puesto:res.data[0].tipoMostrar,
                correo:res.data[0].correo
            });
            Swal.fire(
                'Inicio exitoso' ,
                '¡Bienvenido!',
                'success'
            ).then(() => {
                window.location.replace("/administradores");
            });
        } else {
            Swal.fire(
                'Error!',
                'Usuaro o contraseña incorrectos' ,
                'error'
            )
        }
    }

    return (
        <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"400px"}} className='sombra'>
                <p className='center' style={{fontSize:"30px", fontWeight:"bold", margin:"0px"}}>BIENVENIDO</p>
                <img src={logo} alt="" style={{width:"100%"}} />
                <form onSubmit={inicioSesion}>
                    <div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input onChange={leerDato} required placeholder='E-mail' name="correo" type="email" class="validate login_input" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input onChange={leerDato} required placeholder='Password' name="password" type="password" class="validate login_input" />
                            </div>
                        </div>
                    </div>
                    <div className='col s12' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <button type='submit' className='caja_status_2' style={{background:"#BA2049", fontSize:"15px", width:"200px"}} >
                            <p>
                                Entrar
                            </p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;