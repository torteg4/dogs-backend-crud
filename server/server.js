const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

require("./config/mongoose.config");
    //  can't set up post request through postman etc without the following
app.use(express.json(), express.urlencoded({ extended: true })); //after config before routes
app.use(cors()); //needs to be before routes

require("./routes/dog.routes")(app);

app.listen(PORT, () => console.log("Listening on port" + PORT));