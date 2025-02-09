import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";

const IndividualItem = () => {
const location=useLocation();
const product=location.state
const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Full Star
        stars.push(<FaStar key={i} className="text-yellow-400 text-2xl" />);
      } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
        // Half Star
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-2xl" />);
      } else {
        // Empty Star
        stars.push(<FaRegStar key={i} className="text-gray-300 text-2xl" />);
      }
    }
    return stars;
  };
  return (
    <div className="flex w-full h-fit justify-center gap-10 flex-wrap mb-20 p-5">
            <div
              key={product._id}
              className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-72"
            >
              <div className="h-fit  rounded-2xl" >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 font-semibold">Price: <LuIndianRupee className="inline"/>{product.price}</span>
                </div>
                <div className="flex items-center mt-2">
                  {getStars(product.rating.rate)}
                  <span className="ml-2 text-gray-600">{product.rating.rate}/5</span>
                </div>
              </div>
               
             <div className="mt-1 p-2 mx-2 mb-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                Add to Cart
            </button>
            </div>

            </div>
            
        </div>
    
      )
    }
    

export default IndividualItem
