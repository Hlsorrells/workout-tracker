const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// db.on("error", error => {
//     console.log("Database Error:", error);
// });

// app.get("/api/workouts", (req, res) => {
    
// });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  