import React from "react";
import "./Navigation.css";
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navigation = ({Search,setSearch,searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free shipping When shopping up to 1000</p>
          </div>
        </div>
        <div className="midheader">
          <div className="logo">
            <img src="image/logo.webp" alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" value={Search} placeholder="search" onChange={(e)=>setSearch(e.target.value)} ></input>
            <button onClick={searchproduct}>
              <FaSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <MdLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="user_profile">
            {
              isAuthenticated ?
              <>
              <div className="icon">
                <FaUserAlt />
                </div>
                <div className="info">
                <h2>{user.name}</h2>
              <p>{user.email}</p>
                </div>
             
              </>
              :
              <>
              <div className="icon">
                <FaUserAlt />
                <div className="info">
                  <p>Please Login</p>
                </div>
                </div>
              </>
            }
          </div>
          <div className="nav">
            <ul>
              <li><Link to='/' className="link">Home</Link></li>
              <li><Link to='/shop' className="link">Shop</Link></li>
              <li><Link to='/Cart' className="link">Cart</Link></li>
              <li><Link to='/about' className="link">About</Link></li>
              <li><Link to='/contact' className="link">Contact</Link></li>
            </ul>
          </div>
          <div className="offer">
            <p>Flat 10% overall Iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
