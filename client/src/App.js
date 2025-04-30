import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import Members from './pages/Members';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Styled Navbar with custom gradient */}
        <nav className="w-full flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-700 via-indigo-500 to-cyan-500 text-white shadow-md">
          <h1 className="text-xl font-bold flex items-center gap-2 mb-2 sm:mb-0">
            <span>👥</span> Member Management
          </h1>
          <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-cyan-100 flex items-center gap-1">🏠 Home</Link>
            <Link to="/add" className="hover:text-cyan-100 flex items-center gap-1">➕ Add Member</Link>
            <Link to="/members" className="hover:text-cyan-100 flex items-center gap-1">📄 View Members</Link>
          </div>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


