import React, { useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
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
