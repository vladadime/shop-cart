import { Link } from 'react-router-dom'
import { Product } from '../../components'
import { products } from '../../data/data.js'

const Products = () => {
    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between mb-6'>
                <div className='text-left'>
                    <span className='text-base font-bold'>Svi proizvodi</span>
                    {products && products.length ? (
                        <span className='text-gray-500 text-sm mx-2'>
                            {products.length} proizvoda
                        </span>
                    ) : null}
                </div>

                <div className='text-right'>
                    <Link to='/cart'>
                        <button>Cart</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products && products.length
                    ? products.map((product) => (
                          <Product key={product.productID} product={product} />
                      ))
                    : null}
            </div>
        </div>
    )
}

export default Products
