import React from 'react'

export default function AdminSidebar() {
  return (
    <div>
         <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <aside className="adminapp-sidebar">
      <div className="adminapp-sidebar__user">
        <img className="adminapp-sidebar__user-avatar" src="https://promotemyhotels.com/public/uploads/testimonial-1.png" alt="User Image"/>
       
      </div>
      <div>
      {/* <div className="adminapp-sidebar__user">
          <p className="adminapp-sidebar__user-name">Supply Co office</p>
          <p className="adminapp-sidebar__user-designation">Frontend Developer</p>
        </div> */}
        </div>
      <ul className="app-menu">
        <li><a className="app-menu__item" href="admindashboard"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>
       
        <li><a className="app-menu__item" href="/addSubsidy"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Subsidy</span></a></li>
        <li><a className="app-menu__item" href="/updateSubsidy"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Update Subsidy</span></a></li>
        <li><a className="app-menu__item" href="/viewFeedback"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Feedback</span></a></li>
        <li><a className="app-menu__item" href="/addKit"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Kit</span></a></li>
        <li><a className="app-menu__item" href="/viewKit"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">View Kit</span></a></li>
        </ul>
    </aside>
    </div>
  )
}
