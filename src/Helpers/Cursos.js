import Swal from 'sweetalert2';

var url_json = require("../location.json");

console.log(window.location);
if (window.location.origin === "http://localhost:3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

console.log(url_json);

const Cursos = {
    agregarCurso: async (data) => {
        let url = url_json + "/agregar-curso"
        let body = {
            area: data.area,
            carrusel_imagenes: data.carrusel_imagenes,
            contenido: data.contenido,
            data_pago: data.data_pago,
            descripcion_externa: data.descripcion_externa,
            descripcion_interna: data.descripcion_interna,
            etiquetas: data.etiquetas,
            fecha_fin: data.fecha_fin,
            fecha_inicio: data.fecha_inicio,
            fecha_relampago: data.fecha_relampago,
            fechas: data.fechas,
            formato_pago: data.formato_pago,
            formato: data.formato,
            gratis: data.gratis,
            hora_fin: data.hora_fin,
            hora_inicio: data.hora_inicio,
            imagen_externa: data.imagen_externa,
            imagen_gif: data.imagen_gif,
            imagen_indvidual: data.imagen_indvidual,
            imagen_interna: data.imagen_interna,
            modalidad: data.modalidad,
            nivel: data.nivel,
            nombre: data.nombre,
            oferta_relampago: data.oferta_relampago,
            requisitos: data.requisitos
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
              'Curso agregado correctamente' ,
              'success'
            ).then(() => {
              window.location.reload();
            })
        } else {
            Swal.fire(
                'Error!',
                'No se pudo guardar el curso, codigo: ' + res.code ,
                'error'
            ).then(() => {
                window.location.reload();
            })
        }
        return res;
    },
    obtenerCursos: async () => {
        let url = url_json + "/cursos"
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
    obtenerUnCurso: async id => {
        let url = url_json + "/curso/" + id
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
    editarCurso: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el curso?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/actualizar-curso/" + id;
                let body = {
                    area: data.area,
                    carrusel_imagenes: data.carrusel_imagenes,
                    contenido: data.contenido,
                    data_pago: data.data_pago,
                    descripcion_externa: data.descripcion_externa,
                    descripcion_interna: data.descripcion_interna,
                    etiquetas: data.etiquetas,
                    fecha_fin: data.fecha_fin,
                    fecha_inicio: data.fecha_inicio,
                    fecha_relampago: data.fecha_relampago,
                    fechas: data.fechas,
                    formato_pago: data.formato_pago,
                    formato: data.formato,
                    gratis: data.gratis,
                    hora_fin: data.hora_fin,
                    hora_inicio: data.hora_inicio,
                    imagen_externa: data.imagen_externa,
                    imagen_gif: data.imagen_gif,
                    imagen_indvidual: data.imagen_indvidual,
                    imagen_interna: data.imagen_interna,
                    modalidad: data.modalidad,
                    nivel: data.nivel,
                    nombre: data.nombre,
                    oferta_relampago: data.oferta_relampago,
                    requisitos: data.requisitos
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
                        'Curso modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                        // window.location.replace("/cursos-diplomados");
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el curso' ,
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
    eliminarCurso: async id => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea eliminar el curso?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/eliminar-curso/" + id;
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
                        'Curso eliminado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.replace("/cursos-diplomados");
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo eliminar el curso' ,
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
    obtenerUnCursoArea: async area => {
        let url = url_json + "/obtener-curso-area"
        let body = {
            area
        }
        let request = {
            method:'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }

        let response = await fetch(url, request);
        let json = await response.json();
        return json;
    },
    obtenerUnCursoNombre: async nombre => {
        let url = url_json + "/obtener-curso-nombre/" + nombre
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
}

export default Cursos;