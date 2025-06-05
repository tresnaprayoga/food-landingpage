import ItemOurMenu from './ItemOurMenu';

const ListOurMenu = ({ ourproduk }) => {
  return (
    <div className='our-menu-container-restoran-satu'>
      {ourproduk.map((produk, index) => (
        <ItemOurMenu key={index} {...produk} />
      ))}
    </div>
  );
};

export default ListOurMenu;
