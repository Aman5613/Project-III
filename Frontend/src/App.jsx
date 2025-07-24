import axios from "axios";
import { instance } from "./Utils/axios.config";
import { useEffect } from "react";



const App = () => {
  const getProduct = async () => {
    try {
      const response = await instance.get("/products")
      console.log(response.data);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const getUsers = async () => {
    try {
      const res = await instance.get("/users");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect( () => {
    getProduct();
    getUsers();
  }, [])
  return (
    <div>
      <h1>Hello from new world</h1>
    </div>
  )
}

export default App
