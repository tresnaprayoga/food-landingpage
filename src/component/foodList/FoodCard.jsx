import React from 'react';
import '../../style/foodcard.css';

export default function FoodCard({ image, title, author, showPlayButton }) {
  return (
    <div className='food-card-restoran-satu'>
      <div className='food-image-wrapper-restoran-satu'>
        <img src={image} alt={title} className='food-image-restoran-satu' />
        {showPlayButton && (
          <div className='play-button'>
            <span>▶</span>
          </div>
        )}
      </div>
      <h3 className='food-title-restoran-satu'>{title}</h3>
      <p className='food-author-restoran-satu'>{author}</p>
    </div>
  );
}
