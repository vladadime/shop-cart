import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import { Cart, Login, Products } from './pages'
import { Layout } from './components'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function App() {
    return (
        <div className='App'>
            <Layout>
                <Router>
                    <Routes>
                        <Route path='/login' element={<Login />} />
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
                </Router>
            </Layout>
        </div>
    )
}

export default App
