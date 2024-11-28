import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import UserNav from '../../Components/UserNav'
import './table.css'
export default function UserViewOrdertable() {
const [token,setToken]=useState(localStorage.getItem("token"))
    const [arr,setArr]=useState([])

    const navigate=useNavigate()
    useEffect(() => {
      if(!token){
        navigate("/login")
      }
    }, [])

    useEffect(()=>{
        fetch("http://localhost:5000/order/viewOrderItems", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Result========", data)
                if (data.success == true) {
                    setArr(data.data)
                    console.log(arr);
                    // alert(data.message)
                }
                // else {

                //     alert(data.message)
                // }
            })
      
    },[])


    const tbodies = arr&&arr.map((state, index) => {
      const cityRows = state?.subsidydata.map((city, i) => {
        const datedata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.date}</td> : null
        const grandtotal = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.total} ₹</td> : null
        const orderdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.orderstatus}</td> : null
        
        const paymentdata = i === 0 ? <td rowSpan={state?.subsidydata.length + 1}>{state.paymentstatus} </td> : null
        return (
          <tr key={i}>
            {datedata}
            <td>{city.item}</td>
            <td>{city.qty}</td>
            <td>{city.price} ₹</td>
            <td>{grandtotal} </td>
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
    <>
    <UserNav/>
    <section className="simple-cta">
        <div className="container" >
          <div className="row">
            <div className="col-lg-5">
              <h4>Order Table</h4>
            </div>
           
          </div>
        </div>
      </section>
      <div className="tablecontainer py-5">
  
  <div className="tablecard py-5" style={{height:"700px"}}>
    <div className="card-body col-lg-10 mx-auto">
      <div className="card rounded shadow border-0">
        <div className="card-body p-5 bg-white rounded">
          <div className="table">
            <table class="table1" style={{width: '100%'}}>
              <thead className='tabletitle'>
                <tr style={{fontSize:"20px"}}>
                  <th>Date</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Grand Total</th>
                  <th>Delivery Status</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              {tbodies}
              
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

    </>
  )
}
