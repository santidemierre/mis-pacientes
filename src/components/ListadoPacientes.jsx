
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className='md:w-1/2 lg:w-4/6 md:h-screen overflow-x-scroll '>

      { pacientes.length === 0 ? (

        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>

          <p className='text-center font-bold text-lg mt-3 mb-10'>Comienza agregando <span className='text-emerald-500'>Pacientes</span></p>
        </>

      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
          
          <p className='text-center font-bold text-lg mt-3 mb-10'>Administra tus <span className='text-emerald-500'>Pacientes y Citas</span></p>

          { pacientes.map( paciente => (
            
            <Paciente 
              key={paciente.id} // Viene del componente Formulario
              paciente={paciente} // Objeto de paciente
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />

          )) }
        </>
      ) }

        

    </div>
  )
}

export default ListadoPacientes