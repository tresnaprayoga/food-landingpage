import React from 'react';
import FoodCard from './FoodCard';
import foodData from '../../data/dataFoodList';

export default function FoodList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      {foodData.map((food, index) => (
        <FoodCard key={index} image={food.image} title={food.title} author={food.author} showPlayButton={food.showPlayButton} />
      ))}
    </div>
  );
}
