import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (state, action) => { state.push(action.payload); },
    deleteProject: (state, action) => {
      return state.filter((_, idx) => idx !== action.payload);
    }
  }
});

export const { addProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
