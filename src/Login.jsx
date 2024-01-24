import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { useSelector } from "react-redux";
<app className="css"></app>;
export const Login = () => {
  const [Data, setData] = useState("");

  let handleChange = (event) => {
    setData({ ...Data, [event.target.name]: event.target.value });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    setData(Data);
    if (values.Username==Data.Username && values.Username==Data.Username) {
      if(values.Usertype=='Teacher'){
        toast.success('Logined as Teacher')
      }
      else if(values.Usertype=='Student'){
        toast.success('Logined as Student')
      }
      else if(values.Usertype=='Admin'){
        toast.success('Login as Admin')
      }
      else{
        toast.error('Invalid Data')
      }
    }
    
    console.log(Data);
  };
  const values = useSelector((state) => state.counter.value)
  console.log(values.Username,'in values');
  console.log(values.password,'in values');
  console.log(Data.Username,'in data');
  console.log(Data.Password,'in data');
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Username"
          name="Username"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          name="Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
