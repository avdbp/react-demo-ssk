import React from 'react';
import './NavBarHome.css';
import { Link } from "react-router-dom";


function NavBarWaitinPayment() {
  return (
    <div className="navbarhome">
      <Link to="/" className="nav-linkhome">Home</Link>
      <Link to="/" className="nav-linkhome">New Transaction</Link>
      <Link to="/" className="nav-linkhome">Admin services</Link>
      <Link to="/" className="nav-linkhome">Report</Link>
      <Link to="/" className="nav-linkhome">Upload Center</Link>
      <Link to="/" className="nav-linkhome">My Account</Link>
      
      

    </div>
  );
}

export default NavBarWaitinPayment;
