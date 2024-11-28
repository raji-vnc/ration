import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import UserNav from '../../Components/UserNav'

export default function UserViewRationShop() {
    const [shop,setShop]=useState([])
    const [shopid,setShopid]=useState(localStorage.getItem("shop_id"))

    const navigate=useNavigate()
  const token=localStorage.getItem("token")
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/ration/user-view-shop/${shopid}`)
        .then((response=>{
        console.log(response.data.data);
        setShop(response.data.data)
        }))
    }, [])
    
  return (
    <div>
        <UserNav/>
        <section className="simple-cta">
        <div className="container" >
          <div className="row">
            <div className="col-lg-5">
              <h4> My Ration Shop</h4>
            </div>
           
          </div>
        </div>
      </section>
      <section className="services" id="services">
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
                        <div className="service-item">
                        <img style={{height:"400px"}} src="https://th.bing.com/th/id/OIP.noPZhGqUiQhWWwVmKp3ZSQHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt='cardimage'/>
                        <div className="row" style={{alignItem:"center"}}>
                          <h2>Shope Name : {shop[0]?.username}</h2>
                          <h3>Owner Name: {shop[0]?.shopedetails[0]?.shop_owner_name}</h3>
                          <h5>Phone Number: {shop[0]?.shopedetails[0]?.phone}</h5>
                          <h5>email:   {shop[0]?.shopedetails[0]?.email}</h5>
                          <h5>phone:   {shop[0]?.shopedetails[0]?.phone}</h5>
                          
                          </div>
                        </div>
                        
                      </div>
      
        
         
        </div>
          
      </div>
    </section>
        <Footer/>
    </div>
  )
}
