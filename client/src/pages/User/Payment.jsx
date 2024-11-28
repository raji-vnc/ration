import React, { useEffect, useState } from 'react'
import { useParams,useNavigate,useLocation } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import Footer from '../../Components/Footer'
import UserNav from '../../Components/UserNav'

export default function Payment() {
  const navigate=useNavigate();
  const {total}=useParams()
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [payment,setPayment]=useState(localStorage.getItem("payment"))
   
   
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
	if(month < 10)
	month = '0' + month.toString();
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);
   
   const [temp,setTemp]=useState(0)
   const [contacts,setContacts]=useState({
    cardNo:"",
    Edate:"",
    cvv:'',
    cOwner:""
  });
   useEffect(()=>{
    if(!payment){
        navigate("/cart")
    }
    console.log(total);
    setTemp(total)
   },[])
   const addContacts=(e)=>{
    e.preventDefault()
    var card = /^\(?([0-9]{12})$/;
    var checkcvv=/^\(?([0-9]{3})$/;
    if(!card.test(contacts.cardNo)){
      toast.warning("Please Enter valid card number!!",{autoClose:3000,theme:'light'})
    }else
    if(contacts.Edate===''){
      toast.warning("Please enter expiry date!!",{autoClose:3000,theme:'light'})

    }else  if(!checkcvv.test(contacts.cvv)){
      toast.warning("Please enter valid cvv!!",{autoClose:3000,theme:'light'})

    }else  if(contacts.cOwner===''){
      toast.warning("Please eneter card owner!!",{autoClose:3000,theme:'light'})

    }
else{
	const orderData={
        shop_id:localStorage.getItem("shop_id"),
        total:total
    }
    console.log(orderData);	
  fetch("http://localhost:5000/order/ordersubsidy", {
    method: 'POST',
    body:JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  })
    .then(res => res.json())
    .then((data) => {
      console.log("Result========", data)
      if (data.success == true) {

        alert(data.message)
        localStorage.removeItem("payment")

        navigate("/userViewOrderDetails")
      }
      else {

        alert(data.message)
      }
    })
}

}
const handleInputChange=(e)=>{
    const {name,value}=e.target
    setContacts({
        ...contacts,
        [name]:value
    })
   console.log(JSON.stringify(contacts));

}
  return (<>
    <div class="container">

<div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-6 col-md-offset-3" style={{paddingTop:100}}>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <h3 class="text-center">Payment Details</h3>
                        <img class="img-responsive cc-img" src="https://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"/>
                    </div>
                </div>
                <div class="panel-body">
                    <form onSubmit={addContacts}>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label>CARD NUMBER</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" placeholder="Valid Card Number"
                                         name="cardNo"
                                         value={contacts.cardNo}
                                         onChange={handleInputChange} required />
                                        <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-7 col-md-7">
                                <div class="form-group">
                                    <label><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
                                    <input type="date" min={newdate} class="form-control" placeholder="MM / YY" 
                                    name="Edate"
                                    value={contacts.Edate}
                                    onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div class="col-xs-5 col-md-5 pull-right">
                                <div class="form-group">
                                    <label>CV CODE</label>
                                    <input type="number" class="form-control" placeholder="CVC" 
                                    name="cvv"
                                    value={contacts.cvv}
                                    onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label>CARD OWNER</label>
                                    <input type="text" class="form-control" placeholder="Card Owner Names"
                                    name="cOwner"
                                    value={contacts.cOwner}
                                    onChange={handleInputChange} required />
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                    <div class="row">
                        <div class="col-xs-12">
                            <button class="btn btn-warning btn-lg btn-block" > Pay ₹{temp}</button>
                        </div>
                    </div>
                </div>
                    </form>
                </div>
               <ToastContainer/>
            </div>
        </div>
    </div>
</div>

</div>
</>
    
    
    
    
  )
}
