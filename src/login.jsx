import React, { useState } from "react";
import EmpApi from "./empApi";
import useAuthenticate from "./useAuthenticate";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, login } = useAuthenticate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await EmpApi.post("/User/login", {
        email: email,
        password: password
      });

      
    

      if (response.data.status === 200) {
        const token = response.data.data; // Extract token

        login(token); // Store token and update auth state
        alert("Login Successful!");
      }  else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
     // console.error("Error:", err.response?.data || err.message);
     alert("Login failed. Please check your credentials.");
    }
      if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  };
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }


  return (
    <div class="loginparent-container">
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="button-container">
                <button  type="submit" className="button">Log-in</button>
              </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </div>
  );
};

export default Login;