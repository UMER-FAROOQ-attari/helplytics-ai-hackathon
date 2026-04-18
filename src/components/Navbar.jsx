import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  // چیک کریں کہ کوئی لاگ ان ہے یا نہیں
  useEffect(() => {
    const savedUser = localStorage.getItem('helplytics_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [location]); // جب بھی راستہ بدلے، دوبارہ چیک کرے

  const handleLogout = () => {
    localStorage.removeItem('helplytics_user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-[#222a28] text-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      <Link to="/landing" className="flex items-center gap-2 group">
        <div className="bg-[#008080] p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <span className="text-xl font-black italic text-white leading-none">H</span>
        </div>
        <span className="text-2xl font-black tracking-tighter">
          HelpHub <span className="text-[#008080]">AI</span>
        </span>
      </Link>
      
      <div className="flex items-center gap-6 md:gap-10">
        <div className="hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400">
          <Link to="/explore" className="hover:text-[#008080] transition-colors">Explore</Link>
          <Link to="/create-request" className="hover:text-[#008080] transition-colors">Post Help</Link>
        </div>

        {user ? (
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase text-[#008080] leading-none">{user.role}</p>
              <p className="text-xs font-bold text-white">{user.name}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-white/5 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/" className="bg-[#008080] px-6 py-2 rounded-xl text-xs font-bold hover:bg-[#00b3b3] transition-all">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;