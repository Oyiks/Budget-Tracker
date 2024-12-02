import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goals: "",
}

const goalSlice = createSlice({
    initialState,
    name: 'goals',
    reducers: {
        updateGoals(state, action) {
            state.goals = action.payload;
        }
    }
}) 

export const {updateGoals} = goalSlice.actions;

export default goalSlice.reducer; 