import { useContext, useEffect } from 'react'
import { userContext } from '../context/userContext'

const HomePage = () => {
   const {login,setLogin} = useContext(userContext)
   useEffect(()=>{
    if(login){
      console.log("user is logedin")
    }else{
        console.log("Please login first")
    }
   },[])
  return (
    <div>HomePage</div>
  )
}

export default HomePage