import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './users';
import goalsReducer from './Goals'
import incomeReducer from './Income';
import amountReducer from './Amount'
import expenseReducer from './expensesName';

const store = configureStore({
    reducer: {
        user: userReducer,
        goals: goalsReducer,
        income: incomeReducer,
        amount: amountReducer,
        expense: expenseReducer,
    }
})

export default store;