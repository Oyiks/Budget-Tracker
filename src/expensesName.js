import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expense: "Medical",
}

const expenseSlice = createSlice({
    initialState,
    name: 'expense',
    reducers: {
        updateExpense(state, action) {
            state.expense = action.payload;
        }
    }
}) 

export const {updateExpense} = expenseSlice.actions;

export default expenseSlice.reducer; 