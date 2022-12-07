import React from 'react'
import { ButtonContainer } from './styles'

const Button = (props) => {
  const { onClick } = props;
  return (
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
  )
}

export default Button