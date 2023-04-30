import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import chatListSlice from './chatListSlice'
import currentChatSlice from './currentChat'


const store = configureStore({
  reducer: {
    user: userSlice,
    chatlist: chatListSlice,
    currentchat: currentChatSlice
  },
})

export default store;