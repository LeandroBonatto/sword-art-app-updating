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
      <Input type='text' value={name} placeholder="Please enter a character name" />
      <Input type='text' value={fraction} placeholder="Please enter a character fraction" />
      <Input type='number' value={health} placeholder="Please enter a character health" />
      <Input 
        type="number"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit" 
      />
      <Input type='text' value={weapon} placeholder="Please enter a character weapon" />
      <button>Add character</button>
    </Stack>
  );
};
