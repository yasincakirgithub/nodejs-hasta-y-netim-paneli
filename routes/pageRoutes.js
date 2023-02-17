const express = require("express");
const router = express.Router();
var pageController = require("../controllers/pageController")
var authMiddleware = require("../middleware/auth")

// POST
router.post("/login",pageController.login);

// GET
router.get("/",authMiddleware.authenticationToken, pageController.homePage);
router.get("/login",pageController.loginPage);
router.get("/logout",pageController.logout);



module.exports = router;