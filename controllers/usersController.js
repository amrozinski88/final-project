const db = require("../models");

module.exports = {
    createUser: (req,res)=>{
        db.User
        .create(req.body)
        .then(newUser=> res.json(newUser))
        .catch(error=> res.json(error))
    },
    findOneUser: (req,res)=>{
        db.User.findOneAndUpdate({email:req.params.email})
        .then(currentUser=>res.json(currentUser))
        .catch(error=>res.status(404).json(error))
    }
}