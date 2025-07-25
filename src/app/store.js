import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profileSlice';
import educationReducer from '../features/educationSlice';
import skillsReducer from '../features/skillsSlice';
import projectsReducer from '../features/projectsSlice';
import socialReducer from '../features/socialSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    social: socialReducer,
  },
});
