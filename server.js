require("dotenv").config();
require("./config/connection");
const express = require("express");
const path = require("path");
const PORT = process.env.port || 3001;
const app = express();
const admin = require("firebase-admin")
const routes = require("./routes");
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://final-project-ucf.firebaseio.com"
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)





app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
