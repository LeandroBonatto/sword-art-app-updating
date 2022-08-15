import { InputGroup, Stack, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { PhoneIcon, CheckIcon} from "@chakra-ui/react";
import React from 'react'

export const AddCharacterScreen = () => {
  return (
    <Stack spacing={4}>
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<PhoneIcon color='gray.300' />}
      />
      <Input type='text' placeholder="Please enter a character name" />
    </InputGroup>

    <Stack spacing={4}>
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<PhoneIcon color='gray.300' />}
      />
      <Input type='text' placeholder="Please enter a character fraction" />
    </InputGroup>

    <Stack spacing={4}>
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<PhoneIcon color='gray.300' />}
      />
      <Input type='number' placeholder="Please enter a character health" />
    </InputGroup>
  
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children='$'
      />
      <Input placeholder='Enter amount' />
      <InputRightElement children={<CheckIcon color='green.500' />} />
    </InputGroup>
  </Stack>
  )
}
