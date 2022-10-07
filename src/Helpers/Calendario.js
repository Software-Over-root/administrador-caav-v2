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

const Calendario = {
    agregarEvento: async (data) => {
        ReactDOM.render(
            <div className='loader_padre'>
                <Loader />
            </div>,
            document.getElementById("loader_padre")
        );

        let url = url_json + "/agregar-evento"
        let body = {
            dia: data.dia,
            mes: data.mes,
            anio: data.anio,
            fecha: data.fecha,
            color: data.color,
            evento: data.evento
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
              'Evento agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el evento, codigo: ' + res.code ,
                'error'
            ).then(() => {
                window.location.reload();
            })
        }
        return res;
    },
    obtenerEventos: async () => {
        let url = url_json + "/eventos"
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
    obtenerUnEvento: async id => {
        let url = url_json + "/evento/" + id
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
    editarEvento: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el evento?',
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

                let url = url_json + "/actualizar-evento/" + id;

                let body = {
                    dia: data.dia,
                    mes: data.mes,
                    anio: data.anio,
                    fecha: data.fecha,
                    color: data.color,
                    evento: data.evento
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
                        'Evento modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el evento' ,
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
    eliminarEvento: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar el evento?',
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
                
                let url = url_json + "/eliminar-evento/" + id;
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
                        'Evento eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar el evento' ,
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

export default Calendario;