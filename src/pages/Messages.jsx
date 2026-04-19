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
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center font-sans">
      <div className="max-w-6xl w-full">
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 block mb-4">Interaction / Messaging</span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Keep support moving through direct communication.</h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            Basic messaging gives helpers and requesters a clear follow-up path once a match happens.
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
            <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-1.5 rounded-full font-bold">Messages</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white p-10 rounded-[35px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Conversation Stream</span>
            <h2 className="text-4xl font-bold mb-8 text-[#1a2622]">Recent messages</h2>

            <div className="space-y-4">
              {messagesList.map((msg) => (
                <div key={msg.id} className="bg-[#f9f9f9] p-6 rounded-2xl flex justify-between items-center border border-gray-50">
                  <div className="pr-4">
                    <p className="font-bold text-sm text-[#1a2622] mb-2">{msg.sender} → {msg.receiver}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{msg.text}</p>
                  </div>
                  <div className="bg-[#eef7f6] text-[#0d9488] h-12 w-14 rounded-2xl flex flex-col items-center justify-center text-[10px] font-bold shrink-0">
                    <span>{msg.time}</span>
                    <span>{msg.ampm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-10 rounded-[35px] shadow-sm h-fit">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Send Message</span>
            <h2 className="text-3xl font-bold mb-8 text-[#1a2622]">Start a conversation</h2>

            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">To</label>
                <select 
                  value={toUser}
                  onChange={(e) => setToUser(e.target.value)}
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm appearance-none cursor-pointer"
                >
                  <option value="Ayesha Khan">Ayesha Khan</option>
                  <option value="Hassan Ali">Hassan Ali</option>
                  <option value="Sara Noor">Sara Noor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Message</label>
                <textarea 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none h-40 resize-none text-sm" 
                  placeholder="Share support details, ask for files, or suggest next steps."
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0d9488] text-white py-4 rounded-full font-bold text-sm hover:bg-[#0b7a6f] transition-all shadow-md">
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