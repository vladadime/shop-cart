import React from 'react'

const CartProduct = ({ product }) => {
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
                            <span className='font-bold'>{product.productLabel}</span>
                            <span className=''>{product.productQuantity}</span>
                        </div>
                        <div className='flex'>
                            <div className='rounded-full border border-black bg-white me-2 px-4 w-28'>
                                <div className='flex justify-around'>
                                    <button className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'>
                                        -
                                    </button>
                                    <span className='mx-2 text-base my-auto'>
                                        1
                                    </span>
                                    <button className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'>
                                        +
                                    </button>
                                </div>
                            </div>
                            <button className='p-1 text-base underline'>
                                Ukloni
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/5'>
                    <div className='flex flex-column'>
                        <span className='me-1 font-medium text-2xl'>
                            {product.productPrice}
                        </span>
                        <span className='text-xs mb-auto'>RSD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
