const mongoose = require('mongoose');

const DaySchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    workouts: {
        type: Array,
    },
    calories: {
        type: number,
    },
    weight : {
        type: number
    }
});

module.exports = mongoose.model('Days', DaySchema);