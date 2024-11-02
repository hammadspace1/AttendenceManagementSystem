const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
            type: String,
            required: true
    },
    role: {
        type: String,
        required: true
    },
    semester: {
            type: String,
            required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    teacherPhoto: {
        type: String,
        required: true
    },
    subject: {
            type: String,
            required: true
    }
})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;