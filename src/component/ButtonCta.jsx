import React from 'react';
import '../style/cta.css';

function ButtonCTA({ text, link }) {
  return (
    <div>
      <a href={link} className='cta-button'>
        WA
      </a>
    </div>
  );
}

export default ButtonCTA;
