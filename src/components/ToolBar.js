import React from 'react';
import './ToolBar.css';
import { Link } from "react-router-dom";


const ToolBar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-content">
      
        <a href="#admin-services">Aprobe</a>
        <a href="#order-verification">Decline</a>
        <a href="#waiting-payment">Save</a>
        <a href="#submitted-for-payroll">Save Close</a>
        <a href="#pending-final-approval">Cancel</a>
        <a href="#waiting-to-be-paid">Snapshot</a>
        
      </div>
    </div>
  );
}

export default ToolBar;
