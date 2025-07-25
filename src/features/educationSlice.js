import { createSlice } from '@reduxjs/toolkit';

const educationSlice = createSlice({
  name: 'education',
  initialState: [],
  reducers: {
    addEducation: (state, action) => { state.push(action.payload); },
    deleteEducation: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    }
  }
});

export const { addEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;
