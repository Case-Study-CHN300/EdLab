const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

const admin_email = process.env.ADMIN_EMAIL;

router.post("/register", async (req, res) => {
  const { name, email, supervisor, password, cpassword } = req.body;

  if (!name || !email || !supervisor || !password || !cpassword) {
    return res.status(400).json({ error: "Plz fill the field properly" });
  }
  let regex = new RegExp(/^[\w]+[\w.%+-]*@[\w.-]+\.iitr\.ac\.in$/);
  if (!regex.test(email)) {
    return res.status(400).json({ error: "Invalid Email" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exist" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "password not matching" });
    } else {
      const user = new User({ name, email, supervisor, password, cpassword });
      //hash the password here

      await user.save();

      res.status(201).json({ message: "User registered successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000), // 30 days expire
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "user signed in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/home", authenticate, (req, res) => {
  res.json(req.rootUser);
});

router.post("/General-Safety", async (req, res) => {
  const { correct } = req.body;
  const token = req.cookies.jwtoken;

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  if (verifyToken) {
    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (rootUser) {
      rootUser.course1Marks = correct;
    }

    await rootUser.save();
  }
});
router.post("/Chemical-Safety", async (req, res) => {
  const { correct } = req.body;
  const token = req.cookies.jwtoken;

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  if (verifyToken) {
    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (rootUser) {
      rootUser.course2Marks = correct;
    }

    await rootUser.save();
  }
});

router.post("/Controlled-Substances", async (req, res) => {
  const { correct } = req.body;
  const token = req.cookies.jwtoken;

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  if (verifyToken) {
    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (rootUser) {
      rootUser.course3Marks = correct;
    }

    await rootUser.save();
  }
});

router.post("/Formaldehyde", async (req, res) => {
  const { correct } = req.body;
  const token = req.cookies.jwtoken;

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  if (verifyToken) {
    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (rootUser) {
      rootUser.course4Marks = correct;
    }

    await rootUser.save();
  }
});

router.post("/Safe-Use-Of-Anesthetic-Gases", async (req, res) => {
  const { correct } = req.body;
  const token = req.cookies.jwtoken;

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  if (verifyToken) {
    const rootUser = await User.findOne({
      _id: verifyToken._id,
    });

    if (rootUser) {
      rootUser.course5Marks = correct;
    }

    await rootUser.save();
  }
});

router.get("/admin", authenticate, (req, res) => {
  if (req.rootUser.email === `${admin_email}`) {
    User.find({}).exec(function (err, all_users) {
      if (err) throw err;
      if (all_users) {
        res.end(JSON.stringify(all_users));
      } else {
        res.end();
      }
    });
  } else {
    res.status(400).json({ error: "No valid admin" });
  }
});

router.get("/logout", authenticate, (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
