const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");

router.route("/")
.get(usersController.findOneUser)
.post(usersController.createUser)
.delete(usersController.deleteUser)

module.exports = router;