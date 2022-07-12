import React, { useState } from "react";
import { Text, Checkbox, CheckboxGroup, Flex, Stack, Button } 
from "@chakra-ui/react";

export const CharacterSelection = ({ characters }) => {
    const [heroesSelected, setHeroesSelected] = useState<Array<string>>([]);
    //By using onChange handler we react to the change of the checkbox and either add or
    //remove the value from the state array 
    const onHeroChanged = (event) => {
        const hero = event.target.value;
        if (heroesSelected.includes(hero)) {
            setHeroesSelected(heroesSelected.filter((h) => h !== hero));
        } else {
            setHeroesSelected([...heroesSelected, hero]);
        }
    };
    console.log(heroesSelected);
  return (
    <Flex justify={"center"}align={"center"} direction={"column"}>
        <Text fontSize={"4xl"}>Select your champions!</Text>
        <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {characters.map((character: any) => (
                    <Checkbox 
                        isChecked = {heroesSelected.includes(character.name)}
                        onChange={onHeroChanged}
                        value={character.name} 
                        key={character.name}
                        >
                        {character.name}
                    </Checkbox>
                ))}
            </Stack>
        </CheckboxGroup>
        <Button mt={"3%"} colorScheme="red" variant="solid">
        Start the battle!
        </Button>
    </Flex>
  );
};
