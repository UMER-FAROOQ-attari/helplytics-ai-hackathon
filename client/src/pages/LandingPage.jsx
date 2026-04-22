import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f3ed] font-sans text-[#1a2622]">
      <div className="max-w-7xl mx-auto px-12 py-12 flex flex-col lg:flex-row gap-12">
        
        <div className="flex-[1.5]">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#0d9488] uppercase">
            SMIT Grand Coding Night 2026
          </span>
          <h1 className="text-7xl font-bold leading-[1.1] mt-6 mb-8 tracking-tighter">
            Find help faster.<br/>Become help that<br/>matters.
          </h1>
          <p className="text-sm text-gray-500 mb-10 max-w-lg leading-relaxed">
            HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
          </p>
          
          <div className="flex gap-4 mb-16">
            <button 
              onClick={() => navigate('/explore')} 
              className="bg-[#0d9488] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#0b7a6f] transition-all"
            >
              Open product demo
            </button>
            <button 
              onClick={() => navigate('/create-request')} 
              className="bg-white text-[#1a2622] px-8 py-3.5 rounded-full font-bold text-sm border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Post a request
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[30px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] tracking-widest uppercase">Members</span>
              <h2 className="text-4xl font-bold mt-2 mb-2">384+</h2>
              <p className="text-[11px] text-gray-400 leading-normal">Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="bg-white p-8 rounded-[30px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] tracking-widest uppercase">Requests</span>
              <h2 className="text-4xl font-bold mt-2 mb-2">72+</h2>
              <p className="text-[11px] text-gray-400 leading-normal">Support posts shared across learning journeys.</p>
            </div>
            <div className="bg-white p-8 rounded-[30px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] tracking-widest uppercase">Solved</span>
              <h2 className="text-4xl font-bold mt-2 mb-2">69+</h2>
              <p className="text-[11px] text-gray-400 leading-normal">Problems resolved through fast community action.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#1a2622] text-white p-12 rounded-[45px] flex flex-col justify-between shadow-2xl">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">Live Product Feel</span>
            <h2 className="text-5xl font-bold mb-8 leading-tight tracking-tight">More than a form.<br/>More like an<br/>ecosystem.</h2>
            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, and more.
            </p>
            
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-[25px] text-[#1a2622]">
                <h3 className="font-bold text-sm mb-1">AI request intelligence</h3>
                <p className="text-[11px] text-gray-500">Auto-categorization, urgency detection, tags, and trend snapshots.</p>
              </div>
              <div className="bg-white p-6 rounded-[25px] text-[#1a2622]">
                <h3 className="font-bold text-sm mb-1">Community trust graph</h3>
                <p className="text-[11px] text-gray-400">Badges, helper rankings, trust score boosts, and contribution history.</p>
              </div>
              <div className="bg-white p-6 rounded-[25px] text-[#1a2622]">
                <h3 className="font-bold text-sm mb-1">100%</h3>
                <p className="text-[11px] text-gray-400">Top trust score currently active across the sample mentor network.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-12 py-20">
         <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em] text-center">
            HelpHub AI is built as a premium-feel support product
         </p>
      </div>
    </div>
  );
};

export default LandingPage;