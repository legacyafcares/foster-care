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
  return (<Input 
    borderColor={'black'} 
    focusBorderColor='green.600' 
    variant={'flushed'} 
    size={'lg'}
    className='w-3/5' 
    {...props}
  />)
}

export default InputField
