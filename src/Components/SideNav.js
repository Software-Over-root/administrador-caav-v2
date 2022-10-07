import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';

import { useAuth } from '../Context/Context';

import logo from '../Images/logo.png';


const SideNav = () => {
    const { user } = useAuth();

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });

    const cerrarSesion = () => {
        console.log("cerra sesion");
    }

    return (
        <Fragment>
            <div id="font-header" className="row" style={{backgroundColor: '#EFEFEF', marginBottom:'0px', position:"relative", zIndex:"9"}}>
                <div className="row s12 center-align" style={{marginBottom:'0px', display:'flex', alignItems:'center'}}>
                    <a  className="col s2" target="_blank" href="/" style={{margin:'-1% 1% -2% 0'}}><img alt='hola' src={logo} style={{width:'70%', marginTop: '10%', marginBottom:'10%'}}/></a>
                    <div className="col s10" style={{margin:'0 -10% 0 -5%'}}>
                        <div className="col s10"></div>
                        <a className="col s2" data-target="slide-out" class="sidenav-trigger" href="#!"><i class="material-icons" style={{color:'#881A1E'}}>menu</i></a>
                    </div>
                </div>
            </div>

            <ul id="slide-out" class="sidenav">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img alt='CAAV' src="http://significadodeloscolores.info/wp-content/uploads/2015/06/color-gris.jpg.webp" />
                        </div>
                        <a href="#user"><img class="circle" alt='CAAV' src={logo}/></a>
                        <a href="#name"><span class="white-text name">{user.nombre}</span></a>
                        <a href="#email"><span class="white-text email">{user.nombre}</span></a>
                        <button id="font-button" class="btn waves-effect waves-light" onClick={cerrarSesion} name="action" style={{padding:'0 50px 0 50px', background:'#881A1E'}}>Cerrar Sesion</button>
                    </div>
                </li>
                <Fragment>
                    <li><a href="/administradores">Administradores</a></li>
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

                    <li><a href="/formato-inscripcion">Formato de inscripción</a></li>
                    <li><a href="/cursos-diplomados">Cursos, talleres y diplomaods</a></li>
                    <li><a href="/licenciaturas/cine">Licenciatura Cine</a></li>
                    <li><a href="/licenciaturas/animacion">Licenciatura Animacion</a></li>
                    <li><a href="/licenciaturas/marketing">Licenciatura Marketing</a></li>
                    <li><a href="/licenciaturas/multimedia">Licenciatura Multimedia</a></li>
                    <li>---------------------------------------------------</li> 
                    <li><a href="/blogs-noticias">Blogs y noticias</a></li>
                </Fragment>
            </ul>
        </Fragment>
    );
};

export default SideNav;