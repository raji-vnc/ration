import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function KitNotification() {
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
        {
            kit===null?null: <marquee>{kit&&kit.map(item=>(<><a href='/kit'><h3>{item.kit_name} is Available Now.</h3></a></>))}</marquee>
        }
  
    </div>
  )
}
