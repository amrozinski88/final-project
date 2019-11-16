const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const authChecker = require("../../controllers/authMiddleware")

router.route("/")
.get(authChecker,usersController.findOneUser)
.post(usersController.createUser)





router.route("/:email")
.get(usersController.findOneUser)
.delete(usersController.deleteUser)




module.exports = router;

