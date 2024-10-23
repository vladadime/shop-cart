import { useDispatch } from 'react-redux'
import {
    removeProductFromCart,
    updateProductQuantity,
} from '../../store/cart/cartActions.js'
import { TfiPlus, TfiMinus } from 'react-icons/tfi'
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
            <div className='h-40 flex justify-between my-8'>
                <div className='flex-auto w-1/3 md:w-1/5'>
                    <img
                        className='h-full w-40 object-cover'
                        src={product.productImage}
                        alt={product.productLabel}
                    />
                </div>
                <div className='flex w-2/3 md:w-4/5'>
                    <div className='flex-auto w-4/5 px-2 sm:px-8'>
                        <div className='flex flex-col justify-between h-full'>
                            <div className=''>
                                <p className='font-bold text-sm lg:text-base'>
                                    {product.productLabel}
                                </p>
                                <p>{product.productQuantity}</p>
                                <p className='text-xs text-gray-500'>
                                    {product.productPrice} RSD po kom.
                                </p>
                            </div>
                            <div className='flex'>
                                <div className='rounded-full border border-black bg-white me-2 px-4 py-1'>
                                    <div className='flex justify-around'>
                                        <button
                                            className='text-gray-600 rounded-full hover:bg-gray-200 p-1 text-lg sm:text-xl'
                                            onClick={decreaseProductCounter}
                                        >
                                            <TfiMinus />
                                        </button>
                                        <p className='mx-2 text-base my-auto'>
                                            {product.quantity}
                                        </p>
                                        <button
                                            className='text-gray-600 rounded-full hover:bg-gray-200 p-1 text-lg sm:text-xl'
                                            onClick={increaseProductCounter}
                                        >
                                            <TfiPlus />
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
                    <div className='flex-auto w-1/5'>
                        <div className='flex'>
                            <span className='me-1 text-base sm:text-2xl'>
                                {countPrice(product)}
                            </span>
                            <span className='text-xs mb-auto'>RSD</span>
                        </div>
                        {product.discount ? (
                            <div className='flex'>
                                <span className='me-1 text-red-600 text-sm sm:text-base line-through'>
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
        </div>
    )
}

export default CartProduct
