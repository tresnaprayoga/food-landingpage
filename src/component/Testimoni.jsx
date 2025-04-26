import React from 'react';
import '../style/testimonial.css';

function Testimonial({ testimonials }) {
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
