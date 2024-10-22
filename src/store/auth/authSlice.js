import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: Cookies.get('isLoggedIn') === 'true' || false,
        error: null,
    },
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
            state.error = null;
            Cookies.set('isLoggedIn', 'true', { expires: 0.0004 });
        },
        loginFailure: (state) => {
            state.isLoggedIn = false
            state.error = 'Invalid credentials'
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.error = null
            Cookies.remove('isLoggedIn');
        },
    },
})

export const { loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer