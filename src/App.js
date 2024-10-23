import { Route, Routes, Navigate } from 'react-router-dom'
import { Cart, Login, Products } from './pages'
import { Layout } from './components'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'
import Logout from './components/Logout/Logout'

function App() {
    return (
        <div className='App'>
            <Layout>
                <Routes>
                    <Route
                        path='/login'
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path='/products'
                        element={
                            <PrivateRoute>
                                <Products />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/cart'
                        element={
                            <PrivateRoute>
                                <Cart />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/' element={<Navigate to='/products' />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default App
