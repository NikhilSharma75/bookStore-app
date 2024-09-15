import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from "axios"
import Cards from './Cards'
function Coursepaid() {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("/book");
          console.log(res.data);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-green-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          <p>Discover a world of knowledge at your fingertips.</p>
         <p> Our courses section offers a comprehensive collection of educational resources designed to help you learn and grow.</p>
         From textbooks to study guides and beyond,we've got you covered.
         Explore our affordable options and embark on a journey of lifelong learning.
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
</div>
  </>  
        
  )
}

export default Coursepaid