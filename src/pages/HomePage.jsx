import React from 'react';
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar';
import FoodList from '../component/foodList/FoodCardList';
import GalleryList from '../component/GaleryListPicture/GaleryList';
import imageUrls from '../data/dataGalery';
import Testimonial from '../component/Testimoni';
import LocationMap from '../component/MapLocation';
import OrderForm from '../component/FormInput';
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

        <div className='form-map-wrapper'>
          <OrderForm />
          <LocationMap />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
