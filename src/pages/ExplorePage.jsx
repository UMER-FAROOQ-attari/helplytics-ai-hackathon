import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#222a28] text-white py-5 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
      <Link to="/" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
        HelpHub <span className="text-[#008080]">AI</span>
      </Link>
      
      <div className="flex items-center gap-6 md:gap-10 font-bold text-xs uppercase tracking-widest">
        <Link 
          to="/explore" 
          className={`hover:text-[#008080] transition-colors ${location.pathname === '/explore' ? 'text-[#008080]' : ''}`}
        >
          Explore
        </Link>
        <Link 
          to="/create-request" 
          className="bg-[#008080] px-6 py-3 rounded-2xl hover:bg-[#00b3b3] transition-all shadow-[0_5px_15px_rgba(0,128,128,0.3)] active:scale-95"
        >
          Post Help
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;