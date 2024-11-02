const Student = require("../Models/Student.model")

const StudentSignup = async (req, res) => {
    const {name, email, sno, batch, semester,studentPhoto, department, subjects} = req.body.studentData;

    const data = Student({
        sno: sno,
        name: name,
        email: email,
        password: "0000",
        status: false,
        temStatus: false,
        role: "student",
        date: new Date().toDateString(),
        semester: semester,
        batch: batch,
        studentPhoto: studentPhoto,
        department: department,
        subjects: subjects


    })

    try {
        const result = await Student.find({sno: sno})

        if(result.length > 0){
            res.json({msg: "Sorry this Student is Already Exists!"})
        }else{
            await data.save();
            res.json({msg: `Student Added Successfully! and Password is: 0000`, d: data})

        }

    } catch (error) {
        console.log(error)
    }
}

const StudentLogin = async (req, res) => {
    const {sno, email, password} = req.body.studentData;

    try {
        const data = await Student.find({sno: sno, email: email, password: password})

        if(data.length > 0){
            res.json({msg: "Student Logged in Successfully!", d: data})
        }else{
            res.json({msg: "Invalid Email or Password!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const StudentUpdate = async (req, res) => {
    const {name, email, password, gradeClass, subjects} = req.body;

    try {
        const filter = {email: email, name: name}
        const update = {name: name, email: email, password: password, gradeClass: gradeClass, subjects: subjects}

        const data = await Student.findOneAndUpdate(filter, update);

        if(data.name === name || data.email === email || data.password === password || data.subjects === subjects || data.gradeClass === gradeClass){
            res.json({msg: "Student Information Updated Successfully!"})
        }else{
            res.json({msg: "Student Information is not Updated"});
        }
    } catch (error) {
        console.log(error)
    }
}

const StudentDelete = async (req, res) => {
    const {gradeClass, rollNumber} = req.body;

    try {
        const filter = {gradeClass: gradeClass, rollNumber: rollNumber};
        const update = {status: 1};

        const data = await Student.findOneAndUpdate(filter, update);

        if(data.status === 1){
            res.json({msg: "Student Record Deleted Successfully!"});
        }else{
            res.json({msg: "Student Record is not Deleted!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const GetAllStudents = async (req, res) => {
    try {
        const data = await Student.find({status: 0})
        res.json({msg: "All Students Fetched!", d: data})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {StudentSignup, StudentLogin, StudentUpdate, StudentDelete, GetAllStudents};