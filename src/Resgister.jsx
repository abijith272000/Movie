import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import './App.css'
import { useDispatch } from 'react-redux'
import { addData } from './Counterslice'



export const Resgister = () => {
    const [Data,setData]=useState('')
    
let handleChange=(event)=>{
setData({...Data,[event.target.name]:event.target.value})    

}
 let handleSubmit=(event)=>{
    event.preventDefault()
    setData(Data)
    if(Data){

        console.log(Data);
        dispatch(addData)

        
        toast.success('Register sucess')
    }
    else{
        toast.error('Enter data')

    }
 
 }
 const dispatch =useDispatch()

  return (
 

    <div>
        <ToastContainer/>
        
      <form className='form'onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder='Firstname' name="Firstname" />
      <input type="text" onChange={handleChange} placeholder='Lastname' name="Lastname" />
      <input type="number" onChange={handleChange} placeholder='Age' name="Age"/>
      <input type="text" onChange={handleChange} placeholder='password' name="password"/>
      <input  type='submit'/>
      </form>
    
 </div>
  )
}
