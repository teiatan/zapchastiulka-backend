const {Schema, model} = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");
const nanoid = require("nanoid");

const availability = ["true", "false", "to order", "є", "немає", "під замовлення"];
const units = ["kg", "l", "", "кг", "шт", "л"];

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set product name'],
    },
    manufactureId: {
        type: String,
        required: [true, 'Set manufacture id of product'],    
    },
    price: {
        type: Number,
        required: [true, 'Set product price'],
    },
    availability: {
        type: String,
        enum: availability,
        default: "під замовлення",
    },
    weight: {
        type: Number,
    },
    units: {
        type: String,
        enum: units,
    },
    photo: {
        id: {
            type: String,
        },
        url: {
            type: String,
            required: [true, 'Set picture src'],
        },
        alt: {
            type: String,
            required: [true, 'Set picture description (alt)'],
        }
    },
    description: {
        type: String,
    },
    manufacturer: {
        country: {
            type: String,
        },
        factory: {
            type: String,
        },
        trademark: {
            type: String,
        },
    },
    category: {
        type: Array,
        required: true,
    }
});

productSchema.post("save", handleMongooseError);