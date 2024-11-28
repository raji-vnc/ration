import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import RationShopNav from '../../Components/RationShopNav'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function RationShopDashboard() {
  const [user,setUser]=useState([])
  const [message, setMessage] = useState(true)
  const [member,setMember]=useState("")
const [token,setToken]=useState(localStorage.getItem("token"))
const [tokenId,setTokenId]=useState(localStorage.getItem("login_id"))

const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/user/view-user-Request', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+token,
      },
}).then(res => res.json())
.then((response)=>{
          console.log(response.data);
          setMember(response.data)
          console.log(JSON.stringify(member));
        
      })
},[message])

const approveuser=(id)=>{
  console.log(id);
   axios.post(`http://localhost:5000/register/approve/${id}`)
    .then(response=>{
      console.log(response);
     if(response.data.success===true){
      swal(response.data.message)
      setMessage(!message)
    }
   })
 }
 
  return (
    <div>
      <RationShopNav/>
      <section className="testimonials" id="testimonials" style={{minHeight:"500px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              
              <h4>Users Requests</h4>
            </div>
          </div>
          {member&&member.map(item=>(
            <>
          <div className="col-lg-6">
            <div className="owl-testimonials " style={{position: 'relative', zIndex: 5}}>
            
              <div className="item">
              <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt />
                <h4>Name: {item?.userdata?.username}</h4>
                <p>Phone: {item?.phone}</p>
                <p>Address: {item?.address}</p>
                <p>Age: {item?.age}</p>
                <p>Card Number: {item?.card_no}</p>
                <p>Card Type:{item?.card_type}</p>
                <p>Number Of Members:{item?.members.length}</p>
                {/* <p>status:{item?.userdata?.status}</p> */}
                {item?.userdata?.status==="0"?
                  <button type="submit" width="50%" className="btn btn-color px-5 mb-5 " onClick={()=>approveuser(item?.userdata?._id)}>Approve</button>
                  :null}

                   {/* {item?.members.map((item1,i)=>{
                  <><p>member{i+1}</p>
                  <p>zdfghjgfd</p></>
                })} */}

                <div className="right-image">
                 
                </div>
              </div>
            
            </div>
          </div>
          </> ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}
