import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer  from './users';
import goalsReducer from './Goals';
import incomeReducer from './Income';
import expenseReducer from './expensesName';
import amountReducer from './Amount';
import categoryReducer from './category'

const store = configureStore({ 
    reducer: {
        user: userReducer,
        goals: goalsReducer,
        income: incomeReducer,
        expense: expenseReducer,
        amount: amountReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;