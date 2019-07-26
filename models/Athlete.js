const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
    interest: {
        type: String,
    },
    location: {
        type: String,
    },
    association: {
        type: String,
    },
    team: {
        type: String,
    },
    charity: {
        type: String,
    },
    pet: {
        type: String,
    },
    marital_status: {
        type: String,
    },
    avatar: {
        type: Buffer,
    }
}, {
    timestamps: true
});

module.exports = Athlete = mongoose.model('Athlete', AthleteSchema);

module.exports.getAthleteById = function(id, cb) {
    Athlete.findById(id, cb);
}

module.exports.getAthleteByname = function(name, cb) {
    const query = {name: name}
    Athlete.findOne(query, cb);
}