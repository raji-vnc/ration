import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import UserNav from '../../Components/UserNav'
import swal from 'sweetalert'

export default function UserDashboard() {
    const today = new Date().toDateString();
    const navigate=useNavigate();
    const [subsidy,setSubsidy]=useState([])
    const [cardtype,setCardtype]=useState(localStorage.getItem('card_type'))
    const [memebercount,setMemebercount]=useState(localStorage.getItem('member_count'))
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [cardid,setCardid]=useState("")
    console.log(cardtype)

  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

    useEffect(()=>{
      axios.get(`http://localhost:5000/subsidy/view-subsidy/${cardtype}`)
      .then((response=>{
      console.log(response.data.data.card_items);
      setCardid(response.data.data._id)
      console.log(cardid);
      setSubsidy(response.data.data.card_items)
      console.log(subsidy);
      }))
      subsidy.map(item=>{
        console.log(item.name);
      })
    },[])

  

    const project = () => {
      switch(cardtype) {

        case "yellow":   return <>  {subsidy.map((item,index)=>(

                      <div className="col-lg-6">
                        <div className="service-item">
                        <img style={{height:"300px"}} src={`assets/images/${item.name}.jpg`} alt='cardimage'/>
                        <div className="row">
                          <div className="col">
                          <h4>{item.name}</h4>
                          <p>Member Count: {memebercount}</p>
                          {item.name==="kerosene"?
                          <p>Quantity: {item.qty} Litre</p>:
                          <p>Quantity: {item.qty} kg</p>}
                          <p>Price: ₹ {item.price} </p>
                          </div>
                          <div className="col">
                            
                          <div className="orange-button">
                              <a style={{color:"white"}} onClick={()=>{addToCart(item.name,item.qty,item.price)}}>To Cart</a>
                            </div>
                        </div>
                          </div>
                        </div>
                          
                      </div>
                    ))} </>;
        case "pink":   return <>  {subsidy.map((item,index)=>(

                        <div className="col-lg-6">
                          <div className="service-item">
                          <img style={{height:"300px"}} src={`assets/images/${item.name}.jpg`} alt='cardimage'/>
                          <div className="row">
                            <div className="col">
                            <h4>{item.name}</h4>
                            <p>Member Count: {memebercount}</p>
                            {item.name==="kerosene"?
                            <p>Quantity: {item.qty} Litre</p>:
                            <>{item.name==="wheat"?<p>Quantity: {item.qty}</p>:
                            <p>Quantity: {item.qty*memebercount} kg</p>}</>}
                            {item.name==="kerosene"?
                            <p>Price:₹ {item.price} </p>:
                            <>{item.name==="wheat"?
                            <p>Price:₹ {item.price}</p>:
                            <p>Price:₹ {item.price*memebercount}</p>}</>}
                            </div>
                            <div className="col">
                              
                            <div className="orange-button">
                                <a style={{color:"white"}} 
                                onClick={()=>{addToCart(item.name,item.name==="rice"?item.qty*memebercount:item.qty,item.name==="rice"?item.price*memebercount:item.price)}}>To Cart</a>
                              </div>
                          </div>
                            </div>
                          </div>
                            
                        </div>
                      ))} </>;
        case "blue": return <>  {subsidy.map((item,index)=>(

                        <div className="col-lg-6">
                          <div className="service-item">
                          <img style={{height:"300px"}} src={`assets/images/${item.name}.jpg`} alt='cardimage'/>
                          <div className="row">
                            <div className="col">
                            <h4>{item.name}</h4>
                            <p>Member Count: {memebercount}</p>
                            {item.name==="kerosene"?
                            <p>Quantity: {item.qty} Litre</p>:
                            <>{item.name==="wheat"?<p>Quantity: {item.qty}</p>:
                            <p>Quantity: {item.qty*memebercount} kg</p>}</>}
                            {item.name==="kerosene"?
                            <p>Price:₹ {item.price} </p>:
                            <>{item.name==="wheat"?
                            <p>Price:₹ {item.price}</p>:
                            <p>Price:₹ {item.price*memebercount}</p>}</>}
                            </div>
                            <div className="col">
                              
                            <div className="orange-button">
                                <a style={{color:"white"}} onClick={()=>{addToCart(item.name,item.name==="rice"?item.qty*memebercount:item.qty,item.name==="rice"?item.price*memebercount:item.price)}}>To Cart</a>
                              </div>
                          </div>
                            </div>
                          </div>
                            
                        </div>
                      ))} </>;
        case "white":  return <>  {subsidy.map((item,index)=>(

                        <div className="col-lg-6">
                          <div className="service-item">
                          <img style={{height:"300px"}} src={`assets/images/${item.name}.jpg`} alt='cardimage'/>
                          <div className="row">
                            <div className="col">
                            <h4>{item.name}</h4>
                            <p>Member Count: {memebercount}</p>
                            {item.name==="kerosene"?
                            <p>Quantity: {item.qty} Litre</p>:
                            <p>Quantity: {item.qty} kg</p>}
                            <p>Price: ₹ {item.price} </p>
                            </div>
                            <div className="col">
                              
                            <div className="orange-button">
                                <a style={{color:"white"}} onClick={()=>{addToCart(item.name,item.name==="rice"?item.qty*memebercount:item.qty,item.name==="rice"?item.price*memebercount:item.price)}}>To Cart</a>
                              </div>
                          </div>
                            </div>
                          </div>
                            
                        </div>
                      ))} </>;

        default:      return <h1>No Card Match</h1>
      }
    }


    const addToCart=(itemname,qty,price)=>{
      console.log(itemname,qty,price);
      const cdata = {
        card_type:cardtype,
        itemname:itemname,
        cardId:cardid,
        date:today,
        qty:qty,
        price:price
      }
      fetch('http://localhost:5000/cart/addCartItem', {
        method: 'POST',
        body: JSON.stringify(cdata),
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        },
    })
    .then(res => res.json())
    .then((data) => {
        console.log("Result========",data)
        if(data.success==true)
        {
          
            swal(data.message)
            
            navigate('/cart')
        }else{
          swal(data.message)
        }
      }).catch(err=>{
        console.log(err.message);
      })
    }



    
    return (
      <div> 
          <UserNav/>
          <section className="simple-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>The Kerala State<br/> <strong>E-Ration</strong> </h4>
            </div>
            <div className="col-lg-7">
              <div className="buttons">
                <div className="green-button">
                  {/* <a href="#">Discover More</a> */}
                </div>
              {/*  <div className="orange-button">
                  <a href="#">Contact Us</a>
    </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
           <section className="services" id="services">
      <div className="container">
        <div className="row">
        { project() }
      
        
         
        </div>
          
      </div>
    </section>
    <Footer/>
    </div>
  )
}
