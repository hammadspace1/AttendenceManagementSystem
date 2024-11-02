import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Teacher = () => {

    const name = sessionStorage.getItem('name');
    const department = sessionStorage.getItem('department');
    const semester = sessionStorage.getItem('semester');
    const subject = sessionStorage.getItem('subject');
    const photo = sessionStorage.getItem("photo");

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [display, setDisplay] = useState(false);
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        setData({
            ...data, department: department, semester: semester, subject: subject
        });
    },[])

    const submitP = (e) => {
        axios.post("http://localhost:5000/submitPresent", {e, subject}).then((res) => {
        }).catch((error) => {
            console.log(error);
        })
        
    }

    const submitA = (e) => {
        axios.post("http://localhost:5000/submitAbsent", {e, subject}).then((res) => {
        }).catch((error) => {
            console.log(error)
        })

    }

    const getStudents = () => {
        setDisplay(!display);
        axios.post('http://localhost:5000/getStudents', {data}).then((res) => {
        setStudentData(res.data.d)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
            axios.post('http://localhost:5000/getStudents', {data}).then((res) => {
            setStudentData(res.data.d)
            }).catch((error) => {
                console.log(error);
            })
        
    },[submitP,submitA])

    const setTemStatus = () => {
        axios.post('http://localhost:5000/setTemStatus', {data}).then((res) => {
            console.log(data);
            alert(res.data.msg);
        }).catch((error) => {
            console.log(error);
        })
        sessionStorage.clear();
        navigate("/login")
    }

    const date = new Date().toDateString();
    

    return(
        <div className="w-[1528px]  h-[400px] flex m-1  ">
            <div className="w-[350px] h-[550px] flex-col rounded-tl-xl rounded-bl-xl ml-[1rem] mt-[-4px] border-4 border-[#002147] bg-[#002147] text-white">
                <h1 className="ml-10 mt-11 font-serif font-semibold text-[1.5rem]">Your Subjects!</h1>
                <button onClick={getStudents} className="w-[10rem] h-11 ml-[3rem] mt-11 bg-[#FFB606] text-[#002147] rounded-[10px] text-[1.4rem] font-extralight font-serif">{subject}</button>
                
            </div>
            <div className="w-[1150px] h-[550px] flex-col rounded-tr-xl rounded-br-xl  mt-[-4px] ml-[-4px] border-4 border-[#FFB606] bg-[#FFB606] box-border overflow-auto">
                <div className="w-full flex ">
                    <img className="w-[100px] h-[100px] rounded-full border-2 border-[#002147]" src={photo} alt="adminPhoto" />
                    <h1 className="font-serif font-semibold mt-7 ml-[2rem] text-[2rem]">Wellcome! {name} As Teacher</h1>
                </div>
                {display && (
                    <div className="ml-[9rem] my-7 ">
                        <div className="flex my-7"><h1 className=" font-serif font-semibold   text-[1.5rem] text-[#002147]">Date : {date} </h1><h1 className="underline text-[1.1rem] font-bold pt-2 ml-8 text-blue-700 cursor-pointer">Change Date</h1></div>
                        <table className="sticky shadow-2xl font-serif border-2 mt-10 border-[#002147] w-[700px]">
                            <thead className="text-white">
                                <tr>
                                    <th className="py-3 border-r-2 border-[#002147] bg-[#002147]">Image</th>
                                    <th className="py-3 border-r-2 border-[#002147] bg-[#002147]">Sno</th>
                                    <th className="py-3 border-r-2 border-[#002147] bg-[#002147]">Name</th>
                                    <th className="py-3 bg-[#002147]">Attendence</th>
                                </tr>
                            </thead>
                            {studentData.map((res, index) => (
                                <tbody key={index} className="border-b-2 border-[#002147]">
                                    <tr className="bg-[#65768a] cursor-pointer duration-300">
                                        <td className="py-1 px-6 border-r-2 border-[#002147]"><img className="w-[4rem] h-[4rem] rounded-full" src={res.studentPhoto} alt="studentphoto" /></td>
                                        <td className="py-3 px-6 border-r-2 border-[#002147]">{res.sno}</td>
                                        <td className="py-3 px-6 border-r-2 border-[#002147]">{res.name}</td>
                                        <td className="py-1  px-0"><button onClick={() => (submitP(res))} className=" w-[6.2rem] h-[3.3rem] rounded-lg bg-green-400 active:bg-green-500  text-[#002147] font-serif">Present</button><button onClick={() => (submitA(res))} className=" w-[6.2rem] h-[3.3rem] rounded-lg bg-red-400 active:bg-red-500  text-[#002147] font-serif">Absent</button></td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <button onClick={setTemStatus}  className="w-[10rem] h-11  mt-11 bg-[#002147] text-[#FFB606] rounded-[10px] text-[1.2rem] font-extralight font-serif">Submit</button>
                    </div>
                )}

                
            </div>

        </div>
    )


    // return(
    //     <div className="w-full px-[12rem]">
    //         <h1 className="text-[#002147] text-[2rem] font-semibold font-serif mt-10">WellCome : Mr {name} </h1>
    //         <h1 className="text-[#002147] text-[1.5rem] font-semibold font-serif mt-5">Your Subjects </h1>
    //         <div className="ml-[7rem] mt-7">
    //             <button onClick={getStudents} className="w-[10rem] h-11 ml-[3rem] mt-5 bg-[#FFB606] text-[#002147] rounded-[10px] text-[1.4rem] font-extralight font-serif">{subject}</button>
    //         </div>
    //         <div className=" w-full ml-[-100px] border-t-4 border-[#FFB606]"></div>
    //         <div className="ml-[10rem] my-7 ">
    //             <table className="shadow-2xl font-serif border-2 mt-10 border-cyan-200 w-[700px]">
    //                 <thead className="text-white">
    //                     <tr>
    //                         <th className="py-3 bg-[#002147]">Image</th>
    //                         <th className="py-3 bg-[#002147]">Sno</th>
    //                         <th className="py-3 bg-[#002147]">Name</th>
    //                         <th className="py-3 bg-[#002147]">Attendence</th>
    //                     </tr>
    //                 </thead>
    //                 {studentData.map((res, index) => (
    //                     <tbody key={index} className="border-b-2 border-[#ffff]">
    //                         <tr className="bg-[#65768a] cursor-pointer duration-300">
    //                             <td className="py-1 px-6"><img className="w-[4rem] h-[4rem] rounded-full" src={res.studentPhoto} alt="studentphoto" /></td>
    //                             <td className="py-3 px-6">{res.sno}</td>
    //                             <td className="py-3 px-6">{res.name}</td>
    //                             <td className="py-1  px-0"><button onClick={() => (submitP(res))} className=" w-[6.2rem] h-[3.3rem] rounded-lg bg-green-400 active:bg-green-500  text-[#002147] font-serif">Present</button><button onClick={() => (submitA(res))} className=" w-[6.2rem] h-[3.3rem] rounded-lg bg-red-400 active:bg-red-500  text-[#002147] font-serif">Absent</button></td>
    //                         </tr>
    //                     </tbody>
    //                 ))}
    //             </table>
    //         </div>
    //     </div>
    // )
}

export default Teacher;