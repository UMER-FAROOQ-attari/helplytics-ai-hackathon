import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 block mb-4">AI Center</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">See what the platform intelligence is noticing.</h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#0d9488] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/create-request')}>Create Request</span>
            <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-1.5 rounded-full font-bold">AI Center</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-8 rounded-[25px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-4">Trend Pulse</span>
            <h2 className="text-2xl font-bold mb-3">Web Development</h2>
            <p className="text-gray-500 text-xs leading-relaxed">Most common support area based on active community requests.</p>
          </div>
          <div className="bg-white p-8 rounded-[25px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-4">Urgency Watch</span>
            <h2 className="text-4xl font-bold mb-3">2</h2>
            <p className="text-gray-500 text-xs leading-relaxed">Requests currently flagged high priority by the urgency detector.</p>
          </div>
          <div className="bg-white p-8 rounded-[25px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-4">Mentor Pool</span>
            <h2 className="text-4xl font-bold mb-3">2</h2>
            <p className="text-gray-500 text-xs leading-relaxed">Trusted helpers with strong response history and contribution signals.</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[35px] shadow-sm">
          <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">AI Recommendations</span>
          <h2 className="text-3xl font-bold mb-8">Requests needing attention</h2>

          <div className="space-y-4">
            <div className="bg-[#f9f9f9] p-6 rounded-2xl">
              <h3 className="font-bold text-sm mb-2">Need help</h3>
              <p className="text-gray-500 text-xs mb-4">AI summary: Web Development request with high urgency. Best suited for members with relevant expertise.</p>
              <div className="flex gap-2">
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Web Development</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">High</span>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-6 rounded-2xl">
              <h3 className="font-bold text-sm mb-2">Need help making my portfolio responsive before demo day</h3>
              <p className="text-gray-500 text-xs mb-4">Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids.</p>
              <div className="flex gap-2">
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Web Development</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">High</span>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-6 rounded-2xl">
              <h3 className="font-bold text-sm mb-2">Looking for Figma feedback on a volunteer event poster</h3>
              <p className="text-gray-500 text-xs mb-4">A visual design critique request where feedback on hierarchy and spacing would create the most value.</p>
              <div className="flex gap-2">
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Design</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Medium</span>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-6 rounded-2xl">
              <h3 className="font-bold text-sm mb-2">Need mock interview support for internship applications</h3>
              <p className="text-gray-500 text-xs mb-4">Career coaching request focused on confidence-building and entry-level frontend interviews.</p>
              <div className="flex gap-2">
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Career</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1 rounded-full text-[10px] font-bold">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCenter;