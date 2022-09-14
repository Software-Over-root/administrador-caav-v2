import Swal from 'sweetalert2';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const ReinscripcionVista = {
    obtenerAspirantes: async id => {
        let url = url_json + "/aspirantes/" + id
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
    editarAspirantes: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar los datos de aspirantes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/actualizar-aspirantes/" + id;

                let body = {
                    evaluacion_costo: data.evaluacion_costo,
                    extraordinario: data.extraordinario,
                    repetir: data.repetir,
                    fecha_1: data.fecha_1,
                    fecha_2: data.fecha_2,
                    horario: data.horario,
                    inicio: data.inicio,
                    inscripcion_costo_1: data.inscripcion_costo_1,
                    inscripcion_costo_2: data.inscripcion_costo_2,
                    licenciatur_costo_1: data.licenciatur_costo_1,
                    licenciatur_costo_2: data.licenciatur_costo_2,
                    licenciatur_costo_3: data.licenciatur_costo_3,
                    total: data.total
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
                        'Datos de aspirantes modificados correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se dudieron modificar los datos de aspirantes' ,
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

export default ReinscripcionVista;