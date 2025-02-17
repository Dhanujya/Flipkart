import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  let AddUserame=(event)=>{
    setUsername(event.target.value);
  }
  let AddEmail=(event)=>{
    setEmail(event.target.value);
  }
  let AddPassword=(event)=>{
    setPassword(event.target.value);
  }
  const AddForm = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      // alert(response.data.message); 
      if(response.status==200){
        navigate("/login");
      }
    }  catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          alert("Username already exists! Please try a different one.");
        } else {
          alert(error.response.data.message || "Signup failed! Try again.");
        }
      } else {
        alert("Signup failed due to a network error. Please try again.");
      }
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };


  return (
    <div className="w-full h-fit mb-15 bg-gray-100 signup">
    <div className="flex sm:mx-20 md:mx-40 lg:mx-70 bg-gray-100 xs:mx-10">

        <div className="w-5/12 mt-20 px-6 py-12  bg-blue-500  h-120">
          <h1 className="text-white text-3xl font-bold leading-12 mb-3">Looks like you're new here!</h1>
          <h4 className="text-gray-200 text-lg font-medium leading-8">Sign up with your mobile number to get started</h4>
          <img className="mx-auto mt-10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></img>
        </div>

      <div className="flex min-h-full flex-1 flex-col justify-center h-120  px-6 py-12 lg:px-8 bg-white mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Signup Page
          </h2>
        </div>

        <div className="mt-10">
          <div className="space-y-3">
          <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                User name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="email"
                  value={username}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  onChange={AddUserame}
                  
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  onChange={AddEmail}
                
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  onChange={AddPassword}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={AddForm}
              >
                Signup
              </button>
            </div>
          </div>

          <p className="mt-7 text-center text-sm/6 text-gray-500">
            Have an Account{' '}
            <a  className="font-semibold text-blue-600 hover:text-blue-500" onClick={()=>navigate(`/login`)}>
              Login
            </a>
          </p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Signup;