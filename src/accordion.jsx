import React from "react";
import useAccordion from "./useAccordion";
import "./App.css"; // Import CSS

const Accordion = ({ title, children }) => {
    const { isOpen, toggle } = useAccordion();
  
    return (
      <div className={`accordion ${isOpen ? "open" : ""}`}>
        <div className="accordion-header" onClick={toggle}>
          <h3>{title}</h3>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        <div className="accordion-content">{isOpen && children}</div>
      </div>
    );
  };
  
  export default Accordion;
  
