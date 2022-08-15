import { InputGroup, Stack, InputLeftElement, Input, InputRightElement, Alert, AlertIcon } from "@chakra-ui/react";
import { PhoneIcon, CheckIcon} from "@chakra-ui/react";
import React, { useState } from 'react'

export const AddCharacterScreen = () => {
    const [name, setName] = useState("");
    const [damagePetHit, setDamagePerHit] = useState(0);
    const [health, setHealth] = useState(0);
    const [fraction, setFraction] = useState("");
    const [weapon, setWeapon] = useState("");

    const validateValues =>

    const handleCharacterAdd = () => {
    }

    const alert = (
      <Alert status="error">
          <AlertIcon />
          Please make sure your imports are valid!
      </Alert>
  );
  return (
    <Stack spacing={4}>
    <Input 
      type='text' 
      value={name} 
      placeholder="Please enter a character name"
      onChange={(e) => setName(e.target.value)}
    />
    <Input 
      type='text' 
      value={fraction} 
      placeholder="Please enter a character fraction" 
      onChange={(e) => setFraction(e.target.value)}
    />
      <Input 
        type='number' 
        value={health} 
        placeholder="Please enter a character health" 
        onChange={(e) => setHealth(Number(e.target.value))}
      />
      <Input 
        type="number"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit" 
        onChange={(e) => setDamagePerHit(Number(e.target.value))}
      />
      <Input 
        type='text' 
        value={weapon}
        onChange={(e) => setWeapon(e.target.value)} 
        placeholder="Please enter a character weapon" 
      />
      <Button>Add character</Button>
    </Stack>
  );
};
