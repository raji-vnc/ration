import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function VolunteerNav() {
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
            <a href="VolunteerDashboard" className="logo">
              <img src="assets/images/logo.png" alt />
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="/VolunteerDashboard" className="active">Home</a></li>
              {/* <li className="scroll-to-section"><a href="#">Services</a></li>
              <li className="scroll-to-section"><a href="#">About</a></li>
              <li className="has-sub">
                <a href="javascript:void(0)">Register</a>
                <ul className="sub-menu">
                  <li><a href="/register">Users</a></li>
                  <li><a href="/rationshopregister">Ration Shop</a></li>
                  <li><a href="/volunteerregister">Volunteers</a></li>
                </ul>
              </li> */}
              {/* <li className="scroll-to-section"><a href=>Register</a></li> */}
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
