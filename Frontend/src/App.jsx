import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  { useEffect, useState } from "react";
import axios from "axios"
import Layout from './Layout'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Home from './utility/Home';

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="bg-gray-200 w-full h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path='"/' element={<Home/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        </Route>
        <Route path="*" element={<h1 className='text-center '>404 Page Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
