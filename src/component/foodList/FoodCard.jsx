import React from 'react';
import '../../style/foodcard.css';

export default function FoodCard({ image, title, author, showPlayButton }) {
  return (
    <div className='food-card'>
      <div className='food-image-wrapper'>
        <img src={image} alt={title} className='food-image' />
        {showPlayButton && (
          <div className='play-button'>
            <span>▶</span>
          </div>
        )}
      </div>
      <h3 className='food-title'>{title}</h3>
      <p className='food-author'>{author}</p>
    </div>
  );
}
