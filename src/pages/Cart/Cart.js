import { useDispatch, useSelector } from 'react-redux'
import { CartProduct, Receipt } from '../../components'
import { Link } from 'react-router-dom'
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)

    console.log(cartItems)
    return (
        <div className='container mx-auto p-4 h-screen'>
            <div className='flex justify-between mb-6'>
                <div className='text-left'>
                    <span className='text-base font-bold'>Tvoja korpa</span>
                </div>

                <div className='absolute top-5 right-5'>
                    <Link to='/products'>
                        <button>Products</button>
                    </Link>
                </div>
            </div>

            <div className='md:flex'>
                <div className='flex flex-col w-3/5'>
                    {cartItems && cartItems.length
                        ? cartItems.map((product) => (
                              <CartProduct
                                  key={product.productID}
                                  product={product}
                              />
                          ))
                        : null}
                </div>
                <Receipt />
            </div>
        </div>
    )
}

export default Cart
