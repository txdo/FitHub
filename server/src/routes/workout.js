const express = require("express");
const { authToken } = require("../middleware/authToken");
const { saveWorkout, getAllWorkouts } = require("../controllers/workout");
const router = express.Router();

router.post("/saveWorkout", authToken, saveWorkout);
router.get("/getAllWorkouts", authToken, getAllWorkouts);

module.exports = router;
