import { createSlice, createSelector, current } from '@reduxjs/toolkit'

export const chatListSlice = createSlice({
  name: 'chatlist',
  initialState: [],
  reducers: { 
    chatListAdd(state, action) {
    state.push(action.payload);
  },
  initChatList(state, action){
    return action.payload;
  },
  addMessage(state,action){
    if(current(state)[0]===undefined){
      state.push({chatid: action.payload.chatid,
      messages:[action.payload.message]});
      return;
    }
    for(let i in current(state)){
        if(state[i].chatid===action.payload.chatid){
            state[i].messages.push(action.payload.message);   
            return;          
        }
    }
    state.push({chatid: action.payload.chatid,
        message:[action.payload.message]});
    return;
  }
}
})

export const selectChatData = createSelector(
  (state) => state.chatlist,
  (_, id) => id,
  (messages, id) =>
  messages.filter((message) => message.chatid === id)
)

export const selectLastMessage = createSelector(
  (state) => state.chatlist,
  (_, id) => id,
  (messages, id) =>
  messages.filter((message) => message.chatid === id)[0].messages.at(-1)
)


export const { chatListAdd , initChatList, addMessage} = chatListSlice.actions
export default chatListSlice.reducer;

