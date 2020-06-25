var db = require("../models");

module.exports = function (app) {

    // This route retrieves all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // This route retrieves all workouts (see below).
    // I would expect the range to return a certain date, but I did not find where the front-end was passing me a range criteria to filter the dates in the db.
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Creates a new workout session
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create({body})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Inserts the user's input for the exercise session into the day's workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({_id: req.params.id}, {$push: {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
}