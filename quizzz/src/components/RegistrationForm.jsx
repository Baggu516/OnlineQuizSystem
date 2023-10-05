import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="container">
      <h2 className='Container-heading'>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
      <div className="formGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
        </div>
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
          Register
        </button>
      </form>
      <p className="Container-heading">Have an account already ? Login <Link to="/login">here</Link></p>
    </div>
  );
};

export default RegistrationForm ;