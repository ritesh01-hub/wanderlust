const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isAuthenticated, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let message = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, message);
    } else {
        next();
    }
};

router.get("/",                                                                         wrapAsync(listingController.index));
router.get("/new",          isAuthenticated,                                            listingController.renderNewForm);
router.post("/",            isAuthenticated, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));
router.get("/:id",                                                                      wrapAsync(listingController.showListing));
router.get("/:id/edit",     isAuthenticated, isOwner,                                  wrapAsync(listingController.renderEditForm));
router.put("/:id",          isAuthenticated, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing));
router.delete("/:id",       isAuthenticated, isOwner,                                  wrapAsync(listingController.deleteListing));

module.exports = router;