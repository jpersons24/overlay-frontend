import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
   name: "game",
   initialState: {
      displayedGames: [],
   },
   reducers: {
      displayGames(state, action) {
         state.displayedGames = action.payload
      }
   }
});


export const { displayGames } = gameSlice.actions;
export default gameSlice.reducer;