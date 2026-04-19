import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  const [leaders] = useState([
    {
      id: 1,
      rank: 2,
      name: 'Hassan Ali',
      initials: 'HA',
      avatarColor: 'bg-[#1a2622]',
      skills: 'JavaScript, React, Git/GitHub',
      score: 88,
      contributions: 24,
      badges: 'Code Rescuer • Bug Hunter',
      progress: [{ color: 'bg-[#0d9488]', width: '88%' }]
    },
    {
      id: 2,
      rank: 3,
      name: 'Sara Noor',
      initials: 'SN',
      avatarColor: 'bg-orange-400',
      skills: 'Python, Data Analysis',
      score: 74,
      contributions: 11,
      badges: 'Community Voice',
      progress: [{ color: 'bg-orange-400', width: '74%' }, { color: 'bg-[#0d9488]', width: '10%' }]
    }
  ]);

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 block mb-4">Leaderboard</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Recognize the people who keep the community moving.</h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            Trust score, contribution count, and badges create visible momentum for reliable helpers.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#0d9488] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm text-[#1a2622]">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Explore</span>
            <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-1.5 rounded-full font-bold">Leaderboard</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[35px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Top Helpers</span>
            <h2 className="text-3xl font-bold mb-8 text-[#1a2622]">Rankings</h2>

            <div className="space-y-4">
              {leaders.map((leader) => (
                <div key={leader.id} className="bg-[#f9f9f9] p-6 rounded-2xl flex items-center justify-between border border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className={`${leader.avatarColor} text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xs`}>
                      {leader.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1a2622]">#{leader.rank} {leader.name}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-medium">{leader.skills}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-[#1a2622]">{leader.score}%</p>
                    <p className="text-[10px] text-gray-400 mt-1 font-medium">{leader.contributions} contributions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[35px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Badge System</span>
            <h2 className="text-3xl font-bold mb-8 text-[#1a2622]">Trust and achievement</h2>

            <div className="space-y-6">
              {leaders.map((leader) => (
                <div key={`badge-${leader.id}`} className="bg-[#f9f9f9] p-6 rounded-2xl border border-gray-50">
                  <p className="font-bold text-sm text-[#1a2622] mb-2">{leader.name}</p>
                  <p className="text-[10px] text-gray-400 mb-5 font-medium">{leader.badges}</p>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
                    {leader.progress.map((bar, index) => (
                      <div key={index} className={`h-full ${bar.color}`} style={{ width: bar.width }}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;