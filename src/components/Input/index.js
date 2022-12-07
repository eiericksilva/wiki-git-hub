import React from 'react'
import { InputContainer } from './styles'

const Input = (props) => {
  const { value, onChange } = props;

  return (
        <InputContainer>
            <input value={value} onChange={onChange} placeholder='name/project'/>
        </InputContainer>
  )
}

export default Input