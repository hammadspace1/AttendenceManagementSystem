import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [data, setData] = useState({});

    const navigate = useNavigate();

    const handleInput = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const Submit = () => {
        if(data.email !== undefined && data.password !== undefined && data.role !== undefined){
            axios.post("http://localhost:5000/login", {data}).then((res) => {
                alert(res.data.msg);
                if(data.role === "Admin"){
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("email", res.data.d[0].email);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("photo", res.data.d[0].adminPhoto);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/admin");
                }else if(data.role === "Teacher"){
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("email", res.data.d[0].email);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("department", res.data.d[0].department);
                    sessionStorage.setItem("semester", res.data.d[0].semester);
                    sessionStorage.setItem("subject", res.data.d[0].subject);
                    sessionStorage.setItem("photo", res.data.d[0].teacherPhoto);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/teacher");
                }else if(data.role === "Student"){
                    sessionStorage.setItem("name", res.data.d[0].name);
                    sessionStorage.setItem("email", res.data.d[0].email);
                    sessionStorage.setItem("role", res.data.d[0].role);
                    sessionStorage.setItem("department", res.data.d[0].department);
                    sessionStorage.setItem("semester", res.data.d[0].semester);
                    sessionStorage.setItem("subjects", res.data.d[0].subjects);
                    sessionStorage.setItem("photo", res.data.d[0].studentPhoto);
                    sessionStorage.setItem("isLoggedIn", true);
                    navigate("/student");
                }
            }).catch((error) => {
                console.log(error)
            })
        }else{
            alert("Please Fill All the Fields!");
        }
    }

    return(
        <div className="w-full">
            <div className="w-[550px] ml-[480px] mt-2 items-center border-2 shadow-2xl border-[#E7E7E7] rounded-[30px]">
                 <h1 className="text-[#FFB606] text-center mt-5 text-[3rem] font-bold font-serif">Login</h1>
                 <select name="role" id="role" onChange={handleInput} className="w-[26rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" >
                    <option  >Login as:</option>
                    <option value="Admin" >Login as: Admin</option>
                    <option value="Teacher">Login as: Teacher</option>
                    <option value="Student">Login as: Student</option>
                </select>              
                 <input name="email" id="email" onChange={handleInput}  className="w-[26rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="Email" placeholder="Enter Email" />
                 <input name="password" id="password" onChange={handleInput}  className="w-[26rem] h-9 ml-[4rem] border-2 border-[#E7E7E7] rounded-[20px] mt-11 px-5" type="password" placeholder="Enter Password" />
                 <button onClick={Submit} className="w-[13rem] h-9 ml-[4rem] bg-[#FFB606] hover:bg-[#c8aa62] border-2 border-[#E7E7E7] rounded-[20px] mt-11 mb-11 px-5 font-serif font-semibold">Login</button>
            </div>

        </div>
    )
}

export default Login;