import React from 'react'
import { Text, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

export const CharacterSelection = ({ characters: any }) => {
  return (
    <Stack spacing={5}>
        <Text fontSize={"4xl"}>Select your champuons!</Text>
        <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
                {characters.map((character: any) => (
                    <Checkbox value={character.name} key={character.name}>
                        {character.name}
                    </Checkbox>
                ))}
            </Stack>
        </CheckboxGroup>
    </Stack>
  );
};
