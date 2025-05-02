import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://team-healthsync.onrender.com/api/members/${id}`);
        setMember(res.data);
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };

    fetchMember();
  }, [id]);

  if (!member) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex items-center justify-center p-6 overflow-hidden relative">
      {/* Animated Background Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute bg-blue-400 rounded-full w-40 h-40 opacity-20 animate-ping top-24 left-12"></div>
        <div className="absolute bg-purple-500 rounded-full w-24 h-24 opacity-30 animate-pulse top-1/4 right-16"></div>
        <div className="absolute bg-indigo-400 rounded-full w-28 h-28 opacity-20 animate-bounce bottom-20 left-1/3"></div>
      </div>

      <div className="relative z-10 bg-white text-gray-800 p-8 rounded-xl shadow-md max-w-xl w-full text-center">
        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border"
        />
        <div className="space-y-2 text-center">
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Roll No:</strong> {member.rollNumber}</p>
          <p><strong>Year:</strong> {member.year}</p>
          <p><strong>Degree:</strong> {member.degree}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Project:</strong> {member.project}</p>
          <p><strong>Certificate:</strong> {member.certificate}</p>
          <p><strong>Internship:</strong> {member.internship}</p>
          <p><strong>Aim:</strong> {member.aim}</p>
          <div>
            <strong>Hobbies:</strong>{' '}
            {member.hobbies?.split(',').map((hobby, index) => (
              <span
                key={index}
                className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold mr-2 px-3 py-1 rounded-full shadow-sm mt-2"
              >
                {hobby.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;