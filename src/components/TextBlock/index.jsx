import React from "react";
import "./style.css";

const Textblock = ({ title1, content, content1 }) => (
  <div>
    
    <h2 className="titleproduct">{title1}</h2>
    <p className="price">{content}</p>
    <p className="description">{content1}</p>
    
    
   
  </div>
);

export default Textblock;
