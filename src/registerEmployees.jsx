import React, { useState } from "react";
import EmpApi from "./empApi";


const RegisterEmployee = () => {
  const [employee, setEmployee] = useState(
      {
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        department: "",
        designation: "",
        joiningDate: "",
      }); 
      const[isRegistered, setIsRegistered] = useState(false);
      const [registrationMessage, setRegistrationMessage] = useState("");
 
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await EmpApi.post("/Employee/register", employee);
        setIsRegistered(true);
        setRegistrationMessage(response.data.toString()); 
        
        
        alert("Employee registered successfully!");
        
        // Reset form after successful submission
        setEmployee({
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          department: "",
          designation: "",
          joiningDate: "",
        });
  
      } catch (error) {
        alert("Failed to register employee!");
      }
    };

    return (
        <div>
        {isRegistered ? (
          <div className="form-container">
            
              <h1>Response</h1>
            <h2>Employee Registered Successfully</h2>
            <p>{registrationMessage}</p> {/* Show success message instead of table */}
           
          </div>
        ) : (
          <div class="parent-container">
            <div className="form-container">
            
            <h1>Register Employee</h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="input-group">
                <label>First Name:</label>
                <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
              </div>
  
              <div className="input-group">
                <label>Last Name:</label>
                <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
              </div>
  
              <div className="input-group">
                <label>Gender:</label>
                <select name="gender" value={employee.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
  
              <div className="input-group">
                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleChange} required />
              </div>
  
              <div className="input-group">
                <label>Department:</label>
                <input type="text" name="department" value={employee.department} onChange={handleChange} required />
              </div>
  
              <div className="input-group">
                <label>Designation:</label>
                <input type="text" name="designation" value={employee.designation} onChange={handleChange} required />
              </div>
  
              <div className="input-group">
                <label>Joining Date:</label>
                <input type="date" name="joiningDate" value={employee.joiningDate} onChange={handleChange} required />
              </div>
  
              {/* Centered Button */}
              <div className="button-container">
                <button type="submit" className="button">Register Employee</button>
              </div>
            </form>
            
          </div>
          </div>
        )}
      </div>
    );
  };
  
  export default RegisterEmployee;
