const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connection to the MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Routes
///////////////////////////////////////////////////
// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  