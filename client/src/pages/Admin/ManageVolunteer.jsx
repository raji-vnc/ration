import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import axios from 'axios';
import swal from 'sweetalert';

export default function ManageVolunteer() {
    const [user,setUser]=useState([])
    const [message, setMessage] = useState(true)
const [member,setMember]=useState("")
    useEffect(() => {
     axios.get("http://localhost:5000/volunteer/view-volunteer")
     .then(response=>{
      if(response.data.success==true){
        setUser(response.data.data)
        console.log(response.data.data);
      }
    })
},[message])

// const approveuser=(id)=>{
//     console.log(id);
//      axios.post(`http://localhost:5000/register/approve/${id}`)
//       .then(response=>{
//        if(response.data.success===true){
//         swal(response.data.message)
//         setMessage(response.data.message)
//        }
//      })
//    }


   const deleteuser=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:5000/volunteer/delete-volunteer/${id}`)
     .then(response=>{
        console.log(response.data);
      if(response.data.success==true){
       swal(response.data.message)
       setMessage(!message)
      }
    })
  }
  
  return (
   <div>
        <AdminHeader/>
        <AdminSidebar/>
        <main className="app-content">
  <div className="app-title">
    <div>
      <h1><i className="fa fa-users" /> Volunteers</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Volunteers</a></li>
    </ul>
  </div>
  <div className='row'>
  {user&&user.map(item=>(
 <div className="col-lg-3">
 <div className="bs-component">
   <div className="card">
    <img style={{height: 170, width: '100%', display: 'block'}} src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="Card image" />
     <div className="card-body">
     <h3 className="card-title"> {item?.userdata?.username}</h3>
     <p className="card-text">Name: {item?.name}</p>
     <p className="card-text">Phone: {item?.phone}</p>
     <p className="card-text">Address: {item?.address}</p>
     <p className="card-text">Shop Name: {item?.shopdata?.username}</p>
     
     {/* {item?.status == "0" ?
   <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
   :null} */}
   <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item?.userdata?._id)} value="Delete" />

   </div>
   </div>
 </div>
</div>
  ))}
</div>

    </main>
    </div>
  )
}
