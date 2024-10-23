import React from 'react'
import Button from '../Button/Button'

const Receipt = () => {
    return (
        <div className='w-1/3 ms-16 bg-gray-300 bg-opacity-50 px-10 h-96'>
            <p className='text-lg font-bold text-black mt-6'>
                Tvoja narudžbina
            </p>
            <div className='flex justify-between mt-8 mb-4'>
                <span className='text-black'>Ukupno</span>
                <div className='flex flex-column'>
                    <span className='me-1 font-medium text-black'>19.940</span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <span className='text-black'>Ušteda</span>
                <div className='flex flex-column'>
                    <span className='me-1 font-medium text-black'>-1.200</span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <span className='text-black'>Isporuka Daily Express*</span>
                <div className='flex flex-column'>
                    <span className='text-xs text-black'>Besplatna</span>
                </div>
            </div>
            <div className='border border-b-gray-400 mb-4'></div>
            <div className='flex justify-between mb-2'>
                <span className='text-black'>Ukupno za uplatu</span>
                <div className='flex flex-column'>
                    <span className='me-1 font-medium text-black'>19.940</span>
                    <span className='text-xs mb-auto text-black'>RSD</span>
                </div>
            </div>
            <p className='text-xs text-black mb-8'>
                Cena je sa uključenim PDV-om
            </p>
            <Button content='Prijavi se za brže plaćanje' />
        </div>
    )
}

export default Receipt
