const router = require("express").Router();
let Review = require("../models/review");

router.post("/addReview", (req, res) => {
  const { userName, review } = req.body; // Using destructuring for cleaner code

  const newReview = new Review({
    userName,
    review,
  });

  newReview
    .save()
    .then(() => res.json("Review added"))
    .catch((err) => res.status(400).json("Error: " + err)); // Send back a status code and error message
});

router.get("/display", (req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err)); // Send back a status code and error message
});

module.exports = router;
