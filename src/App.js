import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoEmpleados from "./empleado/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleado/AgregarEmpleado";


function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Navegacion/>
        <Routes>
            <Route exact path="/" element={<ListadoEmpleados/>}/>
            <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
