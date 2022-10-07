import React, { Fragment, useEffect, useState } from 'react';
import SideNav from '../../Components/SideNav';

import cursosHelper from "../../Helpers/Cursos";

import Loader from '../../Components/Loader';

const Cursos = () => {
    const [titulo, setTitulo] = useState("Cursos y Diplomados");
    const [flag, setFlag] = useState(false);
    const [cursos, setCursos] = useState(false);

    useEffect(() => {
        let ubicacion = window.location.pathname.split("/")[2];
        console.log(ubicacion);
        if (ubicacion === "1") {
            setTitulo("Artes visuales");
        } else if (ubicacion === "2") {
            setTitulo("Fotografía e imagen");
        } else if (ubicacion === "3") {
            setTitulo("Multimedia e internet");
        } else if (ubicacion === "4") {
            setTitulo("Video y cine");
        } else if (ubicacion === "5") {
            setTitulo("Diseño y publicidad");
        } else if (ubicacion === "6") {
            setTitulo("Animación y cómic");
        } else if (ubicacion === "7") {
            setTitulo("Escritura y guión");
        } else if (ubicacion === "8") {
            setTitulo("Audio y radio");
        } else {
            setTitulo("Cursos y Diplomados");
        }
    },[]);

    const obtenerCursos = async tipo => {
        console.log("obtener cursos");
    }

    return (
        <Fragment>
            <SideNav />
            <div className='container center'>
                <p className='titulo_solicitud' style={{textAlign:"center"}}>
                    {titulo}
                </p>
                {!flag ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <h1>Cursos</h1>
                )}
            </div>
        </Fragment>
    );
};

export default Cursos;