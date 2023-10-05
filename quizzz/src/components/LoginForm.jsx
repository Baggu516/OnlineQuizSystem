import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your authentication logic here
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
  };

  return (
    <div className="container">
      <h2 className='Container-heading'>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <p className="Container-heading">Don't have an account already ? Register <Link to="/register">here</Link></p>
    </div>
  );
};

export default LoginForm;