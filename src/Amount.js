import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: "",
}

const amountSlice = createSlice({
    initialState,
    name: 'amount',
    reducers: {
        updateAmount(state, action) {
            state.amount = action.payload;
        }
    }
}) 

export const {updateAmount} = amountSlice.actions;

export default amountSlice.reducer; 