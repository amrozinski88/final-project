const router = require("express").Router();
const transactionsRoutes = require("./transactions");
const usersRoutes = require("./users");

router.use("/transactions",transactionsRoutes);
router.use("/users",usersRoutes);





module.exports = router