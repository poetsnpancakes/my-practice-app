import React, { useState } from "react";
import EmpApi from "./empApi";
import "./App.css"; // Import CSS for styling

const RegisterUser = () => {
  const [user, setUser] = useState({
    employeeId: 0,
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const role = "User"; // Default role
      const response = await EmpApi.post(`/User/register?role=${role}`, user);

      if (response.status === 200) {
        setIsRegistered(true);
        setResponseMessage(response.data.message);
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setResponseMessage("Failed to register user.");
    }
  };

  return (
    <div className="container">
      {isRegistered ? (
        <div className="form-container">
          <h2 >{responseMessage}</h2>
        </div>
      ) : (
        <div class="parent-container">
        <div className="form-container">
          <h2 className="heading">Register User</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label>Employee ID:</label>
              <input type="number" name="employeeId" value={user.employeeId} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Username:</label>
              <input type="text" name="userName" value={user.userName} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input type="password" name="password" value={user.password} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Email:</label>
              <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Phone Number:</label>
              <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required />
            </div>

            <div className="button-container">
              <button type="submit" className="button">Register User</button>
            </div>
          </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default RegisterUser;
