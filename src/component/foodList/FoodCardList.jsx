import React from 'react';
import FoodCard from './FoodCard';
import foodData from '../../data/dataFoodList';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export default function FoodList() {
  return (
    <div className='food-list-slider'>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
        {foodData.map((food, index) => (
          <SwiperSlide key={index}>
            <FoodCard image={food.image} title={food.title} author={food.author} showPlayButton={food.showPlayButton} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
