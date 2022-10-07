import { ContextProvider } from "./Context/Context";
import Router from "./Routes/Router";

// note: cursos
// note: hay 8 tipos de cursos los cuales son los siguentes:
// 1 => artes visuales
// 2 => fotografia e imagen
// 3 => multimedia e internet
// 4 => video y cine
// 5 => diseño y publicidad
// 6 => animacion y comic
// 7 => escritura y guion
// 8 => audio y radeo

// note: hay 4 tipos de modalidades
//  1 => presencial
//  2 => hibrido
//  3 => videorreunion
//  4 => google classroom

// note: hay 3 tipos de formatos
//  1 => talleres
//  2 => cursos
//  3 => diplomados

function App() {
  return (
    <ContextProvider>
      <Router/>
    </ContextProvider>
  );
}

export default App;
