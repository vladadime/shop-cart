import { Button } from '../../components'

const Login = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                <h2 className='text-lg font-bold mb-8 text-left'>
                    Prijavi se na svoj nalog
                </h2>
                <form>
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
                        />
                    </div>
                    <Button content='Prijavi se na nalog' />
                </form>
            </div>
        </div>
    )
}

export default Login
