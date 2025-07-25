import { createSlice } from '@reduxjs/toolkit';

const socialSlice = createSlice({
  name: 'social',
  initialState: [],
  reducers: {
    addSocial: (state, action) => { state.push(action.payload); },
    deleteSocial: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    }
  }
});

export const { addSocial, deleteSocial } = socialSlice.actions;
export default socialSlice.reducer;
