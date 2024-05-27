import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Cart = ({ cart , setCart}) => {
  const checkoutclicked =()=>{
    alert("Congratulations Your Order sucessfully Books we contact you sonn  ! ")
  }
  const inquty = (product)=>
    {
      const exist = cart.find((x)=>{
        return x.id === product.id
      })
      setCart(cart.map((curElm)=>{
        return curElm.id === product.id ? {...exist, qty : exist.qty + 1} : curElm
      }))
    }
    const decquty = (product)=>{
      const exist = cart.find((x)=>{
        return x.id === product.id
      })
      setCart(cart.map((curElm)=>{
        return curElm.id === product.id ? {...exist, qty : exist.qty - 1} : curElm
      }))
    }
    const removeproduct =(product)=>{
      const exist = cart.find((x)=>{
        return x.id === product.id
      })
      if(exist.qty > 0)
        {
          setCart(cart.filter((curElm)=>{
            return curElm.id !== product.id
          }))
        }
    }
    const Total = cart.reduce((price,item) => price + item.qty * item.price, 0)
  return (
    <>
      <div className="cart">
        <h3>#Cart</h3>
        {
          cart.length === 0 &&
          <>
          <div className="empty_cart">
            <h2>Your Shopping Cart is empty</h2>
            <Link to='/shop'><button>Shop Now</button></Link>
          </div>
          </>
        }
        <div className="container">
        {
          cart.map((curElm)=>{
            return(
              <>
              <div className="box">
                <div className="img_box">
                  <img src={curElm.image} alt="" />
                </div>
                <div className="detail">
                  <div className="info">
                  <h4>{curElm.cat}</h4>
                  <h3>{curElm.Name}</h3>
                  <p>Price : ₹ {curElm.price}</p>
                  <p>Total: ₹ {curElm.price * curElm.qty}</p>
                  </div>
                  
                  <div className="quantity">
                    <button onClick={()=>inquty (curElm)}>+</button>
                    <input type="number" value={curElm.qty}></input>
                    <button onClick={()=>decquty (curElm)}>-</button>
                  </div>
                  <div className="icon">
                    <li onClick={()=> removeproduct(curElm)}><IoClose/></li>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
        </div>
        <div className="bottom">
          {
            cart.length>0 &&
            <>
                <div className="total">
                  <h4>Sub Total : ₹ {Total}</h4>
                </div>
                <button onClick={checkoutclicked}>CheckOut</button>
            </>
          }
      
        </div>
      
      </div>
    </>
  );
};

export default Cart;
