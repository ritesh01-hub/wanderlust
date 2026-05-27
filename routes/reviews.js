const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const { isAuthenticated, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let message = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, message);
    } else {
        next();
    }
};

router.post("/",            isAuthenticated, validateReview,             wrapAsync(reviewController.createReview));
router.delete("/:reviewId", isAuthenticated, isReviewAuthor,             wrapAsync(reviewController.deleteReview));

module.exports = router;