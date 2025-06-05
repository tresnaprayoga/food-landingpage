import React, { useState } from 'react';
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar';
import FoodList from '../component/foodList/FoodCardList';
import GalleryList from '../component/GaleryListPicture/GaleryList';
import Testimonial from '../component/Testimoni';
import WhatsAppButton from '../component/WaButton';
import Footer from '../component/Footer';
import CopyRight from '../component/Copyright ';
import ListCardNews from '../component/News/ListNews';
import ListOurMenu from '../component/ourmenu/ListOurMenu';
import '../style/home.css';
import { HeroSectionContent, DataProdukSlide, ImageGalry, Testimoni, CardNews, OurProduk } from '../data/data';

function Homepage() {
  const [DataHeroSection, setDataHeroSection] = useState(HeroSectionContent());
  const [ProdukSlide, setProdukSlide] = useState(DataProdukSlide());
  const [DataGalery, setDataGalery] = useState(ImageGalry());
  const [DataTestimoni, setDataTestimoni] = useState(Testimoni());
  const [DataNews, setDataCardNews] = useState(() => CardNews());
  const [DataOurProduk, setDataOurProduk] = useState(() => OurProduk());

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection titleLine1={DataHeroSection.titleLine1} titleLine2={DataHeroSection.titleLine2} subtitle={DataHeroSection.subtitle} imageSrc={DataHeroSection.imageSrc} />
        <WhatsAppButton text='Hubungi kami!' />

        <div className='slide-produk-restoran-satu'>
          <h1>Menu Unggulan Kami</h1>
          <FoodList foodData={ProdukSlide} />
        </div>

        <div className='our-produk'>
          <h2>Produk Kami</h2>
          <ListOurMenu ourproduk={DataOurProduk} />
        </div>

        <div className='home-galery-restoran-satu'>
          <h2>Galery</h2>
          <GalleryList images={DataGalery} />
        </div>

        <div className='testimoni-restoran-satu'>
          <h2>Testimoni</h2>
          <Testimonial testimonials={DataTestimoni} />
        </div>

        {/* <div className='form-map-wrapper'>
          <LocationMap />
          <OrderForm />
        </div> */}

        <div>
          <ListCardNews items={DataNews} />
        </div>
      </main>

      <footer>
        <Footer />
        <CopyRight />
      </footer>
    </div>
  );
}

export default Homepage;
