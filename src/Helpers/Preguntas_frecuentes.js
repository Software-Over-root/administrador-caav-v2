import Swal from 'sweetalert2';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Loader from '../Components/Loader';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const Preguntas_frecuentes = {
    agregarPregunta: async (data) => {
        ReactDOM.render(
            <div className='loader_padre'>
                <Loader />
            </div>,
            document.getElementById("loader_padre")
        );

        let url = url_json + "/agregar-pregunta"
        let body = {
            pregunta: data.pregunta,
            respuesta: data.respuesta,
            campo: data.campo
        };
        let request = {
            method: 'POST',
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
              'Inserción exitosa!',
              'Pregunta agregada correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar la pregunta, codigo: ' + res.code ,
                'error'
            ).then(() => {
                window.location.reload();
            })
        }
        return res;
    },
    obtenerPreguntas: async () => {
        let url = url_json + "/preguntas-frecuentes"
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
    obtenerUnaPregunta: async id => {
        let url = url_json + "/pregunta/" + id
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
    editarPregunta: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar la pregunta?',
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

                let url = url_json + "/actualizar-preguntas/" + id;

                let body = {
                    pregunta: data.pregunta,
                    respuesta: data.respuesta,
                    campo: data.campo
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
                        'Pregunta modificada correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar la pregunta' ,
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
    },
    eliminarPregunta: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar la pregunta?',
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

                let url = url_json + "/eliminar-preguntas/" + id;
                let request = {
                    method: 'DELETE',
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
                        'Eliminación exitosa!',
                        'Pregunta eliminada correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar la pregunta' ,
                        'error'
                    ).then(() => {
                        window.location.reload();
                    })
                }
                return res;
            } else if (result.isDenied) {
                Swal.fire(
                    'Eliminación cancelada',
                    'El campo quedo intacto' ,
                    'succes'
                )
            }
        })
    }
}

export default Preguntas_frecuentes;