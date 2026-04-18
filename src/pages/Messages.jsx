import React from 'react';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
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
          <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full">Messages</span>
        </div>
      </nav>

      <div className="max-w-5xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">Interaction / Messaging</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Keep support moving through direct communication.</h1>
          <p className="text-gray-400">Basic messaging gives helpers and requesters a clear follow-up path once a match happens.</p>
        </div>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 bg-white p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Conversation Stream</span>
            <h2 className="text-3xl font-bold mb-8">Recent messages</h2>

            <div className="space-y-4">
              <div className="border border-gray-100 p-6 rounded-3xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm mb-2">Ayesha Khan → Sara Noor</p>
                  <p className="text-gray-500 text-sm">I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.</p>
                </div>
                <div className="bg-[#e0f0eb] text-[#008080] h-12 w-12 rounded-full flex flex-col items-center justify-center text-[10px] font-bold shrink-0">
                  <span>09:45</span>
                  <span>AM</span>
                </div>
              </div>

              <div className="border border-gray-100 p-6 rounded-3xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm mb-2">Hassan Ali → Ayesha Khan</p>
                  <p className="text-gray-500 text-sm">Your event poster concept is solid. I would tighten the CTA and reduce the background texture.</p>
                </div>
                <div className="bg-[#e0f0eb] text-[#008080] h-12 w-12 rounded-full flex flex-col items-center justify-center text-[10px] font-bold shrink-0">
                  <span>11:10</span>
                  <span>AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Send Message</span>
            <h2 className="text-3xl font-bold mb-8">Start a conversation</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">To</label>
                <select className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none">
                  <option>Ayesha Khan</option>
                  <option>Hassan Ali</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-32 resize-none" 
                  placeholder="Share support details, ask for files, or suggest next steps."
                ></textarea>
              </div>

              <button type="button" className="w-full bg-[#008080] text-white py-4 rounded-2xl font-bold hover:bg-[#006666] transition-all">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;