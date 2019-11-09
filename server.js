const express = require("express");
const path = require("path");
const PORT = process.env.port || 3001;
const app = express();
const routes = require("./routes/api/transactions")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)





app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
