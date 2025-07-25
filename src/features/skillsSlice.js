import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [],
  reducers: {
    addSkill: (state, action) => { state.push(action.payload); },
    deleteSkill: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    }
  }
});

export const { addSkill, deleteSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
