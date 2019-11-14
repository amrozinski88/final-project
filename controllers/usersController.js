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
    db.User.findOne({ email: req.query.email })
      .populate("transactions")
      .then(currentUser => res.json(currentUser))
      .catch(error => res.status(404).json(error));
  },
  deleteUser: (req, res) => {
    db.User.deleteOne({ email: req.query.email }).then(data =>
      res.json(`${data}  Acount deleted`)
    );
  }
};
