import { useEffect } from "react";
import instance from "./API/axiosconfig"
import { asyncgetProducts } from "./Store/userAction";

const App = () => {
  useEffect(() => {
    asyncgetProducts()
  }, [])


  return (
    <div>
      
    </div>
  )
}

export default App
