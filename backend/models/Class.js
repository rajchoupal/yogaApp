const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    teacher: String,
    description: String,
    date: Date,
    time: String,
    capacity: Number,
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;