import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const Contador = ({numero}) => {

    const [valor, setValor] = useState(numero)
  
    const handleAdd = (event) =>{ //Función de flecha facilita
        setValor(valor+1)
      
    }

    const resta = (event) =>{ //Función de flecha facilita
        setValor(valor-1)
      
    }

    const reset = (event) =>{ //Función de flecha facilita
        setValor(numero)
      
    }
    return (

   

    <div>
        <h1>Contador App</h1>
        

        <h2>{valor}</h2>

        <button onClick={handleAdd}>
            +1
            </button>

            <button onClick={resta}>
            -1
            </button>
            <button onClick={reset}>
            reset
            </button>


    </div>
  )
}

Contador.propTypes = {
    numero: PropTypes.number.isRequired,
    
}


export default Contador
