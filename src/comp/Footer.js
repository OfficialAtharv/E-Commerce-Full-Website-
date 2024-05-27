import React from 'react'
import './footer.css'
import { FaPiggyBank } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='container'>
        <div className='left_box'>
          <div className='box'>
            <div className='icon_box'>
            <FaPiggyBank />
            </div>
            <div className='detail'>
              <h3>Greate Saving</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos!</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon_box'>
            <TbTruckDelivery />
            </div>
            <div className='detail'>
              <h3>Free Delivery</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos!</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon_box'>
            <FaHeadphonesSimple />
            </div>
            <div className='detail'>
              <h3>24/7 support</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos!</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon_box'>
            <IoWalletSharp />
            </div>
            <div className='detail'>
              <h3>Money Back</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos!</p>
            </div>
          </div>
        </div>
        <div className='right_box'>
          <div className='header'>
            <img src="image/logo.webp" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='bottom'>
            <div className='box'>
              <h3>Your Account</h3>
              <ul>
                <li>About</li>
                <li>Account</li>
                <li>Payment</li>
                <li>Sales</li>
              </ul>
            </div>
            <div className='box'>
              <h3>Products</h3>
              <ul>
                <li>Delivery</li>
                <li>Track Order</li>
                <li>New Product</li>
                <li>Old Product</li>
              </ul>
            </div>
            <div className='box'>
              <h3>Contact Us</h3>
              <ul>
                <li>30,Shrishailya,subhashnagar,miraj</li>
                <li>+(91)7066150996</li>
                <li>atharvkulkarni305@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer