import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    income: "",
}

const IncomeSlice = createSlice({
    initialState,
    name: 'income',
    reducers: {
        updateIncome(state, action) {
            state.income = action.payload;
        }
    }
}) 

export const {updateIncome} = IncomeSlice.actions;

export default IncomeSlice.reducer; 