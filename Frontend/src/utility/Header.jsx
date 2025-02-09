 import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const userData =JSON.parse(localStorage.getItem('user')) || null;
  // console.log(userData);
  // console.log(userData?.username);
  // const location=useLocation();
  // console.log(location);
  // const user= location.state;
  // console.log(user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Remove user data from context and localStorage
    localStorage.removeItem('user');
    setDropdownOpen(false);
    navigate("/login"); // Redirect to login page after logout
  };
  const LoginHandler=()=>{
    if(userData?.username){
      // navigate("/");
    }else{
      navigate("/login");
    }
  }
  return (
    <div className='navbar-container flex w-full h-[100px] items-center justify-between bg-white'>
      {/* Logo */}
      <div className='logo-img' onClick={()=>navigate("/")}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Logo" />
      </div>

      {/* Search Bar */}
      <div className="relative flex-grow max-w-xl search">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search for Products, Brands and More" 
          className="border-[2px] border-solid border-black h-[40px] px-8 rounded-[10px] w-full bg-blue-50 text-md" 
        />
      </div>

       {/* User Profile / Login Button */}
      <div className="relative"  onClick={LoginHandler}>
        <button onClick={toggleDropdown} className="flex items-center space-x-2 bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded px-4 py-2">
          <CgProfile className="text-gray-500 text-xl" />
          {userData?.username ? `Hi, ${userData.username}` : "Login"}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && userData && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Cart Icon */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <FaShoppingCart className="text-gray-700" />
        <span className="text-gray-700">Cart</span>
      </div>

      {/* Become a Seller */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="h-6" />
        <span className="text-gray-700">Become a Seller</span>
      </div>

      {/* More Options */}
      <div>
        <BsThreeDotsVertical className="text-gray-700" />
      </div>
    </div>
  );
}

export default Navbar;