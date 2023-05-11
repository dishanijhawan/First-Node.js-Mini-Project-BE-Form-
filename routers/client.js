const express = require("express");
const router = express.Router();
const clientcontroller = require("../controllers/client-controller.js");

router.get("/", clientcontroller.homepage);
router.get("/about", clientcontroller.about);
router.get("/contact", clientcontroller.contact);
router.get("/aboutus", clientcontroller.aboutus);

module.exports = router;
