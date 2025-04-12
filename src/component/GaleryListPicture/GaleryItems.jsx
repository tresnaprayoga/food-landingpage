import React from 'react';
import '../../style/galerypicture.css';

const GalleryItem = ({ src, alt }) => {
  return (
    <div>
      <div className='gallery-item'>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default GalleryItem;
