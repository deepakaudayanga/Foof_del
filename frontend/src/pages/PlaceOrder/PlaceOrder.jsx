import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='palce-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" placeholder='Frist Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email addres' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${(getTotalCartAmount()===0?0:getTotalCartAmount() + 2).toFixed(2)}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
