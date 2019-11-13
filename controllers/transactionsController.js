const db = require("../models");

// transactions methods

module.exports = {
    findById: (req, res) => {
        db.Transaction
            .findById(req.params.id)
            .then(result => res.json(result))
            .catch(error => res.json(error))
    },

    addTransaction: (req, res) => {
        db.Transaction
            .create(req.body)
            .then(addedTransaction => {
                const amount = addedTransaction.deposit ? addedTransaction.amount : -addedTransaction.amount
                db.User.findOneAndUpdate({ email: req.body.email }, {
                    $push: {
                        transactions: addedTransaction.id
                    },
                    $inc: {accountBalance: amount}
                }, { new: true }).populate("transactions")
                .then(user=>res.json(user))
                .catch(err=>res.status(422).json(err))
            })
            .catch(err=>res.status(422).json(err))

    },

    findAllTransactions: (req, res) => {
        console.log(`it worked`)
        db.Transaction
            .find()
            .then(transactions => {
                res.json(transactions)
            }).catch(error => res.status(422).json(error))
    },
    // check to see if it deletes from user array
    deleteTransaction: (req, res) => {
        db.Transaction
            .deleteOne({ _id: req.body.id })
            .then(res.json("deleted all transactions"))
    },

}