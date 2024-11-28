import React, { useState } from 'react'
import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

export default function Login() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContacts({
      ...contacts,
      [name]: value
    })
    console.log(JSON.stringify(contacts));

  }


  const validation = (e) => {
    e.preventDefault();
    console.log("login data" + JSON.stringify(contacts));

    axios.post("http://localhost:5000/login", contacts)
      .then((response) => {
        console.log("LOGIN RESULT======", response.data);
        if (response.data.success == true) {
          if (response.data.role === "0") {
            localStorage.setItem("token", response.data.token)
            window.sessionStorage.setItem("isLoggedIn", true)
            navigate('/admindashboard')
          }
          else if (response.data.role === "1") {
            localStorage.setItem("login_id", response.data.loginId)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("role", response.data.role)
            window.sessionStorage.setItem("isLoggedIn", true)
            navigate('/rationShopDashboard')
          }
          // console.log(response.data);


          else if (response.data.role ==="2") {
            localStorage.setItem("login_id", response.data.loginId)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("card_type", response.data.card_type)
            localStorage.setItem("cname", response.data.name)
            localStorage.setItem("member_count", response.data.member_count)
            localStorage.setItem("shop_id", response.data.shop_id)
            window.sessionStorage.setItem("isLoggedIn", true)
            navigate('/userdashboard')
          }
          else if (response.data.role === "3") {
            localStorage.setItem("login_id", response.data.loginId)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("shop_id", response.data.shop_id)
            window.sessionStorage.setItem("isLoggedIn", true)
            navigate('/volunteerDashboard')
          }

        } else if (response.data.success == false) {
          alert(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error);
        swal(error.response.data.message);
      });



  }


  return (<>
    <Nav />
    <div className='log'>
    <div className="container log">
      <div className="row">
        <div className="col-md-6 offset-md-3" style={{ marginTop: "80px" }}>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5" onSubmit={validation}>
              <h2 className="text-center text-dark mt-5">Login Form</h2>
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name"
                  name='username' onChange={handleInputChange} value={contacts.username}required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="password"
                  name='password' value={contacts.password} onChange={handleInputChange} required/>
              </div>
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                Registered? <a href="/register" className="text-dark fw-bold"> Create an
                  Account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </>
  )
}
