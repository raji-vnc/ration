import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'

export default function UpdateSubsidy() {
    const [subsidy,setSubsidy]=useState([])
const [data,setData]=useState([])
const [cardtype,setCardtype]=useState(null)


  const handlechange=(e)=>{
      const cardtype=e.target.value;
      console.log(cardtype);
      setCardtype(cardtype);
      console.log(cardtype);
      axios.get(`http://localhost:5000/subsidy/view-subsidy/${cardtype}`)
      .then((response=>{
      // console.log(response.data.data);
      setSubsidy(response.data.data.card_items)
      console.log(subsidy);
      }))
    }

    const handleAddPlayers = () => {
      const values = [...subsidy];
      values.push({
        name:"",
        qty: "",
       price:"" ,
        
      });
      setSubsidy(values)
      
    };

    const handleRemovePlayers = (index) => {
      console.log(index);
      const values = [...subsidy];
      console.log(values);

      values.splice(index, 1);
      console.log(values);

      setSubsidy(values);
      console.log(subsidy);

    };

    const handleInputChange = (index, event) => {
        const values = [...subsidy];
        console.log(values)
        const updatedValue = event.target.name;
        values[index][updatedValue] = event.target.value;
    
        setSubsidy(values);
        const subsidydata = [...subsidy];
        console.log(subsidydata);
        setData(subsidydata)
        // setData(prevState => {
        //   return {...prevState, subsidyDetails:[ ...subsidydata] }
        // });
     
      };


      const formsubmit=(e)=>{
        e.preventDefault()
        if(subsidy==""){
         alert("Update Anything")

        }else{
          var item={
            cardtype:cardtype,
            subsidydata:subsidy
          }
          console.log(item);
          axios.post("http://localhost:5000/subsidy/update-subsidy",item)
  .then((response=>{
  // setSubsidy(response.data.data.card_items)
  console.log(response.data);
  if(response.data.success==true){
    alert(response.data.message)
    window.location.reload();
  }
        }))
        }
       
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
        <h1><i className="fa fa-edit"></i> Add Subsidy</h1>
        {/* <p>Add Room</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">subsisdy</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
            
              <form onSubmit={formsubmit}>
              <div class="form-group">
                    <label for="exampleSelect1">Example select</label>
                    <select class="form-control" id="exampleSelect1"  name='data' value={subsidy.card_type} 
                    onChange={handlechange} required>
                      <option selected value="">Choose Card type</option>
                      <option value="yellow" >Backward section</option>
                      <option value="pink">BPL</option>
                      <option value="blue">APL</option>
                      <option value="white">Non-Priority</option>
                    </select>
                  </div>{
                    console.log(cardtype)
                  }
                  {cardtype===null?"":
                  <input type="button"  name="submit" id="submit"  value="Add item"onClick={() => handleAddPlayers()} />}

                  {subsidy.length > 0 && (
                <>
                  {subsidy.map((field, index) => (<>
              <div className="row">
                <div className="form-group col-md-5">
                  <label className="control-label">Name</label>
                  <input className="form-control"  type="text" placeholder="Name"
                  name='name' value={subsidy[index].name} onChange={(event) =>
       
             handleInputChange(index, event)} required/>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Quantity</label>
                  <input className="form-control" type="text"  placeholder="Quantity"
                  name='qty' value={subsidy[index].qty} onChange={(event) =>
                    handleInputChange(index, event)} required/>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Price</label>
                  <input className="form-control" type="number" placeholder="Price"
                  name='price' value={subsidy[index].price} onChange={(event) =>
                    handleInputChange(index, event)} required/>
                </div>
                  <div className="form-group col-md-1">
                     <input type="submit" style={{marginTop:"40px"}}  name="submit" id="submit"  value="x" onClick={() => handleRemovePlayers(index)} />
                   </div>
              </div>
              </>))}</>)}
              <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="btn btn-primary" value="Update" />
            </div>
              </form>
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
