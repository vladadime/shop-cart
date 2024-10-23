import { Header } from '../Header'
import { useSelector } from 'react-redux'
const Layout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    return (
        <div className='h-full bg-white bg-[repeating-linear-gradient(to_right,_rgba(255,0,0,0.2),_rgba(255,0,0,0.2)_1px,_white_1px,_white_55px)]'>
            {isLoggedIn && <Header />}
            <div className='container mx-auto p-10 min-h-screen'>{children}</div>
        </div>
    )
}

export default Layout
