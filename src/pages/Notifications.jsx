import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const notifs = [
    { title: '"Need help" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { title: 'Ayesha Khan offered help on "Need help"', meta: 'Match • Just now', status: 'Unread' },
    { title: 'Your request "Need help" is now live in the community feed', meta: 'Request • Just now', status: 'Unread' },
    { title: '"Need help making my portfolio responsive before demo day" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { title: 'New helper matched to your responsive portfolio request', meta: 'Match • 12 min ago', status: 'Unread' },
    { title: 'Your trust score increased after a solved request', meta: 'Reputation • 1 hr ago', status: 'Unread' },
    { title: 'AI Center detected rising demand for interview prep', meta: 'Insight • Today', status: 'Read' }
  ];

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="bg-[#222a28] text-white p-12 rounded-[40px] mb-6">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 block mb-4">Notifications</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Stay updated on requests, helpers, and trust signals.</h1>
        </div>

        <nav className="flex justify-between items-center bg-[#f4ece1] py-4 mb-6 px-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#008080] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Explore</span>
            <span className="bg-[#e0f0eb] text-[#008080] px-4 py-1.5 rounded-full">Notifications</span>
          </div>
        </nav>

        <div className="bg-[#fdfaf6] p-10 rounded-[40px]">
          <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Live Updates</span>
          <h2 className="text-3xl font-bold mb-8">Notification feed</h2>

          <div className="space-y-4">
            {notifs.map((n, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center">
                <div>
                  <p className={`font-bold text-sm ${n.status === 'Read' ? 'text-gray-500' : 'text-black'}`}>{n.title}</p>
                  <p className="text-xs text-gray-400 mt-2">{n.meta}</p>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${n.status === 'Unread' ? 'bg-white text-black border-gray-200' : 'bg-transparent text-gray-400 border-transparent'}`}>
                  {n.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;