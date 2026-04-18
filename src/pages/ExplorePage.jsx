import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-[#2a302e] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400">Explore / Feed</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">Browse help requests with filterable<br/>community context.</h1>
          <p className="text-gray-400">Filter by category, urgency, skills, and location to surface the best matches.</p>
        </div>

        <div className="flex gap-8">
          <div className="w-[300px] bg-white p-8 rounded-[32px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest">Filters</span>
            <h2 className="text-3xl font-bold mt-2 mb-8">Refine the feed</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none">
                  <option>All categories</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgency</label>
                <select className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none">
                  <option>All urgency levels</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Skills</label>
                <textarea className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-24" placeholder="React, Figma, Git/GitHub"></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <textarea className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-24" placeholder="Karachi, Lahore, Remote"></textarea>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px]">
              <div className="flex gap-2 mb-4">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Web Development</span>
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">High</span>
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Solved</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Need help</h3>
              <p className="text-gray-500 text-sm mb-6">helpn needed</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">Ayesha Khan</p>
                  <p className="text-xs text-gray-400">Karachi • 1 helper interested</p>
                </div>
                <button onClick={() => navigate('/request-detail')} className="border border-gray-200 px-6 py-2 rounded-full font-bold text-sm">Open details</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px]">
              <div className="flex gap-2 mb-4">
                <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Web Development</span>
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">High</span>
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Solved</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Need help making my portfolio responsive before demo day</h3>
              <p className="text-gray-500 text-sm mb-6">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
              <div className="flex gap-2 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-medium">HTML/CSS</span>
                <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-medium">Responsive</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">Sara Noor</p>
                  <p className="text-xs text-gray-400">Karachi • 1 helper interested</p>
                </div>
                <button className="border border-gray-200 px-6 py-2 rounded-full font-bold text-sm">Open details</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Explore;