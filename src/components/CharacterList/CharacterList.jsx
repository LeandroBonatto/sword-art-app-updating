import React from 'react'
import { CharacterListItem } from './CharacterListItem/CharacterListItem';
import "./CharacterList.css"

// Props are passed to the component via attributes
export const CharacterList = (characters) => {
    //returns true if math.random is more than 0.5
    const isChampion = Math.random() > 0.5;
  return (
    <ul>
        {characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
        ))}
    </ul>
  );
};
