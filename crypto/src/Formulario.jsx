import React from 'react'
import styled from '@emotion/styled'
import useSelectorMonedas from './hooks/useSelectorMonedas';
import {monedas} from './data/monedas'



export const Formulario = () => {
    const InputSubmit = styled.input`
    background-color: #023e8a;
    border: none;
    height: 30px;
    width: 100%;
    color: #edf2fb;
    font-family: 'Arimo', sans-serif;
    font-weight: 800;
    font-size: 22px;
    border-radius: 6px;
    transition: background-color .3s ease;
`;


  

  const [state, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  

  

  return (
    <form>

        <SelectorMonedas/>
        {state}

        
        <InputSubmit 
        type="submit" 
        value="Cotizar" 
        />
    </form>
  )
}
