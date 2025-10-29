import { Route, Routes } from "react-router-dom"
import HomePage from "./components/website/HomePage"
import Login from "./components/Auth/Login"


function App() {


  return (
    <>
    <Routes>

      <Route path="/" element={ <HomePage/>} />
      <Route path="/login" element={ <Login/>} />
    </Routes>
    
    </>
  )
}

export default App
