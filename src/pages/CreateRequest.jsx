import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRequest = () => {
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
          <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full">Create Request</span>
        </div>
      </nav>

      <div className="max-w-5xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">Create Request</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Turn a rough problem into a clear help request.</h1>
          <p className="text-gray-400">Use built-in AI suggestions for category, urgency, tags, and a stronger description rewrite.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-[#fdfaf6] p-10 rounded-[40px]">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                <input type="text" defaultValue="Need review on my JavaScript quiz app before submission" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                <textarea rows="4" placeholder="Explain the challenge, your current progress, deadline, and what kind of help would be useful." className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none resize-none"></textarea>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tags</label>
                  <input type="text" defaultValue="JavaScript, Debugging, Review" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <select className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none">
                    <option>Web Development</option>
                  </select>
                </div>
              </div>

              <div className="w-1/2 pr-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgency</label>
                <select className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none">
                  <option>High</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full font-bold">Apply AI suggestions</button>
                <button type="button" onClick={() => navigate('/explore')} className="bg-[#008080] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#008080]/20 hover:bg-[#006666]">Publish request</button>
              </div>
            </form>
          </div>

          <div className="bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-4">AI Assistant</span>
            <h2 className="text-3xl font-bold mb-8 leading-tight">Smart request guidance</h2>

            <div className="space-y-6 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500">Suggested category</span>
                <span className="font-bold">Community</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500">Detected urgency</span>
                <span className="font-bold">Low</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4 gap-4">
                <span className="text-gray-500 shrink-0">Suggested tags</span>
                <span className="font-bold text-right">Add more detail for smarter tags</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-500 shrink-0">Rewrite suggestion</span>
                <span className="font-bold text-right">Start describing the challenge to generate a stronger version.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateRequest;