

const Pacientes = ({indice, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fingreso,horaAgendar, sintomas, id}=indice
    //función para activar ventana emergente
    const handleEliminar =() =>{
      const respuesta = confirm('Desea eliminar esta cita?')
      if(respuesta){
        eliminarPaciente(id)
      }
    }
    return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:{' '} <span className="font-normal normal-case">{nombre}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            empresa:{' '} <span className="font-normal normal-case">{propietario}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email:{' '} <span className="font-normal normal-case">{email}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha a Agendar:{' '} <span className="font-normal normal-case">{fingreso}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            hora a agendar:{' '} <span className="font-normal normal-case">{horaAgendar}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Servicio a tomar:{' '} <span className="font-normal normal-case">{sintomas}</span>
          </p>
          <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-[#3bd12e] hover:bg-[#ec7c6a] font-bold uppercase text-white rounded-lg"
            onClick={()=> setPaciente(indice)}>
              Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase text-white rounded-lg" 
            onClick={()=>handleEliminar()}>
              Eliminar
            </button>
          </div>
        </div>
    )
  }
  
  export default Pacientes