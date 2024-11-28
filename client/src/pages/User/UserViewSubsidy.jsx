import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'

export default function UserViewSubsidy() {
  const [subsidy,setSubsidy]=useState([])

  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

  return (
    <div> 
        <Nav/>
        <section className="simple-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h4>Business <em>Solutions</em> and <strong>Crypto</strong> Investments</h4>
          </div>
          <div className="col-lg-7">
            <div className="buttons">
              <div className="green-button">
                <a href="#">Discover More</a>
              </div>
              <div className="orange-button">
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
         <section className="services" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="service-item">
            <img src='https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?t=1609338918&width=1080' alt='cardimage'/>
            <h4>CSS Templates</h4>
            <p>TemplateMo website is the best for you to explore and download free website templates.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <img src='https://images.bhaskarassets.com/thumb/1600x900/web2images/960/2022/07/23/orig_oil_1658533537.jpg' />
            <h4>HTML5 Web Pages</h4>
            <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-charging-station" />
            <h4>Responsive Designs</h4>
            <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-suitcase" />
            <h4>Mobile and Tablet ready!</h4>
            <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-archway" />
            <h4>Fast Customer Support</h4>
            <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-puzzle-piece" />
            <h4>Fully Customizable</h4>
            <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}
