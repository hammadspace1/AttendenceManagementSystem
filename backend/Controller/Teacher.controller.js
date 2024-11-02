const Teacher = require("../Models/Teacher.model")
const Student = require("../Models/Student.model")

const TeacherSignup = async (req, res) => {
    const {name, email,cnic, department, semester, teacherPhoto, subject} = req.body.teacherData;

    const data = Teacher({
        name: name,
        email: email,
        cnic: cnic,
        password: cnic,
        role: "teacher",
        department: department,
        semester: semester,
        status: false,
        date: new Date().toDateString(),
        teacherPhoto: teacherPhoto,
        subject: subject
    })

    try {

        const result = await Teacher.find({name: name, cnic: cnic, email: email})

        if(result.length > 0){
            res.json({msg: "Sorry this Record is Already Exists! Try Another One..."})
        }else{
            await data.save();
            res.json({msg: "Teacher Added Successfully!", d: data})
        }
    
    } catch (error) {
        console.log(error)
    }
}


const TeacherLogin = async (req, res) => {
    const {email, password} = req.body.teacherData;

    try {
        const data = await Teacher.find({email: email, password: password})

        if(data.length > 0){
            res.json({msg: "Login Successfully!" , d: data})
        }else{
            res.json({msg: "Invalid Username or Password!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const TeacherUpdate = async (req, res) => {
    const {email, password, subject} = req.body;

    try {
        const filter = {email: email}
        const update = { password: password, subject: subject }

        const data = await Teacher.findOneAndUpdate(filter, update)

        if(Teacher.name === name && Teacher.email === email && Teacher.password === password){
            res.json({msg: "Information Updated Successfully!", d: data})
        }
    } catch (error) {
        console.log(error)
    }
}

const TeacherDelete = async (req, res) => {
    const {email} = req.body;

    try {
        
        const filter = {email: email}
        const update = {status: 1}

        const data = await Teacher.findOneAndUpdate(filter, update);
        if(data.status === 1){
            res.json({msg: "Teacher Deleted Successfully!"})
        }else{
            res.json({msg: "Teacher is not Deleted!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const getStudents = async (req, res) => {
    const {department, semester, subject} = req.body.data;

    try {
        const data = await Student.find({department: department, temStatus: false, semester: semester, subjects: {$in: [subject]}})

        res.json({msg: "Students Fetched Successfully!", d: data})
    } catch (error) {
        console.log(error);
    }
}

const setTemStatus = async (req, res) => {
    const {department, semester, subject} = req.body.data;

    try {
        const filter = {department: department, semester: semester, subjects: {$in : [subject]}};
        const update = {temStatus: 0};

        const data = await Student.updateMany(filter, update);

        if(data.temStatus === 0){
            res.json({msg: "Students is Reseted"});
        }else{
            res.json({msg: "Students is not Reseted"}); 
        }
        
    } catch (error) {
        console.log(error)
    }

    
    
}

const GetAllTeachers = async (req, res) => {
    try {
        const data = await Teacher.find({status: 0});
        res.json({msg: "Teacher Fetched Successfully!", d: data})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {TeacherSignup, TeacherLogin, TeacherUpdate, TeacherDelete, getStudents, GetAllTeachers, setTemStatus};