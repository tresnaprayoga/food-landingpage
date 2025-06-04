import React from 'react';

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
