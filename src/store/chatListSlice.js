import { createSlice } from '@reduxjs/toolkit'

export const chatListSlice = createSlice({
  name: 'chatlist',
  initialState: [],
  reducers: { 
    chatListAdd(state, action) {
    state.push(action.payload)
  },
  initChatList(state, action){
    state.chatlist = action.payload;
  },
}
})

export const { chatListAdd , initChatList} = chatListSlice.actions
export default chatListSlice.reducer;

