/* De este componente salen los datos hacia los demas componentes */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {

  const [ pacientes, setPacientes ] = useState([]) // Tiene todo el estado con el arreglo de pacientes

  // Lo creo para EDITAR
  const [ paciente, setPaciente ] = useState({}) // cada paciente es un objeto, por eso arranca con un objeto vacio {}

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS()

  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  // Eliminar un paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      {/* Para poder aplicarle flexbox y separar los componentes en 2 mitades */}
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente} // Para que aparezca la información en el formulario del objeto al cual queremos editar le pasamos el objeto paciente
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}    
          eliminarPaciente={eliminarPaciente}     
        />
      </div>
    </div>
  )
}

export default App