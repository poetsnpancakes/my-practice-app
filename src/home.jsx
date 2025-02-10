import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="/emp-register">Register Employee</Link></li>
          <li><Link to="/emp-list">Employee List</Link></li>
          <li><Link to="/user-register">Register User</Link></li>
          <li><Link to="/user-login">Log-in</Link></li>
          
          <li><Link to="Any">Any</Link></li>
          
          
        </ul>
      </nav>
      <Outlet/>
    </div>
    

  );
};

export default Home;