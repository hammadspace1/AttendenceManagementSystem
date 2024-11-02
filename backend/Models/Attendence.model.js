const mongoose = require('mongoose')

const attendenceSchema = new mongoose.Schema({
    sno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        required:true
    },
    semester: {
        type: String,
        required:true
    },
    batch: {
        type: String,
        required:true
    },
    department: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    attstatus: {
        type: String,
        enum: ["present", "absent"],
        required: true
    }, 
    date: {
        type: String,
        required: true
    }
})

const Attendence = mongoose.model("Attendence", attendenceSchema);

module.exports = Attendence;