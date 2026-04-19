import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRequest = () => {
  const navigate = useNavigate();

  // States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [urgency, setUrgency] = useState('Low');
  const [aiLoading, setAiLoading] = useState(false);
  const [user, setUser] = useState(null);

  // گیٹ یوزر ڈیٹا فرام لوکل سٹوریج
  useEffect(() => {
    const savedUser = localStorage.getItem('helplytics_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // --- REAL AI TAG SUGGESTION (Gemini Powered) ---
  const suggestTagsWithAI = async () => {
    if (!description || description.length < 10) {
      alert("Jani, thodi lambi description likho taake AI samajh sakay!");
      return;
    }

    setAiLoading(true);
    try {
      // ہم وہی اینالائز والا روٹ استعمال کریں گے لیکن ایک خاص پرامپٹ کے ساتھ
      const res = await axios.post('http://localhost:5000/api/ai/analyze', { 
        description: `Based on this technical issue: "${description}", provide only 3 to 5 relevant technology tags as a single comma-separated list. No extra text.` 
      });
      
      // AI سے ملے ہوئے ٹیگز کو صاف کر کے سیٹ کرنا
      const suggestedTags = res.data.analysis.replace(/[^a-zA-Z, ]/g, "").trim();
      setTags(suggestedTags);
      alert("AI Magic: Smart tags generated! ✨");
    } catch (err) {
      console.error("AI Suggestion Error:", err);
      alert("AI busy hai jani, khud hi tags likh lo filhaal!");
    }
    setAiLoading(false);
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    const requestData = {
      title: title.trim(),
      description: description.trim(),
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      category,
      urgency,
      // اگر یوزر لاگ ان ہے تو اس کا نام، ورنہ تمہارا نام
      author: user ? user.name : "Umer Farooq", 
      location: user?.location || "Karachi",
      helpers: 0
    };

    try {
      const response = await axios.post('http://localhost:5000/api/requests', requestData);
      console.log('Success:', response.data);
      alert('Mubarak ho jani! Request posted to MongoDB! 🚀');
      navigate('/explore');
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      const serverError = error.response?.data?.error || "Server Terminal check karo jani!";
      alert('Error: ' + serverError);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4ece1] p-6 md:p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden">
        
        {/* Top Decorative bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#008080] to-[#222a28]"></div>

        <div className="mb-10 text-center">
          <div className="inline-block bg-[#008080]/10 text-[#008080] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            AI-Enhanced Posting
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#222a28] mb-4 tracking-tighter">Submit Help Request</h1>
          <p className="text-gray-400 font-medium italic italic">"Ask for help, offer a solution, build the future."</p>
        </div>
        
        <form onSubmit={handlePublish} className="space-y-8">
          {/* Title Field */}
          <div className="group">
            <label className="block font-bold text-[#222a28] mb-2 ml-2 text-sm uppercase tracking-wider">Issue Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none focus:border-[#008080] transition-all bg-gray-50 focus:bg-white font-medium" 
              placeholder="e.g., React Context API not updating state"
              required 
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block font-bold text-[#222a28] mb-2 ml-2 text-sm uppercase tracking-wider">Detailed Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none h-40 resize-none focus:border-[#008080] transition-all bg-gray-50 focus:bg-white font-medium" 
              placeholder="Explain what's wrong. AI will analyze this to suggest tags and help others understand."
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tags Field with AI Button */}
            <div>
              <label className="block font-bold text-[#222a28] mb-2 ml-2 text-sm uppercase tracking-wider">Smart Tags</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={tags} 
                  onChange={(e) => setTags(e.target.value)} 
                  className="w-full p-5 pr-32 border-2 border-gray-100 rounded-3xl outline-none focus:border-[#008080] bg-gray-50 focus:bg-white font-medium italic" 
                  placeholder="React, Firebase, Logic" 
                />
                <button 
                  type="button"
                  onClick={suggestTagsWithAI}
                  disabled={aiLoading}
                  className="absolute right-3 top-3 bottom-3 bg-[#222a28] text-white px-5 rounded-2xl text-[10px] font-black uppercase hover:bg-black transition-all disabled:opacity-50"
                >
                  {aiLoading ? "Thinking..." : "AI Suggest ✨"}
                </button>
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block font-bold text-[#222a28] mb-2 ml-2 text-sm uppercase tracking-wider">Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none bg-gray-50 focus:bg-white appearance-none cursor-pointer font-bold text-[#008080]"
              >
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Career">Career</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Backend">Backend / API</option>
              </select>
            </div>
          </div>

          {/* Urgency Selection */}
          <div className="w-full">
            <label className="block font-bold text-[#222a28] mb-2 ml-2 text-sm uppercase tracking-wider">Urgency Level</label>
            <div className="flex gap-4">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setUrgency(level)}
                  className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-4 ${
                    urgency === level 
                    ? 'bg-[#008080] border-[#008080] text-white shadow-[0_10px_20px_rgba(0,128,128,0.3)]' 
                    : 'bg-white border-gray-100 text-gray-300 hover:border-[#008080]/30'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-[#222a28] text-white px-8 py-6 rounded-[30px] font-black text-xl w-full shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95 mt-6 border-b-8 border-black/20"
          >
            PUBLISH TO ATLAS DATABASE 🚀
          </button>
        </form>
      </div>
      
      <p className="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">
        Verified by HelpHub AI Protocols
      </p>
    </div>
  );
};

export default CreateRequest;