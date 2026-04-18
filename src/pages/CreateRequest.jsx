import React, { useState } from 'react';
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

  // --- AI TAG SUGGESTION LOGIC ---
  const suggestTagsWithAI = () => {
    if (!description) {
      alert("Jani, pehle description to likho tabhi AI tags bata payega!");
      return;
    }

    // Smart Keywords for Hackathon
    const keywords = ["react", "node", "express", "mongodb", "javascript", "tailwind", "css", "bug", "api", "auth", "frontend", "backend", "deployment", "firebase"];
    const words = description.toLowerCase().split(/\W+/);
    
    // Filter matches
    const foundTags = keywords.filter(k => words.includes(k));

    if (foundTags.length > 0) {
      setTags(foundTags.join(', '));
      // User ko feel dilao ke AI ne kaam kia hai
      alert("AI Magic: Tags found and applied! ✨");
    } else {
      alert("AI couldn't find specific tech tags. Try adding tech names like 'React' or 'Node' in description.");
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    const requestData = {
      title: title.trim(),
      description: description.trim(),
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      category,
      urgency,
      author: "Umer Farooq", 
      location: "Karachi"
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
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#222a28] mb-4">Post a Help Request</h1>
          <p className="text-gray-400 font-medium italic">"Community help is just a click away"</p>
        </div>
        
        <form onSubmit={handlePublish} className="space-y-8">
          {/* Title Field */}
          <div className="group">
            <label className="block font-bold text-[#222a28] mb-2 ml-2 transition-colors group-focus-within:text-[#008080]">Project Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none focus:border-[#008080] transition-all bg-gray-50 focus:bg-white" 
              placeholder="E.g., MongoDB Connection Issue in Node.js"
              required 
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block font-bold text-[#222a28] mb-2 ml-2">Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none h-40 resize-none focus:border-[#008080] transition-all bg-gray-50 focus:bg-white" 
              placeholder="Describe your problem in detail... AI will read this to suggest tags!"
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tags Field with AI Button */}
            <div>
              <label className="block font-bold text-[#222a28] mb-2 ml-2">Tags (comma separated)</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={tags} 
                  onChange={(e) => setTags(e.target.value)} 
                  className="w-full p-5 pr-28 border-2 border-gray-100 rounded-3xl outline-none focus:border-[#008080] bg-gray-50 focus:bg-white" 
                  placeholder="React, CSS, etc." 
                />
                <button 
                  type="button"
                  onClick={suggestTagsWithAI}
                  className="absolute right-3 top-3 bottom-3 bg-[#222a28] text-white px-4 rounded-2xl text-[10px] font-black uppercase hover:bg-black transition-all"
                >
                  AI Suggest
                </button>
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block font-bold text-[#222a28] mb-2 ml-2">Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="w-full p-5 border-2 border-gray-100 rounded-3xl outline-none bg-gray-50 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Career">Career</option>
                <option value="Mobile App">Mobile App</option>
              </select>
            </div>
          </div>

          {/* Urgency Selection */}
          <div className="w-full md:w-1/2">
            <label className="block font-bold text-[#222a28] mb-2 ml-2">Urgency Level</label>
            <div className="flex gap-4">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setUrgency(level)}
                  className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${
                    urgency === level 
                    ? 'bg-[#008080] border-[#008080] text-white shadow-lg' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-[#008080]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-[#008080] text-white px-8 py-5 rounded-[25px] font-black text-xl w-full shadow-[0_10px_30px_rgba(0,128,128,0.3)] hover:bg-[#006666] transition-all transform hover:-translate-y-1 active:scale-95 mt-4"
          >
            PUBLISH REQUEST TO ATLAS 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;