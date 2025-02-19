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
        },
        editItem: (state, action) => {
            const { id, updatedItem } = action.payload;
            const index = state.expense.findIndex(item => item.id === id);
            if (index !== -1) {
              state.expense[index] = { ...state.expense[index], ...updatedItem };
        }
      },
    },
});

export const {addExpense, removeExpense, editItem} = expenseSlice.actions;

export default expenseSlice.reducer; 