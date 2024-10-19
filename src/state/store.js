import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import productReducer from './product/productSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
    },
})

export default store
