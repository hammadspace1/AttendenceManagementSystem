import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const check = sessionStorage.getItem("isLoggedIn");
    const role = sessionStorage.getItem("role");
    const name = sessionStorage.getItem("name");
    const navigate = useNavigate();

    const [homeData, setHomeData] = useState('');

    useEffect(() => {
        navigate("/login");

    })

    // useEffect(() => {
    //     if(role === "admin"){
    //         axios.get('http://localhost:5000/dataForAdmin').then((res) => {
    //             setHomeData(res.data)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     }else if(role === "teacher"){
    //         axios.get('http://localhost:5000/dataForTeacher').then((res) => {
    //             setHomeData(res)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     }else if(role === "student"){
    //         axios.get('http://localhost:5000/dataForStudent').then((res) => {
    //             setHomeData(res)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     } else{
    //         console.log("error")
    //     }
    // },[])

    return(
        <div>
            <h1 className="text-[3rem] font-serif text-[#002147]">Wellcome {name}</h1>

            
        </div>
    )
}

export default Home;