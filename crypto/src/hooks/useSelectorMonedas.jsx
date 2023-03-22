import React, { useState } from 'react'
import styled from '@emotion/styled'


export const useSelectorMonedas = (label,monedas,cryptos) => {

    const Label = styled.label`
        color: white;
        text-align: left;
        font-weight: 200;
        font-size: 16px;
        font-family: 'Arimo', sans-serif;
    `;


const Select = styled.select`
    width: 100%;
height: 25px;

background-color: #caf0f8;


margin-bottom: 10px;
color: black;
font-weight: 400;
border-radius: 5px;
   
    
   
  `;

const [state, setState] = useState('');

const SelectorCrypto = () => 
<>
<Label>{label}</Label>
<Select value={state}
    onChange={e => setState(e.target.value)}
    name="" id="">
    
    {cryptos.map(opcion =>(
        <option
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>
    ))}
</Select>

</>
  
const SelectorMonedas = () => 

<>
<Label>{label}</Label>
<Select value={state}
    onChange={e => setState(e.target.value)}
    name="" id="">
    <option>---</option>
    {monedas.map(opcion =>(
        <option
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>
    ))}
</Select>
</>




    
    
        
    

    return [ state, SelectorMonedas, SelectorCrypto];

}

export default useSelectorMonedas
