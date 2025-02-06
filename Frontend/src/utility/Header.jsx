 import React from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
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

      {/* Login Button */}
      <div className="relative" onClick={()=>navigate("/login")}>
        <CgProfile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <button className="w-24 h-10 bg-transparent text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded px-10">
          Login
        </button>
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