import { Alert, AlertIcon, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addCharacter, Character } from "../components/slices/charactersSlice";
import { useNavigate } from "react-router-dom";

export const AddCharacterScreen = () => {
    const [name, setName] = useState("");
    const [damagePetHit, setDamagePerHit] = useState("");
    const [health, setHealth] = useState(0);
    const [fraction, setFraction] = useState("");
    const [weapon, setWeapon] = useState("");

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const validateValues = () => {
      const damage = parseInt(damagePetHit);
      const hp = parseInt(health);
      if (
        name.length === 0 || 
        damage < 0 || 
        hp < 0 ||
        fraction.length === 0 ||
        weapon.length === 0
        ) {
          setIsAlertVisible(true);
          return false;
        }
          return true;
      };

    const handleCharacterAdd = () => {
      if (!validateValues()){
        return;
      }
      setIsAlertVisible(false);
      const newCharacter = {
        name,
        damagePerHit: parseInt(damagePetHit),
        health: parseInt(health),
        fraction,
        weapon,
      };
      dispatch(addCharacter(newCharacter as Character));
      navigate("/characters");
    };

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
        type='text' 
        value={health} 
        placeholder="Please enter a character health" 
        onChange={(e) => SetHealth(e.target.value)}
    />
      <Input 
        type="text"
        value={damagePerHit}
        placeholder="Please enter a character damage per hit" 
        onChange={(e) => setDamagePerHit=(e.target.value)}
      />
      <Input 
        type='text' 
        value={weapon}
        onChange={(e) => setWeapon(e.target.value)} 
        placeholder="Please enter a character weapon" 
      />
      <Button>Add character</Button>
      {isAlertVisible && alert}
    </Stack>
  );
};
