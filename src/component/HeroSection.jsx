export default function HeroSection({ titleLine1, titleLine2, subtitle, buttonText, imageSrc }) {
  return (
    <section className='hero-section-restoran-satu'>
      <div className='hero-text-restoran-satu'>
        <h1 className='hero-title-restoran-satu'>
          <span className='highlight-restoran-satu'>{titleLine1}</span>
          <br />
          <span className='highlight-restoran-satu'>{titleLine2}</span>
        </h1>
        <p className='hero-subtext-restoran-satu'>{subtitle}</p>
        <button className='hero-button'>Hubungi Kami</button>
      </div>
      <div className='hero-image-wrapper-restoran-satu'>
        <div className='hero-image-container-restoran-satu'>
          <img src={imageSrc} alt='Cooking woman' className='hero-image' />
        </div>
      </div>
    </section>
  );
}
