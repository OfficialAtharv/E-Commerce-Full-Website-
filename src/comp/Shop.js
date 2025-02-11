import React, { useState } from "react";
import "./shop.css";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  const [detail, setDetail] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const detailPage = (product) => {
    const detaildata = ([{product}])
    const productdetails =detaildata[0]['product']
    // console.log(productdetails)
    setDetail(productdetails)
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
  };
  return (
    <>
      {showDetail ? (
        <>
          <div className="product_detail">
            <button className="close_button" onClick={closedetail}>
              <RxCross2 />
            </button>
            <div className="container">
              <div className="img_box">
                <img src={detail.image} alt="" />
              </div>
              <div className="info">
                <h4>{detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <p>A Screen Everyone Love : Whether your family is streaming or video chatting with friends tablet A8</p>
               <h3>{detail.price}</h3>
                <button onClick={()=>addtocart(detail)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="shop">
        <h2># Shop</h2>
        <p>Home . shop</p>
        <div className="container">
          <div className="left-box">
            <div className="category">
              <div className="header">
                <h3>All Category</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allcatefilter()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("electronics")}># electronics</li>
                  <li onClick={() => Filter("headphone")}># headphone</li>
                  <li onClick={() => Filter("phone")}># phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img-box">
                <img src="image/shop_left.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img-box">
                <img src="image/shop_top.webp" alt="" />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_conatiner">
                {shop.map((curElm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img-box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <li>
                              <FaHeart />
                            </li>
                            <li onClick={() => detailPage(curElm)}>
                              <FaEye />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>₹{curElm.price}</p>
                          <button onClick={() => addtocart(curElm)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
