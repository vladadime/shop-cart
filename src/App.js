import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import { Cart, Login, Products } from './pages'
import { Layout } from './components'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import PublicRoute from './components/PublicRoute/PublicRoute'

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
                </Routes>
            </Layout>
        </div>
    )
}

export default App
