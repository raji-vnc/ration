import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import RationShopNav from '../../Components/RationShopNav'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../../Components/Nav'

export default function RationShopRegister() {
  const navigate=useNavigate()
  const [contacts,setContacts]=useState([]);

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setContacts({
        ...contacts,
        [name]:value
    })
   console.log(JSON.stringify(contacts));

}

const submitForm=(e)=>{
  console.log(contacts);
  e.preventDefault();
  var phoneno = /^[6-9]\d{9}$/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(contacts.username===''||contacts.email===''||contacts.location===''||
    contacts.phone===''||contacts.shop_owner_name===''||contacts.password==='')
    {
      toast.warning("Please enter all fields!!",{autoClose:3000,theme:'light'})

    }else 
    if(!mailformat.test(contacts.email))
    {
        toast.warning("Please enter a valid email!!",{autoClose:3000,theme:'light'})
    }else
    if(!phoneno.test(contacts.phone))
    {
        toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'light'})
    }else
     
    if(!strongPassword.test(contacts.password)){
      toast.warning("Please enter Strong password.it must contains digit, character, Uppercase,Special character!!",{autoClose:3000,theme:'light'})

    }
   else{
  axios.post("http://localhost:5000/register/ration-register",contacts)
   .then((response)=> {
    console.log("REGISTER RESULT======",response);
    if(response.data.success==true)
    {
      
      
        swal(response.data.message);
        navigate('/login')
       

    }

   else{
      swal(response.data.message)
   }
   

  }).catch((err)=>{
    swal(err.response.data.message)
  })
}
}
  return (
    <div>
        <Nav/>
      <section className="calculator">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="left-image">
            <img src="https://civilsupplieskerala.gov.in/images/home/2.jpg" alt />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-heading">
            <h4>Register</h4>
          </div>
          <form id="calculate" onSubmit={submitForm}>
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="name">Ration shop Name</label>
                  <input type="name" name="username" id="username" placeholder autoComplete="on" required 
                   onChange={handleInputChange} value={contacts.username}/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="email">Your Email</label>
                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder required
                     onChange={handleInputChange} value={contacts.email}/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="location">location</label>
                  <input type="text" name="location" id="location" placeholder autoComplete="on"
                    onChange={handleInputChange} value={contacts.location} required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" id="phone" placeholder autoComplete="on" 
                    onChange={handleInputChange} value={contacts.phone} required/>
                </fieldset>
              </div>
   
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="shop_owner_name">Owner Name</label>
                  <input type="text" name="shop_owner_name" id="shop_owner_name" placeholder autoComplete="on"
                    onChange={handleInputChange} value={contacts.shop_owner_name} required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder autoComplete="on"
                    onChange={handleInputChange} value={contacts.password} required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Submit Now</button>
                </fieldset>
              </div>
            </div>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}
