import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            return {
                isLoggedIn: action.payload,
            }
        }
    }
});