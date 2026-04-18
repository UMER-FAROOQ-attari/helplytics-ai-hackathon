import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestDetail = () => {
  const navigate = useNavigate();

  const [isSolved, setIsSolved] = useState(true);
  const [helpers, setHelpers] = useState([
    {
      id: 1,
      initials: 'AK',
      name: 'Ayesha Khan',
      skills: 'Figma, UI/UX, HTML/CSS',
      trust: '100%',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      initials: 'HA',
      name: 'Hassan Ali',
      skills: 'JavaScript, React, Git/GitHub',
      trust: '88%',
      color: 'bg-orange-400'
    }
  ]);

  const handleOfferHelp = () => {
    const newHelper = {
      id: Date.now(),
      initials: 'UF',
      name: 'Umer Farooq',
      skills: 'MERN Stack, React, Tailwind',
      trust: 'New',
      color: 'bg-[#008080]'
    };
    setHelpers([...helpers, newHelper]);
  };

  const toggleSolved = () => {
    setIsSolved(!isSolved);
  };

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10 flex justify-center">
      <div className="max-w-5xl w-full">
        
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 mb-4 block">Request Detail</span>
          <div className="flex gap-2 mb-6">
            <span className="bg-white/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Career</span>
            <span className="bg-white/10 text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Low</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${isSolved ? 'bg-green-900 text-green-400' : 'bg-orange-900 text-orange-400'}`}>
              {isSolved ? 'Solved' : 'Open'}
            </span>
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
                <button onClick={handleOfferHelp} className="bg-[#008080] text-white px-8 py-3 rounded-full font-bold hover:bg-[#006666] transition-all">
                  I can help
                </button>
                <button onClick={toggleSolved} className="bg-white border border-gray-200 text-black px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
                  {isSolved ? 'Reopen request' : 'Mark as solved'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">Requester</span>
              <div className="flex justify-between items-center text-sm font-bold text-gray-500">
                <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Dashboard</span>
                <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Explore</span>
                <span className="cursor-pointer hover:text-black" onClick={() => navigate('/messages')}>Messages</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px]">
              <span className="text-xs font-bold text-[#008080] uppercase tracking-widest mb-4 block">Helpers</span>
              <h3 className="font-bold mb-6">People ready to support</h3>
              
              <div className="space-y-4">
                {helpers.map((helper) => (
                  <div key={helper.id} className="border border-gray-100 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`${helper.color} text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm`}>
                        {helper.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{helper.name}</p>
                        <p className="text-xs text-gray-400">{helper.skills}</p>
                      </div>
                    </div>
                    <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">Trust {helper.trust}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RequestDetail;