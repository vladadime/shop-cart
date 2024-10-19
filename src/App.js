import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Cart, Login, Products } from './pages'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
