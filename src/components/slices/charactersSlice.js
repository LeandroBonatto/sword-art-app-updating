import { createSlice } from '@reduxjs/toolkit'

//Let me describe redux data flow:
//1. We click on a button that triggers an action
//2. The action is dispatched to the store (we need to provide type and payload)
//3. The store dispatches the action to all the reducers
//4. Correct reducer is called and the state is updated
//5. The component is re-rendered
export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characterList: [
        {
            name: "Goku", 
            health: 100, 
            fraction: "Saiyan", 
            weapon: "Ki", 
            damagePerHit: 25,
          },
          {
            name: "Bobrik", 
            health: 150, 
            fraction: "Random", 
            weapon: "Bow", 
            damagePerHit: 19,
          },
          {
            name: "Valera", 
            health: 80, 
            fraction: "Ukraine", 
            weapon: "Tanto", 
            damagePerHit: 15,
          },
        ],
    },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = charactersSlice.actions

export default charactersSlice.reducer