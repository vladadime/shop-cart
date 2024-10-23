import {
    addToCart,
    removeAllFromCart,
    removeFromCart,
    updateQuantity,
} from './cartSlice'

export const addProductToCart = (product) => (dispatch) => {
    dispatch(addToCart(product))
}

export const removeProductFromCart = (productId) => (dispatch) => {
    dispatch(removeFromCart(productId))
}

export const clearCart = () => (dispatch) => {
    dispatch(removeAllFromCart())
}

export const updateProductQuantity = (productID, quantity) => (dispatch) => {
    dispatch(updateQuantity({ productID, quantity }))
}
