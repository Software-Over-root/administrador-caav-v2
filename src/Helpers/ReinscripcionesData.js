import Swal from 'sweetalert2';

var url_json = require("../location.json");

if (window.location.origin === ":3000") {
    url_json = url_json.local;
} else {
    url_json = url_json.production;
}

const ReinscripcionesData = {
    obtenerData: async () => {
        let url = url_json + "/reinscripciones-data"
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
    obtenerUnData: async id => {
        let url = url_json + "/reinscripcion-data/" + id
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
    editarData: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar el campo?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let url = url_json + "/actualizar-reinscripcion-data/" + id;

                let body = {
                    archivado: data.archivado,
                    archivo: data.archivo,
                    celular: data.celular,
                    ciudad: data.ciudad,
                    colonia: data.colonia,
                    cuatrimestre: data.cuatrimestre,
                    domicilio: data.domicilio,
                    email: data.email,
                    empresa: data.empresa,
                    estadoAlumno: data.estadoAlumno,
                    fecha: data.fecha,
                    licenciatura: data.licenciatura,
                    nombre: data.nombre,
                    nombreMadre: data.nombreMadre,
                    nombrePadre: data.nombrePadre,
                    pago: data.pago,
                    telefonoEmergencia: data.telefonoEmergencia,
                    telefonoEmpresa: data.telefonoEmpresa
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
                        'Campop modificado correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se pudo modificar el campo' ,
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
    obtenerDataArchivo: async estado => {
        let url = url_json + "/reinscripciones-data-estado"
        let body = {
            estado
        };
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
}

export default ReinscripcionesData; 