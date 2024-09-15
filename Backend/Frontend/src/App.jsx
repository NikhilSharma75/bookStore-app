import React from 'react'
import Home from './home/Home'
import {Route, Routes,Navigate } from 'react-router-dom'
import Course from './course/Course'
import Signup from './components/Signup'
import About from './components/About'
import ContactMe from './components/Contact'
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/Authprovider'



function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser ? <Course/>: <Navigate to="/signup" />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactMe/>}/>
    </Routes>
    <Toaster/>
    </div>
     
    </>
  )
}

export default App