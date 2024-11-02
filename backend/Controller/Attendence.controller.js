const Attendence = require("../Models/Attendence.model")
const Student = require("../Models/Student.model")

const StudentPresent = async (req, res) => {
    const {_id, sno, name, role, email, semester, batch, department,  } = req.body.e;
    const {subject} = req.body;

    const data = Attendence({
        sno: sno,
        name: name,
        role: role,
        email: email,
        status: false,
        semester: semester,
        batch: batch,
        department: department,
        subject: subject,
        attstatus: "present",
        date: new Date().toDateString()
    })

    try {

        const filter = {_id: _id};
        const update = {temStatus: 1};

        await data.save();
        await Student.findOneAndUpdate(filter, update);
        res.json({msg: "Present Marked Successfully!"})
    } catch (error) {
        console.log(error)
    }
}

const StudentAbsent = async (req, res) => {
    const {_id, sno, name, role, email, semester, batch, department,  } = req.body.e;
    const {subject} = req.body;

    const data = Attendence({
        sno: sno,
        name: name,
        role: role,
        email: email,
        status: false,
        semester: semester,
        batch: batch,
        department: department,
        subject: subject,
        attstatus: "absent",
        date: new Date().toDateString()
    })

    try {

        const filter = {_id: _id};
        const update = {temStatus: 1};

        await data.save();
        await Student.findOneAndUpdate(filter, update);
        res.json({msg: "Absent Marked Successfully!"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {StudentPresent, StudentAbsent};