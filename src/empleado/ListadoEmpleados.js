import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ListadoEmpleados() {
    const urlBase = "http://localhost:8080/rrhh-app/empleados";

    const [empleado, setEmpleado] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        setEmpleado(resultado.data);
    }
    return (
        <div className='container'>
            <div>
                <h3 className=' bg-secondary w-100 text-center text-light p-3'>
                    Sistema de Recursos Humanos
                </h3>

                <table className="table table-striped table-hover align-middle mt-3 container">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Área</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Sueldo</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            empleado.map((empleado, indice) => (
                                <tr key={indice}>
                                    <th scope="row">{empleado.idEmpleado}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.direccion}</td>
                                    <td>{empleado.area}</td>
                                    <td>{empleado.cargo}</td>
                                    <td>{empleado.sueldo}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                
            </div>
        </div>
    )
}
