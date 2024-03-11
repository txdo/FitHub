const express = require("express");
const { authToken } = require("../middleware/authToken");
const { loadUserInfo, saveGoal } = require("../controllers/user");
const router = express.Router();

router.post("/userInfo", authToken, loadUserInfo);
router.post("/saveGoal", authToken, saveGoal);

module.exports = router;
