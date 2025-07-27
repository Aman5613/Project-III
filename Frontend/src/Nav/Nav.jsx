import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='justify-center items-center py-3 flex space-x-3 md:space-x-10'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Product</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </nav>
    )
}

export default Nav
