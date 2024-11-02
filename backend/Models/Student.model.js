const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    sno: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    temStatus: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    studentPhoto: {
        type: String,
        required: true
    },
    subjects: [{
        type: String,
        required: true
    }]
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;