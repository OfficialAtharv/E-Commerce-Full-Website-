import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeProducts from "./home_products";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImCart } from "react-icons/im";
const Home = ({addtocart}) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setfeaturedProduct] = useState([]);
  const [topProduct, settopProduct] = useState([]);

  const [treandingProducts, setTreandingProducts] = useState(HomeProducts);
  const filtercate = (x) => {
    const filterProduct = HomeProducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTreandingProducts(filterProduct);
  };
  const allTreandingProducts = () => {
    setTreandingProducts(HomeProducts);
  };
  useEffect(() => {
    productCategory();
  });
  const productCategory = () => {
    const newcategory = HomeProducts.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = HomeProducts.filter((x) => {
      return x.type === "featured";
    });
    setfeaturedProduct(featuredcategory);

    const topcategory = HomeProducts.filter((x)=>{
      return x.type === "top";
    })
    settopProduct(topcategory);

  };
  return (
    <div className="home">
      <div className="top_banner">
        <div className="contact">
          <h3>Silver Aluminium</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your fist order</p>
          <Link to="/shop" className="link">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="treanding">
        <div className="conatiner">
          <div className="left_box">
            <div className="header">
              <div className="heading ">
                <h2 onClick={() => allTreandingProducts()}>
                  trending products
                </h2>
              </div>
              <div className="cate">
                <h3 onClick={() => filtercate("new")}>New</h3>
                <h3 onClick={() => filtercate("featured")}>Featured</h3>
                <h3 onClick={() => filtercate("top")}>top selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {treandingProducts.map((curElm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={curElm.image} alt=""></img>
                          <div className="icon">
                            <div className="icon_box">
                              <FaHeart />
                            </div>
                            <div className="icon_box">
                              <FaEye />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{curElm.Name}</h3>
                          <p>₹{curElm.price}</p>
                          <button className="btn" onClick={()=>addtocart(curElm)}>Add to Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <button>Show More</button>
            </div>
          </div>
          <div className="right_box">
            <div className="container">
              <div className="testomonial">
                <div className="head">
                  <h3>Our Testomonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src="image/100X100.png" alt="testomonial" />
                  </div>
                  <div className="info">
                    <h3>Atharv Kulkarni</h3>
                    <h4>Web Designer</h4>
                    <p>
                      I'm Atharv Kulkarni, shaping websites with my design
                      skills, making the internet look great, one page at a
                      time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="head">
                  <h3>Newsletter</h3>
                </div>
                <div className="form">
                  <p>Join our Malling list</p>
                  <input type="email" placeholder="E-Mail" autoComplete="off" />
                  <button>Subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>
                    <div className="icon">
                      <FaInstagram />
                    </div>
                    <div className="icon">
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banners">
        <div className="container">
          <div className="left_box">
            <div className="box">
              <img src="image/Multi-Banner-1.avif" alt="" />
            </div>
            <div className="box">
              <img src="image/Multi-Banner-2.avif" alt="" />
            </div>
          </div>
          <div className="right_box">
            <div className="top">
              <img src="image/Multi-Banner-3.webp" alt="" />
              <img src="image/Multi-Banner-4.avif" alt="" />
            </div>
            <div className="bottom">
              <img src="image/Multi-Banner-5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="header">
              <h2>New Product</h2>
            </div>
            {newProduct.map((curElm) => {
              return (
                <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className="icon">
                        <button>
                          <FaEye />
                        </button>
                        <button>
                          <FaHeart />
                        </button>
                        <button onClick={()=>addtocart(curElm)}>
                          <ImCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="box">
            <div className="header">
              <h2>Featured Product</h2>
            </div>
            {featuredProduct.map((curElm) => {
              return (
                <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className="icon">
                        <button>
                          <FaEye />
                        </button>
                        <button>
                          <FaHeart />
                        </button>
                        <button onClick={()=>addtocart(curElm)}>
                          <ImCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="box">
            <div className="header">
              <h2>Top Product</h2>
            </div>
            {topProduct.map((curElm) => {
              return (
                <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>₹{curElm.price}</p>
                      <div className="icon">
                        <button>
                          <FaEye />
                        </button>
                        <button>
                          <FaHeart />
                        </button>
                        <button onClick={()=>addtocart(curElm)}>
                          <ImCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
