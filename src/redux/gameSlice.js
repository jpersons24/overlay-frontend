import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
   name: "game",
   initialState: {
      displayedGames: [],
      displayedSingleGame: [],
   },
   reducers: {
      displayGames(state, action) {
         state.displayedGames = action.payload
      },
      singleGame(state, action) {
         state.displayedSingleGame = action.payload
      }
   }
});


export const { displayGames, singleGame } = gameSlice.actions;
export default gameSlice.reducer;