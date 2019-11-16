const db = require("../models");
const admin = require("firebase-admin");

module.exports = {
  createUser: (req, res) => {
    admin
      .auth()
      .createUser({
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        db.User.findOneAndUpdate(
          {
            email: req.body.email
          },
          {
            fbauth: user.uid,
            transactions: [],
            ...req.body
          },
          {
            new: true,
            upsert: true
          }
        )
          .then(newUser => res.json(newUser))
          .catch(error => res.json(error));
      })
      .catch(error => {
        return res.json(error);
      });
  },
  findOneUser: (req, res) => {
    db.User.findOne({ email: req.params.email })
      .populate("transactions")
      .then(currentUser => res.json(currentUser))
      .catch(error => res.status(404).json(error));
  },
  getUserTransactions: (req,res)=>{
    db.User.findOne({ email: req.params.email })
    .populate("transactions")
    .then(currentUser => res.json(currentUser.transactions))
    .catch(error => res.status(404).json(error));
  },
  deleteUser: (req, res) => {
    db.User.findOne({email: req.body.email})
        .then(user=>{
            db.User.deleteOne({ email: user.email })
            .then(data =>{
                if(data.n === 1){
                    admin.auth().deleteUser(user.fbauth)
                    .then(()=>res.json(`Account Deleted`))
                    .catch(error=>res.json(error))
                } else {
                  res.json('no-users deleted');
                }
            }).catch(error=>res.json(error));
        }).catch(error=>res.json(error));
    
  }
};
