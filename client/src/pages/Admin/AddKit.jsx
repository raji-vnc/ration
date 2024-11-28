import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from '../../Components/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar';
import { useNavigate } from 'react-router-dom';

export default function AddKit() {
    const navigate=useNavigate()
    const [subsidy,setSubsidy]=useState([{
        name:"",
        qty: "",
    }])
      const [kit,setKit]=useState("")
const [data,setData]=useState({})
console.log(data);

    const inputChange=(e)=>{
      
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
        console.log(data);
        setKit(e.target.value)
    }
    const handleAddPlayers = () => {
      const values = [...subsidy];
      values.push({
        name:"",
        qty: "",
     
        
      });
      setSubsidy(values)
      
    };
    const handleRemovePlayers = (index) => {
      const values = [...subsidy];
      values.splice(index, 1);
      setSubsidy(values);
    };
  
    const handleInputChange = (index, event) => {
      const values = [...subsidy];
      const updatedValue = event.target.name;
      values[index][updatedValue] = event.target.value;
  
      setSubsidy(values);
      const subsidydata = [...subsidy];
      setData(prevState => {
        return {...prevState, kitDetails:[ ...subsidydata] }
      });
   
    };
    const formsubmit=(e)=>{
      e.preventDefault()
      console.log(data);
      if(kit===""){
        toast.warning("Please Choose Card!!",{autoClose:3000,theme:'light'})

      }else{
console.log(data);
      axios.post("http://localhost:5000/kit/add-kit",data)
      .then(response=>{
        console.log(response);
        if(response.data.success==true){
          swal(response.data.message)
          navigate('/viewKit')
        }else{
          swal(response.data.message)

        }
      }).catch(err=>{
        swal(err.response.data.message);
      })
    }
    }
  return (
    <div>
    <AdminHeader/>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i> Add Kit</h1>
        {/* <p>Add Room</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">Kit</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
            
              <form onSubmit={formsubmit}>
              <div class="form-group">
                    <label for="exampleSelect1">Kit Name</label>
                    <input className="form-control"  type="text" placeholder="Name"
                  name='kit' value={kit} onChange={inputChange} required/>
                  </div>
                  <input type="button"  name="submit" id="submit"  value="Add item"onClick={() => handleAddPlayers()} />

                  {subsidy.length > 0 && (
                <>
                  {subsidy.map((field, index) => (<>
              <div className="row">
                <div className="form-group col-md-8">
                  <label className="control-label">Name</label>
                  <input className="form-control"  type="text" placeholder="Name"
                  name='name' value={subsidy.name1} onChange={(event) =>
                    handleInputChange(index, event)} required/>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Quantity</label>
                  <input className="form-control" type="text"  placeholder="Quantity"
                  name='qty' value={subsidy.qty1} onChange={(event) =>
                    handleInputChange(index, event)} required/>
                </div>
               
                  <div className="form-group col-md-1">
                     <input type="submit" style={{marginTop:"40px"}}  name="submit" id="submit"  value="x"onClick={() => handleRemovePlayers(index)} />
                   </div>
              </div>
              </>))}</>)}

                <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="btn btn-primary" value="Add" />
            </div>
              </form>
            </div>
            </div>
           <ToastContainer/>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
