const express = require("express");
const router = express.Router();
const transactionsController = require("../../controllers/transactionsController");
//   route for /api/transactions
router.route("/")
    .get(transactionsController.findAllTransactions)
    .post(transactionsController.addTransaction);


module.exports = router;