import React, {createContext, useContext, useState} from 'react';
import {IntlProvider} from 'react-intl';

// tipos de usuarios
// 0 => general
// 1 => cursos y diplomados
// 2 => finanzas
// 3 => estudiantes/alumnos

const ContextGlobal = createContext();

export const useAuth = () => useContext(ContextGlobal);

export const ContextProvider = props => {
    const [user, setUser] = useState({nombre:"Financiero", tipo:1, id:"vacio", puesto:"Finanzas"});
    const [editar, setEditar] = useState({});
    const [caracteres, setCaracteres] = useState(0);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(false);

    //note: solo se usa en profesores para el tipo de profesor
    const [tipo, setTipo] = useState(0);

    const cambiarUsuario = (data) => {
        console.log("entro");
        console.log(data);
        setUser(data);
    }

    const value = {
        cambiarUsuario,
        setUser, 
        user, 
        setEditar, 
        editar, 
        setData, 
        data, 
        setIndex, 
        index, 
        setTipo, 
        tipo,
        setCaracteres,
        caracteres
    };

    return(
        <ContextGlobal.Provider value={value}>
            {props.children}
        </ContextGlobal.Provider>
    )
}