const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    fbauth: {
        something: String
    },
    transactions: [
            {
              type: Schema.Types.ObjectId,
              ref: "Transaction"
            }
          ]
    


});

const User = mongoose.model("User",UserSchema);
module.exports = User;