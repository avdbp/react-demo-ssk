import React from 'react';
import './NavBarHome.css';
import { Link } from "react-router-dom";


function NavbarHome() {
  return (
    <div className="navbarhome">
      <Link to="/" className="nav-linkhome">Home</Link>
      <Link to="/" className="nav-linkhome">New Transaction</Link>
      <Link to="/" className="nav-linkhome">Admin Service</Link>
      <Link to="/" className="nav-linkhome">Reports</Link>
      <Link to="/" className="nav-linkhome">Upload Center</Link>

      

    </div>
  );
}

export default NavbarHome;
