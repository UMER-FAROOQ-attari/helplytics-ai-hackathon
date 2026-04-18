import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  const [leaders, setLeaders] = useState([
    {
      id: 1,
      rank: 2,
      name: 'Hassan Ali',
      initials: 'HA',
      avatarColor: 'bg-[#222a28]',
      skills: 'JavaScript, React, Git/GitHub',
      score: 88,
      contributions: 24,
      badges: 'Code Rescuer • Bug Hunter',
      progress: [{ color: 'bg-[#008080]', width: '88%' }]
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
      progress: [{ color: 'bg-orange-400', width: '74%' }, { color: 'bg-[#008080]', width: '10%' }]
    }
  ]);

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
              {leaders.map((leader) => (
                <div key={leader.id} className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className={`${leader.avatarColor} text-white h-12 w-12 rounded-full flex items-center justify-center font-bold`}>{leader.initials}</div>
                    <div>
                      <p className="font-bold">#{leader.rank} {leader.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{leader.skills}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{leader.score}%</p>
                    <p className="text-xs text-gray-500 mt-1">{leader.contributions} contributions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fdfaf6] p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Badge System</span>
            <h2 className="text-3xl font-bold mb-8">Trust and achievement</h2>

            <div className="space-y-6">
              {leaders.map((leader) => (
                <div key={`badge-${leader.id}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                  <p className="font-bold mb-2">{leader.name}</p>
                  <p className="text-xs text-gray-500 mb-4">{leader.badges}</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
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