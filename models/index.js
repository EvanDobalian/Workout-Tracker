const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Must include exercise type.'
        },
        name: {
            type: String,
            required: 'Must include a name.'
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            tyep: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
})

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout