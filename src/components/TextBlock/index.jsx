import React from "react";
import "./style.css";


const Textblock = ({ name, price, description, src }) => (
  <div>
    

    <img src={src} alt="productimg" className="productimage"/>
    <h2 className="titleproduct">{name}</h2>
    <p className="price">{price}</p>
    <p className="description">{description}</p>
    
    
   
  </div>
);

export default Textblock;
