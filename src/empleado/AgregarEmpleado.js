import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { matchRoutes, useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {

    let navega = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre : "",
        apellido : "",
        direccion : "",
        area : "",
        cargo : "",
        sueldo : ""
    })

    const { nombre, apellido, direccion, area, cargo, sueldo } = empleado;

    const onInputChange = (e) =>{
        setEmpleado({...empleado, [e.target.name]:e.target.value})
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        const urlBase = "http://localhost:8080/rrhh-app/empleados"
        await axios.post(urlBase, empleado);
        navega('/')
    }

    return (
        <div className="container">
            <h3 className="bg-secondary w-100 text-center text-light p-3">
                Añadir Empleado
            </h3>

            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={(e)=>onInputChange(e)} required />
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Apellido" value={apellido} onChange={(e)=>onInputChange(e)} required />
                            <label htmlFor="apellido">Apellido</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Dirección" value={direccion} onChange={(e)=>onInputChange(e)} required />
                            <label htmlFor="direccion">Dirección</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="area" name="area" placeholder="Área" value={area} onChange={(e)=>onInputChange(e)} required  />
                            <label htmlFor="area">Área</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="cargo" name="cargo" placeholder="Cargo" value={cargo} onChange={(e)=>onInputChange(e)} required />
                            <label htmlFor="cargo">Cargo</label> 
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="sueldo" name="sueldo" placeholder="Sueldo" value={sueldo} onChange={(e)=>onInputChange(e)} required />
                            <label htmlFor="sueldo">Sueldo</label>
                        </div>
                    </div>
                </div>

                <div className="modal-footer mt-4">
                    <a href='/' className='btn btn-secondary mx-2'>Atras</a>
                    <button type="submit" className="btn btn-success">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}
