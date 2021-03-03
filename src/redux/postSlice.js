import { createSlice } from '@reduxjs/toolkit'


const postSlice = createSlice({
   name: "post",
   initialState: {
      displayedPosts: [],
   },
   reducers: {
      displayPosts(state, action) {
         state.displayedPosts = action.payload
      }
   }
})


export const { displayPosts } = postSlice.actions;
export default postSlice.reducer