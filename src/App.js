import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart, Login, Products } from './pages'
import { Layout } from './components'

function App() {
    return (
        <div className='App'>
            <Layout>
                <Router>
                    <Routes>
                        <Route path='/' element={<Products />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </Router>
            </Layout>
        </div>
    )
}

export default App
