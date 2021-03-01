import {configureStore } from '@reduxjs/toolkit';
import storyReducer from './storySlice'
import userReducer from './userSlice'
import favoriteReducer from './favoritesSlice'


const store = configureStore({
   reducer: {
      story: storyReducer,
      user: userReducer,
      favorite: favoriteReducer,
   }
});

export default store;



// creating state with redux
// 1. use createSlice in 'nameSlice' file
      // set name, initialState and reducers
      // export action function to appropriate file to bet set to const action
      // export reducer function to store.js
// 2. import 'nameReducer' from 'nameSlice' file
      // set key same as the name set in slice function
      // set key value to be the imported reducer function