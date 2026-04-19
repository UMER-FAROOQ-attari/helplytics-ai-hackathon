import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('Ayesha Khan');
  const [role, setRole] = useState('Both');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    const userData = {
      name: name,
      role: role,
      email: email
    };

    localStorage.setItem('helplytics_user', JSON.stringify(userData));
    navigate('/landing'); 
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col font-sans text-[#1a1a1a]">
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#008080] text-white h-10 w-10 flex items-center justify-center rounded-lg font-bold text-xl">H</div>
          <span className="font-bold text-lg tracking-tight">Helplytics AI</span>
        </div>
        <div className="flex gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/explore" className="hover:text-black">Explore</Link>
          <Link to="/leaderboard" className="hover:text-black">Leaderboard</Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="max-w-6xl w-full flex gap-8 items-stretch">
          
          <div className="flex-1 bg-[#0b241e] text-white p-12 rounded-[40px] flex flex-col justify-center">
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-gray-400 mb-6">Community Access</span>
            <h1 className="text-6xl font-bold leading-[1.1] mb-8">Enter the support network.</h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-10">
              Choose a demo identity, set your role, and jump into a multi-page product flow designed for asking, offering, and tracking help with a premium interface.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
                <span>Role-based entry for Need Help, Can Help, or Both</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
                <span>Direct path into dashboard, requests, AI Center, and community feed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
                <span>Persistent demo session powered by LocalStorage</span>
              </li>
            </ul>
          </div>

          <div className="w-[500px] bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-center">
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#008080] mb-4">Login / Signup</span>
            <h2 className="text-4xl font-bold mb-10 leading-tight text-[#1a1a1a]">Authenticate your community profile</h2>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Select demo user</label>
                <select 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl appearance-none outline-none"
                >
                  <option value="Ayesha Khan">Ayesha Khan</option>
                  <option value="Umer Farooq">Umer Farooq</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Role selection</label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl appearance-none outline-none"
                >
                  <option value="Both">Both</option>
                  <option value="Need Help">Need Help</option>
                  <option value="Can Help">Can Help</option>
                </select>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-600 mb-2">Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="community@helphub.ai" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none" 
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-600 mb-2">Password</label>
                  <input type="password" required placeholder="••••••••" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#14a08c] text-white font-bold py-5 rounded-[20px] text-lg hover:bg-[#118d7b] transition-all mt-4">
                Continue to dashboard
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;