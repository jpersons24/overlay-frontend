import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState: {
      displayedFavorites: [],
   },
   reducers: {
      displayFavorites(state, action) {
         state.displayedFavorites = action.payload
      }
   }
});

// import in FavoritesList.js to set to const action
export const { displayFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer