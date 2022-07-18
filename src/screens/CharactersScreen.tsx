import React from 'react';
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = ({ 
    characters, 
    setFightStart, 
    setBattleCharacters,
    isLoggedIn,
}) => {
    const navigate = useNavigate();

    if(!isLoggedIn) {
        navigate("/login");
    }
    return(
        <>
            <CharacterList characters={characters} />
            <CharacterSelection 
            characters={characters} 
            setBattleCharacters={setBattleCharacters} 
            />
        </>
    );
};
