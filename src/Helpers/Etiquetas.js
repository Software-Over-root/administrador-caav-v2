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

const Eetiquetas = {
    agregarEtiqueta: async (data) => {
        ReactDOM.render(
            <div className='loader_padre'>
                <Loader />
            </div>,
            document.getElementById("loader_padre")
        );

        let url = url_json + "/agregar-etiqueta"
        let body = {
            nombre: data.nombre
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
              'Etiqueta agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar la etiqueta, codigo: ' + res.code ,
                'error'
            )
        }
        return res;
    },
    obtenerEtiquetas: async () => {
        let url = url_json + "/etiquetas"
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
    obtenerEtiquetasIDs: async (ids) => {
        let url = url_json + "/etiquetas-ids"
        let body = {
            ids
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
    },
    obtenerUnaEtiqueta: async id => {
        let url = url_json + "/etiqueta/" + id
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
    editarEtiqueta: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar la etiqueta?',
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

                let url = url_json + "/actualizar-etiqueta/" + id;

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
                        'Etiqueta modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar la etiqueta' ,
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
    eliminarEtiqueta: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar la etiqueta?',
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

                let url = url_json + "/eliminar-etiqueta/" + id;
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
                        'Etiqueta eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar la etiqueta',
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

export default Eetiquetas;