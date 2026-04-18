import React from 'react';

const RequestDetail = () => {
  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10 flex justify-center">
      <div className="max-w-5xl w-full">
        
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 mb-4 block">Request Detail</span>
          <div className="flex gap-2 mb-6">
            <span className="bg-white/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Career</span>
            <span className="bg-white/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Low</span>
            <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-xs font-bold">Solved</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Need mock interview support for<br/>internship applications</h1>
          <p className="text-gray-400">Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">AI Summary</span>
              <div className="flex gap-3 items-start mb-4">
                <div className="bg-[#008080] text-white h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm">H</div>
                <div className="mt-1">
                  <p className="font-bold text-sm">HelpHub AI</p>
                  <p className="text-gray-500 text-sm mt-2">The user is seeking a practice partner for entry-level frontend interviews.</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-1.5 rounded-full text-xs font-bold">Interview Prep</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-1.5 rounded-full text-xs font-bold">Career</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-1.5 rounded-full text-xs font-bold">Frontend</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">Actions</span>
              <div className="flex gap-4">
                <button className="bg-[#008080] text-white px-8 py-3 rounded-full font-bold">I can help</button>
                <button className="bg-white border border-gray-200 text-black px-8 py-3 rounded-full font-bold">Mark as solved</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">Requester</span>
              <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                <span>Dashboard</span>
                <span>Explore</span>
                <span>Messages</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">Helpers</span>
              <h3 className="font-bold mb-6">People ready to support</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-100 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm">AK</div>
                    <div>
                      <p className="font-bold text-sm">Ayesha Khan</p>
                      <p className="text-xs text-gray-400">Figma, UI/UX, HTML/CSS</p>
                    </div>
                  </div>
                  <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Trust 100%</span>
                </div>

                <div className="border border-gray-100 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-400 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm">HA</div>
                    <div>
                      <p className="font-bold text-sm">Hassan Ali</p>
                      <p className="text-xs text-gray-400">JavaScript, React, Git/GitHub</p>
                    </div>
                  </div>
                  <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Trust 88%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default RequestDetail;