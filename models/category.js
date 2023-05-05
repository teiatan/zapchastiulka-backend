const {Schema, model} = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");
const nanoid = require("nanoid");

const categorySchema = new Schema({
    mainCategory: {
        type: String,
        required: [true, 'Set main category title'],
    },
    subCategories: {
        type: Array,
    }
});

categorySchema.post("save", handleMongooseError);

const Category = model("category", categorySchema);

module.exports = {
    Category
};