import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { getCharacters } from '../components/slices/charactersSlice';

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = () => { 
    const navigate = useNavigate();

    const isLoggedIn = useSelector((store: any) => state.login.isLoggedIn);

    const loading = useSelector((store: any) => state.login.isLoggedIn);
    const error = useSelector((store: any) => state.login.isLoggedIn);

    if(!isLoggedIn) {
        navigate("/");
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch]);

    return(
        <>
            <CharacterList />
            <CharacterSelection />
        </>
    );
};
