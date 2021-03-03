import { createSlice } from '@reduxjs/toolkit'


const postSlice = createSlice({
   name: "post",
   initialState: {
      displayedPosts: [],
   },
   reducers: {
      displayPosts(state, action) {
         state.displayedPosts = action.payload
      },
      // add new post to displayedPosts (from GameCard POST request)
      addNewPost(state,action) {
         state.displayedPosts.push(action.payload)
      }
   }
})


export const { displayPosts, addNewPost } = postSlice.actions;
export default postSlice.reducer