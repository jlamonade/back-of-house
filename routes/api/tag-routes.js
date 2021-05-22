const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        // includes associated products in output
        {
          model: Product,
        },
      ],
    });
    // 404 is tagData is empty
    if (tagData.length < 1) res.status(404).send("404 No Tags Found.");
    else res.json(tagData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      // finds tag by id specified in url
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    if (tagData.length < 1) res.status(404).send("404 No Tags Found.");
    else res.json(tagData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      // updates tag table where specified by id
      {
        tag_name: req.body.tag_name,
      },
      { where: { id: req.params.id } }
    );
    if (tagData.length < 1) res.status(404).send("404 No Tags Found.");
    else res.json(tagData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({ where: { id: req.params.id } });
    // deletes tag data specified by id
    if (tagData.length < 1) res.status(404).send("404 No Tags Found.");
    else res.json(tagData);
  } catch (err) {
    res.status(500).send("500 Internal Server Error.");
  }
});

module.exports = router;
