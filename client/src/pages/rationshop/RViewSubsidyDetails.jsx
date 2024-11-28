import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import RationShopNav from '../../Components/RationShopNav'
import SubsidyDetils from '../../Components/SubsidyDetils'

export default function RViewSubsidyDetails() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])
  return (
    <div>
        <RationShopNav/>
         <SubsidyDetils/>
    <Footer/>
    </div>
  )
}
