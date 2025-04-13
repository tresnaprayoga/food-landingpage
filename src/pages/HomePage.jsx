import React from 'react';
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar';
import FoodList from '../component/foodList/FoodCardList';
import GalleryList from '../component/GaleryListPicture/GaleryList';
import imageUrls from '../data/dataGalery';
import Testimonial from '../component/Testimoni';
import '../style/home.css';

function Homepage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <FoodList />
        <div className='home-galery'>
          <h2>Galery</h2>
          <GalleryList images={imageUrls} />
        </div>
        <Testimonial />
      </main>
    </div>
  );
}

export default Homepage;
