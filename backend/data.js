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
    ],
};

export default data;