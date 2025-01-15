import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    initialState: {
        expense: []
    },
    name: 'expense',
    reducers: {
        addExpense(state, action) {
            state.expense = [...state.expense, action.payload]
        },
        removeExpense(state, action) {
           state.expense = state.expense.filter((item) => item.id !== action.payload.id); 
        
        }
    }
}) 

export const {addExpense, removeExpense} = expenseSlice.actions;

export default expenseSlice.reducer; 