const Joi = require("joi");


// ======================
// Listing Validation
// ======================

module.exports.listingSchema = Joi.object({

    listing: Joi.object({

        title: Joi.string()
            .required(),

        description: Joi.string()
            .required(),

        price: Joi.number()
            .required()
            .min(0),

        location: Joi.string()
            .required(),

        country: Joi.string()
            .required(),

        image: Joi.object({

            url: Joi.string()
                .allow("", null),

            filename: Joi.string()
                .allow("", null),

        }),

    }).required(),

});


// ======================
// Review Validation
// ======================

module.exports.reviewSchema = Joi.object({

    review: Joi.object({

        rating: Joi.number()
            .required()
            .min(1)
            .max(5),

        comment: Joi.string()
            .required()
            .min(3)
            .max(500),

    }).required(),

});