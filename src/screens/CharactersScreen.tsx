import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { getCharacters } from '../components/slices/charactersSlice';

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = () => { 
    const navigate = useNavigate();

    const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn);
    if(!isLoggedIn) {
        navigate("/");
    }


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters())

        return () => {
            second
        }
    }, [third])

    return(
        <>
            <CharacterList />
            <CharacterSelection 

            />
        </>
    );
};
