import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: "user",
   initialState: {
      currentUser: [],
   },
   reducers: {
      setCurrentUser(state, action) {
         // what should happen when currentUser needs to be updated
         state.currentUser = action.payload
      }
   }
})

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;


// creating a slice function:
// 1. import { createSlice } from toolkit
// 2. set constant equal to createSlice function
// 3. setup name, initialState and reducer function
// 4. export action type functions
   // export const { actionFunction } = userSlice.actions
// 5. export reducer functions
   // export default userSlice.reducer