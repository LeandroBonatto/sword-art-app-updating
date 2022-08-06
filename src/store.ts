import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../slices/charactersSlice";
import loginReducer from "../slices/loginSlice";

//Redux store is a single source of truth for the application state
//Note: we can still combine react useState and redux store
//that we dont share and that is managed by component itself, we can use simple useState
//1. We need to create the store
//2. We need to provide redux store to React
export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        login: loginReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UserState}
export type AppDispatch = typeof store.dispatch

