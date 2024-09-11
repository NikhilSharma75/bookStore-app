import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Coursepaid from '../components/Coursepaid'

function Course() {
  return (
    <>
    <div>
        <Navbar/>
        <div className='min-h-screen'>
       <Coursepaid/>
       </div>
        <Footer/>
    </div>
    </>
  )
}

export default Course