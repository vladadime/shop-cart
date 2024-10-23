import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { clearCart } from '../../store/cart/cartActions'
import { useNavigate } from 'react-router-dom'
const Receipt = ({ countPrice }) => {
    const cartItems = useSelector((state) => state.cart.items)
    const [isModalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePurchase = () => {
        if (cartItems.length) {
            setModalOpen(true)
        }
    }

    const closeModal = () => {
        dispatch(clearCart())
        setModalOpen(false)
        navigate('/')
    }

    const totalCount = () => {
        const sum = cartItems.reduce((acc, item) => {
            return acc + countPrice(item)
        }, 0)

        return sum
    }

    const totalSaving = () => {
        const sum = cartItems.reduce((acc, item) => {
            return acc + item.productPrice * item.quantity
        }, 0)

        return Number(parseFloat(totalCount() - sum).toFixed(2))
    }

    return (
        <div className='bg-gray-300 bg-opacity-50 h-96 px-2 sm:px-10 lg:px-6 xl:px-10'>
            <p className='text-lg font-bold text-black mt-6'>
                Tvoja narudžbina
            </p>
            <div className='flex justify-between mt-8 mb-4'>
                <span className='text-black'>Ukupno</span>
                <div className='flex'>
                    <span className='me-1 font-medium text-black'>
                        {totalCount()}
                    </span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <span className='text-black'>Ušteda</span>
                <div className='flex'>
                    <span className='me-1 font-medium text-black'>
                        {totalSaving()}
                    </span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <span className='text-black'>Isporuka Daily Express*</span>
                <div className='flex'>
                    <span className='text-xs text-black'>Besplatna</span>
                </div>
            </div>
            <div className='border border-b-gray-400 mb-4'></div>
            <div className='flex justify-between mb-2'>
                <span className='text-black'>Ukupno za uplatu</span>
                <div className='flex'>
                    <span className='me-1 font-medium text-black'>
                        {totalCount()}
                    </span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <p className='text-xs text-black mb-8'>
                Cena je sa uključenim PDV-om
            </p>
            <Button
                content='Prijavi se za brže plaćanje'
                onClick={handlePurchase}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Receipt
