const mongoose = require("mongoose");

// min and max for numbers
// minLength and maxLength for strings

const DogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [3, "Name must be at least 3 characters long"]
        },
        age : {
            type: Number,
            required: true,
            min: [0, "Dog must be at least 1 year old"]
        },
        gender: {
            type: String,
            required: true,
            enum: {
                values: ["male", "female", "other"],
                message: "Unaccepted value"
            }
        },
        breed: {
            type: String,
            required: true
        },
        furColor: {
            type: String,
            required: true
        },
        cuteness: {
            type: Number,
            required: true,
            min: [1, "Cuteness must be at least 1"],
            max: [10, "Cuteness scale cannot exceed 10"]
        },
        isFixed: {
            type: Boolean,
            required: true
        },
        toys: {
            type: Array,
            required: false,
        }
    }, 
    {timestamps: true}
);

// ("Dog" - insert class name, DogSchema - insert name of schema)
const Dog = mongoose.model("Dog", DogSchema)

module.exports = Dog;