import { useEffect } from "react";
import instance from "./API/axiosconfig"
const App = () => {
  const getProduct = async () => {
    try {
      const res = await instance.get("/Products")
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getProduct()
    
  }, [])


  return (
    <div>
      
    </div>
  )
}

export default App
