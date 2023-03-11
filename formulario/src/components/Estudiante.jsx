import React from 'react'

export default function Estudiante({estudiante, setEstudiante, eliminarEstudiante}) {
  console.log(estudiante)
  const {nombre,carrera,semestre,promedio}=estudiante;

  

  return (
    <div className='mt-2 mb-3 pl-3 py-5 bg-[#48e5c2] shadow-lg rounded-md'>
        <p className='font-bold mb-2 uppercase'>Nombre: <span className='font-normal normal-case ml-3'>{nombre}</span> </p>
        <p className='font-bold mb-2 uppercase'>Carrera: <span className='font-normal normal-case ml-3'>{carrera}</span> </p>
        <p className='font-bold mb-2 uppercase'>Semestre: <span className='font-normal normal-case ml-3'>{semestre}</span> </p>
        <p className='font-bold mb-2 uppercase'>Promedio: <span className='font-normal normal-case ml-3'>{promedio}</span> </p>
        <div>
          <button type='button'
          className='bg-[#f1515e] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mr-2'
          onClick={() => eliminarEstudiante(estudiante.id)}
          >ELIMINAR</button>
          <button type='button'
          className='bg-[#00a6ed] hover:bg-[#2584ac] text-white font-bold py-2 px-4 rounded-md'
          onClick={()=>setEstudiante(estudiante)}
          >MODIFICAR</button>
        </div>
      </div>
  )
}
