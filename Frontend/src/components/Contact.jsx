

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import image from "/image.jpeg"
import { Link } from 'react-router-dom';
import th from "/th.jpg"
function ContactMe() {
  return (
    <div>
      <Navbar />
      <div className="contact-page container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bookstore-support">
            <h2 className="text-2xl font-bold mb-2 ">Bookstore Support</h2>
            <p className="text-lg text-gray-700">
              Need help finding a book? Have a question about your order? Our friendly customer support team is here for you 24/7.
            </p>
            <br/>
            <img
              src={th}
              alt="customer support Image"
              className="rounded-full w-80 h-80 object-cover mx-auto"
            />
            <p className="text-2xl text-center text-purple-500 mt-4">Email: help@yourbookstore.com</p>
           
          </div>
          <div className="developer-info">
            <img
              src={image}
              alt="Developer Image"
              className="rounded-full w-60 h-70 object-cover mx-auto"
            />
            <h2 className="text-2xl font-bold mb-2 mt-4 text-gray-900">Meet the Developer</h2>
            <p className="text-lg text-gray-700">Nikhil Sharma</p>
            <div className="skills-container mt-4">
              <h3 className="text-xl font-bold mb-2">My Skills:</h3>
              <ul className="list-disc space-y-2 text-gray-700">
                <li className="text-gray-500">Currently learning more on: MERN stack</li>
                <li className="text-gray-500">Ask me about: React, Node.js</li>
              </ul>
            </div>
            <div className="social-links mt-4">
              <h3 className="text-xl font-bold mb-2">Connect with me:</h3>
              <p className="text-blue-500">
                Linkedin: <Link>www.linkedin.com/in/nikhil-sharma-34wdkdf</Link>
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mt-8 mb-4">Looking for MERN Projects?</h2>
        <p className="text-lg text-gray-800 mx-auto max-w-2xl">
          I'm always interested in taking on new challenges! Feel free to reach out to me
          if you have any MERN stack project ideas.
        </p>
        <p className="text-2xl text-center text-purple-500 mt-4">Email: nikhilsharma29102002@gmail.com</p>
      </div>
      <Footer />
    </div>
  );
}

export default ContactMe;