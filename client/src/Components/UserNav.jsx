import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserNav() {
  const navigate=useNavigate()
  const logout=()=>
  {
    localStorage.clear();
    window.sessionStorage.clear();
   navigate('/')
  }
  return (
    <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="/userdashboard" className="logo">
              <img src="assets/images/logo.png" alt />
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="/userdashboard" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="/addFeedback">Feedback</a></li>
              <li className="scroll-to-section"><a href="/userViewShop">Shop</a></li>
              
              <li className="scroll-to-section"><a href="/cart">Cart</a></li>
              <li className="scroll-to-section"><a href="/userViewOrderDetails">Order Table</a></li>
              <li><a onClick={logout}>Logout</a></li> 
            </ul>        
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
