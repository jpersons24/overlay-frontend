import {configureStore } from '@reduxjs/toolkit';
import storyReducer from './storySlice'



const store = configureStore({
   reducer: {
      story: storyReducer,
   }
});

export default store;