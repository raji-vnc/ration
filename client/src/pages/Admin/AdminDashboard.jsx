import React, { useEffect } from 'react'
import AdminHeader from '../../Components/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar';
import Nav from '../../Components/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
 function AdminDashboard() {
    const navigate=useNavigate();
    const [user,setUser]=useState("")
    const [shop,setShop]=useState("")
    const [volunteer,setVolunteer]=useState("")
    const [arr,setArr]=useState([])


    useEffect(()=>{
    axios.get("http://localhost:5000/ration/view-shop").then(result=>{
      setShop(result.data.data);
      console.log(shop);
    })
    axios.get("http://localhost:5000/user/view-user").then(result=>{
      setUser(result.data.data);
      console.log(user);
    })
    axios.get("http://localhost:5000/volunteer/view-volunteer").then(result=>{
      setVolunteer(result.data.data);
      console.log(volunteer);
    })
    axios.get("http://localhost:5000/order/admin-view-order-data")
    .then((response)=>{
              console.log(response.data.data);
              setArr(response.data.data)
              // console.log(JSON.stringify(member));
            
          })
    },[])

    
 const tbodies = arr&&arr.map((state, index) => {
  const cityRows = state?.subsidydata.map((city, i) => {
    const userdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.name}</td> : null
    const carddata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.card_type}</td> : null
    const numberdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.card_no}</td> : null
    const datedata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.date}</td> : null
    const grandtotal = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.total}</td> : null
    const orderdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.orderstatus}</td> : null
    const paymentdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.paymentstatus}</td> : null
    return (
      <tr key={i}>
        {userdata}
        {carddata}
        {numberdata}
        {datedata}
        <td>{city.item}</td>
        <td>{city.qty}</td>
        <td>{city.price}</td>
        <td>{grandtotal}</td>
        <td>{orderdata}</td>
        <td>{paymentdata}</td>
      </tr>
    )
  })
  return (
    <tbody key={index} className={state.name}>
      {cityRows}
    </tbody>
  )
})

  return (<>
              <div className="app sidebar-mini">
   <AdminHeader/>
   <AdminSidebar/>
   <main className="app-content">
  <div className="app-title">
    <div>
      <h1><i className="fa fa-dashboard" /> Dashboard</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>  

  <div className="row">
    
    <div className="col-md-6 col-lg-4" onClick={()=>{navigate("/adminmanageusers")}}>
      <div className="widget-small danger coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>Users</h4>
        <p><b>{user.length}</b></p>
        </div>
      </div>
    </div>
    
    <div className="col-md-6 col-lg-4"  onClick={()=>{navigate("/adminmanageshop")}}>
      <div className="widget-small warning coloured-icon"><i className="icon fa fa-university fa-3x" />
        <div className="info">
          <h4>Ration Shop</h4>
          <p><b>{shop.length}</b></p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4" onClick={()=>{navigate("/adminmanagevolunteer")}}>
      <div className="widget-small danger coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>Volunteers</h4>
        <p><b>{volunteer.length}</b></p>
        </div>
      </div>
    </div>

  </div>
  <div className="tablecontainer py-5">
  
  <div className="tablecard py-5" >
    <div className="card-body col-lg-10 mx-auto">
      <div className="card rounded shadow border-0">
        <div className="card-body p-5 bg-white rounded">
          <div className="table">
            <table id="example" style={{width: '100%'}} className="table table-striped table-bordered">
              <thead className='tabletitle'>
                <tr style={{fontSize:"20px"}}>
                <th>Name</th>
                <th>Card type</th>
                <th>Card Number </th>
                <th>Date</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Grand Total</th>
                  <th>Delivery Status</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              {tbodies}
            
                   
               
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</main>

    </div>
      </>
  )
}


export default AdminDashboard;
