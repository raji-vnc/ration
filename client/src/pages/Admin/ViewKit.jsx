import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'

export default function ViewKit() {
    const [kit,setKit]=useState(null)
    const [message,setMessage]=useState(true)


    useEffect(()=>{
        axios.get("http://localhost:5000/kit/view-kit")
        .then((response=>{
        console.log(response.data.data);
        setKit(response.data.data)
        }))
    },[message])


    const deleteKit=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:5000/kit/delete-kit/${id}`)
        .then(response=>{
         if(response.data.success===true){
          swal(response.data.message)
        setMessage(!message)
            
         }
       })
    }

  return (
    <div><AdminHeader/>
    <AdminSidebar/>

    <div>
    <AdminHeader/>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i>Kit Details</h1>
        {/* <p>Add Room</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">Kit Details</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
          {kit&&kit.map(item=>(
            <> <div class="clearfix"></div>
            <div class="col-md-12">
              <div class="tile">
                <h3 class="tile-title">{item.kit_name}</h3>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th width="5px">SI No</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                       
                      </tr>
                    </thead>
                    {item.kit_items.map((data,i)=>(<>
                        <tbody>
                      <tr>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.qty}</td>
                      </tr>
                
                    
                    </tbody></>))}
                    <div className="form-submit" style={{paddingTop:10}}>
                <input type="button" onClick={()=>{deleteKit(item._id)}} style={{width:"150px"}} name="submit" id="submit" className="btn btn-primary" value="Delete" />
            </div>
                  </table>
                </div>
              </div>
            </div></>
          ))}
                

             
            </div>
            </div>
           
        </div>
      </div>
    </div>
  </main>
    </div>
    </div>
  )
}
