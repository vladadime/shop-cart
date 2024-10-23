import { useSelector } from 'react-redux'
import { CartProduct, Receipt } from '../../components'
import { Link } from 'react-router-dom'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items)

    const countPrice = (product) => {
        if (product.discount) {
            return Number(
                parseFloat(
                    product.productPrice * product.quantity * product.discount,
                ).toFixed(2),
            )
        }

        return product.productPrice * product.quantity
    }

    return (
        <div className='h-full'>
            <div className='flex justify-between mb-6'>
                <div className='text-left'>
                    <span className='text-base font-bold'>Tvoja korpa</span>
                </div>
            </div>

            <div className='lg:flex'>
                <div className='flex flex-col w-full lg:w-3/5'>
                    {cartItems && cartItems.length
                        ? cartItems.map((product) => (
                              <CartProduct
                                  key={product.productID}
                                  product={product}
                                  countPrice={countPrice}
                              />
                          ))
                        : null}
                </div>
                <div className='w-full lg:w-1/3 lg:ms-16 '>
                    <Receipt countPrice={countPrice} />
                </div>
            </div>
        </div>
    )
}

export default Cart
