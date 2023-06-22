
import { useState, useEffect } from 'react'
import Alerta from './Alerta'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState("")
  const [profesional, setProfesional] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [alerta, setAlerta] = useState(false)

  /*
  
  El useEffect se ejecuta una vez cuando se monta el componente, pero luego solo cambia cuando paciente haya cambiado [paciente]

  useEffect(() => {
    console.log(paciente)
  }, [paciente])

  */

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setProfesional(paciente.profesional)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  // Funcion para generar el id
  const generarId = () => {
    const fecha = Date.now()
    const random = Math.random().toString(36).substring(2)
    return fecha + random
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validacion de Formulario
    if([nombre, profesional, email, fecha, sintomas].includes("")) {
      setAlerta(true)
      return
    }
    setAlerta(false)

    // Objeto de paciente (se va a ir llenando cuando envíe el formulario)
    const objetoPaciente = {
      nombre, 
      profesional, 
      email, 
      fecha, 
      sintomas
    }
    
    if(paciente.id) {
      // Editamos 
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({}) // IMPORTANTE! Limpiamos el state

    } else {
      // Nuevo paciente
      objetoPaciente.id = generarId() // Como es un nuevo paciente, genero el ID
      // IMPORTANTE! 
      // Tenemos que tomar una copia de lo que YA EXISTE en arreglo
      setPacientes([...pacientes, objetoPaciente]) // Un arreglo NUEVO que se asigna a setPacientes()
    }

    

    // Reiniciar el formulario una vez que es enviado
    setNombre('')
    setProfesional('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className='md:w-1/2 lg:w-2/6 mb-8'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-center font-bold text-lg mt-3 mb-10'>Añade Pacientes y <span className='text-emerald-500'>Administralos</span></p>

        <form 
          className='bg-white shadow-md rounded-sm py-10 px-5 mx-2'
          onSubmit={handleSubmit}
        >

          {alerta ? <Alerta mensaje="Todos los campos son obligatorios" /> : ""}

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='nombre'>
              Nombre Paciente
            </label>
              
            <input 
              id='nombre'
              type="text" 
              placeholder="Nombre del Paciente"
              className='border-2 border-emerald-200 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
              value={nombre}
              onChange={ e => setNombre(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='profesional'>
              Nombre Profesional
            </label>
              
            <input 
              id='profesional'
              type="text" 
              placeholder="Nombre del Profesional"
              className='border-2 border-emerald-200 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
              value={profesional}
              onChange={ e => setProfesional(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>
              Email
            </label>
              
            <input 
              id='email'
              type="email" 
              placeholder="Correo Electrónico del Paciente"
              className='border-2 border-emerald-200 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
              value={email}
              onChange={ e => setEmail(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>
              Alta
            </label>
              
            <input 
              id='alta'
              type="date" 
              className='border-2 border-emerald-200 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
              value={fecha}
              onChange={ e => setFecha(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>
              Síntomas
            </label>
              
            <textarea 
              id='sintomas'
              className='border-2 border-emerald-200 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
              placeholder='Describe los síntomas'
              value={sintomas}
              onChange={ e => setSintomas(e.target.value) }
            />
          </div>

          <input 
            type="submit"
            value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }
            className='bg-emerald-600 hover:bg-emerald-800 focus:outline-none active:shadow-inner px-3 transition duration-200 ease-in-out cursor-pointer shadow-md font-semibold text-white uppercase w-full py-3 rounded-sm mb-5'
          />
        </form>

    </div>
  )
}

export default Formulario