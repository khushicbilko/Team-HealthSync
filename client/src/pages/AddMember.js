import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    email: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
      navigate('/members');
    } catch (err) {
      alert('Error adding member: ' + err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute bg-blue-400 rounded-full w-40 h-40 opacity-20 animate-ping top-24 left-12"></div>
        <div className="absolute bg-purple-500 rounded-full w-24 h-24 opacity-30 animate-pulse top-1/4 right-16"></div>
        <div className="absolute bg-indigo-400 rounded-full w-28 h-28 opacity-20 animate-bounce bottom-20 left-1/3"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl bg-white border border-gray-200 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Add Team Member</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" required />
          <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" required />
          <select name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" required>
            <option value="">Select Year</option>
            <option value="Primary School">Primary School (upto grade 5)</option>
            <option value="Middle School">Middle School (upto grade 8)</option>
            <option value="High School 9th Grade">High School 9th Grade</option>
            <option value="High School 10th Grade">High School 10th Grade</option>
            <option value="High School 11th Grade">High School 11th Grade</option>
            <option value="High School 12th Grade">High School 12th Grade</option>
            <option value="Diploma - 1st Year">Diploma - 1st Year</option>
            <option value="Diploma - 2nd Year">Diploma - 2nd Year</option>
            <option value="Diploma - 3rd Year">Diploma - 3rd Year</option>
            <option value="Undergraduate - 1st Year">Undergraduate - 1st Year</option>
            <option value="Undergraduate - 2nd Year">Undergraduate - 2nd Year</option>
            <option value="Undergraduate - 3rd Year">Undergraduate - 3rd Year</option>
            <option value="Postgraduate - 1st Year">Postgraduate - 1st Year</option>
            <option value="Postgraduate - 2nd Year">Postgraduate - 2nd Year</option>
            <option value="Gap Year">Gap Year</option>
            <option value="Dropout">Dropout</option>
          </select>
          <select name="degree" value={formData.degree} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" required>
            <option value="">Select Degree</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="B.com">B.com(Honours)</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA/MBA">BBA/MBA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Sc">M.Sc</option>
            <option value="B.A.">B.A.</option>
            <option value="M.A.">M.A.</option>
            <option value="High School Diploma/12th Pass">High School Diploma/12th Pass</option>
            <option value="College Dropouts/Gap Year">College Dropouts/Gap Year</option>
          </select>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" required />
          <textarea name="project" placeholder="About Project" value={formData.project} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" rows="2" />
          <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" value={formData.hobbies} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" />
          <input type="text" name="certificate" placeholder="Certificate" value={formData.certificate} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" />
          <input type="text" name="internship" placeholder="Internship" value={formData.internship} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" />
          <textarea name="aim" placeholder="About Your Aim" value={formData.aim} onChange={handleChange} className="w-full px-4 py-2 border rounded-md shadow-sm" rows="2" />
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm" />
          {preview && <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-full mt-2 mx-auto" />}
          <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMember;

