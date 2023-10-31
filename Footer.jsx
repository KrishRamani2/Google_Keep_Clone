import React from "react";
import logo from "./Images/logo.png";
import "./styles.css";
const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>copyright © {year}</p>
      </footer>
    </>
  );
  
};

export default Footer;