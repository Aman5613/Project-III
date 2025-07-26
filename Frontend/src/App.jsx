import { useDispatch, useSelector } from "react-redux";
import { asyncgetProducts, asyncgetUsers } from "./Store/Action";
import { useEffect } from "react";



const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state)

  useEffect(() => {
    dispatch(asyncgetUsers())
    dispatch(asyncgetProducts())
  }, []);


  return (
    <div>
      <h1>Redux toolkit</h1>
    </div>
  )
}

export default App
