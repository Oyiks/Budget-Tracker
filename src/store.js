import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './users';
import goalsReducer from './Goals'
import incomeReducer from './Income';
import amountReducer from './Amount'

const store = configureStore({
    reducer: {
        user: userReducer,
        goals: goalsReducer,
        income: incomeReducer,
        amount: amountReducer,
    }
})

export default store;