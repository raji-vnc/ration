import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import VolunteerNav from '../../Components/VolunteerNav'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
import { useEffect } from 'react';
import Nav from '../../Components/Nav'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function VolunteerRegister() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(false)
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/ration/view-shop")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data)
        console.log(data);
      })
  }, [])


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

    if(contacts.username===''||contacts.name===''||contacts.address===''||
    contacts.phone===''||contacts.shop_id===''||contacts.password==='')
    {
      toast.warning("Please enter all fields!!",{autoClose:3000,theme:'light'})

    }else 
    if(!phoneno.test(contacts.phone))
    {
        toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'light'})
    }else
     
    if(!strongPassword.test(contacts.password)){
      toast.warning("Please enter Strong password.it must contains digit, character, Uppercase,Special character!!",{autoClose:3000,theme:'light'})

    }
   else{
  axios.post("http://localhost:5000/register/volunteer-register",contacts)
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
        <div className="col-lg-7">
          <div className="left-image">
            <img src="https://civilsupplieskerala.gov.in/images/home/2.jpg" alt />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-heading">
           
            <h4>Register</h4>
          </div>
          <form id="calculate" action onSubmit={submitForm}>
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="username">User Name</label>
                  <input type="text" name="username" id="username" placeholder autoComplete="on" required
                   onChange={handleInputChange} value={contacts.username} />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name"  placeholder required
                   onChange={handleInputChange} value={contacts.name} />
                </fieldset>
              </div>
            
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" name="phone" id="phone" placeholder autoComplete="on" 
                  onChange={handleInputChange} value={contacts.Phone}required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="shop_id">Ration Shope name</label>
                      <select className="form-select" aria-label="Default select example" name="shop_id" id="shop_id"
                        onChange={handleInputChange} value={contacts.shop_id} required>
                        <option disabled="disabled" selected="selected" value="">Select ration Shop</option>
                        {data.map((e, key) => {
                          return <option key={key} value={e._id}>{e.username}</option>
                        })}
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                <fieldset>
                  <label htmlFor="address">Address</label>
                  <textarea type="text" name="address" id="address" placeholder autoComplete="on"
                  onChange={handleInputChange} value={contacts.Address}required />
                </fieldset>
              </div>
              <div className="col-lg-12">
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
