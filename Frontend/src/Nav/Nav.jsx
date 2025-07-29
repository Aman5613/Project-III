import { NavLink } from 'react-router-dom'

const Nav = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    return (
        <nav className='justify-center items-center py-3 flex space-x-3 md:space-x-10'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Product</NavLink>
            {user.isAdmin ? <><NavLink to={"/create-product"}>Create-Product</NavLink></> : <></>}
            <NavLink to={"/profile"} >Profile</NavLink>
        </nav>
    )
}

export default Nav
