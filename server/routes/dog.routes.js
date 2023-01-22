const DogController = require("../controllers/dog.controller")

module.exports = (app) => {
    app.get("/api/dogs", DogController.findAll);
    app.get("/api/dogs/:id", DogController.findOne);
    app.post("/api/dogs", DogController.create); //!use form-urlencoded(MAKE SURE IT'S IN SERVER.JS) or raw in postman to test
    app.put("/api/dogs/:id", DogController.update);
    app.delete("/api/dogs/:id", DogController.destroy);
};