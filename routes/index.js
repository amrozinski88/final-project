const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api",apiRoutes);

router.use((req,res)=>res.status(404).json("Endpoint not found try another"));

module.exports = router;