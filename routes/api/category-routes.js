const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// TODO: Need to add products to output!
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.json(categoryData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(categoryData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(categoryData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

module.exports = router;
