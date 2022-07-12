import React from 'react'
import { Text, Checkbox, CheckboxGroup, Flex, Stack } from "@chakra-ui/react";

export const CharacterSelection = ({ characters }) => {
    const [heroesSelected, setHeroesSelected] = useState<array<string>>([]);
    const onHeroChanged = (event, hero: string) => {
        if (heroesSelected.includes(hero)) {
            setHeroesSelected(heroesSelected.filter((h) => h !== hero));
        } else {
            setHeroesSelected([...heroesSelected, hero]);
        }
    };
  return (
    <Flex justify={"center"}align={"center"} direction={"column"}>
        <Text fontSize={"4xl"}>Select your champions!</Text>
        <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {characters.map((character: any) => (
                <Checkbox 
                    isChecked = {heroesSelected.includes(character.name)}
                    onChange={(e) => onHeroChanged(e, character.name)}
                    value={character.name} 
                    key={character.name}
                    >
                    {character.name}
                </Checkbox>
                ))}
            </Stack>
        </CheckboxGroup>
    </Flex>
  );
};
