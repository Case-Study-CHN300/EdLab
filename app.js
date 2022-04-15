const dotenv = require("dotenv");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
var cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(cors());
// json data jo bhi aaye usko simply dikha do
app.use(express.json());

app.use(cookieParser());

// link the router files
app.use("/api", require("./router/auth"));

const PORT = process.env.PORT || 5000;

app.get("/download1", (req, res) => {
  res.download("./pdfs/General-Safety.pdf");
});
app.get("/download2", (req, res) => {
  res.download("./pdfs/General-Safety.pdf");
});
app.get("/download3", (req, res) => {
  res.download("./pdfs/General-Safety.pdf");
});
app.get("/download4", (req, res) => {
  res.download("./pdfs/General-Safety.pdf");
});
app.get("/download5", (req, res) => {
  res.download("./pdfs/General-Safety.pdf");
});

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
