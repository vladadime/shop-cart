import { useDispatch, useSelector } from 'react-redux'
import { CartProduct } from '../../components'
import { Link } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items);

    console.log(cartItems)
    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between mb-6'>
                <div className='text-left'>
                    <span className='text-base font-bold'>Tvoja korpa</span>
                </div>

                <div className='text-right'>
                    <Link to='/products'>
                        <button>Products</button>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {cartItems && cartItems.length
                    ? cartItems.map((product) => (
                          <CartProduct key={product.productID} product={product} />
                      ))
                    : null}
            </div>
        </div>
    )
}

export default Cart
