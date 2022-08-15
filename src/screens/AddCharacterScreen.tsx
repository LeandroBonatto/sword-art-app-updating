import { InputGroup, Stack, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { PhoneIcon, CheckIcon} from "@chakra-ui/react";
import React from 'react'

export const AddCharacterScreen = () => {
  return (
    <Stack spacing={4}>
      <Input type='text' placeholder="Please enter a character name" />
      <Input type='text' placeholder="Please enter a character fraction" />
      <Input type='number' placeholder="Please enter a character health" />

      <Input 
        type="number"
        placeholder="Please enter a character damage per hit" 
      />
      <Input type='number' placeholder="Please enter a character weapon" />
    </Stack>
  );
};
