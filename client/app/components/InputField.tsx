import React from 'react'
import { Input } from '@chakra-ui/react'

type InputProps ={
    type: string,
    placeholder?: string,
    id?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const InputField = ({...props}: InputProps) => {
  return <Input borderColor={'black'} focusBorderColor='orange.600'/>
}

export default InputField
