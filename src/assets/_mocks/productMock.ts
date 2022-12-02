import { ProductModel } from 'src/app/interfaces/product.model';

export const ProductMock: ProductModel[] = [
  {
    id: '1',
    index: 1,
    image: '../assets/images/airpod.jpg',
    isEdible: false,
    price: 299,
    rating: 5,
    title: 'Airpods',
    tags: ['Best Sales', 'Software', 'Apple'],
    description:
      "Apple AirPods are wireless Bluetooth earbuds designed specifically to work with your iPhone and iPad. But since they're Bluetooth audio devices, you can also use them with almost any other computer or smartphone; you can even pair AirPods with an Apple TV.",
  },
  {
    id: '2',
    index: 2,
    image: '../assets/images/laptop.jpg',
    isEdible: true,
    price: 2.749,
    rating: 4,
    title: 'Laptop',
    tags: ['Best Sales', 'Software', 'Unique design'],
    description:
      'MacBook Pro Technical Specifications ; Display. Retina display. 13.3-inch (diagonal) LED-backlit display with IPS technology; ',
  },
  {
    id: '3',
    index: 3,
    image: '../assets/images/mobile.jpg',
    isEdible: false,
    price: 1.56,
    rating: 3,
    title: 'Mobile',
    tags: ['Best Sales', 'Apple', 'Valid'],
    description:
      'Compared to the iPhone 13, the iPhone 14 is an incremental upgrade. The iPhone 14 adds one additional core to the GPU (five cores) processor, utilizes e-SIM technology, sports slightly better battery life.',
  },
  {
    id: '4',
    index: 4,
    image: '../assets/images/mouse.jpg',
    isEdible: true,
    price: 89.9,
    rating: 5,
    title: 'Mouse',
    tags: ['Best Sales', 'Software', 'Valid'],
    description:
      'Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents.',
  },
];
