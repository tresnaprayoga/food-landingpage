const heroContent = {
  titleLine1: 'Rumah Makan Steak Saung Sari',
  titleLine2: 'Harga Terjangkau, Rasa Memukau',
  subtitle: 'cobain dah kalo ga percaya',
  buttonText: 'Decide a Menu',
  imageSrc: '/1.jpg',
};
//
const produkDataUnggulan = [
  {
    image: '/1.jpg',
    title: 'Grilled meat',
    author: 'Rp 50.000',
    showPlayButton: true,
  },
  {
    image: '/2.jpg',
    title: 'Steak with a side of salad',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
  {
    image: '/4.jpg',
    title: 'Medium rare slicade steak',
    author: 'Rp 40.000',
    showPlayButton: false,
  },
  {
    image: '/5.jpg',
    title: 'cooked meat on tray',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
];

const ourProduk = [
  {
    image: '/1.jpg',
    title: 'Grilled meat',
    author: 'Rp 50.000',
    showPlayButton: true,
  },
  {
    image: '/2.jpg',
    title: 'Steak with a side of salad',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
  {
    image: '/4.jpg',
    title: 'Medium rare slicade steak',
    author: 'Rp 40.000',
    showPlayButton: false,
  },
  {
    image: '/5.jpg',
    title: 'cooked meat on tray',
    author: 'Rp 55.000',
    showPlayButton: false,
  },

  {
    image: '/1.jpg',
    title: 'Grilled meat',
    author: 'Rp 50.000',
    showPlayButton: true,
  },
  {
    image: '/2.jpg',
    title: 'Steak with a side of salad',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
  {
    image: '/4.jpg',
    title: 'Medium rare slicade steak',
    author: 'Rp 40.000',
    showPlayButton: false,
  },
  {
    image: '/5.jpg',
    title: 'cooked meat on tray',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
  {
    image: '/1.jpg',
    title: 'Grilled meat',
    author: 'Rp 50.000',
    showPlayButton: true,
  },
  {
    image: '/2.jpg',
    title: 'Steak with a side of salad',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
  {
    image: '/4.jpg',
    title: 'Medium rare slicade steak',
    author: 'Rp 40.000',
    showPlayButton: false,
  },
  {
    image: '/5.jpg',
    title: 'cooked meat on tray',
    author: 'Rp 55.000',
    showPlayButton: false,
  },
];

const imageUrls = ['./8.jpg', './1.jpg', './2.jpg', './5.jpg', './4.jpg', './7.jpg'];

const testimonials = [
  { name: 'Budi', text: 'Keripiknya renyah banget!', rating: 5, imgTestimoni: '/3.jpg' },
  { name: 'Alex', text: 'Mantap makan disini enak dan harga terjangkau!', rating: 5, imgTestimoni: '/3.jpg' },
  { name: 'Jhon', text: 'Ga nyeles makan disini, tempat nyaman bisa ajak keluarga', rating: 5, imgTestimoni: '/3.jpg' },
  // ...
];

const cardNews = [
  {
    image: './7.jpg',
    date: 'DECEMBER 21, 2024',
    title: 'Essential Tips for Successfully Running a Marathon',
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: './8.jpg',
    date: 'DECEMBER 21, 2024',
    title: 'How to train for a marathon',
    description:
      '"Lorem ipsum" adalah teks pengganti atau teks tiruan yang biasa digunakan dalam desain grafis dan penataan huruf untuk melihat bagaimana sebuah halaman akan terlihat sebelum ada isi sebenarnya. Teks ini menampilkan teks Latin acak dan digunakan untuk memberikan gambaran tata letak, bukan untuk konten asli',
  },
  {
    image: './5.jpg',
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
  return produkDataUnggulan;
}

function OurProduk() {
  return ourProduk;
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

export { HeroSectionContent, DataProdukSlide, ImageGalry, Testimoni, CardNews, OurProduk };
