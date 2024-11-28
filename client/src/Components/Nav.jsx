import React from 'react'

export default function Nav() {
  return (
    <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              <img src="/assets/images/logo.png" alt />
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="/#feedback">Feedback</a></li>
              <li className="scroll-to-section"><a href="/#about">About</a></li>
              <li className="has-sub">
                <a href="javascript:void(0)">Register</a>
                <ul className="sub-menu">
                  <li><a href="/register">Users</a></li>
                  <li><a href="/rationshopregister">Ration Shop</a></li>
                  <li><a href="/volunteerregister">Volunteers</a></li>
                </ul>
              </li>
              {/* <li className="scroll-to-section"><a href=>Register</a></li> */}
              {/* <li className="scroll-to-section"><a href="/login"></a></li> */}
              <li><a href="login">Login</a></li> 
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
