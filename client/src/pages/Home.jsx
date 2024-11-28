import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { $ }  from 'react-jquery-plugin'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { useEffect } from 'react';
import Feedback from '../Components/Feedback';
import KitNotification from '../Components/KitNotification';
import SubsidyDetils from '../Components/SubsidyDetils';

export default function Home() {
  useEffect(()=>{
		if($){
      $('.owl-testimonials').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        nav: false,
        autoplay: true,
        margin:15,
          responsive:{
            0:{
              items:1
            },
            600:{
              items:1
            },
            1000:{
              items:1
            }
          }
        })
      
    }
  })
  return (
    <div> 
        <Nav/>
    <div className="swiper-container" id="top">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-inner" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1599328580087-15c9dab481f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFkZHklMjBmaWVsZHxlbnwwfHwwfHw%3D&w=1000&q=80)'}}>
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2> <em> Get ready for your business</em> <br />&amp; upgrade <em>all aspects</em></h2>
                    <div className="div-dec" />
                    <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
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
            </div> */}
          </div>
        </div>
        {/* <div className="swiper-slide">
          <div className="slide-inner" style={{backgroundImage: 'url(https://cdn.siasat.com/wp-content/uploads/2020/03/Dals-780x470.jpg)'}}> */}
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2><em>Digital</em> Currency for you <br />&amp; Best <em>Crypto</em> Tips</h2>
                    <div className="div-dec" />
                    <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>
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
            </div> */}
          {/* </div>
        </div> */}
        {/* <div className="swiper-slide">
          <div className="slide-inner" style={{backgroundImage: 'url(assets/images/slide-03.jpg)'}}> */}
            {/* <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="header-text">
                    <h2>Best One in Town<br />&amp; Crypto <em>Services</em></h2>
                    <div className="div-dec" />
                    <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
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
            </div> */}
          {/* </div>
        </div> */}
      </div>
      <div className="swiper-button-next swiper-button-white" />
      <div className="swiper-button-prev swiper-button-white" />
    </div>
    {/* ***** Main Banner Area End ***** */}
  <KitNotification/>
    <section className="simple-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 first-div">
          <img src='https://www.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2021/2/9/ration-cards.jpg.transform/onm-articleimage/image.jpg'></img>
           <div className='first-h'><h4>RIGHT TO  <em>FOOD</em></h4></div>
            
          </div>
          <div className="col-lg-4 second-div">
            <div className="buttons">
              <p>The Kerala State Civil Supplies Corporation, popularly knows as 'Supplyco', is a fully-owned Government of Kerala undertaking established in 1974. The State has been able to control prices of food commodities, thanks to the strong market intervention undertaken by Supplyco. With its support network of 1600 retail outlets, Supplyco leaves little scope for cartelization or artificial jacking up of prices and keeps the private retailing under check. Today around 15 million people are dependent on retail stores of Supplyco for their day-to-day needs of food grains, pulses and spices.</p>
              </div>
              <div className="orange-button">
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
          <a href='http://www.supplycokerala.com/Files/charge_officer.pdf'>മുഖ്യമന്ത്രിയുടെ പൊതുജന പരാതിപരിഹാര സംവിധാനം-ബന്ധപ്പെടേണ്ട ചാർജ് ഓഫീസർ</a><br></br>
          <a href='http://www.supplycokerala.com/css/images/magazine.pdf'>Click here to download Supplyco e-Magazine (Anubhoothi-2022)</a><br></br>
          <a href='http://www.supplycokerala.com/css/images/themesong.mp3'>Click here to download Supplyco Theme Song</a><br></br>

        </div>
     
    </section>
    <SubsidyDetils/>

    <Feedback />

    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>About Us</h6>
              <h4>Know Us Better</h4>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="naccs">
              <div className="tabs">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="active gradient-border"><span>ALL</span></div>
                      {/* <div className="gradient-border"><span>Graphics</span></div>
                      <div className="gradient-border"><span>Web Coding</span></div> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      <li className="active">
                        <div>
                          {/* <div className="main-list">
                            <span className="title">Project Title</span>
                            <span className="title">Budget</span>
                            <span className="title">Deadline</span>
                            <span className="title">Client</span>
                          </div> */}
                          <div className="list-item">
                            <span className="item item-title">Customers-65 LAC</span>
                            <span className="item item-title">Regional Offices-5</span>
                            <span className="item item-title">Supplyco Depots-56</span>
                            <span className="item item-title">NFSA Godowns-217</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Total Outlets-1632</span>
                            <span className="item item-title">Medical stores-96</span>
                            <span className="item item-title">Petrol Bunks-11</span>
                            <span className="item item-title">LPG Outlets-3</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Subsidy Items-13</span>
                            <span className="item item-title">FMCG Items-44057</span>
                            <span className="item item-title">Online Sale Transactions-206</span>
                            <span className="item item-title">NFSA Fleet Tracking-430</span>
                          </div>
                          <div className="list-item last-item">
                            <span className="item item-title">Sales Turnover FY21-22-₹6315 CR</span>
                            <span className="item item-title">Previous Day Outlet Sale-₹3.97 CR</span>
                            <span className="item item-title">Previous Day Fuel Sale-₹81.14 LAC</span>
                            <span className="item item-title">Previous Day LPG Sale-₹16.29 LAC</span>
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div>
                          <div className="main-list">
                            <span className="title">Project Title</span>
                            <span className="title">Budget</span>
                            <span className="title">Deadline</span>
                            <span className="title">Client</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Graphics Redesign</span>
                            <span className="item">$500 to $800</span>
                            <span className="item">2022 Nov 24</span>
                            <span className="item">Media One</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Digital Graphics</span>
                            <span className="item">$1,500 to $3,000</span>
                            <span className="item">2022 Nov 18</span>
                            <span className="item">Second Media</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">New Artworks</span>
                            <span className="item">$2,200 to $4,400</span>
                            <span className="item">2022 Nov 10</span>
                            <span className="item">Artwork Push</span>
                          </div>
                          <div className="list-item last-item">
                            <span className="item item-title">Complex Arts</span>
                            <span className="item">$1,100 to $2,400</span>
                            <span className="item">2022 Nov 3</span>
                            <span className="item">Media One</span>
                          </div>
                        </div></li> */}
                      {/* <li>
                        <div>
                          <div className="main-list">
                            <span className="title">Project Title</span>
                            <span className="title">Budget</span>
                            <span className="title">Estimated</span>
                            <span className="title">Technology</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Backend Coding</span>
                            <span className="item">$2,000 to $5,000</span>
                            <span className="item">2022 Nov 28</span>
                            <span className="item">PHP MySQL</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">New Web App</span>
                            <span className="item">$1,500 to $3,000</span>
                            <span className="item">2022 Nov 18</span>
                            <span className="item">Python Programming</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Frontend Interactions</span>
                            <span className="item">$3,000 to $6,000</span>
                            <span className="item">2022 Nov 10</span>
                            <span className="item">JavaScripts</span>
                          </div>
                          <div className="list-item last-item">
                            <span className="item item-title">Video Creations</span>
                            <span className="item">$1,800 to $4,400</span>
                            <span className="item">2022 Nov 3</span>
                            <span className="item">Multimedia</span>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         {/*<div className="col-lg-4">
            <div className="right-content">
              <h1>Supplyco Offers</h1>
              <ul>
              <li>==> <a href='http://supplycokerala.in/SKDS/ '> SUPPLYCO   Supplyco Government Onam Kit 2022</a></li>
              <li>==> <a href='https://vtfms.supplyco.kerala.gov.in/ '> SUPPLYCO  VTFMS    </a></li>
              <li>==> <a href='http://210.212.237.176:9091/ '> SUPPLYCO  VTFMS (Training Application)</a></li>
              <li>==> <a href='http://cfrd.in/ '> CFRD-CFTK</a></li>
              <li>==> <a href='http://supplyco.in/outletmap/ '> Track SUPPLYCO</a></li>
              <li>==> <a href='http://supplyco.in/feedback/ '> Feedback SUPPLYCO</a></li>
              <li>==> <a href='http://www.supplycokerala.com/eservice/ '> SUPPLYCO  e Services</a></li>
              <li>==> <a href='http://supplyco.in/law/ '>  SUPPLYCO   Legal Track</a></li>
              <li>==> <a href='http://supplyco.in/ecp/ '> SUPPLYCO   Estate Portal     </a></li>
              <li>==> <a href='http://117.239.158.232:8081/nfsa/ '> SUPPLYCO   NFSA Portal</a></li>
              <li>==> <a href='http://supplyco.in/selfie/ '> SUPPLYCO   Contest Portal - Selfie (For Ladies Staff) </a></li>
              <li>==> <a href='http://supplycokerala.in/DASHBOARD/ '> SUPPLYCO   Stock & Sales Dashboard </a></li>
              </ul>
              {/* <p>You are allowed to use this template for your websites. You are <b>NOT allowed</b> to redistribute the template ZIP file on any other template websites.<br /><br />Thank you for downloading and using our templates. Please tell your friends about our website.</p> 
              <div className="green-button">
                <a href="about-us.html">Know More</a>
              </div>
            </div>
                    </div>*/}
        </div>
      </div>
    </section>
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              
              <h4>Best Performer</h4>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="owl-testimonials owl-carousel" style={{position: 'relative', zIndex: 5}}>
              <div className="item">
                <i className="fa fa-quote-left" />
                <p><b>“Best Shop Manager(OIC) for the Month August-2022”</b></p>
                <h3>Shahul Hameed K A</h3>
                <span>Hyper Market,Kottayam</span>
                <span>Senior Assistant I</span>
                <div className="right-image">
                  <img src="http://www.supplycokerala.com/images/oicaugust2022.jpg" alt />
                </div>
              </div>
              {/* <div className="item">
                <i className="fa fa-quote-left" />
                <p>“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
                <h4>Andrew Garfield</h4>
                <span>CTO of Mexant</span>
                <div className="right-image">
                  <img src="assets/images/testimonials-01.jpg" alt />
                </div>
              </div>
              <div className="item">
                <i className="fa fa-quote-left" />
                <p>“Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”</p>
                <h4>George Lopez</h4>
                <span>Crypto Manager</span>
                <div className="right-image">
                  <img src="assets/images/testimonials-01.jpg" alt />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <section className="partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="item">
                <img src="assets/images/client-01.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section> */}
   <Footer/>
  </div>
  )
}
