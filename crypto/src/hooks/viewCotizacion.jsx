import React from 'react'
import styled from '@emotion/styled'
import ImageCrypto from '../img/cambio.png'

export const viewCotizacion = (cambio) => {

 


    const P = styled.p`

    display: flex;
    justify-content: space-between;
    
    text-align: right;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 30px;

    @media screen and (max-width: 420px){
      font-size: 14px;
    }
    
  `;

  const H1= styled.h3`
    text-align: center;

    @media screen and (max-width: 420px){
     margin-bottom: 3px;
    
   
    }

  `;

  const Span = styled.span`
 
    
  `;



const Contenedor = styled.div`

display: flex;
justify-content: space-between;
background-color: #0096C7;
width: 99%;
//max-width: 600px;
height: 200px;
color: white;
padding: 5px;

text-align: right;
margin-top: 10px;
border-radius: 5px;
font-family: 'Arimo', sans-serif;

@media screen and (max-width: 420px){
      
  height: 140px;
   
    }

`;

const ContenedorLetras = styled.div`

justify-content: space-between;
width: 50%;
max-width: 600px;
color: white;
padding: 20px;
margin-top: 20px;
margin-left: 30px;
text-align: right;
font-family: 'Arimo', sans-serif;

@media screen and (max-width: 420px){
      font-size: 12px;
      padding: 5px;
      margin-top: 10px;
      margin-left: 5px;
    }



`;

const Imagen = styled.img`
    max-width: 100px;
    margin-right: 50px;
    width: 100%;
    //display: block;

    @media screen and (max-width: 420px){
      max-width: 60px;
    margin-right: 25px;
   
    }
    
    
    

  `;

  const ContenedorImagen = styled.div`
  
    width: 100%;
    max-width: 200px;

    @media screen and (max-width: 420px){
      max-width: 120px;
    
   
    }
  `


  const Cotizacion = () =><>
   <Contenedor>
    <ContenedorImagen>
      <H1>
    {cambio.nombre} a {cambio.divisa}
    </H1>
    <Imagen
      src={ImageCrypto}
      
    />
    </ContenedorImagen>
    <ContenedorLetras>
    <P><span>Inicio:</span> {cambio.inicio}</P>
    <P><span>Ahora:</span> {cambio.ahora}</P>
    <P><span>Precio bajo:</span><Span>{cambio.bajo}</Span></P>
    </ContenedorLetras>



</Contenedor>
  </>



  return [Cotizacion]
}

export default viewCotizacion
