import React from 'react'
import { Input } from '@chakra-ui/react'

type InputProps ={
    type: string,
    placeholder: string,
    id: string
}
const InputField = ({...props}: InputProps) => {
  return <Input />
}

export default InputField
