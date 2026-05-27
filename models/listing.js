const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
   title: {
      type: String,
      required: true,
   },

   description: {
      type: String,
   },

   image: {
      url: String,
      filename: String,
   },

   price: Number,

   location: String,

   country: String,

   owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },

   reviews: [
      {
         type: Schema.Types.ObjectId,
         ref: "Review",
      },
   ],
});

// ======================================
// Delete Review Middleware
// ======================================

listingSchema.post("findOneAndDelete", async (listing) => {
   if (listing) {
      await Review.deleteMany({
         _id: {
            $in: listing.reviews,
         },
      });
   }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;