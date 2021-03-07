import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
   name: "game",
   initialState: {
      displayedGames: [],
      displayedSingleGame: [],
      nhlGames: [],
   },
   reducers: {
      displayGames(state, action) {
         state.displayedGames = action.payload
      },
      singleGame(state, action) {
         state.displayedSingleGame = action.payload
      },
      displayNhlGames(state, action) {
         state.nhlGames = action.payload
      }
   }
});


export const { displayGames, singleGame, displayNhlGames } = gameSlice.actions;
export default gameSlice.reducer;