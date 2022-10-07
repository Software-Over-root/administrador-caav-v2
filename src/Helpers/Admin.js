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

const Admins = {
    agregarAdmin: async (data) => {
        ReactDOM.render(
            <div className='loader_padre'>
                <Loader />
            </div>,
            document.getElementById("loader_padre")
        );

        let url = url_json + "/agregar-admin"
        let body = {
            correo: data.correo,
            password: data.password,
            tipo: data.tipo,
            tipoMostrar: data.tipoMostrar
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
              'Administrador agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.replace("/administradores");
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el administrador, codigo: ' + res.code ,
                'error'
            ).then(() => {
                window.location.reload();
            })
        }
        return res;
    },
    obtenerAdmins: async () => {
        let url = url_json + "/admins"
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
    obtenerUnAdmin: async id => {
        let url = url_json + "/admin/" + id
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
    editarAdmin: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el administrador?',
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

                let url = url_json + "/actualizar-admin/" + id;

                let body = {
                    correo: data.correo,
                    password: data.password,
                    tipo: data.tipo,
                    tipoMostrar: data.tipoMostrar
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
                        'Administrador modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.replace("/administradores");
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el administrador' ,
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
    eliminarAdmin: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar el administrador?',
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

                let url = url_json + "/eliminar-admin/" + id;
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
                        'Administrador eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar el administrador' ,
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
    },
    login: async (correo, password) => {
        let url = url_json + "/login"
        let body = {
            correo,
            password
        };
        let request = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        let response = await fetch(url, request);
        let json = await response.json();
        return json;
    }
}

export default Admins;