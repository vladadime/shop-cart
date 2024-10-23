import { useDispatch } from 'react-redux'
import {
    removeProductFromCart,
    updateProductQuantity,
} from '../../store/cart/cartActions.js'
const CartProduct = ({ product, countPrice }) => {
    const dispatch = useDispatch()

    const increaseProductCounter = () => {
        dispatch(updateProductQuantity(product.productID, product.quantity + 1))
    }

    const decreaseProductCounter = () => {
        dispatch(
            updateProductQuantity(
                product.productID,
                Math.max(product.quantity - 1, 1),
            ),
        )
    }

    const handleRemoveFromCart = () => {
        dispatch(removeProductFromCart(product.productID))
    }

    return (
        <div className='border-gray-400 border-b mt-0'>
            <div className='h-40 flex my-8'>
                <div className='w-1/5'>
                    <img
                        className='h-36 w-full object-cover md:h-full md:w-48'
                        src={product.productImage}
                        alt={product.productLabel}
                    />
                </div>
                <div className='w-3/5 px-8'>
                    <div className='flex flex-col space-y-8'>
                        <div className='mb-10 flex flex-col'>
                            <span className='font-bold'>
                                {product.productLabel}
                            </span>
                            <span>{product.productQuantity}</span>
                            <span className='text-xs text-gray-500'>
                                {product.productPrice} RSD po kom.
                            </span>
                        </div>
                        <div className='flex'>
                            <div className='rounded-full border border-black bg-white me-2 px-4 w-28'>
                                <div className='flex justify-around'>
                                    <button
                                        className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'
                                        onClick={decreaseProductCounter}
                                    >
                                        -
                                    </button>
                                    <span className='mx-2 text-base my-auto'>
                                        {product.quantity}
                                    </span>
                                    <button
                                        className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'
                                        onClick={increaseProductCounter}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                className='p-1 text-base underline'
                                onClick={handleRemoveFromCart}
                            >
                                Ukloni
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/5'>
                    <div className='flex flex-column'>
                        <span className='me-1 font-medium text-2xl'>
                            {countPrice(product)}
                        </span>
                        <span className='text-xs mb-auto'>RSD</span>
                    </div>
                    {product.discount ? (
                        <div className='flex flex-column'>
                            <span className='me-1 text-red-600 font-medium text-base line-through'>
                                {product.productPrice * product.quantity}
                            </span>
                            <span className='text-xs text-red-600 mb-auto'>
                                RSD
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default CartProduct
