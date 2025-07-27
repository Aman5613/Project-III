import Mainroutes from "./Routes/mainRoutes";
import Nav from "./Nav/Nav";


const App = () => {

  return (
    <div className="text-white w-screen h-screen px-[5%] bg-gray-800 ">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App
