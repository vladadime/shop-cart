import React from 'react'
import Button from '../Button/Button'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
                <h2 className='text-xl font-semibold text-black'>
                    Kupovina uspešna!
                </h2>
                <p className='my-4 text-gray-600'>
                    Hvala vam na kupovini. Uskoro ćete dobiti potvrdu putem
                    email-a.
                </p>
                <Button content={'Zatvori'} onClick={onClose} />
            </div>
        </div>
    )
}

export default Modal
