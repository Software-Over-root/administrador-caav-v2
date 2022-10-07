import Swal from 'sweetalert2';
import Loader from '../Components/Loader';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const Directorio = {
    obtenerTitulaciones: async () => {
        let url = url_json + "/titulaciones"
        let request = {
            method:'GET',
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }

        let response = await fetch(url, request);
        let json = await response.json();
        return json;
    },
    obtenerUnaTitulacion: async id => {
        let url = url_json + "/titulacion/" + id
        let request = {
            method:'GET',
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }

        let response = await fetch(url, request);
        let json = await response.json();
        return json;
    },
    editarTitulacion: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar la titulacion?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                ReactDOM.render(
                    <div className='loader_padre'>
                        <Loader />
                    </div>,
                    document.getElementById("loader_padre")
                );

                let url = url_json + "/actualizar-titulacion/" + id;

                let body = {
                    carpeta_investigacion: data.carpeta_investigacion,
                    carpeta_produccion: data.carpeta_produccion,
                    descripcion: data.descripcion,
                    licenciatura: data.licenciatura,
                    presentacion_final: data.presentacion_final,
                    cuatrimestre7: data.cuatrimestre7,
                    cuatrimestre8: data.cuatrimestre8,
                    cuatrimestre9: data.cuatrimestre9
                };
                let request = {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
        
                let response = await fetch(url, request);
                let res = await response.json();

                ReactDOM.render(
                    <Fragment></Fragment>,
                    document.getElementById("loader_padre")
                );
                
                if (res.success) {
                    Swal.fire(
                        'Modificación exitosa!',
                        'Titulacion modificada correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar la titulacion' ,
                        'error'
                    ).then(() => {
                        window.location.reload();
                    })
                }
                return res;
            } else if (result.isDenied) {
                Swal.fire(
                    'Modificación cancelada',
                    'El campo quedo intacto' ,
                    'succes'
                )
            }
        });
    }
}

export default Directorio;