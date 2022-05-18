const express = require('express');
const data = require('../client/src/data');
const app = express();
const cors = require(`cors`);
const seedroutes = require('./routes/seedRoutes');
const productRoutes = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const path = require('path');
require('dotenv').config();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedroutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get('/api/products/slug/:slug', (req, res) => {
  const { slug } = req.params;
  const product = data.products.find((elem) => elem.slug === slug);
  console.log(product);
  if (!product) {
    return res.status(404).send({ message: 'product not found' });
  }
  return res.send(product);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = data.products.find((elem) => elem._id === id);
  console.log(product);
  if (!product) {
    return res.status(404).send({ message: 'product not found' });
  }
  return res.send(product);
});

app.get(`/api/keys/paypal`, (req, res) => {
  res.send('sb');
});

module.exports = app;
