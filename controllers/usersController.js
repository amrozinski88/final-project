const db = require("../models");

module.exports = {
    createUser: (req,res)=>{
        db.User
        .create(req.body)
        .then(newUser=> res.json(newUser))
        .catch(error=> res.json(error))
    },
}