import React, { useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your authentication logic here
    console.log("Username:", event.target.username.value);
    console.log("Password:", event.target.password.value);
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
