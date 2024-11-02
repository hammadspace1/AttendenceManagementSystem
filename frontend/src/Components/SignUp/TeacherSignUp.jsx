import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TeacherSignUp = () => {

    const [data, setData] = useState({})
    const navigate = useNavigate();

    const handleInput = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            setData({
                ...data, teacherPhoto: reader.result
            })
        })
    }

    const submit = () => {
        if(data.name !== undefined && data.email !== undefined && data.cnic !== undefined && data.teacherPhoto !== undefined && data.department !== undefined && data.subject !== undefined && data.semester !== undefined){
            axios.post('http://localhost:5000/teacherSignup', {data}).then((res) => {
                alert(res.data.msg)
                navigate("/admin")
            }).catch((error) => {
                console.log(error)
            })
            console.log(data)
        }else{
            alert("Please Fill All the Empty Fields!")
            console.log(data)
        }
    }

    return(
        <div className="w-full">
            <div className="w-[550px] ml-[480px] mt-2 items-center border-2 shadow-2xl border-[#E7E7E7] rounded-[30px]">
            <h1 className="text-[#FFB606] text-center mt-5 text-[3rem] font-bold font-serif">Registration</h1>
            <div className="flex">
                <input name="name" id="name" onChange={handleInput} className="w-[12.5rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher Name" />
                <input name="email" id="email" onChange={handleInput} className="w-[12.5rem] h-9 ml-[1rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher Email" />
            </div>
            <div className="flex">
                <input name="cnic" id="cnic" onChange={handleInput} className="w-[12.5rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher CNIC" />
                <input onChange={handleImage} className="w-[12.5rem] h-9 ml-[1rem] mt-11 px-5" type="file" />
            </div>
            <div className="flex">
                <input name="subject" id="subject" onChange={handleInput} className="w-[12.5rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="text" placeholder="Teacher Subject" />
                <select name="department" id="department" onChange={handleInput} className="w-[12.5rem] h-9 ml-[1rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" >
                    <option >Department</option>
                    <option value="ComputerScience">Computer Science</option>
                    <option value="English">English</option>
                    <option value="Islamiyat">Islamiyat</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="PakStudies">Pak Studies</option>
                    <option value="PoliticalScience">Political Science</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </div> 
            <input name="semester" id="semester" onChange={handleInput} className="w-[26rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="text" placeholder="semester" />   
            <button onClick={submit} className="w-[13rem] h-9 ml-[4rem] bg-[#FFB606] hover:bg-[#c8aa62] border-2 border-[#E7E7E7] rounded-[20px] mt-11 mb-11 px-5 font-serif font-semibold">Register</button>
        </div>
        </div>
    )
}

export default TeacherSignUp;