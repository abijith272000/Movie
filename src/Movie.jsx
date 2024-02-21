import React, { useState } from 'react'
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';
import NavScrollExample from './Navbar';


export const Movie = () => {
  const [title,setTitle]=useState()
  const [data,setData]=useState([''])

  const handleChange=(event)=>{
     setTitle(event.target.value)
  }
  const handleSubmit=async()=>
  {
    setTitle(title)
    let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=72a91ec7`)
    console.log(response.data.Search);
    setData(response.data.Search)
  }
  return (
    <div>
      <div className='d-flex justify-content-between p-3'>

      <NavScrollExample/>
      <div>

      <input type="text"  name='' onChange={handleChange} placeholder='Enter the Title ' id='search' style={{'width':'13rem'}}/>
      <button onClick={handleSubmit} id='btn'>Search</button>
      </div>
      </div>
      {data ?
      <div className='flex-container'>
        {data.map((item)=>(
          <>
          <div className='poster'>
          <Link to={`/details/${item.imdbID}`}><img src={item.Poster} alt="" id='post'/></Link>
          </div>
                    </>
        ))}
      </div>
      :
      <div className='error'>No Movie Found</div>
        }
    </div>
  )
}