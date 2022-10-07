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

const ReinscripcionVista = {
    obtenerLaReinscripcion: async id => {
        let url = url_json + "/reinscripcion/" + id
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
    editarReinscripcion: async (data, id) => {
        Swal.fire({
            icon: "question",
            title: '¿Esta seguro que desea modificar los datos de reinscripcion?',
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

                let url = url_json + "/actualizar-reinscripcion/" + id;

                let body = {
                    costo_materia: data.costo_materia,
                    costo_materia_atrasado: data.costo_materia_atrasado,
                    costo_materia_atrasado_2: data.costo_materia_atrasado_2,
                    costo_mensualidad: data.costo_mensualidad,
                    costo_mensualidad_atrasado: data.costo_mensualidad_atrasado,
                    costo_reinscripcion: data.costo_reinscripcion,
                    costo_reinscripcion_atrasada: data.costo_reinscripcion_atrasada,
                    costo_total: data.costo_total,
                    costo_unico_pago: data.costo_unico_pago,
                    fecha_fin_1: data.fecha_fin_1,
                    fecha_fin_2: data.fecha_fin_2,
                    fecha_fin_3: data.fecha_fin_3,
                    fecha_fin_4: data.fecha_fin_4,
                    horario_1: data.horario_1,
                    horario_2: data.horario_2,
                    inicio: data.inicio,
                    opcion: data.opcion
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
                        'Datos de reinscripcion modificados correctamente' ,
                        'success'
                    ).then(() => {
                        window.location.reload();
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'No se dudieron modificar los datos de reinscripcion' ,
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