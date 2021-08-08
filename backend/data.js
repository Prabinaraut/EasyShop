import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Prabina',
      email: 'prabina@easyshop.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Prabina',
        logo: '/images/seller.jpg',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'Bikky',
      email: 'bikky@easyshop.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
        {
            name: 'Hauwei Mate 40 Pro',
            category: 'Phones',
            image:'/images/hauwei-mate-40-pro.jpg',
            brand: 'Hauwei',
            price: 1270,
            countInStock:10,
            rating:4.5,
            numReviews:10,
            description: 'High resolution phone from Hauwei',

        },
        {
            name: 'Samsung Galaxy 20 Ultra',
            category: 'Phones',
            image:'/images/samsung.jpg',
            brand: 'Samsung',
            price: 770,
            countInStock:4,
            rating:5,
            numReviews:4,
            description: 'High resolution phone from Samsung',

        },
        {
            name: 'Google Pixel 5',
            category: 'Phones',
            image:'/images/google-pixel.jpg',
            brand: 'Google',
            price: 678,
            countInStock:0,
            rating:4.5,
            numReviews:10,
            description: 'High resolution phone from Hauwei',

        },
        {
            name: 'LG G8',
            category: 'Phones',
            image:'/images/lg-phone.jpg',
            brand: 'LG',
            price: 130,
            countInStock:3,
            rating:3,
            numReviews:6,
            description: 'Affordable phone',

        },
        {
            name: 'Lenovo Legion Duel 5G',
            category: 'Phones',
            image:'/images/lenovo-phone.jpg',
            brand: 'Lenovo',
            price: 1270,
            countInStock:2,
            rating:4.8,
            numReviews:10,
            description: 'Masterpiece from Lenovo. Works with all CDMA and GSM networks',

        },
        {
          name: 'Apple Macbook 2021',
          category: 'Computers',
          image:'/images/macbook.jpg',
          brand: 'Apple',
          price: 4000,
          countInStock:20,
          rating:3.5,
          numReviews:2,
          description: 'High performance computer',

      },
      {
        name: 'Lenovo Chromebook S330 Laptop',
        category: 'Computers',
        image:'/images/Lenovo.jpg',
        brand: 'Lenovo',
        price: 180.99,
        countInStock:50,
        rating:3.5,
        numReviews:2,
        description: '14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black',

    },
    {
      name: 'ASUS Chromebook Flip ',
      category: 'Computers',
      image:'/images/ASUS.jpg',
      brand: 'ASUS',
      price: 700,
      countInStock:60,
      rating:5,
      numReviews:12,
      description: 'ASUS Chromebook Flip C436 2-in-1 Laptop, 14" Touchscreen FHD 4-Way NanoEdge, Intel Core i3-10110U, 128GB PCIe SSD, Fingerprint, Backlit KB',

  },
      {
        name: 'Samsung',
        category: 'Phones',
        image:'/images/samsung.jpg',
        brand: 'Samsung',
        price: 1300,
        countInStock:5,
        rating:4.5,
        numReviews:5,
        description: 'A beautiful samsung Phone',

    },
    {
      name: 'Sony TV',
      category: 'Television',
      image:'/images/Sony.jpg',
      brand: 'Sony',
      price: 3000,
      countInStock:50,
      rating:3.5,
      numReviews:100,
      description: 'One of the best mid-range 4K TVs',

  },
  {
    name: 'Samsung TV',
    category: 'Television',
    image:'/images/Sam.jpg',
    brand: 'Samsung',
    price: 647,
    countInStock:30,
    rating:5,
    numReviews:20,
    description: 'SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)',

},
  
  {
    name: 'LG TV',
    category: 'Television',
    image:'/images/LG.jpg',
    brand: 'Sony',
    price: 3000,
    countInStock:50,
    rating:3.5,
    numReviews:100,
    description: 'Perfect black. Intence color. Infinite Contrast',

},
{ 
  name: 'HP Laptop',
  category: 'Computers',
  image:'/images/HP.jpg',
  brand: 'HP',
  price: 1000,
  countInStock:20,
  rating:3.5,
  numReviews:200,
  description: 'Perfect black. Intence color. Infinite Contrast',

},

