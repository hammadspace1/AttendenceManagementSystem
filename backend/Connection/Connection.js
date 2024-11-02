const mongoose = require('mongoose')

const Connection = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/AttendenceManagement')
        console.log("DataBase is Connected Successfully!")
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connection;