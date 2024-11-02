import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const [log, setLog] = useState(true);
    const [logValue, setLogValue] = useState("");

    useEffect(() => {
        if(log){
            setLogValue("Logout");
        }else{
            setLogValue("Login")
            sessionStorage.clear();
        }
    },[log])

    const location = useLocation();

    const loginfo = () => {
        setLog(!log)
    }

    

    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const photo = sessionStorage.getItem('photo');
    const check = sessionStorage.getItem('isLoggedIn');

    return(
        <div className="flex-col mb-10">
            <div className="w-full flex justify-between bg-[#002147] px-[12rem] ">
                <div className="bg-[#FFB606] text-[#002147] text-[1.4rem] font-serif font-semibold py-5 px-8">
                    Attendence Management
                </div>
                <div>
                    <ul className="text-white flex mt-7 ">
                        <li className="flex text-[1rem] ml-[2rem] font-serif"><div className="text-[1.1rem] mr-[0.7rem] text-[#FFB606]"><ion-icon name="book" /></div>TOTAL COURSES: 300</li>
                        <li className="flex text-[1rem] ml-[2rem] font-serif"><div className="text-[1.1rem] mr-[0.7rem] text-[#FFB606]"><ion-icon name="accessibility" /></div>TOTAL STUDENTS: 4000</li>
                        <li className="flex text-[1rem] ml-[2rem] font-serif"><div className="text-[1.1rem] mr-[0.7rem] text-[#FFB606]"><ion-icon name="call" /></div>HELPLINE: +92 3000000000 </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;