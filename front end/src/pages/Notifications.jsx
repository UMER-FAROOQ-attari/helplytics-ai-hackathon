import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const [notifs, setNotifs] = useState([
    { id: 1, title: '"Need help" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { id: 2, title: 'Ayesha Khan offered help on "Need help"', meta: 'Match • Just now', status: 'Unread' },
    { id: 3, title: 'Your request "Need help" is now live in the community feed', meta: 'Request • Just now', status: 'Unread' },
    { id: 4, title: '"Need help making my portfolio responsive before demo day" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { id: 5, title: '"Need help making my portfolio responsive before demo day" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { id: 6, title: '"Need help making my portfolio responsive before demo day" was marked as solved', meta: 'Status • Just now', status: 'Unread' },
    { id: 7, title: 'New helper matched to your responsive portfolio request', meta: 'Match • 12 min ago', status: 'Unread' },
    { id: 8, title: 'Your trust score increased after a solved request', meta: 'Reputation • 1 hr ago', status: 'Unread' },
    { id: 9, title: 'AI Center detected rising demand for interview prep', meta: 'Insight • Today', status: 'Read' }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifs(notifs.map(n => n.id === id ? { ...n, status: 'Read' } : n));
  };

  const markAllAsRead = () => {
    setNotifs(notifs.map(n => ({ ...n, status: 'Read' })));
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center font-sans">
      <div className="max-w-5xl w-full">
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8 shadow-sm">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 block mb-4">Notifications</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Stay updated on requests, helpers, and trust signals.</h1>
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#0d9488] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm text-[#1a2622]">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/explore')}>Explore</span>
            <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-1.5 rounded-full font-bold">Notifications</span>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[35px] shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-4">Live Updates</span>
              <h2 className="text-4xl font-bold text-[#1a2622]">Notification feed</h2>
            </div>
            <button 
              onClick={markAllAsRead} 
              className="text-xs font-bold text-[#0d9488] hover:underline"
            >
              Mark all as read
            </button>
          </div>

          <div className="space-y-0">
            {notifs.map((n) => (
              <div key={n.id} className="py-6 border-b border-gray-50 flex justify-between items-center last:border-0">
                <div>
                  <p className={`text-sm font-bold ${n.status === 'Read' ? 'text-gray-400' : 'text-[#1a2622]'}`}>
                    {n.title}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-2 font-medium">{n.meta}</p>
                </div>
                <button 
                  onClick={() => handleMarkAsRead(n.id)}
                  disabled={n.status === 'Read'}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold border transition-all ${
                    n.status === 'Unread' 
                    ? 'bg-white text-black border-gray-100 hover:bg-gray-50' 
                    : 'bg-transparent text-gray-300 border-transparent'
                  }`}
                >
                  {n.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;