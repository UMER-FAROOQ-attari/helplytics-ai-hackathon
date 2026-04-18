import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Onboarding</span>
          <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full">Profile</span>
        </div>
      </nav>

      <div className="max-w-5xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">Profile</span>
          <h1 className="text-5xl font-bold mb-4">Ayesha Khan</h1>
          <p className="text-gray-400 text-sm">Both • Karachi</p>
        </div>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Public Profile</span>
            <h2 className="text-3xl font-bold mb-8">Skills and reputation</h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-600">Trust score</span>
                <span className="font-bold">100%</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-600">Contributions</span>
                <span className="font-bold">35</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Skills</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">Figma</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">UI/UX</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">HTML/CSS</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">Career Guidance</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Badges</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">Design Ally</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">Fast Responder</span>
                <span className="bg-[#e0f0eb] text-[#008080] px-4 py-2 rounded-full text-xs font-bold">Top Mentor</span>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Edit Profile</span>
            <h2 className="text-3xl font-bold mb-8">Update your identity</h2>

            <form className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" defaultValue="Ayesha Khan" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                  <input type="text" defaultValue="Karachi" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Skills</label>
                <input type="text" defaultValue="Figma, UI/UX, HTML/CSS, Career Guidance" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interests</label>
                <input type="text" defaultValue="Hackathons, UI/UX, Community Building" className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none" />
              </div>

              <button type="button" className="w-full bg-[#008080] text-white py-4 rounded-2xl font-bold hover:bg-[#006666] transition-all">
                Save profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;