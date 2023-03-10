
//import './App.css'
import { Cabecera } from './components/Cabecera'
import { Formulario } from './components/Formulario'
import { Registros } from './components/registros'

function App() {
  

  return (
    <>
    
    <Cabecera titulo='Registro Estudiantes'/>
    <div className='appDiv'>
    <Formulario/><Registros/>
    </div>
    
    
    </>
   
  )
}

export default App
