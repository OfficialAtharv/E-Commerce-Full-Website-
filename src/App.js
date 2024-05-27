import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./comp/Navigation";
import Rout from "./comp/rout";
import Footer from "./comp/Footer";
import HomeProducts from "./comp/home_products";

const App = () => {
  const [shop, setShop] = useState(HomeProducts);
  const [search, setSearch] = useState("");
  const [cart,setCart]= useState([]);

  const Filter = (x) => {
    const catefilter = HomeProducts.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };
  const allcatefilter = () => {
    setShop(HomeProducts);
  };
  const searchlenght = (search || []).length === 0;
  const searchproduct = () => {
  if (searchlenght) {
    alert("Please Search something");
    setShop(HomeProducts);
  } else 
  {
    
      const searchfilter = HomeProducts.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    
  }
  }
 
  const addtocart = (product)=>{
    const exist = cart.find((x)=>{
    return x.id === product.id
    })
    if(exist)
    {
      alert("This Product Is Already Added In Cart")
    }
    else{
      setCart([...cart,{...product,qty:1}])
      alert("Added To Cart")
    }


  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Navigation
          search={search}
          setSearch={setSearch}
          searchproduct={searchproduct}
        />
        <Rout setCart={setCart}cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
