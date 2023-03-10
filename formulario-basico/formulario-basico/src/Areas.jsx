import React, { useState } from 'react'

const Areas = ({ladoC,baseR,alturaR,baseT,alturaT}) => {

    const[area, setArea] = useState()
    
    const[mensaje, setMensaje] = useState()

    const handleCuadrado = (event) =>{ //Función que saca el area del cuadrado
        setArea(ladoC*ladoC)
        setMensaje('El área del cuadrado es:')
        
    }

    const handleTriangulo = (event) =>{ //Función que saca el area del triangulo
        setArea((baseT*alturaT)/2)
        setMensaje('El área del triángulo es:')
        
    }

    const handleRectangulo = (event) =>{ //Función que saca el area del rectangulo
        setArea(baseR*alturaR)
        setMensaje('El área del rectángulo es:')
        
    }

    const reset = (event) =>{ //Función que saca el area del rectangulo
        setArea(null)
        setMensaje(null)
        
    }
    return (

        
    <div>
        Áreas

            <h1>
            <button class='defaultButton' onClick={handleCuadrado}>Cuadrado</button>
            <button class='defaultButton' onClick={handleTriangulo}>Triángulo</button>
            <button class='defaultButton' onClick={handleRectangulo}>Rectángulo</button>
            <button class='myButton' onClick={reset}>Reiniciar</button>
            </h1>
            <h2>
                {mensaje}
            </h2>
            <h3>
            {area}
            </h3>
            
        
    </div>
    

  )
}



export default Areas