const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Pages
router.get("/", (req, res) => res.sendFile("login.html", { root: "./views" }));
router.get("/register", (req, res) => res.sendFile("register.html", { root: "./views" }));

// Actions
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authController.logout);

module.exports = router;
