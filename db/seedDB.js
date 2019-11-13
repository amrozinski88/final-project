// inserts seeded info
require("../config/connection");
const db = require("../models");

const seeder = async () => {
    await db.User.deleteMany().then(() => console.log("first"))
    console.log("all previous users deleted")
    await db.Transaction.deleteMany()
    console.log("all previous transactions deleted")
    const userid = await db.User.create({
        email: "email.com",
        name: "john",
        fbauth: "password",
        accountBalance: 1000
    })
        .then(newUser=>newUser.id)
    const transaction = await db.Transaction.create({
        deposit: true,
        amount: 1000,
        paidTo: "bank",
        note: "it worked"
    }).then(newTransaction=>newTransaction)
    await db.User.findOneAndUpdate({_id:userid},
        {$push:{
            transactions: transaction.id
        },$inc: {
            accountBalance: transaction.deposit ? transaction.amount : -transaction.amount
        }},
        {new: true}
    ).then(data=>{
        console.log(data)
    })
}
seeder()

