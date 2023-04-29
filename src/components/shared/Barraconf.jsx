import React from "react";
import { RiCloseFill, RiDeleteBin6Line } from "react-icons/ri";

const Barraconf = (props) => {
  const { verCita, SetCita } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        verCita ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseFill
          onClick={() => SetCita(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl text-center my-4">LLENA CON TUS DATOS </h1>
        <h1 className="text-2xl text-center my-4"> y Confirmar cita </h1>
        {/* Pills */}
      
        {/* Car */}
        <div>
        
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] ">
            {/* Product */}
            <div className="bg-[#262837] rounded-xl mb-4 overflow-y-auto h-full">
              <div className="grid grid-cols-1 mb-5">
              
              <form className="mb-5 my-4 py-2 px-4">
    
      <div className="mb-5 ">
        <label htmlFor="mascota" className="block text-gray-700 
        uppercase font-bold">Nombre completo:</label>

        <input id="mascota" type="text" className="border-2 
        w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
        placeholder="Nombre completo"
       />
      </div>

      <div className="mb-5">
        <label htmlFor="propietario" 
        className="block text-gray-700 
        uppercase font-bold">Nombre del negocio:</label>

        <input id="propietario" type="text" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md"
          placeholder="Nombre del negocio a agendar"
          />
      </div>

      <div className="mb-5">
        <label htmlFor="email" 
        className="block text-gray-700 
        uppercase font-bold">Email de confirmacion:</label>

        <input id="email" type="email" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md" 
         placeholder="Email"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="fecha" 
        className="block text-gray-700 
        uppercase font-bold">Fecha a agendar:</label>

        <input id="fecha" type="date" 
        className="border-2 w-full p-2 mt-2
          rounded-md" 
          
         />
      </div>

      <div className="mb-5">
        <label htmlFor="hora" 
        className="block text-gray-700 
        uppercase font-bold">hora de agendar:</label>

        <input id="hora" type="time" 
        className="border-2 w-full p-2 mt-2
          rounded-md" 
         
         />
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" 
        className="block text-gray-700 
        uppercase font-bold">Servicio a tomar :</label>

        <textarea id="sintomas"  
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        placeholder="Servicio a tomar" 
       
         />
      </div>
      <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                AGENDAR:
                </button> 
  
    </form>




                
              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}

      </div>
    </div>
  );
};

export default Barraconf;