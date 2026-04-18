import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans text-[#1a1a1a]">
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#008080] text-white h-10 w-10 flex items-center justify-center rounded-lg font-bold text-xl">H</div>
          <span className="font-bold text-lg">HelpHub AI</span>
        </div>
        <div className="flex gap-8 text-gray-600 font-medium">
          <span className="text-[#008080] bg-[#008080]/10 px-4 py-1 rounded-full">Home</span>
          <span className="hover:text-black cursor-pointer" onClick={() => navigate('/explore')}>Explore</span>
          <span className="hover:text-black cursor-pointer">Leaderboard</span>
          <span className="hover:text-black cursor-pointer">AI Center</span>
        </div>
        <div className="flex gap-4">
          <span className="font-medium text-gray-600 mt-2">Live community signals</span>
          <button className="bg-[#008080] text-white px-6 py-2 rounded-full font-medium">Join the platform</button>
        </div>
      </nav>

      <div className="px-12 py-10 flex gap-12">
        <div className="flex-1">
          <span className="text-xs font-bold tracking-widest text-[#008080] uppercase">SMIT Grand Coding Night 2026</span>
          <h1 className="text-[5rem] font-bold leading-none mt-4 mb-6">Find help faster.<br/>Become help that<br/>matters.</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
          </p>
          <div className="flex gap-4 mb-12">
            <button className="bg-[#008080] text-white px-8 py-3 rounded-full font-bold">Open product demo</button>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold border border-gray-200">Post a request</button>
          </div>
          <div className="flex gap-6">
            <div className="bg-white p-6 rounded-3xl w-40">
              <span className="text-xs font-bold text-gray-400">MEMBERS</span>
              <h2 className="text-3xl font-bold mt-2 mb-2">384+</h2>
              <p className="text-xs text-gray-500">Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl w-40">
              <span className="text-xs font-bold text-gray-400">REQUESTS</span>
              <h2 className="text-3xl font-bold mt-2 mb-2">72+</h2>
              <p className="text-xs text-gray-500">Support posts shared across learning journeys.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl w-40">
              <span className="text-xs font-bold text-gray-400">SOLVED</span>
              <h2 className="text-3xl font-bold mt-2 mb-2">69+</h2>
              <p className="text-xs text-gray-500">Problems resolved through fast community action.</p>
            </div>
          </div>
        </div>

        <div className="w-[450px] bg-[#1a2321] text-white p-10 rounded-[40px]">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Live Product Feel</span>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">More than a form.<br/>More like an<br/>ecosystem.</h2>
          <p className="text-gray-400 mb-8 text-sm">A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, notifications, and leaderboard momentum built directly in HTML, CSS, JavaScript, and LocalStorage.</p>
          <div className="space-y-4">
            <div className="bg-white/10 p-5 rounded-2xl">
              <h3 className="font-bold mb-1">AI request intelligence</h3>
              <p className="text-xs text-gray-400">Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl">
              <h3 className="font-bold mb-1">Community trust graph</h3>
              <p className="text-xs text-gray-400">Badges, helper rankings, trust score boosts, and visible contribution history.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;