export default function ItemOurMenu({ image, title, author }) {
  return (
    <div className='our-menu-restoran-satu'>
      <div className='our-menu-wrapper-restoran-satu'>
        <img src={image} alt={title} className='our-menu-image-restoran-satu' />
      </div>
      <h3 className='our-menu-title-restoran-satu'>{title}</h3>
      <p className='our-menu-author-restoran-satu'>{author}</p>
      <div className='button-our-menu'>
        <button>
          <a href='#'>Order Sekarang</a>{' '}
        </button>
      </div>
    </div>
  );
}
