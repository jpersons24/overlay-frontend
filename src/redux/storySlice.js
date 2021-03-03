import { createSlice } from '@reduxjs/toolkit'

const storySlice = createSlice({
   name: "story",
   initialState: {
      displayedStories: [],
   },
   reducers: {
      displayStories(state, action) {
         state.displayedStories = action.payload
      }
   }
});


// export action creator from reducer function
export const { displayStories } = storySlice.actions;
export default storySlice.reducer;