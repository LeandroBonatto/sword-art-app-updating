import { InputGroup, Stack, InputLeftElement, Input, InputRightElement } from "@chakra-ui/react";
import { PhoneIcon, CheckIcon} from "@chakra-ui/react";
import React, { useState } from 'react'

export const AddCharacterScreen = () => {
  const [name, setName] = useState("");
    const [damage, setDamagePerHit] = useState(0);
    const [health, setHealth] = useState(0);
    const [fraction, setFraction] = useState("");
    const [weapon, setWeapon] = useState("");
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
      <button>Add character</button>
    </Stack>
  );
};
