
/* setPaciente viene de App. Cuando de click en el boton EDITAR se va a llenar el objeto que tengo en el App 
El objeto de paciente tambien lo tenemos, viene de ListadoPacientes
*/

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, profesional, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm("¿Seguro que deseas eliminar este paciente?")

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className='m-3 bg-white shadow-md px-5 py-5 rounded-sm'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Paciente: <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre Profesional: <span className='font-normal normal-case'>{profesional}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Correo Electrónico: <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
        Alta: <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold text-gray-700 uppercase mb-6'>
        Síntomas: <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 text-white py-2 px-4 rounded-md shadow-md transition-all duration-300 font-semibold uppercase"
            onClick={() => setPaciente(paciente)} // Se utiliza el arrow function porque recibe un parámetro, el objeto. Si no tuviera el parametro, se podria poner solo setPaciente, sin el parentecis ya que espera a que sucesa el click para ejecutarse.
          >
            Editar
          </button>

          <button
            type="button"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-400 text-white py-2 px-4 rounded-md shadow-md transition-all duration-300 font-semibold uppercase"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>

    </div>
  )
}

export default Paciente