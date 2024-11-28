import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import RationShopNav from '../../Components/RationShopNav'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function RationShopDashboard() {
  const [user,setUser]=useState([])
  const [message, setMessage] = useState([])
  const [arr,setArr]=useState([])
  const [token,setToken]=useState(localStorage.getItem("token"))
const [Id,setId]=useState(localStorage.getItem("login_id"))


const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5000/order/shope-view-order-data/${Id}`)
.then((response)=>{
          console.log(response.data.data);
          setArr(response.data.data)
          // console.log(JSON.stringify(member));
        
      })
},[])


 const tbodies = arr&&arr.map((state, index) => {
  const cityRows = state?.subsidydata.map((city, i) => {
    const userdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.name}</td> : null
    const carddata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.card_type}</td> : null
    const numberdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.registerdetails.card_no}</td> : null
    const datedata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.date}</td> : null
    const grandtotal = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.total}</td> : null
    const orderdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.orderstatus}</td> : null
    const paymentdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.paymentstatus}</td> : null
    return (
      <tr key={i}>
        {userdata}
        {carddata}
        {numberdata}
        {datedata}
        <td>{city.item}</td>
        <td>{city.qty}</td>
        <td>{city.price}</td>
        <td>{grandtotal}</td>
        <td>{orderdata}</td>
        <td>{paymentdata}</td>
      </tr>
    )
  })
  return (
    <tbody key={index} className={state.name}>
      {cityRows}
    </tbody>
  )
})
  return (
    <div>
      <RationShopNav/>
      
      <section className="testimonials" id="testimonials" style={{minHeight:"500px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              
              <h4>Users Order Requests</h4>
            </div>
          </div>
          
       
    <div className="tablecontainer py-5">
  
  <div className="tablecard py-5" style={{height:"700px"}}>
    <div className="card-body col-lg-10 mx-auto">
      <div className="card rounded shadow border-0">
        <div className="card-body p-5 bg-white rounded">
            <table class="table1" style={{width: '100%'}} >
              <thead >
                <tr >
                <th scope="col" abbr="Starter">Name</th>
                <th scope="col" abbr="Starter">Card type</th>
                <th scope="col" abbr="Starter">Card Number </th>
                <th scope="col" abbr="Starter">Date</th>
                  <th scope="col" abbr="Starter">Item</th>
                  <th scope="col" abbr="Starter">Quantity</th>
                  <th scope="col" abbr="Starter">Price</th>
                  <th scope="col" abbr="Starter">Grand Total</th>
                  <th scope="col" abbr="Starter">Delivery Status</th>
                  <th scope="col" abbr="Starter">Payment Status</th>
                </tr>
              </thead>
              {tbodies}
            
                   
               
            </table>
        </div>
      </div>
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
