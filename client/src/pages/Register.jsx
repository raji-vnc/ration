import React, { useState } from 'react'
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(false)
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:5000/ration/view-shop")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data)
        console.log(data);
      })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContacts({
      ...contacts,
      [name]: value
    })
    console.log(JSON.stringify(contacts));

  }

  const [members, setMembers] = useState([{
    m_name: "",
    m_card_no: null,


  }]);

  const handleAdd = () => {
    const values = [...members];
    values.push({
      m_name: "",
      m_card_no: null
    });
    setMembers(values)

  };

  const handleRemovePlayers = (index) => {
    const values = [...members];
    values.splice(index, 1);
    setMembers(values);
  };

  const handlememeberInputChange = (index, event) => {
    const values = [...members];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setMembers(values);
    const member = [...members];
    setContacts(prevState => {
      return { ...prevState, members: [...member] }
    });

  };

  const submitForm = (e) => {
    setTemp(false)
    console.log("temp=========>",temp);
    console.log(members[0].m_card_no);
    e.preventDefault();
    console.log(members);
    console.log(contacts);
    var phoneno = /^[6-9]\d{9}$/;
    var cardno = /^\(?([0-9]{10})$/;
    var rcardno = /^\(?([0-9]{12})$/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
   
    if(contacts.username===''||contacts.name===''||contacts.age===''||contacts.card_no===''||
    contacts.phone===''||contacts.card_type===''||contacts.shop_id===''||contacts.address===''||contacts.password==='')
    {
      toast.warning("Please enter all fields!!",{autoClose:3000,theme:'light'})

    }else 
    if(contacts.age<=5)
    {
        toast.warning("Age Must greater than five!!",{autoClose:3000,theme:'light'})
    }else
    if(!cardno.test(contacts.card_no))
    {
        toast.warning("Please enter a valid Ration Card number!!",{autoClose:3000,theme:'light'})
    }else
    if(!phoneno.test(contacts.phone))
    {
        toast.warning("Please enter a valid  phone number!!",{autoClose:3000,theme:'light'})
    }else 
    if(!strongPassword.test(contacts.password)){
      toast.warning("Please enter Strong password.it must contains digit, character, Uppercase,Special character!!",{autoClose:3000,theme:'light'})

    }
    
    else{
     for(var i=0;i<members.length;i++){
      setTemp(false)

      if(!rcardno.test(members[i].m_card_no)){
        console.log(i+1);
        setTemp(false)
        toast.warning(`Please enter Valid Adhar Card Number of person ${i+1}`,{autoClose:3000,theme:'light'})
        console.log("temp=========>",temp);
      

      }
      else{
        setTemp(!temp)
        console.log("temp=========>",temp);

      }
     }}
   
    
   
   if(temp){
    axios.post("http://localhost:5000/register/user-register", contacts)
      .then((response) => {
        console.log("REGISTER RESULT======", response);
        if (response.data.success == true) {


          swal(response.data.message);
          navigate('/login')


        }

        else {
          swal(response.data.message)
        }


      }).catch((err)=>{
        swal(err.response.data.message)
      })
    }
  }
  return (
    <>
      <Nav />
      <section className="calculator">
        <div className="container">
          <form id="calculate" onSubmit={submitForm}>
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  {/* <h6>Your Freedom</h6> */}
                  <h4>Register</h4>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="name">User Name</label>
                      <input type="name" name="username" id="username" autoComplete="on" required
                        onChange={handleInputChange} value={contacts.username} />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" id="name"
                        // pattern="[^ @]*@[^ @]*" 
                        placeholder required
                        onChange={handleInputChange} value={contacts.name} />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="name">Your Age</label>
                      <input type="number" name="age" id="age" placeholder autoComplete="on" required
                        onChange={handleInputChange} value={contacts.age} />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="card_no">Your Ration card No</label>
                      <input type="number" name="card_no" id="card_no"
                        //  pattern="[^ @]*@[^ @]*"
                        placeholder required
                        onChange={handleInputChange} value={contacts.card_no} />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="phone">Your Phone Number</label>
                      <input type="number" name="phone" id="phone" placeholder autoComplete="on" required
                        onChange={handleInputChange} value={contacts.phone} />
                    </fieldset>
                  </div>
                 
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="chooseOption" className="form-label">Your Ration Card Type</label>
                      <select className="form-select" aria-label="Default select example" id="chooseOption" name='card_type' onChange={handleInputChange} value={contacts.card_type} required>
                        <option selected  value="">Choose an Option</option>
                        <option value="yellow">yellow</option>
                        <option value="pink">pink</option>
                        <option value="blue">blue</option>
                        <option value="white">White</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
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
                      <label htmlFor="subject">Address</label>
                      <textarea rows="5" type="subject" name="address" id="subject" placeholder autoComplete="on"
                        onChange={handleInputChange} value={contacts.address}required />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" placeholder autoComplete="on" required
                        onChange={handleInputChange} value={contacts.password} />
                    </fieldset>
                  </div>

                  <div className="col-lg-12" style={{ marginTop: 20 }}>
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button"  >Submit Now</button>
                    </fieldset>
                  </div>
                </div>

              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="section-heading" id='register_head' style={{ marginBottom: "51px" }} >

                    <button type="submit" id="form-submit" className="orange-button" onClick={() => handleAdd()}>Add member +</button>
                  </div>
                  {members.length > 0 && (
                    <>
                      {members.map((field, index) => (<>
                        <h6 color='white'>Member{index + 1}</h6>
                        {error === true ? <label style={{ color: "red", marginLeft: "100px" }}>please fill all field</label> : null}
                        <div className="col-lg-6">

                          <fieldset>
                            <label htmlFor="name">Name</label>
                            <input type="name" name="m_name" id="name" placeholder autoComplete="on" value={members.m_name}
                              onChange={(event) =>
                                handlememeberInputChange(index, event)}required />
                          </fieldset>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <label htmlFor="email">Adhar Number</label>
                            <input type="number" name="m_card_no" id="m_card_no" placeholder required
                              value={members.m_card_no}
                              onChange={(event) =>
                                handlememeberInputChange(index, event)} />
                          </fieldset>
                        </div>
                        <div className="col-lg-2" style={{ marginTop: "25px" }}>
                          <fieldset>
                            <button type="submit" id="form-submit" className="orange-button" onClick={() => handleRemovePlayers(index)}> x</button>

                          </fieldset>
                        </div>


                      </>))}</>)}
                </div>
              </div>
            </div>
          </form>
          <ToastContainer/>
        </div>
      </section>
      <Footer />
    </>
  )
}
