import { createSlice } from '@reduxjs/toolkit'

const storySlice = createSlice({
   name: "story",
   initialState: {
      displayedStories: [],
   },
   reducers: {
      displayStories(state, action) {
         // how do I replace array values with entire new values every single time
         state.displayedStories = action.payload
         // state.displayedStories.splice(0, action.payload)
      }
   }
});


// export action creator from reducer function
export const { displayStories } = storySlice.actions;
export default storySlice.reducer;