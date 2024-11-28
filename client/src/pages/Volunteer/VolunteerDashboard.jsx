import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../../Components/Footer'
import VolunteerNav from '../../Components/VolunteerNav'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

export default function VolunteerDashboard() {

  const [arr,setArr]=useState(null)
  const [message, setMessage] = useState(true)
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [shopid,setShopid]=useState(localStorage.getItem("shop_id"))
  const navigate=useNavigate()

  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

  useEffect(()=>{
    console.log(shopid);
fetch(`http://localhost:5000/volunteer/view-order-items/${shopid}`,{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
  },
}) .then(res => res.json())
.then((data) => {
    console.log("Result========", data)
    if (data.success == true) {
        setArr(data.data)
        console.log(data.data);
        // const uniqueIds = [];
        // const uniqueEmployees = data.data.filter(element => {
        //   const isDuplicate = uniqueIds.includes(element.orderdata._id);
      
        //   if (!isDuplicate) {
        //     uniqueIds.push(element.orderdata._id);
      
        //     return true;
        //   }
      
        //   return false;
        // });
        // setArr(uniqueEmployees);
        // alert(data.message)
    }
    else {

        // alert(data.message)
    }
})
  },[message])

  const delivered=(id)=>{
console.log(id);
axios.post(`http://localhost:5000/volunteer/delivered/${id}`)
.then(response=>{
  console.log(response);
  if(response.data.success==true){
    swal(response.data.message)
    setMessage(!message)
   }})
  }
  return (
    <div>
      <VolunteerNav/>
       <section className="testimonials" id="testimonials" style={{minHeight:"500px"}} >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h6>Requests</h6>
            
          </div>
        </div>
        {
          arr===null?
          <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
               
                  <h1>No Request Found</h1>
                </div>
              </div>
            </div>

          </div>
          :
          <>{arr&&arr.map((item,i)=>(
         
            <div className="col-lg-6" >
              <div className="owl-testimonials " style={{position: 'relative', zIndex: 5}}>
              
                <div className="item">
                <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt />
                  <h4>Name: {item?.userdata[0]?.name}</h4>
                  {console.log(item?.userdata[0]?.members)}
                  <p>Phone: {item?.userdata[0]?.phone}</p>
                  <p>Address: {item?.userdata[0]?.address}</p>
                  {/* <p>Order Date:{item.orderdata.date}</p>
                  <p>payment Status:{item.orderdata.paymentstatus}</p>
                  <p> Total:{item.orderdata.total}</p> */}
                     
                  <span>Items</span>
                  {item?.subsidydata.map(data=>(
                    <p>{data.item} : {data.qty} : {data.price} ₹</p>
                  ))}
                  <p> status: {item.orderstatus}</p>
                  <p> Delivery date: {item.date}</p>
                  <p> Total: {item.total}</p>
                  <p> Payment status: {item.paymentstatus}</p>
    
                  {/* {item?.orderdata[i].map(data=>{
                    console.log(data)
                  })} */}
                   {/* {item?.orderdata?.map((item1,i)=>{
                    <><p>member{i+1}</p>
                    <p>zdfghjgfd</p></>
                  })} */}
                  {item.orderstatus==="delivered"?null:
                <button type="submit" width="50%" className="btn btn-color px-5 mb-5 " onClick={()=>{delivered(item._id)}} >Delivered</button>
              }
    
                  <div className="right-image">
                   
                  </div>
                </div>
              
              </div>
            </div>
             ))}</>
        }
        
        
      </div>
    </div>
  </section>
  <Footer/>
    </div>
  )
}
