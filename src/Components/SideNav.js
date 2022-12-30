import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';
import CryptoJS from "react-native-crypto-js";

import { useAuth } from '../Context/Context';

import logo from '../Images/logo.png';


const SideNav = () => {
    const { user, setUser } = useAuth();

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        var elems_2 = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems_2, {
            coverTrigger: false,
            constrainWidth: false
        });

        let bytes  = CryptoJS.AES.decrypt(localStorage.getItem("_cv_data_"), 'Y2Fhdg==');
        let originalText = bytes.toString(CryptoJS.enc.Utf8);

        let dataUser = JSON.parse(originalText);

        
        console.log(dataUser);
        setUser(dataUser);
    }, []);

    const cerrarSesion = () => {
        console.log("cerra sesion");
        window.location.replace("/");
    }

    return (
        <Fragment>
            <div id="font-header" className="row" style={{backgroundColor: '#ffffff', marginBottom:'0px', position:"relative", zIndex:"9", height:"75px"}}>
                <div className="row s12 center-align" style={{marginBottom:'0px', display:'flex', alignItems:'center', height:"100%"}}>
                    <div className="col s12" style={{margin:'0 -10% 0 -5%'}}>
                        <div className="col s9"></div>
                        <div data-target='dropdown1' className="col s2 dropdown-trigger" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                            <div style={{width:"40px", height:"40px", background:"#b9b9b9", borderRadius:"50%", marginRight:"10px", border:"solid 3px #91bd92"}} />
                            <p style={{width:"calc(100% - 50px)"}}>{user.nombre}</p>
                        </div>
                        <ul style={{marginLeft:"10px"}} id='dropdown1' class='dropdown-content'>
                            <li><a href={`/administrador/${user.id}`} style={{color:"black"}}>Mi perfil</a></li>
                            <li class="divider" tabindex="-1"></li>
                            <li><a href="#!" onClick={cerrarSesion} style={{color:"black"}}>Cerrar Sesión</a></li>
                        </ul>
                        <div className="col s1" style={{display:"flex", justifyContent:"end", alignItems:"center"}}>
                            <a style={{marginTop:"15px"}} data-target="slide-out" class="sidenav-trigger" href="#!">
                                <i class="material-icons" style={{color:'#881A1E'}}>menu</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ul id="slide-out" class="sidenav">
                <Fragment>
                    <li>
                        <div class="user-view">
                            <a target="_blank" href="https://caav.mx/">
                                <img alt='CAAV' src={logo} style={{width:'100%', margin:'10% 0'}}/>
                            </a>
                        </div>
                    </li>
                    {/* <li><a href="/administradores">Administradores</a></li>
                    <li><a href="/directorio">Directorio</a></li>
                    <li><a href="/profesores">Profesores</a></li>
                    <li><a href="/calendario">Calendario</a></li>
                    <li><a href="/reinscripcion">Reinscripcion Vista</a></li>
                    <li><a href="/titulaciones">Titulaciones (pendiente)</a></li>
                    <li><a href="/preguntas-frecuentes">FAQs</a></li>
                    <li><a href="/proceso-admision">Proceso de admision (falta)</a></li> 
                    <li>---------------------------------------------------</li>
                    <li><a href="/solicitud-reinscripciones">Solicitud de reinscripcion</a></li> 
                    <li><a href="/archivos-reinscripciones">Archivos de reinscripcion</a></li> 
                    <li><a href="/solicitud-inscripciones">Solicitud de inscripcion</a></li> 
                    <li><a href="/archivos-inscripciones">Archivos de inscripcion</a></li> 
                    <li>---------------------------------------------------</li>

                    <li><a href="/estudiantes">Estudianes</a></li>

                    <li><a href="/index">Home</a></li>
                    <li><a href="/becas">Becas</a></li>

                    <li><a href="/formato-inscripcion">Formato de inscripción</a></li> */}
                    <li><a href="/etiquetas">Etiquetas Cursos</a></li>
                    <li><a href="/cursos-diplomados">Cursos, talleres y diplomaods</a></li>
                    {/* <li><a href="/licenciaturas/cine">Licenciatura Cine</a></li>
                    <li><a href="/licenciaturas/animacion">Licenciatura Animacion</a></li>
                    <li><a href="/licenciaturas/marketing">Licenciatura Marketing</a></li>
                    <li><a href="/licenciaturas/multimedia">Licenciatura Multimedia</a></li>
                    <li>---------------------------------------------------</li> 
                    <li><a href="/blogs-noticias">Blogs y noticias</a></li> */}
                </Fragment>
            </ul>
        </Fragment>
    );
};

export default SideNav;