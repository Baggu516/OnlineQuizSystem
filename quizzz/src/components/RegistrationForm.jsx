import React, { useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    let user = {};
    user["username"] = event.target.username.value;
    user["email"] = event.target.email.value;
    user["phone"] = event.target.phone.value;
    user["password"] = event.target.password.value;
    console.log(user,"userrrrr")
    let res=await axios.post("http://localhost:5000/user/register",user)
    // console.log(res.data,"res",event.target.username)
    // let users = localStorage.getItem("users")
    //   ? JSON.parse(localStorage.getItem("users"))
    //   : [];
    // users.push(user);
    // localStorage.setItem("users", JSON.stringify(users));
    // alert(res.data.msg);
    console.log(res.data)
    if(res.data.msg=="register successfully"){
      alert("Registered succssfully")
      navigate("/login");
    }
    else{
      alert(res.data.msg);
    }
    // if(res.data.token)
   
  };

  return (
    <div className="container">
      <h2 className="Container-heading">Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Name</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="button">
          Register
        </button>
      </form>
      <p className="Container-heading">
        Have an account already ? Login <Link to="/login">here</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
