import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
}

const amountSlice = createSlice({
    initialState,
    name: 'amount',
    reducers: {
        updateAmount(state, action) {
            state.amount += Number(action.payload);
        }
    }
}) 

export const {updateAmount} = amountSlice.actions;

export default amountSlice.reducer; 