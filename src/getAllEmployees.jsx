import React, { useEffect, useState } from "react";
import EmpApi from "./empApi";




const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmpApi.get("/Employee/getall") // Correct API endpoint
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div>
       
      <h1>Employee List</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.firstName} {employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>{new Date(employee.dateOfBirth).toLocaleDateString()}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{new Date(employee.joiningDate).toLocaleDateString()}</td>
              <td>{employee.isActive ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default GetAllEmployees;
