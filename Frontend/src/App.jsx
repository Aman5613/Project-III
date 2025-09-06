import Mainroutes from "./Routes/Mainroutes";
import Nav from "./Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./Store/userAction";
import { toast } from "react-toastify";
import Footer from "./Pages/Footer";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(asyncCurrentUser());
  })

  // setTimeout(() => {
  //   toast.info("Welcome to the E-commerce App! Explore our products and enjoy your shopping experience.");
  // }, 5000);

  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 h-screen bg-transparent text-black">
        <Nav  />
        <Mainroutes/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
