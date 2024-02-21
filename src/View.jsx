import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './view.css'


export const View = () => {
    const [Data,setdata]=useState([''])

    useEffect(()=>{
   let fetchdata=async ()=>{
            let response=await axios.get('http://localhost:4000/find')
            console.log(response.data);
            setdata(response.data)
    }
    fetchdata()
},[])
console.log(Data);  

  return (
    <div classname='d-flex gap-3 mt-2'>
        {Data.map((item,index)=>(
        <div classname='fg'>
        <h2>Sl no. :{index}</h2>
        <h2>Username :{item.name} </h2>
        <h2>Password :{item.department}</h2>
        <h2>Firstname :{item.Firstname}</h2>
        <h2>Lastname :{item.Lastname}</h2>
        <h2>Type :{item.Usertype}</h2>
        </div>
))}
    </div>
  )
}
