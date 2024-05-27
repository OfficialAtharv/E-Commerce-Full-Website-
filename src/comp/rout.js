import React from 'react'
import { Routes , Route} from 'react-router'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'




const Rout = ({shop,Filter,allcatefilter,addtocart,cart,setCart}) => {
  return (
 <>
 <Routes>
  <Route path='/' element={<Home addtocart={addtocart}/>}/> 
  <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/> }/>
  <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter}  addtocart={addtocart}/>} />
  <Route path='/Contact' element={<Contact/>}></Route>
  </Routes>
 </>
  )
}

export default Rout