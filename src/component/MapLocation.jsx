import React from 'react';

function LocationMap() {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.822145!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMjAuMCJF!5e0!3m2!1sen!2sid!4v1634567890123';

  return (
    <div className='map-container'>
      <h2>Lokasi Kami</h2>
      <iframe src={mapUrl} width='100%' height='100%' style={{ border: 0 }} allowFullScreen='' loading='lazy' title='Lokasi Usaha Makanan'></iframe>
    </div>
  );
}

export default LocationMap;
