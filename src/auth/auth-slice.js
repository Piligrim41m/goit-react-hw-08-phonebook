import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./auth-operation";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, action) {
            state.isLoggedIn = false;
            state.token = null;
            state.user = { name: null, email: null }
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isRefreshing = true;
            state.isRefreshing = false
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        }, 
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        }
    },
});

export const authReducer = authSlice.reducer