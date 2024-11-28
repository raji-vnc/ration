import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminHeader() {
  const navigate=useNavigate()
  const logout=()=>
  {
    localStorage.clear();
    window.sessionStorage.clear();
   navigate('/')
  }
  return (
    <header className="app-header"><a className="app-header__logo" href="/admindashboard">
    <img style={{height:"70px",width:"150px"}} src="assets/images/logo.png" alt /></a>
    
     <ul className="app-nav">
       
       <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg btn btn-danger"></i></a>
         <ul className="dropdown-menu settings-menu dropdown-menu-right">
           {/* <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</a></li>
           <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</a></li> */}
           <li><a className="dropdown-item" onClick={logout}><i className="fa fa-sign-out fa-lg "></i> Logout</a></li>
         </ul>
       </li>
     </ul>
   </header>
  )
}
