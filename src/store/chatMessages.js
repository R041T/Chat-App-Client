import { createSlice, createSelector, current } from '@reduxjs/toolkit'

export const chatMessagesSlice = createSlice({
    name: 'chatmessages',
    initialState:[],
    reducers: {
        addMessage(state,action){
            if(current(state)[0]===undefined){
                state.push({chatid: action.payload.chatid,
                message:[action.payload.message]});
                console.log(current(state))
                return;
            }
            for(let i in current(state)){
                if(state[i].chatid===action.payload.chatid){
                    state[i].message.push({messageid: 3, senderemail: "rohitmay62000@gmail.com", timestamp: "11:51pm", readstatus:"read",message: action.payload.message.message});   
                    console.log(current(state))
                    return;          
                }
            }
            state.push({chatid: action.payload.chatid,
                message:[action.payload.message]});
                console.log(current(state))
            return;
        }
    }
    
})
export const selectChatData = createSelector(
    (state) => state.chatmessages,
    (_, id) => id,
    (messages, id) =>
    messages.filter((message) => message.chatid === id)
  )


export const {addMessage} = chatMessagesSlice.actions
export default chatMessagesSlice.reducer;

