export default function HeroSection({ titleLine1, titleLine2, subtitle, buttonText, imageSrc }) {
  return (
    <section className='hero-section'>
      <div className='hero-text'>
        <h1 className='hero-title'>
          <span className='highlight'>{titleLine1}</span>
          <br />
          <span className='highlight'>{titleLine2}</span>
        </h1>
        <p className='hero-subtext'>{subtitle}</p>
        <button className='hero-button'>Hubungi Kami</button>
      </div>
      <div className='hero-image-wrapper'>
        <div className='hero-image-container'>
          <img src={imageSrc} alt='Cooking woman' className='hero-image' />
        </div>
      </div>
    </section>
  );
}
