import { NavLink } from 'react-router-dom'

const Nav = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    return (
        <nav className='justify-center items-center text-xl md:text-2xl py-5 flex space-x-4  md:space-x-10'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Product</NavLink>
            {/* {user.isAdmin ? <><NavLink to={"/create-product"}>Create-Product</NavLink></> : <></>} */}
            <NavLink to={"/profile"} >Profile</NavLink>
        </nav>
    )
}

export default Nav
