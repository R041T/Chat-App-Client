import { createSlice } from '@reduxjs/toolkit'

export const currentChatSlice = createSlice({
  name: 'currentchat',
  initialState: {},
  reducers: { 
    updateCurrentChat(state, action) {
    state.currentchat = action.payload;
  }
}
})

export const { updateCurrentChat } = currentChatSlice.actions
export default currentChatSlice.reducer;

