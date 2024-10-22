import { loginSuccess, loginFailure } from './authSlice'
import { credentials } from '../../data/data.js'

export const login = (email, password) => {
    return (dispatch) => {
        if(
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
