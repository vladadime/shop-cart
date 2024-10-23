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
            state.isLoggedIn = true
            state.error = null
            Cookies.set('isLoggedIn', 'true', { expires: 0.08 })
        },
        loginFailure: (state) => {
            state.isLoggedIn = false
            state.error = 'Invalid credentials'
        },
        signOff: (state) => {
            state.isLoggedIn = false
            state.error = null
            Cookies.remove('isLoggedIn')
        },
    },
})

export const { loginSuccess, loginFailure, signOff } = authSlice.actions

export default authSlice.reducer
