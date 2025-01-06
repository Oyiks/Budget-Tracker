import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
}

const CategorySlice = createSlice({
    initialState,
    name: 'category',
    reducers: {
        updateCategory(state, action) {
            state.category = action.payload;
        }
    }
}) 

export const {updateCategory} = CategorySlice.actions;

export default CategorySlice.reducer; 