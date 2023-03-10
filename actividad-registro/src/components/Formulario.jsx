import React from 'react'
//import '../styles/formularioStyle.css'

export const Formulario = () => {
  return (
    <div className='container'>
        <h1 className='encabezado'>FORMULARIO</h1>
        
        <section className='section'>
        

        
        <form>
            
            
            <input className='default-input'  type="Text" placeholder="Escribe tu nombre..." />
            <input className='default-input' type="Text" placeholder="Escribe tu apellido..."/>
            <input className='default-input' type="email" placeholder="Escribe tu correo..." />
            <input className='default-input' type="password" placeholder="Escribe tu contraseña..."/>
            
            <input className='myButton' type="button" value="Enviar" />
            
           
        </form>
        
        </section>

        
    
    </div>
  )
}

export default Formulario
