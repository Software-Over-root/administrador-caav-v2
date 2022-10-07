import Swal from 'sweetalert2';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const Cursos = {
    agregarCurso: async (data) => {
        let url = url_json + "/agregar-curso"
        let body = {
            animacion: data.animacion,
            artes: data.artes,
            audio: data.audio,
            cine: data.cine,
            classroom: data.classroom,
            costoNumero: data.costoNumero,
            costo_mensual: data.costo_mensual,
            costo_sabatino: data.costo_sabatino,
            costo_total: data.costo_total,
            costo_unico_pago: data.costo_unico_pago,
            curso: data.curso,
            cursoTipo: data.cursoTipo,
            cursos: data.cursos,
            descripcion: data.descripcion,
            descripcionResumen: data.descripcionResumen,
            diplomados: data.diplomados,
            escritura: data.escritura,
            fechas1dias: data.fechas1dias,
            fechas1duracion: data.fechas1duracion,
            fechas1fecha: data.fechas1fecha,
            fechas1horario: data.fechas1horario,
            fechas1sesiones: data.fechas1sesiones,
            fechas1tutor: data.fechas1tutor,
            fechas2dias: data.fechas2dias,
            fechas2duracion: data.fechas2duracion,
            fechas2fecha: data.fechas2fecha,
            fechas2horario: data.fechas2horario,
            fechas2sesiones: data.fechas2sesiones,
            fechas2tutor: data.fechas2tutor,
            fechasNumero: data.fechasNumero,
            fotografia: data.fotografia,
            gratis: data.gratis,
            hibrido: data.hibrido,
            linea: data.linea,
            multimedia: data.multimedia,
            nombre: data.nombre,
            presencial: data.presencial,
            programa: data.programa,
            publicidad: data.publicidad,
            archivo: data.archivo,
            talleres: data.talleres,
            video: data.video
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
                    animacion: data.animacion,
                    artes: data.artes,
                    audio: data.audio,
                    cine: data.cine,
                    classroom: data.classroom,
                    costoNumero: data.costoNumero,
                    costo_mensual: data.costo_mensual,
                    costo_sabatino: data.costo_sabatino,
                    costo_total: data.costo_total,
                    costo_unico_pago: data.costo_unico_pago,
                    curso: data.curso,
                    cursoTipo: data.cursoTipo,
                    cursos: data.cursos,
                    descripcion: data.descripcion,
                    descripcionResumen: data.descripcionResumen,
                    diplomados: data.diplomados,
                    escritura: data.escritura,
                    fechas1dias: data.fechas1dias,
                    fechas1duracion: data.fechas1duracion,
                    fechas1fecha: data.fechas1fecha,
                    fechas1horario: data.fechas1horario,
                    fechas1sesiones: data.fechas1sesiones,
                    fechas1tutor: data.fechas1tutor,
                    fechas2dias: data.fechas2dias,
                    fechas2duracion: data.fechas2duracion,
                    fechas2fecha: data.fechas2fecha,
                    fechas2horario: data.fechas2horario,
                    fechas2sesiones: data.fechas2sesiones,
                    fechas2tutor: data.fechas2tutor,
                    fechasNumero: data.fechasNumero,
                    fotografia: data.fotografia,
                    gratis: data.gratis,
                    hibrido: data.hibrido,
                    linea: data.linea,
                    multimedia: data.multimedia,
                    nombre: data.nombre,
                    presencial: data.presencial,
                    programa: data.programa,
                    publicidad: data.publicidad,
                    archivo: data.archivo,
                    talleres: data.talleres,
                    video: data.video
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
                        window.location.reload();
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
    }
}

export default Cursos;