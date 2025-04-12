import React from 'react';
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar';
import FoodList from '../component/foodList/FoodCardList';
import GalleryList from '../component/GaleryListPicture/GaleryList';
import imageUrls from '../data/dataGalery';
import '../style/home.css';

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FoodList />

      <div className='home-galery'>
        <h2>Galery</h2>
        <GalleryList images={imageUrls} />
      </div>
    </div>
  );
}

export default Homepage;
