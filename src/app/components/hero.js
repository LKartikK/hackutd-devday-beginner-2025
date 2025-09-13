import React from 'react'
import Navbar from './navbar';

function Hero() {
  return (
    <nav className="flex justify-center items-center py-16 px-8 border-b bg-blue-100 border-gray-300 text-black">
      <div className="flex gap-2">
                
        <span className="text-4xl font-medium text-gray-900">Maxing our</span>
        <span className="text-4xl font-extrabold text-gray-900">GPA</span>
        <p className="text-4xl font-medium text-gray-900">One</p>
        <p className="text-4xl font-extrabold text-gray-900">Class</p>
        <p className="text-4xl font-medium text-gray-900">at a time</p>

                
      </div>
    </nav>
  );
}

export default Hero