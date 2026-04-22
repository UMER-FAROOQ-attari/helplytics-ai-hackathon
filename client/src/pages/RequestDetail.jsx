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
      color: 'bg-[#0d9488]'
    };
    setHelpers([...helpers, newHelper]);
  };

  const toggleSolved = () => {
    setIsSolved(!isSolved);
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex justify-center font-sans">
      <div className="max-w-6xl w-full">
        
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8 relative shadow-sm">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 mb-6 block">Request Detail</span>
          <div className="flex gap-2 mb-8">
            <span className="bg-[#eef7f6]/10 text-[#0d9488] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">Career</span>
            <span className="bg-[#eef7f6]/10 text-[#0d9488] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">Low</span>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase ${isSolved ? 'bg-green-900/30 text-green-400' : 'bg-orange-900/30 text-orange-400'}`}>
              {isSolved ? 'Solved' : 'Open'}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
            Need mock interview support for<br/>internship applications
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">AI Summary</span>
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-[#0d9488] text-white h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0">H</div>
                <div>
                  <p className="font-bold text-sm text-[#1a2622]">HelpHub AI</p>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    The user is seeking a practice partner for entry-level frontend interviews.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mt-6">
                <span className="bg-[#f9f9f9] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold border border-gray-50">Interview Prep</span>
                <span className="bg-[#f9f9f9] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold border border-gray-50">Career</span>
                <span className="bg-[#f9f9f9] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold border border-gray-50">Frontend</span>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">Actions</span>
              <div className="flex gap-4">
                <button 
                  onClick={handleOfferHelp} 
                  className="bg-[#0d9488] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#0b7a6f] transition-all shadow-md"
                >
                  I can help
                </button>
                <button 
                  onClick={toggleSolved} 
                  className="bg-white border border-gray-100 text-[#1a2622] px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-50 transition-all"
                >
                  {isSolved ? 'Reopen request' : 'Mark as solved'}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">Requester</span>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                <span className="cursor-pointer hover:text-[#1a2622]" onClick={() => navigate('/landing')}>Dashboard</span>
                <span className="cursor-pointer hover:text-[#1a2622]" onClick={() => navigate('/explore')}>Explore</span>
                <span className="cursor-pointer hover:text-[#1a2622]" onClick={() => navigate('/messages')}>Messages</span>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-8 block">Helpers</span>
              <h3 className="font-bold text-[#1a2622] mb-8">People ready to support</h3>
              
              <div className="space-y-6">
                {helpers.map((helper) => (
                  <div key={helper.id} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className={`${helper.color} text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xs shadow-sm`}>
                        {helper.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#1a2622]">{helper.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-1">{helper.skills}</p>
                      </div>
                    </div>
                    <span className="bg-[#eef7f6] text-[#0d9488] px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap">
                      Trust {helper.trust}
                    </span>
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