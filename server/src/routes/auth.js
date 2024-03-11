const express = require("express");
const { authToken } = require("../middleware/authToken");
const { register, login, isLoggedIn, logout } = require("../controllers/auth");
const upload = require("../middleware/multer");
const router = express.Router();

router.post("/register", upload.single("profilePicture"), authToken, register);
router.post("/login", authToken, login);
router.get("/isLoggedIn", authToken, isLoggedIn);
router.get("/logout", authToken, logout);

module.exports = router;
