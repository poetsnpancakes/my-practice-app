


import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>❌ 404 - Page Not Found</h1>
      <p>Sorry, the page "{location.pathname}" does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
