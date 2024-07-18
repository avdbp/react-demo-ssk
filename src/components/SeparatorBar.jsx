import React from 'react';
import './SeparatorBar.css';


function SeparatorBar({ titulo }) {
  return (
    <div className="separator-bar">
      <p className='titulo-barra'>{titulo}</p>
    </div>
  );
}


export default SeparatorBar;
