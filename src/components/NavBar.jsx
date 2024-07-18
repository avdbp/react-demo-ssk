import React, { Component } from 'react';
import './NavBar.css';
import logo from '../SSK_Logo.png';

import ScoreKeeperLogo from '../SSKicon64x64.png';
import ScoreBoardLogo from '../scoreboardLogo.png';
import ScoreSheetsLogo from '../compicon.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false 
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className="navbar">
       <div className="menu-item">
              <img src={ScoreKeeperLogo} alt="ScoreKeeper Logo" className="menu-logo" />
              <a href="#ScoreKeeper">ScoreKeeper</a>
            </div>
            <div className="menu-item">
              <img src={ScoreBoardLogo} alt="ScoreBoard Logo" className="menu-logo" />
              <a href="#ScoreBoard">ScoreBoard</a>
            </div>
            <div className="menu-item">
              <img src={ScoreSheetsLogo} alt="ScoreSheets Logo" className="menu-logo" />
              <a href="#ScoreSheets">ScoreSheets</a>
            </div>

        <img src={logo} alt="Logo" className="navbar-logo" />
        
      </div>
    );
  }
}

export default Navbar;
