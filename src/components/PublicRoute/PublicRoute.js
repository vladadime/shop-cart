import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'

const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const authToken = Cookies.get('authToken')

    if (isLoggedIn || authToken) {
        return <Navigate to='/' />
    }

    return children
}

export default PublicRoute
