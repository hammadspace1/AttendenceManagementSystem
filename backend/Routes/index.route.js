const { AdminUpdate} = require("../Controller/Admin.controller");
const {TeacherSignup, TeacherUpdate, TeacherDelete, getStudents, GetAllTeachers, setTemStatus} = require("../Controller/Teacher.controller");
const {StudentSignup, StudentUpdate, StudentDelete, GetAllStudents} = require("../Controller/Student.controller");
const {StudentPresent, StudentAbsent} = require("../Controller/Attendence.controller");

const express = require("express");
const { Login } = require("../Controller/Login.controller");

const router = express.Router();

router.post("/adminUpdate", AdminUpdate);
router.post("/teacherSignup", TeacherSignup);
router.post("/teacherUpdate", TeacherUpdate);
router.post("/teacherDelete", TeacherDelete);
router.post("/studentSignup", StudentSignup);
router.post("/studentUpdate", StudentUpdate);
router.post("/studentDelete", StudentDelete);
router.post("/submitPresent", StudentPresent);
router.post("/submitAbsent", StudentAbsent);
router.post("/getStudents", getStudents);
router.get("/getAllStudents", GetAllStudents);
router.get("/getAllTeachers", GetAllTeachers);
router.post("/login", Login);
router.post("/setTemStatus", setTemStatus);

module.exports = router;