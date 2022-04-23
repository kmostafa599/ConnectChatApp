import { createSlice } from '@reduxjs/toolkit';
import {AppStateType} from "../types/User";

const initialState: AppStateType = {
    user: null,
    token: "",
    conversations:[],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setConversations: (state, { payload }) => {
            state.conversations = payload;
        },
    
        
    },
});


export default appSlice.reducer;
export const { setUser , setToken, setConversations } = appSlice.actions;