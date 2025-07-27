import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/products' element={<Product/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    )
}

export default Mainroutes
