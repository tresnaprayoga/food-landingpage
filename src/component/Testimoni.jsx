import React from 'react';

function Testimonial({ testimonials }) {
  return (
    <section className='testimonials-restoran-satu'>
      {testimonials.map((item, index) => (
        <div key={index} className='testimonial-card-restoran-satu'>
          <div className='img-testimoni-restoran-satu'>
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
