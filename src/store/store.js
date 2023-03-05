import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import chatListSlice from './chatListSlice'
import chatMessagesSlice from './chatMessages'
import currentChatSlice from './currentChat'


const store = configureStore({
  reducer: {
    user: userSlice,
    chatlist: chatListSlice,
    chatmessages: chatMessagesSlice,
    currentchat: currentChatSlice
  },
})

export default store;