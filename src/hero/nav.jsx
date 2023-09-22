import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
          <h5>
            <span className="inter">I</span>NTER
            <span className="love"><span className="inter">L</span>OVE</span>
           
          </h5>
  
        <Link className="link" to="/contact">
          Contact Us
        </Link>
      </Nav>
      <br/>
      <br/>
    </>
  );
};

export default Header;
