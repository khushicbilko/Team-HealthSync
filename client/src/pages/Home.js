import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute bg-blue-400 rounded-full w-40 h-40 opacity-20 animate-ping top-20 left-10"></div>
        <div className="absolute bg-purple-500 rounded-full w-24 h-24 opacity-30 animate-pulse top-1/3 right-20"></div>
        <div className="absolute bg-indigo-400 rounded-full w-28 h-28 opacity-20 animate-bounce bottom-16 left-1/4"></div>
      </div>

      <div className="relative z-10 text-center p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl max-w-xl">
        <h1 className="text-5xl font-extrabold mb-4">HealthSync Team</h1>
        <p className="text-lg mb-6 text-gray-200">
          Welcome to the Member Management Portal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/add">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition shadow-lg">
              ➕ Add Member
            </button>
          </Link>
          <Link to="/members">
            <button className="px-6 py-3 bg-white text-indigo-700 hover:bg-gray-100 rounded-md transition shadow-lg">
              📄 View Members
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
