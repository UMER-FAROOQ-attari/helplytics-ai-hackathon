import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('helplytics_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("User data parsing error", e);
      }
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('helplytics_user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-transparent sticky top-0 z-50">
      <Link to="/landing" className="flex items-center gap-2 no-underline text-black">
        <div className="bg-[#0d9488] text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
          H
        </div>
        <span className="font-bold text-lg tracking-tight">HelpHub AI</span>
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6">
          <Link to="/landing" className="text-gray-600 no-underline text-sm font-medium hover:text-[#0d9488]">Home</Link>
          <Link to="/explore" className="text-gray-600 no-underline text-sm font-medium hover:text-[#0d9488]">Explore</Link>
          <Link to="/leaderboard" className="text-gray-600 no-underline text-sm font-medium hover:text-[#0d9488]">Leaderboard</Link>
          <Link to="/ai-center" className="text-gray-600 no-underline text-sm font-medium hover:text-[#0d9488]">AI Center</Link>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-bold uppercase text-[#0d9488] m-0 leading-none">{user.role || 'User'}</p>
              <p className="text-xs font-bold text-black m-0">{user.name || 'User'}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-full text-xs font-bold cursor-pointer hover:bg-red-500 hover:text-white transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500 hidden lg:block">Live community signals</span>
            <Link to="/" className="bg-[#0d9488] text-white px-5 py-2 rounded-full text-xs font-bold no-underline hover:bg-[#0b7a6f] transition-all">
              Join the platform
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;