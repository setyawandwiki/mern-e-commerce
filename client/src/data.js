const bcrypt = require('bcryptjs');
const data = {
  users: [
    {
      name: 'Basir',
      email: 'wakwaw@gmail.com',
      password: bcrypt.hashSync('123455'),
      isAdmin: true,
    },
    {
      name: 'asem',
      email: 'wakw12313aw@gmail.com',
      password: bcrypt.hashSync('123455'),
      isAdmin: false,
    },
    {
      name: 'dwiki',
      email: 'setyawandwiki1@gmail.com',
      password: bcrypt.hashSync('123455'),
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Piama Slim Shirt',
      slug: 'piama-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Nike fit pants',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Adidas Slim Shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'Puma Slim Shirt',
      slug: 'puma-slim-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};

module.exports = data;
