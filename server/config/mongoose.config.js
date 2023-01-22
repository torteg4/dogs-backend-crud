const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/dogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successfully connected to database"))
    .catch(err => console.log("Something went wrong connecting to database", err));