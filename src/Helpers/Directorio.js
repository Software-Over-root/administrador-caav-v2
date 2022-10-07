import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
import Loader from '../Components/Loader';
import { Fragment } from 'react';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const Directorio = {
    agregarDirectorio: async (data) => {
        ReactDOM.render(
            <div className='loader_padre'>
                <Loader />
            </div>,
            document.getElementById("loader_padre")
        );

        let url = url_json + "/agregar-directorio"
        let body = {
            correo: data.correo,
            nombre: data.nombre,
            numero: data.numero,
            posicion: data.posicion,
            puesto: data.puesto
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
              'Directorio agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el directorio, codigo: ' + res.code ,
                'error'
            )
        }
        return res;
    },
    obtenerDirectorios: async () => {
        let url = url_json + "/directorios"
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
    obtenerUnDirectorio: async id => {
        let url = url_json + "/directorio/" + id
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
    editarDirectorio: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el directorio?',
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

                let url = url_json + "/actualizar-directorio/" + id;

                let body = {
                    correo: data.correo,
                    nombre: data.nombre,
                    numero: data.numero,
                    posicion: data.posicion,
                    puesto: data.puesto
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
                        'Directorio modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el directorio' ,
                        'error'
                    ).then(() => {
                        window.location.reload();
                    })
                }
            } else if (result.isDenied) {
                Swal.fire(
                    'Modificación cancelada',
                    'El campo quedo intacto' ,
                    'succes'
                )
            }
        });
    },
    eliminarDirectorio: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar el directorio?',
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

                let url = url_json + "/eliminar-directorio/" + id;
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
                        'Directorio eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar el directorio',
                        'error'
                    )
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

export default Directorio;