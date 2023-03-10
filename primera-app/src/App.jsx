import Horario from "./Horario"
import Portada from "./Portada"
import Contador from "./Contador"
function App() {
  

  return (
    <div>
      <Portada titulo='Eso tilin'fecha={2023}/>
      <Horario />
      <Contador numero={21}/>
    </div>
  )
}

export default App
