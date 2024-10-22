import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cart/cartActions.js';
const Product = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [productCounter, setProductCounter] = useState(1);
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const increaseProductCounter = () => {
        setProductCounter((prevCounter) => prevCounter + 1)
    }

    const decreaseProductCounter = () => {
        setProductCounter((prevCounter) => Math.max(prevCounter - 1, 1))
    }

    const handleAddToCart = () => {
        product.quantity = productCounter;
        dispatch(addProductToCart(product));
    }
    return (
        <div>
            <div className='relative'>
                <img
                    className='w-3/4 object-contain mix-blend-multiply'
                    src={product.productImage}
                    alt={product.productLabel}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                {isHovered && (
                    <div
                        className={
                            'absolute bottom-2 left-6 flex items-center rounded-md p-2'
                        }
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='rounded-full bg-white me-2 px-4'>
                            <div className='flex justify-around'>
                                <button
                                    className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'
                                    onClick={decreaseProductCounter}
                                >
                                    -
                                </button>
                                <span className='mx-2 text-base my-auto'>
                                    {productCounter}
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
                            className=' bg-black text-white rounded-full p-2'
                            onClick={handleAddToCart}
                        >
                            Cart
                        </button>
                    </div>
                )}

                <h3 className='mt-2 text-lg font-semibold'>{product.name}</h3>
            </div>
            <span className='text-sm font-bold'>{product.productLabel}</span>
            <div className='flex flex-column'>
                <span className='me-1 font-medium'>{product.productPrice}</span>
                <span className='text-xs mb-auto'>RSD</span>
            </div>
        </div>
    )
}

export default Product
