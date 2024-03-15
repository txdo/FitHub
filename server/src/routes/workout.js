const express = require("express");
const { authToken } = require("../middleware/authToken");
const {
  saveWorkout,
  getAllWorkouts,
  saveSharedWorkout,
} = require("../controllers/workout");
const router = express.Router();

router.post("/saveWorkout", authToken, saveWorkout);
router.get("/getAllWorkouts", authToken, getAllWorkouts);
router.post("/saveSharedWorkout", authToken, saveSharedWorkout);

module.exports = router;
