import React from 'react'
import Estudiante from './Estudiante'

export const Listado = ({estudiantes,setEstudiante}) => {
  
  return (
    <div className='md:w-1/2 p-[20px] bg-[#CBBAED] rounded-md md:h-screen md:overflow-y-scroll'>
      <h1 className='font-bold text-center text-lg'>Listado de estudiantes</h1>
      
      { estudiantes.map((estudiante) =>(
      
      <Estudiante 
      
      key={estudiante.id} 
      estudiante={estudiante}
      setEstudiante={setEstudiante}
      />
      
))}
      
      
    
    </div>
  )
}
