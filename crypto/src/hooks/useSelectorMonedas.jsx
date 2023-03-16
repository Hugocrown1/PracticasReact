import React, { useState } from 'react'
import styled from '@emotion/styled'


export const useSelectorMonedas = (label, monedas) => {

    const Label = styled.label`
        color: white;
    `;

const DropDown = styled.select`
width: 100%;
height: 25px;
background-color: #caf0f8;


margin-bottom: 10px;
color: black;
font-weight: 400;
border-radius: 5px;
`
const [state, setState] = useState('');
  
const SelectorMonedas = () => 
<>
<Label>{label}</Label>

<select value={state}
    onChange={e => setState(e.target.value)}
    name="" id="">
    <option>Seleccione una divisa</option>
    {monedas.map(opcion =>(
        <option
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>
    ))}
</select>
</>

    
    
        
    

    return [ state, SelectorMonedas];

}

export default useSelectorMonedas
