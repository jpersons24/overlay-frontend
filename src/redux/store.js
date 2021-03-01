import {configureStore } from '@reduxjs/toolkit';
import storyReducer from './storySlice'
import userReducer from './userSlice'


const store = configureStore({
   reducer: {
      story: storyReducer,
      user: userReducer,
   }
});

export default store;



// creating state with redux
// 1. create state type witin store
   // reducer key should match the name key within the createSlice function for that state
// 2. set up reducer function and action with createSlice function
   // create Slice file for that given state