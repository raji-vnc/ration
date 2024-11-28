import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Feedback from '../../Components/Feedback'
import UserNav from '../../Components/UserNav'

export default function AddFeedack() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])
  return (
    <div>
        <UserNav/>
       
      <Feedback/>
        
    </div>
  )
}
