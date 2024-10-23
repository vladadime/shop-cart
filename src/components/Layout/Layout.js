import { Header } from '../Header'

const Layout = ({ children }) => {
    return (
        <div className='bg-white bg-[repeating-linear-gradient(to_right,_rgba(255,0,0,0.2),_rgba(255,0,0,0.2)_1px,_white_1px,_white_55px)]'>
            <Header />
            <div className='container mx-auto p-10'>{children}</div>
        </div>
    )
}

export default Layout
