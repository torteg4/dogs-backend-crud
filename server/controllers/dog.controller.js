
const Dog = require("../models/dog.models")

// * How platform does it: you write each function individually
    // module.exports.findAll = (req, res) etc

// *Corey likes to make module.exports an object, and each function is going to be a key
module.exports = {

    findAll: (req, res) => {
        Dog.find() //this returns a promise
            .then(allDogs => res.json (allDogs))
            .catch ((err) => 
                res.json({
                    message: "Something went wrong with dog.find()", 
                    error:err
                })
            );
    },

    findOne: (req,res) => {
        Dog.findById(req.params.id) 
        //it gets params.id from the route. It needs to match what you input after the colon in the route
            .then (oneDog => res.json(oneDog))
            .catch ((err) => 
                res.json({
                    message: "Something went wrong with findOne/dog.findById()", 
                    error: err
                })
            );
    },

    create: (req,res) => {
        const {body} = req;
        // console.log(body)
        Dog.create(body)
            .then(newDog => res.json({message: "Successfully created new dog", dog: newDog}))
            .catch ((err) => 
                res.json ({
                        message: "Something went wrong with create/Dog.create()", 
                        err:err
                    })
                );
    },

    // similar to create, but need to query first
    update: (req,res) => {
        Dog.findByIdAndUpdate(req.params.id, req.body) 
            .then(updatedDog => res.json({message: "Successfully updated dog", updatedDog: updatedDog}))
            .catch((err) => 
                res.json({
                    message: "Something went wrong with update", 
                    error:err
                })
            );
    },

    destroy: (req,res) => {
        Dog.findByIdAndDelete(req.params.id)
            // .then(deleteMessage => res.json({message:"Dog successfully removed from list", deleteMessage: deleteMessage}))
            .then(deleteMessage => res.json({message: deleteMessage}))
            .catch(err => 
                res.json({
                    message:"Something went wrong with destroy", 
                    error:err
                })
            );
    },
};