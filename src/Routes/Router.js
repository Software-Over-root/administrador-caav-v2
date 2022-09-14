// fixme: falta agregar blogs, se supone que estan comentados pero falta hacerlos

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from '../Views/Login';

import Index from '../Views/Index/Index';
import Directorio from '../Views/Directorio/Directorio';
import Profesores from '../Views/Profesores/Profesores';
import Calendario from '../Views/Calendario/Calendario';
import Reinscripcion from '../Views/Reinscripcion/Reinscripcion';
import Titulacion from '../Views/Titulacion/Titulacion';
import Admision from '../Views/Admision/Aspirantes';
// import Becas from '../Views/Beca/Becas';
import FAQs from '../Views/FAQs/Preguntas';


// import LicenciaturaCine from '../Views/Licenciaturas/Cine/Cine';
// import LicenciaturaAnimacion from '../Views/Licenciaturas/Animacion/Animacion';
// import LicenciaturaMarketing from '../Views/Licenciaturas/Marketing/Marketing';
// import LicenciaturaMultimedia from '../Views/Licenciaturas/Multimedia/Multimedia';

import SolicitudReinscripcion from '../Views/Solicitud_reinscripcion/SolicitudReinscripcion';
import Solicitud from '../Views/Solicitud/Solicitud';
import ArchivosReinscripcion from '../Views/ArchivosReinscripcion/ArchivosReinscripcion';
import Archivos from '../Views/Archivos/Archivos';
import Archivo from '../Views/Archivo/Archivo';

import Estudiantes from '../Views/Esrudiantes/Estudiantes';
import Horario from '../Views/Horarios/Horario';
import AgregarPdf from '../Views/AgregarPdf/AgregarPdf';

const RouterFunction = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/index" element={<Index />} />
                <Route path="/directorio" element={<Directorio />} />
                <Route path="/profesores" element={<Profesores />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/reinscripcion" element={<Reinscripcion />} />
                <Route path="/titulaciones" element={<Titulacion />} />
                {/* <Route path="/becas" element={<Becas />} /> */}
                <Route path="/preguntas-frecuentes" element={<FAQs />} />
                <Route path="/proceso-admision" element={<Admision />} />

                <Route path="/solicitud-reinscripciones" element={<SolicitudReinscripcion />} />
                <Route path="/solicitud" element={<Solicitud />} />
                <Route path="/archivos-reinscripciones" element={<ArchivosReinscripcion />} />
                <Route path="/archivos" element={<Archivos />} />
                <Route path="/archivo" element={<Archivo />} />

                <Route path="/estudiantes" element={<Estudiantes />} />
                <Route path="/horario" element={<Horario />} />
                <Route path="/agregar-pdf" element={<AgregarPdf />} />

                {/* <Route path="/licenciaturas/cine" element={<LicenciaturaCine />} /> */}
                {/* <Route path="/licenciaturas/animacion" element={<LicenciaturaAnimacion />} /> */}
                {/* <Route path="/licenciaturas/marketing" element={<LicenciaturaMarketing />} /> */}
                {/* <Route path="/licenciaturas/multimedia" element={<LicenciaturaMultimedia />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterFunction;