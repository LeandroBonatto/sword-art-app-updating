import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { getCharacters } from '../components/slices/charactersSlice';
import { useAppDispatch } from '../hooks/redux';

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = () => { 
    const navigate = useNavigate();

    const isLoggedIn = useSelector((store: any) => state.login.isLoggedIn);

    const loading = useSelector((store: any) => state.login.isLoggedIn);
    const error = useSelector((store: any) => state.login.isLoggedIn);
    const dispatch = useAppDispatch();

    if(!isLoggedIn) {
        navigate("/");
    }

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error: {error.message}</div>
    }
    

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
