import React, { useContext, useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const LoginForm = async() => {
  const { setUser } = useContext(AuthContext);
  const handleSubmit = async(event) => {
    event.preventDefault();
    // You can add your authentication logic here
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
    alert("Invalid login details");
    // try {
    //   let details={}
    //   details["username"]=event.target.username.value;
    //   details["password"]=event.target.password.value;
    //   let res = await axios.post("http://localhost:5000/user/login",details)
    //   console.log(res.data,"res")
    //   setUser(res.data.token)
      
    // } catch (error) {
    //   console.log("errrrrrrrrrrrrrrrrrrrrrr")
    // }
   

  };

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
