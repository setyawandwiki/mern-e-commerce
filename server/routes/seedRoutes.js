const data = require('../../client/src/data');
const Product = require('../models/Product');
const User = require('../models/User');

const router = require('express').Router();

router.get('/', async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  await User.remove({});
  const user = await User.insertMany(data.users);
  res.send({ createdProduct, user });
});

module.exports = router;
