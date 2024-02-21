import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { useDispatch } from "react-redux";
import { addData } from "./Counterslice";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

export const Resgister = () => {
  const [Data, setData] = useState("");

  let handleChange = (event) => {
    setData({ ...Data, [event.target.name]: event.target.value });
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    dispatch(addData({...Data}))
    let response=await axios.post('http://localhost:4000/insert',Data)
    console.log(response);
    
    setData(Data);
    if (Data) {
      console.log(Data);
      dispatch(addData(Data));

      toast.success("Register sucess");
    } else {
      toast.error("Enter data");
    }
  };
  const dispatch = useDispatch();

  return (
    <div>
      <ToastContainer />

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Firstname"
          name="Firstname"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Lastname"
          name="Lastname"
        />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Age"
          name="Age"
        />
        <input type="text"
        onChange={handleChange}
        placeholder="username"
        name="Username" />
        <input
          type="text"
          onChange={handleChange}
          placeholder="password"
          name="password"
        />
      <select onChange={handleChange} name="Usertype">
        <option value='Student'>Student
        </option>
        <option value='Teacher'>Teacher
        </option>
        <option value='Admin'>Admin
        </option>
      </select>
        <input type="submit" />
      </form>
    </div>
  );
};
