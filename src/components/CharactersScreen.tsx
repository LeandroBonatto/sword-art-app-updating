import React from 'react'
import { CharacterList } from "./CharacterList/CharacterList";
import { CharacterSelection } from "./CharacterSelection/CharacterSelection";

export const CharactersScreen = ({ characters }) => {
    return(
        <>
            <CharacterList characters={characters} />
            <CharacterList character={characters} />
        </>
    );
};
