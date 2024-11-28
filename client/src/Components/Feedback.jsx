import React, { useState,useEffec } from 'react'
import swal from 'sweetalert'
import { toast,ToastContainer } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
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
     
      if(contacts.name===''||contacts.phone===''||contacts.feedback==='')
      {
        toast.warning("Please enter all fields!!",{autoClose:3000,theme:'light'})
  
      }else 
      
      if(!phoneno.test(contacts.phone))
      {
          toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'light'})
      }
     else{
    axios.post("http://localhost:5000/feedback/add-feedback",contacts)
     .then((response)=> {
      console.log("REGISTER RESULT======",response);
      if(response.data.success==true)
      {
        
        
          swal(response.data.message);
        //   navigate('/login')
         
  
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
         <section className="calculator" id='feedback'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="left-image">
            <img src="https://civilsupplieskerala.gov.in/images/home/2.jpg" alt />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-heading" >
            <h4>Add Feedback</h4>
          </div>
          <form id="calculate" onSubmit={submitForm}>
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="name"> Name</label>
                  <input type="name" name="name" id="username" placeholder autoComplete="on" required 
                   onChange={handleInputChange} value={contacts.name}/>
                </fieldset>
              </div>
             
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" id="phone" placeholder autoComplete="on" 
                    onChange={handleInputChange} value={contacts.phone} required/>
                </fieldset>
              </div>
   
              <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="shop_owner_name">Feedback</label>
                  <textarea rows={20} name="feedback" id="feedback" placeholder autoComplete="on"
                    onChange={handleInputChange} value={contacts.feedback} required/>
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
    </div>
  )
}
