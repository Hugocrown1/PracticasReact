import React from 'react'
import Estudiante from './Estudiante'

export const Listado = ({estudiantes,setEstudiante, eliminarEstudiante}) => {
  
  return (
    <div className='md:w-1/2 p-[20px] bg-[#333333] rounded-md md:h-screen md:overflow-y-scroll'>
      <h1 className='font-bold text-center text-2xl text-white'>Listado de estudiantes</h1>
      
      { estudiantes.map((estudiante) =>(
      
      <Estudiante 
      
      eliminarEstudiante={eliminarEstudiante}
      key={estudiante.id} 
      estudiante={estudiante}
      setEstudiante={setEstudiante}

     
      />
      
))}
      
      
    
    </div>
  )
}
