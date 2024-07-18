import React from 'react';
import './NavBarUtilities.css';
import { Link } from "react-router-dom";
import aprove from '../icons/aprobe.png'
import decline from '../icons/decline.png'
import save from '../icons/save.png'
import saveclose from '../icons/saveClose.png'
import cancel from '../icons/cancel.png'
import snapshop from '../icons/snap.png'


function NavbarUtilities() {
  return (
    <div className="navbarutilities">
      

              <img src={aprove} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Aprove</a>

              <img src={decline} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Decline</a>

              <img src={save} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Save</a>

              <img src={saveclose} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Save Close</a>

              <img src={cancel} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Cancel</a>

              <img src={snapshop} alt="ScoreKeeper Logo" className="menu-logo-utilities" />
              <a className='link-utilities' href="#ScoreKeeper">Snapshot</a>

      

    </div>
  );
}

export default NavbarUtilities;
