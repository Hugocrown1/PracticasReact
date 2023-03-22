import { useEffect, useState } from 'react';

import React from 'react'
import styled from '@emotion/styled'
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import {monedas} from '../data/monedas'
import Error from './Error';
import viewCotizacion from '../hooks/viewCotizacion';




export const Formulario = () => {
  const [error, setError] = useState(false);
  const [vista, setVista] = useState(false);

  const[cambio, setCambio] = useState([]);

  const [cryptos, setCryptos] = useState([]);

  const [moneda, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas);
  const [crypto, SelectorCrypto] = useSelectorMonedas('Elige tu crypto', cryptos);

  const[Cotizacion] = viewCotizacion(cambio)


  
 

  
  

  
  

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









useEffect(() => {
  setError(false);

  const consultarApi = async (divisa) => {
    if(['', '---'].includes(divisa)){
      divisa = 'USD'
    }
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${divisa}`; //Modificar la url y meter la moneda {USD}
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
  
  
    const arregloCryptos = resultado.Data.map(crypto => {
      
      const objeto = {
        divisa: divisa,
        id: crypto.CoinInfo.Name,
        nombre: crypto.CoinInfo.FullName,
        ahora: crypto.DISPLAY[divisa].PRICE,
        inicio: crypto.DISPLAY[divisa].OPENDAY,
        bajo: crypto.DISPLAY[divisa].LOWDAY
  
  
      }
  
      return objeto;
      
    });
      setCryptos(arregloCryptos);
     
  
  }


   
  consultarApi(moneda);
  
  
}, [moneda,crypto])


  const manejadorSubmit = e => {

    e.preventDefault();

    if (['', '---'].includes(moneda) || ['', '---'].includes(crypto)) {
      
      setError(true);
      setVista(false);
      
      return;
    }
    setVista(true);
    setError(false);

    function obtenerPrecioCriptomoneda(criptomoneda) {

      // Buscamos en el array el objeto que corresponde a la criptomoneda
      const objetoCriptomoneda = cryptos.find(objeto => objeto.id === criptomoneda);
    
      // Si el objeto no se encontró, devolvemos undefined
      if (!objetoCriptomoneda) {
        return undefined;
      }

      
    
     
      setCambio(objetoCriptomoneda);
      
    }

    obtenerPrecioCriptomoneda(crypto);



    return

    
  }
  
  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
    <form
      onSubmit={manejadorSubmit}
    >
      
        <SelectorCrypto/>
        <SelectorMonedas/>
        
        <InputSubmit 
        type="submit" 
        value="Cotizar" 
        />

      {vista && <Cotizacion/>}
        
    </form>
    </>
  )
}
