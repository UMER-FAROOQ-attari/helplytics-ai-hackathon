import React from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10 flex flex-col items-center">
      <nav className="max-w-5xl w-full flex justify-between items-center mb-10 px-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#008080] text-white h-10 w-10 flex items-center justify-center rounded-lg font-bold text-xl">H</div>
          <span className="font-bold text-lg">HelpHub AI</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Dashboard</span>
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Explore</span>
          <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full">Leaderboard</span>
        </div>
      </nav>

      <div className="max-w-5xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">Leaderboard</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Recognize the people who keep the community moving.</h1>
          <p className="text-gray-400">Trust score, contribution count, and badges create visible momentum for reliable helpers.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Top Helpers</span>
            <h2 className="text-3xl font-bold mb-8">Rankings</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-[#222a28] text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">HA</div>
                  <div>
                    <p className="font-bold">#2 Hassan Ali</p>
                    <p className="text-xs text-gray-500 mt-1">JavaScript, React, Git/GitHub</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">88%</p>
                  <p className="text-xs text-gray-500 mt-1">24 contributions</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-400 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">SN</div>
                  <div>
                    <p className="font-bold">#3 Sara Noor</p>
                    <p className="text-xs text-gray-500 mt-1">Python, Data Analysis</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">74%</p>
                  <p className="text-xs text-gray-500 mt-1">11 contributions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Badge System</span>
            <h2 className="text-3xl font-bold mb-8">Trust and achievement</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                <p className="font-bold mb-2">Hassan Ali</p>
                <p className="text-xs text-gray-500 mb-4">Code Rescuer • Bug Hunter</p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#008080] w-[88%]"></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                <p className="font-bold mb-2">Sara Noor</p>
                <p className="text-xs text-gray-500 mb-4">Community Voice</p>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-orange-400 w-[74%]"></div>
                  <div className="h-full bg-[#008080] w-[10%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;