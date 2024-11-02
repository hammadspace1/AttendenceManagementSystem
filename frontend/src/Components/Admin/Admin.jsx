import React, { useState } from "react";
import axios from 'axios';

const Admin = () => {

    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const role = sessionStorage.getItem('tole'); 
    const photo = sessionStorage.getItem('photo');
    const check = sessionStorage.getItem('check');

    const [roleData, setRoleData] = useState("addStudent");
    const [studentData, setStudentData] = useState({});
    const [teacherData, setTeacherData] = useState({});
    const [allStudents, setAllStudents] = useState([]);
    const [allTeachers, setAllTeachers] = useState([]);

    const handleInput = (e) => {
        setStudentData({
            ...studentData, [e.target.name]: e.target.value
        })
    }

    const handleTInput = (e) => {
        setTeacherData({
            ...teacherData, [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            setStudentData({
                ...studentData, studentPhoto: reader.result
            })
        })

    }

    const handleTImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            setTeacherData({
                ...teacherData, teacherPhoto: reader.result
            })
        })
    }

    const subjectArray = (e) => {
        const allSubjects = e.target.value;
        const arr = allSubjects.split(' ');
        setStudentData({
            ...studentData, subjects: arr
        })
    }

    const submitS = () => {
        if(studentData.name !== undefined && studentData.email !== undefined && studentData.sno !== undefined && studentData.semester !== undefined && studentData.batch !== undefined && studentData.studentPhoto !== undefined && studentData.department !== undefined ){
            axios.post('http://localhost:5000/studentSignup', {studentData}).then((res) => {
                alert(res.data.msg)
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
        }else{
            alert("Please Fill All the Fields!")
            console.log(data)
        }
    }

    const submitT = () => {
        if(teacherData.name !== undefined && teacherData.email !== undefined && teacherData.cnic !== undefined && teacherData.teacherPhoto !== undefined && teacherData.department !== undefined && teacherData.subject !== undefined && teacherData.semester !== undefined){
            axios.post('http://localhost:5000/teacherSignup', {teacherData}).then((res) => {
                alert(res.data.msg)
                navigate("/admin")
            }).catch((error) => {
                console.log(error)
            })
            console.log(data)
        }else{
            alert("Please Fill All the Empty Fields!")
            console.log(teacherData)
        }
    }

    const getStudentRecord = () => {
        setRoleData("studentRecord");
        axios.get("http://localhost:5000/getAllStudents").then((res) => {
            setAllStudents(res.data.d);
        }).catch((error) => {
            console.log(error);
        })
    }

    const getTeacherRecord = () => {
        setRoleData("teacherRecord");
        axios.get("http://localhost:5000/getAllTeachers").then((res) => {
            setAllTeachers(res.data.d);
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <div className="w-[1528px]  h-[400px] flex m-1  ">
            <div className="w-[350px] h-[550px] flex rounded-tl-xl rounded-bl-xl ml-[1rem] mt-[-4px] border-4 border-[#002147] bg-[#002147] text-white">
            <ul className=" mt-10 leading-[4rem]">
                    <li className={`font-serif font-semibold text-[1.3rem] hover:text-[#FFB606] ml-10 ${roleData == "addStudent" ? "text-[#FFB606]" : " "}`}><button onClick={() => (setRoleData("addStudent"))}>Add Student</button></li>
                    <li className={`font-serif font-semibold text-[1.3rem] hover:text-[#FFB606] ml-10 ${roleData == "addTeacher" ? "text-[#FFB606]" : " "}`}><button onClick={() => (setRoleData("addTeacher"))}>Add Teacher</button></li>
                    <li className={`font-serif font-semibold text-[1.3rem] hover:text-[#FFB606] ml-10 ${roleData == "studentRecord" ? "text-[#FFB606]" : " "}`}><button onClick={getStudentRecord} >Student Record</button></li>
                    <li className={`font-serif font-semibold text-[1.3rem] hover:text-[#FFB606] ml-10 ${roleData == "teacherRecord" ? "text-[#FFB606]" : " "}`}><button onClick={getTeacherRecord}>Teacher Record</button></li>
                </ul>
            </div>
            <div className="w-[1150px] h-[550px] flex-col rounded-tr-xl rounded-br-xl  mt-[-4px] ml-[-4px] border-4 border-[#FFB606] bg-[#FFB606] box-border overflow-auto">
                <div className="w-full flex ">
                    <img className="w-[100px] h-[100px] rounded-full border-2 border-[#002147]" src={photo} alt="adminPhoto" />
                    <h1 className="font-serif font-semibold mt-7 ml-[2rem] text-[2rem]">Wellcome! {name} As Admin</h1>
                </div>
                {roleData === "addStudent" && (
                    <div className="w-[1020px] ml-[5rem] mt-2 items-center  rounded-[30px]">
                        <h1 className="text-[#002147]  mt-5 ml-[4rem] text-[3rem] font-bold font-serif">Student Registration</h1>
                        <div className="flex">
                            <input name="name" id="name" onChange={handleInput}  className="w-[12.5rem] h-9 ml-[4rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="text" placeholder="Student Name" />
                            <input name="sno" id="sno" onChange={handleInput}  className="w-[12.5rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="text" placeholder="Student-No" />
                            <input name="email" id="email" onChange={handleInput}  className="w-[26rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="Email" placeholder="Student Email" />
                        </div>
                        <div className="flex">
                            <input name="batch" id="batch" onChange={handleInput}  className="w-[12.5rem] h-9 ml-[4rem] border-2 border-white text-[#002147] rounded-[20px] font-semibold mt-11 px-5 py-1" type="text" placeholder="Batch" />
                            <input name="semester" id="semester" onChange={handleInput}  className="w-[12.5rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] font-semibold mt-11 px-5 py-1" type="number" placeholder="Semester" />
                            <select name="department" id="department" onChange={handleInput}  className="w-[12.5rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" >
                                <option >Department</option>
                                <option value="ComputerScience">Computer Science</option>
                                <option value="English">English</option>
                                <option value="Islamiyat">Islamiyat</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="PakStudies">Pak Studies</option>
                                <option value="PoliticalScience">Political Science</option>
                                <option value="Urdu">Urdu</option>
                            </select>
                            <input onChange={handleImage}  className="w-[12.5rem] h-9 ml-[1rem] mt-11 px-5" type="file" />
                        </div>
                        <input onChange={subjectArray} className="w-[26rem] h-9 ml-[4rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="text" placeholder="Subjects...  (Separeted with Space)" /><br />
                        <button onClick={submitS}  className="w-[13rem] h-9 ml-[4rem]  hover:bg-[#c8aa62] border-2 border-[#002147] bg-[#002147] text-white rounded-[20px] mt-11 mb-4 px-5 font-serif font-semibold">Register</button>
                    </div>
                )}

                {roleData === "addTeacher" && (
                    <div className="w-[1020px] ml-[5rem] mt-2 items-center  rounded-[30px]">
                    <h1 className="text-[#002147] ml-[4rem] mt-5 text-[3rem] font-bold font-serif">Teacher Registration</h1>
                    <div className="flex">
                        <input name="name" id="name" onChange={handleTInput}  className="w-[12.5rem] h-9 ml-[4rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher Name" />
                        <input name="email" id="email" onChange={handleTInput}  className="w-[12.5rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher Email" />
                        <input name="cnic" id="cnic" onChange={handleTInput}  className="w-[26rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] mt-11 px-5" type="Email" placeholder="Teacher CNIC" />
                    </div>
                    <div className="flex">
                        <input name="subject" id="subject" onChange={handleTInput}  className="w-[12.5rem] h-9 ml-[4rem] border-2 border-white text-[#002147] rounded-[20px] font-semibold mt-11 px-5 py-1" type="text" placeholder="Batch" />
                        <select name="department" id="department" onChange={handleTInput} className="w-[12.5rem] h-9 ml-[1rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" >
                            <option >Department</option>
                            <option value="ComputerScience">Computer Science</option>
                            <option value="English">English</option>
                            <option value="Islamiyat">Islamiyat</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="PakStudies">Pak Studies</option>
                            <option value="PoliticalScience">Political Science</option>
                            <option value="Urdu">Urdu</option>
                        </select>
                        <input name="semester" id="semester" onChange={handleTInput}  className="w-[12.5rem] h-9 ml-[1rem] border-2 border-white text-[#002147] rounded-[20px] font-semibold mt-11 px-5 py-1" type="number" placeholder="Semester" />
                    </div>
                    <input onChange={handleTImage} className="w-[26rem] h-9 ml-[4rem]  text-[#002147]  mt-11 px-5" type="file"  /><br />
                    <button onClick={submitT}  className="w-[13rem] h-9 ml-[4rem]  hover:bg-[#c8aa62] border-2 border-[#002147] bg-[#002147] text-white rounded-[20px] mt-11 mb-4 px-5 font-serif font-semibold">Register</button>
                </div>
                )}

                {roleData === "studentRecord" && (
                    <div className="ml-[9rem] my-7 ">
                        <h1 className=" my-7 font-serif font-semibold text-[1.5rem] text-[#002147]">List of Students</h1>
                        <table className="sticky shadow-2xl font-serif border-2 mt-10 border-cyan-200 w-[700px]">
                            <thead className="text-white">
                                <tr>
                                    <th className="py-3 bg-[#002147]">Image</th>
                                    <th className="py-3 bg-[#002147]">Sno</th>
                                    <th className="py-3 bg-[#002147]">Name</th>
                                    <th className="py-3 bg-[#002147]">Semester</th>
                                    <th className="py-3 bg-[#002147]">Batch</th>
                                    <th className="py-3 bg-[#002147]">Department</th>
                                </tr>
                            </thead>
                            {allStudents.map((res, index) => (
                                <tbody key={index} className="border-b-2 border-[#ffff]">
                                    <tr className="bg-[#65768a] cursor-pointer duration-300">
                                        <td className="py-1 px-6"><img className="w-[4rem] h-[4rem] rounded-full" src={res.studentPhoto} alt="studentphoto" /></td>
                                        <td className="py-3 px-6">{res.sno}</td>
                                        <td className="py-3 px-6">{res.name}</td>
                                        <td className="py-3 px-6">{res.semester}</td>
                                        <td className="py-3 px-6">{res.batch}</td>
                                        <td className="py-3 px-6">{res.department}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                )}

                {roleData === "teacherRecord" && (
                    <div className="ml-[9rem] my-7 ">
                    <h1 className=" my-7 font-serif font-semibold text-[1.5rem] text-[#002147]">List of Teachers</h1>
                    <table className="shadow-2xl font-serif border-2 mt-10 border-cyan-200 w-[850px]">
                        <thead className="text-white">
                            <tr>
                                <th className="py-3 bg-[#002147]">Image</th>
                                <th className="py-3 bg-[#002147]">Name</th>
                                <th className="py-3 bg-[#002147]">CNIC</th>
                                <th className="py-3 bg-[#002147]">Subject</th>
                                <th className="py-3 bg-[#002147]">Semester</th>
                                <th className="py-3 bg-[#002147]">Department</th>
                            </tr>
                        </thead>
                        {allTeachers.map((res, index) => (
                            <tbody key={index} className="border-b-2 border-[#ffff]">
                                <tr className="bg-[#65768a] cursor-pointer duration-300">
                                    <td className="py-1 px-6"><img className="w-[4rem] h-[4rem] rounded-full" src={res.teacherPhoto} alt="photo" /></td>
                                    <td className="py-3 px-6">{res.name}</td>
                                    <td className="py-3 px-6">{res.cnic}</td>
                                    <td className="py-3 px-6">{res.subject}</td>
                                    <td className="py-3 px-6">{res.semester}</td>
                                    <td className="py-3 px-6">{res.department}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                )}
            </div>

        </div>
    )
}

export default Admin;