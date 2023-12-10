import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser,setUsername,username,user } = useContext(AuthContext);
  const handleSubmit = async(event) => {
    event.preventDefault();
   /* You can add your authentication logic here
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null;
    console.log("users", users);
    if (users) {
      const user = users.find(
        (person) => person.username === event.target.username.value
      );
      console.log("user", user);
      if (user && user.password === event.target.password.value) {
        setUser(user);
        return;
      }
    }
    alert("Invalid login details");*/
    try {
      let details={}
      details["username"]=event.target.username.value;
      details["password"]=event.target.password.value;
      let res = await axios.post("http://localhost:5000/user/login",details)
      console.log(res.data,"res")
      setUser(res.data.token)
      console.log("usernamerrrrrr",res.data.username)
      setUsername(res.data.username)
      localStorage.setItem("token",res.data.token)
      if(!res.data.token) return alert(" No token")
      if(res.data.role=="user"){
        navigate("/");
      }
      else{
        navigate("/resultspage")
      }
   
      
      
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrrrrrr")
    }
   

  };
  console.log("outer  usernamerrrrrr",username)
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setUser(localStorage.getItem("token"))
    }
    console.log("login useffect")
  },[])

  return (
    <div className="container">
      <h2 className="Container-heading">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <p className="Container-heading">
        Don't have an account already ? Register{" "}
        <Link to="/register">here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
