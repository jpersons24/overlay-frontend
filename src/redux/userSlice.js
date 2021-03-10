import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: "user",
   initialState: {
      currentUser: null,
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
