const heroContent = {
  titleLine1: 'Rumah Makan Saung Sari',
  titleLine2: 'Harga Terjangkau, Rasa Memukau',
  subtitle: 'cobain dah kalo ga percaya',
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

const cardNews = [
  {
    image: './heroimg.jpg',
    date: 'DECEMBER 21, 2024',
    title: 'Essential Tips for Successfully Running a Marathon',
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: './heroimg.jpg',
    date: 'DECEMBER 21, 2024',
    title: 'How to train for a marathon',
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: './heroimg.jpg',
    date: 'DECEMBER 21, 2024',
    title: 'understand how to practice soccer well',
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
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

function CardNews() {
  return cardNews;
}

export { HeroSectionContent, DataProdukSlide, ImageGalry, Testimoni, CardNews };
