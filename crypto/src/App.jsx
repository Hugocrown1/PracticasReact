import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from '@emotion/styled'
import ImageCrypto from './img/logochido.png'
import { Formulario } from './Formulario'
import './App.css'

function App() {
  
  const Heading = styled.h1`
  font-family: 'Arimo', sans-serif;
  color: #edf2fb;
  margin-top: 80px;
  margin-bottom: 25px;
  font-size: 34px;
  &::after{
    content:'';
    width: 560px;
    height: 3px;
    background-color: #1f5fbe;
    display: block;
    margin: 10px auto;

  }
  `;

  const Imagen = styled.img`
    max-width: 400px;
    width: 100%;
    margin: 100px auto 0 auto;
    display: block;
    

  `

  const Contenedor = styled.div`
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
    width: 90%;
    @media(min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 2px;
    }
  `;

  const ContenedorTexto = styled.div`
    margin: 100px auto;
  
  `

  //Hacer 2 droplist

  return (
    <Contenedor>
    <Imagen
      src={ImageCrypto}
      alt='Cripto changos'
    />
    <ContenedorTexto>
    <Heading>BIENVENIDOS A COMPUMUNDOHIPERMEGARED</Heading>
    <Formulario></Formulario>
    </ContenedorTexto>
    
    </Contenedor>
    
  )
}

export default App
