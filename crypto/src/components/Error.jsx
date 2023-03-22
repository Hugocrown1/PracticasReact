import styled from '@emotion/styled'
import React from 'react'

export const Error = ({children}) => {
    const Texto = styled.div`
      background-color: red;
      color: white;
      padding: 15px;
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
      
    `;
  return (
    <Texto>{children}</Texto>
  )
}

export default Error