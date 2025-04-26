const heroContent = {
  titleLine1: 'Masukan Tagline',
  titleLine2: 'Masukan Tagline kedua',
  subtitle: 'Masuka narasi profil ushamau',
  buttonText: 'Decide a Menu',
  imageSrc: '/heroimg.jpg',
};
//
const produkData = [
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: true,
  },
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
  {
    image: '/heroimg.jpg',
    title: 'Title',
    author: 'SubTitle',
    showPlayButton: false,
  },
];

const imageUrls = ['./heroimg.jpg', './heroimg.jpg', './heroimg.jpg', './heroimg.jpg', './heroimg.jpg', './heroimg.jpg'];

const testimonials = [
  { name: 'Budi', text: 'Keripiknya renyah banget!', rating: 5, imgTestimoni: '/3.jpg' },
  { name: 'Alex', text: 'Mantap makan disini enak dan harga terjangkau!', rating: 5, imgTestimoni: '/3.jpg' },
  { name: 'Jhon', text: 'Ga nyeles makan disini, tempat nyaman bisa ajak keluarga', rating: 5, imgTestimoni: '/3.jpg' },
  // ...
];

function HeroSectionContent() {
  return heroContent;
}

function DataProdukSlide() {
  return produkData;
}

function ImageGalry() {
  return imageUrls;
}

function Testimoni() {
  return testimonials;
}

export { HeroSectionContent, DataProdukSlide, ImageGalry, Testimoni };
