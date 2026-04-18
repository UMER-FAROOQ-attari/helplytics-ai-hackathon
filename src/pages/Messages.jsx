import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();

  const [messagesList, setMessagesList] = useState([
    {
      id: 1,
      sender: 'Ayesha Khan',
      receiver: 'Sara Noor',
      text: 'I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.',
      time: '09:45',
      ampm: 'AM'
    },
    {
      id: 2,
      sender: 'Hassan Ali',
      receiver: 'Ayesha Khan',
      text: 'Your event poster concept is solid. I would tighten the CTA and reduce the background texture.',
      time: '11:10',
      ampm: 'AM'
    }
  ]);

  const [toUser, setToUser] = useState('Ayesha Khan');
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = hours + ':' + minutes;

    const newMessage = {
      id: Date.now(),
      sender: 'Umer Farooq',
      receiver: toUser,
      text: messageText,
      time: timeStr,
      ampm: ampm
    };

    setMessagesList([newMessage, ...messagesList]);
    setMessageText('');
  };

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
              {messagesList.map((msg) => (
                <div key={msg.id} className="border border-gray-100 p-6 rounded-3xl flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm mb-2">{msg.sender} → {msg.receiver}</p>
                    <p className="text-gray-500 text-sm">{msg.text}</p>
                  </div>
                  <div className="bg-[#e0f0eb] text-[#008080] h-12 w-12 rounded-full flex flex-col items-center justify-center text-[10px] font-bold shrink-0">
                    <span>{msg.time}</span>
                    <span>{msg.ampm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 bg-white p-10 rounded-[40px]">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest block mb-6">Send Message</span>
            <h2 className="text-3xl font-bold mb-8">Start a conversation</h2>

            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">To</label>
                <select 
                  value={toUser}
                  onChange={(e) => setToUser(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none"
                >
                  <option value="Ayesha Khan">Ayesha Khan</option>
                  <option value="Hassan Ali">Hassan Ali</option>
                  <option value="Sara Noor">Sara Noor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-32 resize-none" 
                  placeholder="Share support details, ask for files, or suggest next steps."
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#008080] text-white py-4 rounded-2xl font-bold hover:bg-[#006666] transition-all">
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