import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.items.find(
                (item) => item.productID === newItem.productID,
            )
            if (!existingItem) {
                state.items.push({ ...action.payload })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.productID !== action.payload,
            )
        },
        removeAllFromCart: (state) => {
            state.items = []
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.productID === action.payload.productID,
            )
            if (item) {
                item.quantity = action.payload.quantity
            }
        },
    },
})

export const { addToCart, removeAllFromCart, removeFromCart, updateQuantity } =
    cartSlice.actions

export default cartSlice.reducer
