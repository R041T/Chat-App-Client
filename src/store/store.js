import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    counter: userSlice,
  },
})

export default store;