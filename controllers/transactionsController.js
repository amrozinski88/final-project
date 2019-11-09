const db = require("../models");

// transactions methods

module.exports = {
    findById: (req,res)=>{
        db.User
        .findById(req.params.id)
        .then(result=> res.json(result))
        .catch(error=> res.json(error))
    },
    createUser: (req,res)=>{
        db.User
        .create(req.body)
        .then(newUser=> res.json(newUser))
        .catch(error=> res.json(error))
    }
}