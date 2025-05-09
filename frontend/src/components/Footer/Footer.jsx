import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt=''/>
               <p> © 2025 FoodExpress. All rights reserved. FoodExpress is your trusted partner in delivering delicious meals from your favorite local restaurants right to your doorstep. Our mission is to bring convenience, variety, and speed to your food ordering experience, whether you're at home, at work, or on the go</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+94 112 456 456</li>
                    <li>food@tomato.lk</li>  
                 </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>© 2025 FoodExpress. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
