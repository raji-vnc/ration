import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function SubsidyDetils() {
    const [subsidy,setSubsidy]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/subsidy/view-subsidy")
        .then((response=>{
        console.log(response.data.data);
        setSubsidy(response.data.data)
        console.log(subsidy);
        }))

    },[])

    const tbodies=subsidy&&subsidy.map((state,index)=>{
        const subsidyRows = state?.card_items.map((subsidy, i) => {
            const carddata = i === 0 ? <td rowSpan={state?.card_items.length + 1}>{state.card_type} card</td> : null
            return (
              <tr key={i}>
                {carddata}
                
                <td>{subsidy.name}</td>
                <td>{subsidy.name==="kerosene"?<>
                    {subsidy.qty} Litre</>:<>
                    {state.card_type==="yellow"||subsidy.name==="wheat"?
                     <>{subsidy.qty} kg</>: <>{subsidy.qty} kg/person</>}</>}</td>
                <td>{subsidy.price==0?<>free</>:<>₹ {subsidy.price}</>}</td>
              
              </tr>
            )
          })
          return (
            <tbody key={index} className={state.name}>
              {subsidyRows}
            </tbody>
          )
        })

  return (
    <div>
        <section className="calculator" style={{backgroundColor:"white"}}>
      <div className="container">
        <div className="row">
        <div className="section-heading" style={{textAlign:"center",marginTop:"-138px"}} >
              {/* <h6>Your Rights</h6> */}
              <h1>Know About Subsidies</h1>
            </div>
          <div className="col-lg-6" style={{marginTop:"100px"}}>
            <div className="left-image">
              <img src="https://media.gettyimages.com/photos/closeup-of-wheat-growing-on-fieldtirunelvelitamil-naduindia-picture-id1348971759?k=20&m=1348971759&s=612x612&w=0&h=Z8IDx7uXVwbFkpnBjG1VsLQKKBGxBjIUPp9avtZlv_w=" alt />
            </div>
          </div>
          <div className="col-lg-6">
            
          <table class="table1" width="105%">
                <thead>
                    <tr>
                        
                        <th scope="col" abbr="Starter">Card Type</th>
                        <th scope="col" abbr="Medium">Item</th>
                        <th scope="col" abbr="Business">Quantity</th>
                        <th scope="col" abbr="Deluxe">Price</th>
                    </tr>
                </thead>
                {tbodies}

                {/* <tbody>
                    <tr>
                        <td>512 MB</td>
                        <td>1 GB</td>
                        <td>2 GB</td>
                        <td>4 GB</td>
                    </tr>
                    <tr>
                        <td>50 GB</td>
                        <td>100 GB</td>
                        <td>150 GB</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>19.90 $</td>
                        <td>12.90 $</td>
                        <td>free</td>
                        <td>free</td>
                    </tr>
                  
                </tbody> */}
            </table>
            
                     </div>
        </div>
      </div>
    </section>
   
    </div>
  )
}
