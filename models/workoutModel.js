const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {type: String},
    name: {type: String},
    duration: {type: Number},
    weight: {type: Number},
    reps: {type: Number},
    sets: {type: Number},
    distance: {type: Number}
  }]
},{
  toJSON: {
    virtuals: true
  }
});

// Define virtual to calculate the duration time
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, current) => {
    return total + current.duration
  }, 0)
});

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;
