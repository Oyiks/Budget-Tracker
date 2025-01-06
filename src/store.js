import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './users';
import goalsReducer from './Goals'
import incomeReducer from './Income';
import amountReducer from './Amount'
import expenseReducer from './expensesName';
import categoryReducer from './category';

const store = configureStore({
    reducer: {
        user: userReducer,
        goals: goalsReducer,
        income: incomeReducer,
        amount: amountReducer,
        expense: expenseReducer,
        category: categoryReducer,
    }
})

export default store;