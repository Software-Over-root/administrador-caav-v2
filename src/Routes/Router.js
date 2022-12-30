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

// import Blogs from '../Views/Blogs/Blogs';
import CursosGeneral from '../Views/Cursos/General';
import Cursos from '../Views/Cursos/Cursos';
import Curso from '../Views/Cursos/Curso';


// import LicenciaturaCine from '../Views/Licenciaturas/Cine/Cine';
// import LicenciaturaAnimacion from '../Views/Licenciaturas/Animacion/Animacion';
// import LicenciaturaMarketing from '../Views/Licenciaturas/Marketing/Marketing';
// import LicenciaturaMultimedia from '../Views/Licenciaturas/Multimedia/Multimedia';

import SolicitudReinscripcion from '../Views/Solicitudes/Solicitud_reinscripcion/SolicitudReinscripcion';
import Solicitud from '../Views/Solicitudes/Solicitud/Solicitud';
import SolicitudInscripcion from '../Views/Solicitudes/Solicitud_inscripcion/SolicitudReinscripcion';
import SolicitudIns from '../Views/Solicitudes/Solicitud_ins/Solicitud';

import ArchivosReinscripcion from '../Views/AllArchivos/ArchivosReinscripcion/ArchivosReinscripcion';
import ArchivosInscripcion from '../Views/AllArchivos/ArchivosInscripcion/ArchivosReinscripcion';
import Archivos from '../Views/AllArchivos/Archivos/Archivos';
import Archivo from '../Views/AllArchivos/Archivo/Archivo';

import Estudiantes from '../Views/Estudiantes/Estudiantes';
import Horario from '../Views/Horarios/Horario';
import AgregarPdf from '../Views/AgregarPdf/AgregarPdf';

import Administradores from '../Views/Administradores/Administradores';
import EditarAdministrador from '../Views/Administradores/EditarAdministrador';
import AgregarAdministrador from '../Views/Administradores/AgregarAdmin';

import Etiquetas from '../Views/Etiquetas/Etiquetas';


const RouterFunction = () => {
    return (
        <BrowserRouter>
            <div id='loader_padre' />
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
                <Route path="/solicitud/:id" element={<Solicitud />} />
                <Route path="/solicitud-inscripciones" element={<SolicitudInscripcion />} />
                <Route path="/solicitud-inscripcion/:id" element={<SolicitudIns />} />

                <Route path="/archivos-reinscripciones" element={<ArchivosReinscripcion />} />
                <Route path="/archivos-inscripciones" element={<ArchivosInscripcion />} />
                <Route path="/archivos/:licenciatura" element={<Archivos />} />
                <Route path="/archivo" element={<Archivo />} />

                <Route path="/estudiantes" element={<Estudiantes />} />
                <Route path="/horario" element={<Horario />} />
                <Route path="/agregar-pdf" element={<AgregarPdf />} />

                <Route path="/administradores" element={<Administradores />} />
                <Route path="/administrador/:id" element={<EditarAdministrador />} />
                <Route path="/administrador-agregar" element={<AgregarAdministrador />} />

                {/* <Route path="/blogs" element={<Blogs />} /> */}

                <Route path="/cursos-diplomados" element={<CursosGeneral />} />
                <Route path="/cursos/:tipo" element={<Cursos />} />
                <Route path="/curso/:id" element={<Curso />} />

                <Route path="/etiquetas" element={<Etiquetas />} />


                {/* <Route path="/licenciaturas/cine" element={<LicenciaturaCine />} /> */}
                {/* <Route path="/licenciaturas/animacion" element={<LicenciaturaAnimacion />} /> */}
                {/* <Route path="/licenciaturas/marketing" element={<LicenciaturaMarketing />} /> */}
                {/* <Route path="/licenciaturas/multimedia" element={<LicenciaturaMultimedia />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterFunction;