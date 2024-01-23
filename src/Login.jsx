import React, { useState } from 'react'
import { ToastContainer,toast} from 'react-toastify'
import './App.css'
<app className="css"></app>
export const Login = () => {
  const [Data,setData]=useState('')
    
  let handleChange=(event)=>{
  setData({...Data,[event.target.name]:event.target.value})    
  
  }
   let handleSubmit=(event)=>{
      event.preventDefault()
      setData(Data)  
        if(Data){

        console.log(Data);
        toast.success('Register sucess')
    }
    else{
        toast.error('Enter data')

    }
      console.log(Data);
      
   }
  return (
    <div>
      <ToastContainer/>
       <form onSubmit={handleSubmit} className='login'>
         <input type="text" onChange={handleChange} placeholder='Username' name="Username" />
         <input type="password" onChange={handleChange} placeholder='Password' name="Password" />
         <input  type='submit'/>
         </form>
    </div>
 )
}
