import { NavLink } from "react-router-dom";
import logo from '../assets/10001.svg'
import { FaCartPlus } from "react-icons/fa";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <nav className="items-center bg-white mx-3 rounded-lg px-5 py-3 my-3 flex justify-between sticky top-3 z-10 shadow">
      <div><img src={logo} alt="" /></div>
      <div className="flex gap-10">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Product</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </div>
      <div>
        <FaCartPlus/>
      </div>
    </nav>
  );
};

export default Nav;
