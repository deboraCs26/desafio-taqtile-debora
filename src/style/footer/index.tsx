import React from "react";
import './style.css';
import iconFooter from './image/Iconsax/Linear/icon-footer.svg'
import imageImobilar from './image/Imobilar Corretora Imobiliária.svg'

export const  Footer = () => {
  return (
    <section>
      <div className="footer-container" >
        <img src={iconFooter} alt="icon de uma casa" className="icon-footer"/>
        <img src={imageImobilar} alt="logo"/>
        <div>
       
        </div>
      </div>
    </section>
  );
}; 
