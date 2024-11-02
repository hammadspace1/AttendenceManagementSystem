const Admin = require("../Models/Admin.model");
const Teacher = require("../Models/Teacher.model");
const Student = require("../Models/Student.model");

const Login = async (req, res) => {
    const {email, password, role} = req.body.data;

    if(role ==="Admin"){
        const data = await Admin.find({email: email, password: password});
        if(data.length > 0){
            res.json({msg: "Admin LoggedIn Successfully!", d: data})
        }else{
            res.json({msg: "Email or Password is Incorrect!"})
        }
    }else if(role === "Teacher"){
        const data = await Teacher.find({email: email, password: password});
        if(data.length > 0){
            res.json({msg: "Teacher LoggedIn Successfully!", d: data})
        }else{
            res.json({msg: "Email or Password is Incorrect!"})
        }
    }else if(role === "Student"){
        const data = await Student.find({email: email, password: password});
        if(data.length > 0){
            res.json({msg: "Student LoggedIn Successfully!", d: data})
        }else{
            res.json({msg: "Email or Password is Incorrect!"})
        }
    }
}

module.exports = {Login};