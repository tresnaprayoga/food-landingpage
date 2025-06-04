import React from 'react';
import GalleryItem from './GaleryItems';
import '../../style/galerypicture.css';

const GalleryList = ({ images }) => {
  return (
    <div className='gallery-container-restoran-satu'>
      {images.map((url, index) => (
        <GalleryItem key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default GalleryList;
