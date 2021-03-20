import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
   name: "game",
   initialState: {
      savedGames: [],
      singleGame: [],
      nhlGames: [],
   },
   reducers: {
      displayGames(state, action) {
         state.savedGames = action.payload
      },
      singleGame(state, action) {
         state.singleGame = action.payload
      },
      displayNhlGames(state, action) {
         state.nhlGames = action.payload
      }
   }
});


export const { displayGames, singleGame, displayNhlGames } = gameSlice.actions;
export default gameSlice.reducer;