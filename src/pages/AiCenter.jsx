import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-6">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">AI Center</span>
          <h1 className="text-4xl font-bold mb-4 leading-tight">See what the platform intelligence is noticing.</h1>
          <p className="text-gray-400 text-sm">AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.</p>
        </div>

        <nav className="flex justify-between items-center bg-[#f4ece1] py-4 mb-6 px-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#008080] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/create-request')}>Create Request</span>
            <span className="bg-[#e0f0eb] text-[#008080] px-4 py-1.5 rounded-full">AI Center</span>
          </div>
        </nav>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-8 rounded-[32px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-4">Trend Pulse</span>
            <h2 className="text-3xl font-bold mb-4">Web Development</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Most common support area based on active community requests.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-4">Urgency Watch</span>
            <h2 className="text-3xl font-bold mb-4">2</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Requests currently flagged high priority by the urgency detector.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-4">Mentor Pool</span>
            <h2 className="text-3xl font-bold mb-4">2</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Trusted helpers with strong response history and contribution signals.</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px]">
          <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">AI Recommendations</span>
          <h2 className="text-3xl font-bold mb-8">Requests needing attention</h2>

          <div className="space-y-4">
            <div className="border border-gray-100 p-6 rounded-3xl">
              <h3 className="font-bold mb-2">Need help</h3>
              <p className="text-gray-500 text-sm mb-4">AI summary: Web Development request with high urgency. Best suited for members with relevant expertise.</p>
              <div className="flex gap-2">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Web Development</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">High</span>
              </div>
            </div>

            <div className="border border-gray-100 p-6 rounded-3xl">
              <h3 className="font-bold mb-2">Need help making my portfolio responsive before demo day</h3>
              <p className="text-gray-500 text-sm mb-4">Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.</p>
              <div className="flex gap-2">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Web Development</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">High</span>
              </div>
            </div>

            <div className="border border-gray-100 p-6 rounded-3xl">
              <h3 className="font-bold mb-2">Looking for Figma feedback on a volunteer event poster</h3>
              <p className="text-gray-500 text-sm mb-4">A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.</p>
              <div className="flex gap-2">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Design</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Medium</span>
              </div>
            </div>

            <div className="border border-gray-100 p-6 rounded-3xl">
              <h3 className="font-bold mb-2">Need mock interview support for internship applications</h3>
              <p className="text-gray-500 text-sm mb-4">Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.</p>
              <div className="flex gap-2">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Career</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCenter;