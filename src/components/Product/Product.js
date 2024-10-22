const Product = ({ product }) => {
    return (
        <div>
            <div className='relative'>
                <img
                    className='w-3/4 object-contain mix-blend-multiply'
                    src={product.productImage}
                    alt={product.productLabel}
                />

                <div className='absolute bottom-2 left-6 flex items-center rounded-md p-2'>
                    <div className="rounded-full bg-white me-2 px-4">
                        <div className="flex justify-around">
                        <button className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'>
                            -
                        </button>
                        <span className='mx-2 text-base my-auto'>1</span>
                        <button className='text-gray-600 p-1 rounded-full hover:bg-gray-200 text-2xl'>
                            +
                        </button>
                    </div>
                    </div>
                    <button className=' bg-black text-white rounded-full p-2'>
                        Cart
                    </button>
                </div>

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
