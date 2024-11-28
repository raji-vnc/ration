import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export default function Kit() {
       const [kit,setKit]=useState(null)


    useEffect(()=>{
        axios.get("http://localhost:5000/kit/view-kit")
        .then((response=>{
        console.log(response.data.data);
        setKit(response.data.data)
        }))
    },[])
  return (
    <div>
        <Nav/>
        <section style={{marginTop:"80px"}} className="about-us" id="about">
      <div className="container">
        <div className="row">
           
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              {/* <h6> </h6> */}
              <h4>Special kits</h4>
            </div>
          </div>
        {kit&&kit.map(item=>(
            <>
          <div className="col-lg-12" style={{marginTop:20}}>
            <div className="naccs">
              <div className="tabs">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div style={{width:"200px"}} className="active gradient-border"><span>{item.kit_name}</span></div>
                      {/* <div className="gradient-border"><span>Graphics</span></div>
                      <div className="gradient-border"><span>Web Coding</span></div> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      <li className="active">
                        <div>
                         
                          <div className="list-item">
                            <span className="item item-title">SI No</span>
                            <span className="item item-title">Product Name</span>
                            <span className="item item-title">Quantity</span>
                          </div>
                          {item.kit_items.map((data,i)=>(<>

                          <div className="list-item">
                            <span className="item item-title">{i+1}</span>
                            <span className="item item-title">{data.name}</span>
                            <span className="item item-title">{data.qty}</span>
                          </div>
                          </>))}
                        </div>
                      </li>
                 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          ))}
          </div>
          </div>
    </section>
    <Footer/>
    </div>
  )
}
