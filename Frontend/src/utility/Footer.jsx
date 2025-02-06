import React from 'react'
import "./Layout.css"

const Footer = () => {
  return (
    <div className='footer w-full h-fit  flex bg-black item-center justify-around '>
        <div className="inner-cont1 flex">
        <div className='footer1 px-3' >
            <span className='text-gray-700'>About</span>
            <p >Contact us</p>
            <p>About us</p>
            <p>Carrers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Corporate information</p>
        </div>
        <div className='footer1 px-3'>
            <span className='text-gray-700'>Group Components</span>&nbsp;&nbsp;
            <p>Myntra</p>
            <p>Cleartrip</p>
            <p>Shopsy</p>
        </div>
        <div className='footer1 px-3' >
            <span className='text-gray-700'>HELP</span>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation& returns</p>&nbsp;&nbsp;
            <p>FAQ</p>
            
        </div>
        <div className='footer1 px-3' >
            <span className='text-gray-700'>CONSUMER POLICY</span>
            <p>cancellation & Returns</p>
            <p>Terms of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>Grivenace</p>
            <p>Redressal</p>
            <p>EPR</p>
            <p>Compliance</p>
            
        </div>
        </div>
        <div className="inner-cont2 flex px-3">
        <div className="lg:border-l-2 px-5 footer1">
            <span className='text-gray-700'>Mail Us:</span>
            <span>Mail Us:</span>
            <p>
            Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India </p>
        </div>
        <div className='footer1 px-3'>
        <span className='text-gray-700'>Registered Office Address:</span>
        <p>Flipkart Internet Private Limited,</p>
        <p>Buildings Alyssa, Begonia &</p>
        <p>Clove Embassy Tech Village,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103,</p>
        <p>Karnataka, India</p>
        <p>CIN : U51109KA2012PTC066107</p>
        <p>Telephone: <a href="#">044-45614700</a> / <a href="#">044-67415800</a></p>

        </div>
        </div>
    </div>
  )
}

export default Footer
