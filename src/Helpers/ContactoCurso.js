import Swal from 'sweetalert2';

var url_json = require("../../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const ContactoCurso = {
    agregarContacto: async (data) => {
        let url = url_json + "/agregar-contacto-curso"
        let body = {
            apellido: data.apellido,
            archivado: data.archivado,
            calle: data.calle,
            colonia: data.colonia,
            contacto: data.contacto,
            cp: data.cp,
            email: data.email,
            estado: data.estado,
            fecha: data.fecha,
            id_curso: data.id_curso,
            localidad: data.localidad,
            mensaje: data.mensaje,
            nombre: data.nombre,
            telefono: data.telefono
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
        if (res.success) {
            Swal.fire(
              'Inserción exitosa!',
              'Contacto agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el contacto, codigo: ' + res.code ,
                'error'
            ).then(() => {
                window.location.reload();
            })
        }
        return res;
    },
    obtenerContactos: async () => {
        let url = url_json + "/contacto-cursos"
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
    obtenerUnContacto: async id => {
        let url = url_json + "/contacto-curso/" + id
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
    editarContacto: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el contacto?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/actualizar-contacto-curso/" + id;

                let body = {
                    apellido: data.apellido,
                    archivado: data.archivado,
                    calle: data.calle,
                    colonia: data.colonia,
                    contacto: data.contacto,
                    cp: data.cp,
                    email: data.email,
                    estado: data.estado,
                    fecha: data.fecha,
                    id_curso: data.id_curso,
                    localidad: data.localidad,
                    mensaje: data.mensaje,
                    nombre: data.nombre,
                    telefono: data.telefono
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
                if (res.success) {
                    Swal.fire(
                        'Modificación exitosa!',
                        'Contacto modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el contacto' ,
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
    eliminarContacto: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar el contacto?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/eliminar-contacto-curso/" + id;
                let request = {
                    method: 'DELETE',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
        
                let response = await fetch(url, request);
                let res = await response.json();
                if (res.success) {
                    Swal.fire(
                        'Eliminación exitosa!',
                        'Contacto eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar el contacto' ,
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

export default ContactoCurso;