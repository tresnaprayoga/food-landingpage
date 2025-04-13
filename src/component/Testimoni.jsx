import React from 'react';
import '../style/testimonial.css';

function Testimonial() {
  const testimonials = [
    { name: 'Budi', text: 'Keripiknya renyah banget!', rating: 5, imgTestimoni: '3.jpg' },
    { name: 'Alex', text: 'Mantap makan disini enak dan harga terjangkau!', rating: 5, imgTestimoni: '3.jpg' },
    { name: 'Jhon', text: 'Ga nyeles makan disini, tempat nyaman bisa ajak keluarga', rating: 5, imgTestimoni: '3.jpg' },
    // ...
  ];
  return (
    <section className='testimonials'>
      {testimonials.map((item, index) => (
        <div key={index} className='testimonial-card'>
          <div className='img-testimoni'>
            <img src={item.imgTestimoni} />
          </div>
          <p>{item.text}</p>
          <h4>{item.name}</h4>
        </div>
      ))}
    </section>
  );
}

export default Testimonial;
