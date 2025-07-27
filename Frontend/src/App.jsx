import { useDispatch, useSelector } from "react-redux";
import { asyncgetProducts, asyncgetUsers } from "./Store/Action";
import { useEffect } from "react";
import Mainroutes from "./Routes/mainRoutes";
import Nav from "./Nav/Nav";


const App = () => {
  const dispatch = useDispatch();

  // useSelector((state) => state)

  useEffect(() => {
    dispatch(asyncgetUsers())
    dispatch(asyncgetProducts())
  }, []);


  return (
    <div className="text-white w-screen h-screen px-[5%] bg-gray-800 ">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App
