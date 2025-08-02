import Mainroutes from "./Routes/Mainroutes";
import Nav from "./Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./Store/userAction";
import { toast } from "react-toastify";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(asyncCurrentUser());
  })

  setTimeout(() => {
    toast.info("Welcome to the E-commerce App! Explore our products and enjoy your shopping experience.");
  }, 5000);

  return (
    <div className="text-white px-[5%] pb-10 bg-gray-800 ">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App
