import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Gerishon',
      email: 'gerishonk@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'free shirt',
      slug: 'free-shirt',
      category: 'shirts',
      image: '/images/shirt1.jpg',
      price: 700,
      brand: 'nike',
      ratings: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    // {
    //   name: 'fit shirt',
    //   slug: 'fit-shirt',
    //   category: 'shirts',
    //   image: '/images/shirt2.jpg',
    //   price: 800,
    //   brand: 'Adidas',
    //   ratings: '3.2',
    //   numReviews: 10,
    //   countInStock: 20,
    //   description: 'A popular shirt',
    // },
    {
      name: 'Slim shirt',
      slug: 'slim-shirt',
      category: 'shirts',
      image: '/images/shirt1.jpg',
      price: 900,
      brand: 'Raymond',
      ratings: '4.5',
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Gold pants',
      slug: 'gold-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 1000,
      brand: 'Oliver',
      ratings: '4.5',
      numReviews: 13,
      countInStock: 20,
      description: 'smart looking pants',
    },
    {
      name: 'Fit pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 1000,
      brand: 'Zara',
      ratings: '2.5',
      numReviews: 8,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 1020,
      brand: 'Casely',
      ratings: '3.5',
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
};
export default data;
