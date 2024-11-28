import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'

export default function ViewFeedback() {
    const [arr,setArr]=useState([])

    useEffect(() => {
      axios.get("http://localhost:5000/feedback/view-feedback")
      .then(response=>{
        console.log(response.data.data);
        setArr(response.data.data)
    })
    }, [])
    
  return (
    <div>
        <AdminHeader/>
        <AdminSidebar/>
        <main className="app-content">
  <div className="app-title">
    <div>
      <h1><i className="fa fa-dashboard" /> Feedback</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Feedback</a></li>
    </ul>
  </div> 

  <div className="tablecontainer py-5">
  
  <div className="tablecard py-5" style={{height:"700px"}}>
    <div className="card-body col-lg-10 mx-auto">
      <div className="card rounded shadow border-0">
        <div className="card-body p-5 bg-white rounded">
          <div className="table">
            <table id="example" style={{width: '100%'}} className="table table-striped table-bordered">
              <thead className='tabletitle'>
                <tr style={{fontSize:"20px"}}>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Message</th>
                 
                </tr>
              </thead>
              <tbody  >
                {arr&&arr.map(item=>(
                     <tr >
                     <td>{item.name}</td>
                     <td>{item.phone}</td>
                     <td>{item.feedback}</td>
                     
                   </tr>
                ))}
             
          </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </main>
    </div>
  )
}
