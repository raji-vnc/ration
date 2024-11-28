import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import RationShopNav from '../../Components/RationShopNav'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function VolunteerRequest() {
    const [user,setUser]=useState([])
    const [message, setMessage] = useState(true)
  const [member,setMember]=useState([])
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [tokenId,setTokenId]=useState(localStorage.getItem("login_id"))
  const navigate=useNavigate()

  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

    useEffect(() => {
      fetch('http://localhost:5000/volunteer/view-volunteer-Request', {
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

   const deleteuser=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:5000/volunteer/delete-volunteer/${id}`)
     .then(response=>{
        console.log(response.data);
      if(response.data.success==true){
       setMessage(!message)
       swal(response.data.message)

      }
    })
  }


  return (
    <div>
    <RationShopNav/>
    <section className="testimonials" id="testimonials" style={{minHeight:"500px", backgroundColor:"#EAEBED"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h6>Requests</h6>
            <h4>Volunteer Requests</h4>
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
                 {/* {item?.members.map((item1,i)=>{
                <><p>member{i+1}</p>
                <p>zdfghjgfd</p></>
              })} */}
              {item?.userdata?.status==="0"?
            <button type="submit" width="50%" className="btn btn-color px-5 mb-5 " onClick={()=>approveuser(item?.userdata?._id)}>Approve</button>
            :null}
            <button type="submit" width="50%" className="btn btn-color px-5 mb-5 " onClick={()=>deleteuser(item?.userdata?._id)}>Delete</button>

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
