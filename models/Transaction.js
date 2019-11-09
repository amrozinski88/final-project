const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    deposit: {
        type: Boolean,
        required: true,
    },
    amount: {
        type: mongoose.Decimal128,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    note: {
        type: String
    }


});

const Transaction = mongoose.model("Transaction",TransactionSchema);
module.exports = Transaction;

