import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: 0, // Add progress to state
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    // Set progress value (can be calculated based on income and amount)
    updateProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const { updateProgress } = budgetSlice.actions;

export default budgetSlice.reducer;
