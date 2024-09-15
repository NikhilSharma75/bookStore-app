import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import OIP from "/OIP.jpg"
import  person from "/person.jpg"
function About() {
  return (
    <div>
        <Navbar/>
    <div className="about-page container mx-auto py-16">
        
      <h1 className="text-4xl font-bold text-center mb-8">About Our Bookstore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <img src={OIP} alt="Bookstore Image" className="rounded-lg w-full h-80 object-cover mb-4" />
          <p className="text-lg text-gray-700">
            Discover a world of books at our bookstore. We offer a vast collection of genres, from fiction and non-fiction to classics and contemporary bestsellers. Whether you're a passionate reader or simply looking for a good escape, we have something for everyone.
          </p>
        </div>
        <div className="text-center">
          <img src={person} alt="Happy Customer" className="rounded-lg h-80 object-cover mb-4" />
          <p className="text-lg text-gray-700">
            Our friendly and knowledgeable staff is always ready to assist you in finding the perfect book. We also offer personalized recommendations based on your interests.
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mx-auto max-w-2xl">
        Our mission is to inspire a love of reading and provide a welcoming space for book lovers to connect and explore new literary horizons. We strive to offer a diverse selection of books and exceptional customer service.
      </p>
    </div>
    <Footer/>
    </div>
  );
}

export default About;