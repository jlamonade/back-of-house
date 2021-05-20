const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { 
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll()
    res.json(categoryData);
  } catch {
    res.status(500).send("500 Internal Server Error.")
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      where: {
        id: req.params.id,
      }
    })
    res.json(categoryData)
  } catch {
    res.status(500).send("500 Internal Server Error.")
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
