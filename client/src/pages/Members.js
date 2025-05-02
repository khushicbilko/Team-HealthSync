import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://team-healthsync.onrender.com/api/members');
        setMembers(res.data);
      } catch (error) {
        alert('Error fetching members');
        console.error('Fetch error:', error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 p-6 text-white overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute bg-blue-400 rounded-full w-40 h-40 opacity-20 animate-ping top-20 left-10"></div>
        <div className="absolute bg-purple-500 rounded-full w-24 h-24 opacity-30 animate-pulse top-1/3 right-20"></div>
        <div className="absolute bg-indigo-400 rounded-full w-28 h-28 opacity-20 animate-bounce bottom-16 left-1/4"></div>
        <div className="absolute bg-cyan-300 rounded-full w-52 h-52 opacity-20 animate-ping bottom-10 right-10"></div>
        <div className="absolute bg-violet-400 rounded-full w-32 h-32 opacity-20 animate-spin-slow top-1/2 left-1/2"></div>
      </div>

      <div className="relative z-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">MEET OUR AMAZING TEAM</h1>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {members.map((member) => (
            <div
              key={member._id}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="w-full h-72 overflow-hidden rounded-md mb-4 bg-gray-100 flex justify-center items-start">
                <img
                  src={
                    member.image
                      ? `http://localhost:5000/uploads/${member.image}`
                      : 'https://via.placeholder.com/180'
                  }
                  alt={member.name}
                  className="h-full object-cover"
                  style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
                />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">Roll Number: {member.rollNumber}</p>
                <p className="text-sm text-gray-600">Degree: {member.degree}</p>
                <p className="text-sm text-gray-600">Year: {member.year}</p>
              </div>
              <a
                href={`/members/${member._id}`}
                className="block w-full mt-4 py-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                VIEW DETAILS
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
