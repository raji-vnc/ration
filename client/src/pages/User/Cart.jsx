import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserNav from '../../Components/UserNav'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import swal from "sweetalert"
export default function Cart() {
  const navigate = useNavigate()
  const [message, setMessage] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loginId, setLoginId] = useState(localStorage.getItem('login_id'))
  const [item, setItem] = useState([])
  const [cartitem, setCartitem] = useState([])

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5000/cart/viewCartItem/${loginId}`)
      .then((response) => {
        console.log(response.data.data);
        setCartitem(response.data.data)
        const data = response.data.data[0].cartData.card_items.filter(item => {
          let i = 0;
          while (i < response.data.data.length) {
            if (item.name.includes(response.data.data[i].item))
              return item;
            i += 1;
          }
        })
        setItem(data)
        console.log(item);

      })

  }, [])


  const addtoCart = (total) => {
    console.log(total);
    if(total===0)
    {
      const orderData={
        shop_id:localStorage.getItem("shop_id"),
        total:total,
        paymentstatus:"Not Paid"
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
    }else{
      localStorage.setItem("payment", true)
    navigate(`/payment/${total}`)
    }
    

  }

  const deleteCartItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/cart/deletecartitem/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        swal(response.data.message)
        window.location.reload();
      })
  }
  const mapdata = cartitem.map(item => (
    <div className="product">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid mx-auto d-block image" src={`assets/images/${item.item}.jpg`} alt='cardimage' />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-5 product-name">
                <div className="product-name">
                  <a href="#">{item.item}</a>
                  <div className="product-info">
                    <div>Quantity: <span className="value">{item.qty}</span></div>
                    <div>price: <span className="value">{item.price}</span></div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input id="quantity" type="number" defaultValue={item.qty} disabled className="form-control quantity-input" />
              </div>
              <div className="col-md-3 price">
                <span>₹ {item.price}</span>
              </div>
              <div className="col-md-1 price">
                <span onClick={() => { deleteCartItem(item._id) }}><i class="fa fa-times" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ))
  return (<>
    <UserNav />
    <main className="page">
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Cart</h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {mapdata}

                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item"><span className="text">Subtotal</span><span className="price"> ₹ {cartitem?.reduce((total, cartdata) => total + cartdata.price * 1, 0)}</span></div>
                  <div className="summary-item"><span className="text">Discount</span><span className="price"> ₹0</span></div>
                  <div className="summary-item"><span className="text">Shipping</span><span className="price"> ₹0</span></div>
                  <div className="summary-item"><span className="text">Total</span><span className="price"> ₹{cartitem?.reduce((total, cartdata) => total + cartdata.price * 1, 0)}</span></div>
                  <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { addtoCart(cartitem?.reduce((total, cartdata) => total + cartdata.price * 1, 0)) }}>Checkout</button>
                  {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={cashonDelivery}>Cash on delivery</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>

  )
}
