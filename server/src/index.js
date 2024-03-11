const { setupExpress } = require("./config/express");
const { connectToDB } = require("./config/mongoDB");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workout");

const app = setupExpress();
connectToDB();

app.use([authRoutes, userRoutes, workoutRoutes]);
