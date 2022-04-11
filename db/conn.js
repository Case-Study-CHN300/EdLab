const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful with DB");
  })
  .catch((err) => console.log("no connection with DB"));
