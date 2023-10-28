import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    loading: false,
    user: null,
    token: null,
    error: null
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{},
    extraReducers:{}
});

export default userSlice;