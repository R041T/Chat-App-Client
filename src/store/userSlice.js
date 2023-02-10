import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: { 
    userDataAdd(state, action) {
    state.push(action.payload)
  }
}
})

export const { userDataAdd } = userSlice.actions
export default userSlice.reducer;

