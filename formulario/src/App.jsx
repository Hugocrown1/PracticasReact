
import { useEffect, useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { Listado } from './components/Listado'

function App() {
  //Para tener la lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  //Aqui se almacena el estudiante a modificar
  const [estudiante, setEstudiante] = useState({});

  const eliminarEstudiante = (idEstudiante) => {
    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.id !== idEstudiante)
    setEstudiantes(estudiantesFiltrados)
    setEstudiante({})
  }

  

  return (

   <div className='container mx-auto'>
   <Header/>
   <div className='mt-12 md:flex gap-3 mx-8'>
   <Formulario
    estudiantes={estudiantes}
    setEstudiante={setEstudiante}
    setEstudiantes={setEstudiantes}
    estudiante={estudiante}
   />
   <Listado 
    estudiantes={estudiantes}
    setEstudiante={setEstudiante}
    eliminarEstudiante={eliminarEstudiante}

  
   
   />
   </div>
   
   </div>
  )
}

export default App
