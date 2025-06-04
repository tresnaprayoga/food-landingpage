import React from 'react';
import '../../style/galerypicture.css';

const GalleryItem = ({ src, alt }) => {
  return (
    <div>
      <div className='gallery-item-restoran-satu'>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default GalleryItem;
