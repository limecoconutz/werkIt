const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goals: {
        type: Array
    },
    
});

module.exports = mongoose.model('Profiles', ProfileSchema);