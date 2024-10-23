import { Button } from '../../components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/auth/authActions.js'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    // const error = useSelector((state) => state.auth.error)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        dispatch(login(email, password))

        if (isLoggedIn) {
            navigate('/products')
        }
    }

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                <h2 className='text-lg font-bold mb-8 text-left'>
                    Prijavi se na svoj nalog
                </h2>
                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div className='mb-8'>
                        <label
                            className='block text-black text-sm mb-4'
                            htmlFor='email'
                        >
                            E-mail adresa
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            placeholder='Upišite e-mail adresu'
                            className='w-full bg-transparent text-base border-b border-black focus:outline-none'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-14'>
                        <label
                            className='block text-black text-sm mb-4'
                            htmlFor='password'
                        >
                            Lozinka
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            required
                            placeholder='Upišite šifru'
                            className='w-full bg-transparent text-base border-b border-black focus:outline-none'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button content='Prijavi se na nalog' />
                </form>
            </div>
        </div>
    )
}

export default Login
