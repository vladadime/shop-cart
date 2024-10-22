import { addToCart, removeFromCart, updateQuantity } from './cartSlice';

export const addProductToCart = (product, quantity) => (dispatch) => {
    dispatch(addToCart({ product, quantity }));
}

export const removeProductFromCart = (productId) => (dispatch) => {
    dispatch(removeFromCart(productId));
}

export const updateProductQuantity = (productID, quantity) => (dispatch) => {
    dispatch(updateQuantity({ productID, quantity }));
}