{ 
  name: 'Bose speaker',
  category: 'Computer Accessories',
  image:'/images/Bose.jpg',
  brand: 'Bose',
  price: 40,
  countInStock:30,
  rating:5,
  numReviews:50,
  description: 'Multimedia Speaker System',

},
{ 
  name: 'Ergonomic Computer Mouse',
  category: 'Computer Accessories',
  image:'/images/Ergonomic.jpg',
  brand: 'Ergonomic',
  price: 10,
  countInStock:20,
  rating:3.5,
  numReviews:5,
  description: 'Wireless Computer Mouse ',

},
{ 
  name: 'LapGear Home Office Lap Desk',
  category: 'Computer Accessories',
  image:'/images/LapDesk.jpg',
  brand: 'LapGear',
  price: 19.99,
  countInStock:21,
  rating:5,
  numReviews:22,
  description: ' Device Ledge, Mouse Pad, and Phone Holder - Silver Carbon - Fits Up to 15.6 Inch Laptops - Style No. 91585',

},
{ 
  name: 'VIVO Dual LCD LED 13 to 27 inch Monitor Desk Mount Stand',
  category: 'Computer Accessories',
  image:'/images/Stand.jpg',
  brand: 'VIVO',
  price: 34.99,
  countInStock:60,
  rating:3.5,
  numReviews:2,
  description: 'VIVO Dual LCD LED 13 to 27 inch Monitor Desk Mount Stand, Heavy Duty Fully Adjustable, Fits 2 Screens, STAND-V002',

},

{ 
  name: 'Lepro LED Strip Lights',
  category: 'Computer Accessories',
  image:'/images/LED.jpg',
  brand: 'Lepro',
  price: 20,
  countInStock:11,
  rating:4,
  numReviews:2,
  description: 'Perfect LED lights',

},
{ 
  name: 'Dingbats Notebook',
  category: 'School Essentials',
  image:'/images/Notebook.jpg',
  brand: 'Dingbats',
  price: 21.99,
  countInStock:6,
  rating:3,
  numReviews:9,
  description: 'Notebook for school',

},
{ 
  name: 'Sak Ink Pen Set',
  category: 'School Essentials',
  image:'/images/Pen.jpg',
  brand: 'Sak',
  price: 8.99,
  countInStock:12,
  rating:3.5,
  numReviews:1,
  description: 'Perfect set',

},
{ 
  name: 'Optoma Projector',
  category: 'Projectors',
  image:'/images/Projector.jpg',
  brand: 'Optoma',
  price: 499,
  countInStock:15,
  rating:3.5,
  numReviews:15,
  description: 'Perfect projector for classrrom and meetings',

},
{ 
  name: 'HD Projector',
  category: 'Projectors',
  image:'/images/HD.jpg',
  brand: 'HD',
  price: 199,
  countInStock:5,
  rating:3.5,
  numReviews:1,
  description: 'HD Projector, WiFi Projector Bluetooth Projector, FANGOR 230" Portable Movie Projector with Tripod',

},
{ 
  name: 'Logitech Keyboard',
  category: 'Keyboards',
  image:'/images/LogitechKeyboard.jpg',
  brand: 'Logitech',
  price: 59.99,
  countInStock:12,
  rating:3.5,
  numReviews:1,
  description: 'Perfect Keyboard',

},
{ 
  name: 'Dell Keyboard',
  category: 'Keyboards',
  image:'/images/Dell.jpg',
  brand: 'Logitech',
  price: 19.99,
  countInStock:10,
  rating:3,
  numReviews:6,
  description: 'Wired Keyboard',

},
{ 
  name: 'Redragon Keyboard',
  category: 'Keyboards',
  image:'/images/Red.jpg',
  brand: 'Redragon',
  price: 30.99,
  countInStock:15,
  rating:5,
  numReviews:16,
  description: 'Gaming Keyboard',

},
{ 
  name: 'NPET Keyboard',
  category: 'Keyboards',
  image:'/images/NP.jpg',
  brand: 'NPET',
  price: 21.99,
  countInStock:10,
  rating:3,
  numReviews:6,
  description: 'NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Quiet Ergonomic Water-Resistant Mechanical Feeling Keyboard',

},


{ 
  name: 'Canon INk Cartridge',
  category: 'Printer, Ink & Toner',
  image:'/images/Canon.jpg',
  brand: 'Canon',
  price: 35.19,
  countInStock:50,
  rating:5,
  numReviews:86,
  description: 'Ink Cartridge PG-240 XL',

},
{ 
  name: 'HP INk Cartridge',
  category: 'Printer, Ink & Toner',
  image:'/images/HPink.jpg',
  brand: 'Canon',
  price: 25.29,
  countInStock:5,
  rating:5,
  numReviews:36,
  description: 'Ink Cartridge 4600series',

},


    ],
};

export default data;