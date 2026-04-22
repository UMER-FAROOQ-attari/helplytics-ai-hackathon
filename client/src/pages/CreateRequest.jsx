import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRequest = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [urgency, setUrgency] = useState('Low');
  const [aiLoading, setAiLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('helplytics_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const suggestTagsWithAI = async () => {
    if (!description || description.length < 10) {
      alert("Jani, thodi lambi description likho taake AI samajh sakay!");
      return;
    }

    setAiLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/ai/analyze', { 
        description: `Based on this technical issue: "${description}", provide only 3 to 5 relevant technology tags as a single comma-separated list. No extra text.` 
      });
      
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
      author: user ? user.name : "Umer Farooq", 
      location: user?.location || "Karachi",
      helpers: 0
    };

    try {
      const response = await axios.post('http://localhost:5000/api/requests', requestData);
      alert('Mubarak ho jani! Request posted to MongoDB! 🚀');
      navigate('/explore');
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      alert('Error: ' + (error.response?.data?.error || "Server issue!"));
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8">
          <p className="uppercase text-[10px] font-bold tracking-widest text-gray-400 mb-4">Create Request</p>
          <h1 className="text-5xl font-bold mb-4">Turn a rough problem into a clear help request.</h1>
          <p className="text-gray-400 text-sm">Use built-in AI suggestions for category, urgency, tags, and a stronger description rewrite.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-[2] bg-white p-10 rounded-[35px] shadow-sm">
            <form onSubmit={handlePublish} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="Need review on my JavaScript quiz app before submission"
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none focus:border-[#0d9488]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  placeholder="Explain the challenge, your current progress, deadline, and what kind of help would be useful."
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none h-40 resize-none focus:border-[#0d9488]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">Tags</label>
                  <input 
                    type="text" 
                    value={tags} 
                    onChange={(e) => setTags(e.target.value)} 
                    placeholder="JavaScript, Debugging, Review"
                    className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none focus:border-[#0d9488]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">Category</label>
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Career">Career</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Urgency</label>
                <select 
                  value={urgency} 
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none cursor-pointer"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={suggestTagsWithAI} 
                  disabled={aiLoading}
                  className="flex-1 border border-gray-200 py-4 rounded-full font-bold text-sm hover:bg-gray-50"
                >
                  {aiLoading ? "Analyzing..." : "Apply AI suggestions"}
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-[#0d9488] text-white py-4 rounded-full font-bold text-sm hover:bg-[#0b7a6f]"
                >
                  Publish request
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 bg-white p-10 rounded-[35px] shadow-sm h-fit">
            <p className="uppercase text-[10px] font-bold tracking-widest text-[#0d9488] mb-6">AI Assistant</p>
            <h2 className="text-3xl font-bold mb-8">Smart request guidance</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-50 pb-4">
                <span className="text-gray-500 text-sm">Suggested category</span>
                <span className="font-bold text-sm">{category}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-4">
                <span className="text-gray-500 text-sm">Detected urgency</span>
                <span className="font-bold text-sm">{urgency}</span>
              </div>
              <div className="border-b border-gray-50 pb-4">
                <p className="text-gray-500 text-sm mb-2">Suggested tags</p>
                <p className="text-xs font-bold text-[#0d9488]">Add more detail for smarter tags</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">Rewrite suggestion</p>
                <p className="text-xs font-bold leading-relaxed">Start describing the challenge to generate a stronger version.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;