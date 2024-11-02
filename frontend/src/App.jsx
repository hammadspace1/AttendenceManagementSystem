import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import TeacherSignUp from './Components/SignUp/TeacherSignUp';
import Login from './Components/Login/Login';
import Teacher from './Components/Teacher/Teacher';
import Student from './Components/Student/Student';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/admin' element={<Admin />}  />
        <Route path='/teacher' element={<Teacher />}  />
        <Route path='/student' element={<Student />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/TsignUp' element={<TeacherSignUp />}  />
        <Route path='/login' element={<Login />}  />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
