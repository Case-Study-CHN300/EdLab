const dotenv = require("dotenv");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
var cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });
require("./db/conn");

// json data jo bhi aaye usko simply dikha do
app.use(express.json());

app.use(cookieParser());

// link the router files
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.get("/signin", (req, res) => {
  res.send("Hello world from the server");
});

app.get("/signup", (req, res) => {
  res.send("Hello world from the server");
});
app.get("/logout", (req, res) => {
  res.send("Hello world from the server");
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});