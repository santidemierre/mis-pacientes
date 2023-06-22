
const Alerta = ({mensaje}) => {
  return (
    <div class="bg-red-500 text-white p-3 mb-4 shadow-lg rounded-sm">
        <p className='text-center text-yellow-200 font-black text-xs uppercase'>{mensaje}</p>
    </div>
  )
}

export default Alerta