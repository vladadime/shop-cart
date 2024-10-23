import { loginSuccess, loginFailure, signOff } from './authSlice'
import { credentials } from '../../data/data.js'

export const login = (email, password) => {
    return (dispatch) => {
        if (
            credentials &&
            credentials.email === email &&
            credentials.password === password
        ) {
            dispatch(loginSuccess())
        } else {
            dispatch(loginFailure())
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(signOff())
    }
}
