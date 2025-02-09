import React from 'react'
import {useNavigate} from 'react-router-dom'

const Product = ({image,name}) => {
  const navigate=useNavigate();
  return (
    <>
    <div onClick={()=>navigate(`/product/${name}` ,{state:name})} className='cursor-pointer'>
        <img src={image} className='h-40 w-80'></img>
        <p className='text-center font-bold text-lg'>{name} </p>
    </div>
      
    </>
  )
}

export default Product
