const Product = require('../models/Product');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

router.get('slug/:slug', async (req, res) => {
  const { slug } = req.params;
  const product = Product.findOne({ slug });
  if (!product) {
    return res.status(404).send({ message: 'product not found' });
  }
  return res.send(product);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });
  if (!product) {
    return res.status(404).send({ message: 'product not found' });
  }
  return res.send(product);
});

module.exports = router;
