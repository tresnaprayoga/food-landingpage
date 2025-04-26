import React, { useState } from 'react';
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar';
import FoodList from '../component/foodList/FoodCardList';
import GalleryList from '../component/GaleryListPicture/GaleryList';
import Testimonial from '../component/Testimoni';
import LocationMap from '../component/MapLocation';
import OrderForm from '../component/FormInput';
import WhatsAppButton from '../component/WaButton';
import Footer from '../component/Footer';
import '../style/home.css';
import { HeroSectionContent, DataProdukSlide, ImageGalry, Testimoni } from '../data/data';

function Homepage() {
  const [DataHeroSection, setDataHeroSection] = useState(HeroSectionContent());
  const [ProdukSlide, setProdukSlide] = useState(DataProdukSlide());
  const [DataGalery, setDataGalery] = useState(ImageGalry());
  const [DataTestimoni, setDataTestimoni] = useState(Testimoni());

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection titleLine1={DataHeroSection.titleLine1} titleLine2={DataHeroSection.titleLine2} subtitle={DataHeroSection.subtitle} imageSrc={DataHeroSection.imageSrc} />
        <WhatsAppButton text='Hubungi kami!' />
        <FoodList foodData={ProdukSlide} />
        <div className='home-galery'>
          <h2>Galery</h2>
          <GalleryList images={DataGalery} />
        </div>
        <Testimonial testimonials={DataTestimoni} />

        <div className='form-map-wrapper'>
          {/* <OrderForm /> */}
          <LocationMap />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
