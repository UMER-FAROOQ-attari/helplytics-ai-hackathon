import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- AI States ---
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const fetchSingleRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/requests/${id}`);
        setRequest(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching request details:", err);
        setLoading(false);
      }
    };
    fetchSingleRequest();
  }, [id]);

  // --- AI Analysis Logic ---
  const askAI = async () => {
    if (!request?.description) return;
    setAiLoading(true);
    setAiResponse(""); // پرانا رسپانس صاف کرنے کے لیے
    try {
      const res = await axios.post('http://localhost:5000/api/ai/analyze', { 
        description: request.description 
      });
      setAiResponse(res.data.analysis);
    } catch (err) {
      console.error("AI Error:", err);
      alert("Jani, AI thoda thaka hua hai. Check karo Backend pe API Key dali hai?");
    }
    setAiLoading(false);
  };

  const handleHelpClick = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/requests/help/${id}`);
      setRequest(res.data);
      alert("Shabash jani! You've stepped up to help. ✨");
    } catch (err) {
      console.error("Help error:", err);
      alert("Masla aa gaya help count update karne mein.");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4ece1]">
      <div className="animate-bounce font-black text-2xl text-[#008080]">Loading Details... 🔄</div>
    </div>
  );
  
  if (!request) return <div className="text-center py-20 font-bold text-red-500">Request not found! ❌</div>;

  return (
    <div className="min-h-screen bg-[#f4ece1] p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-[#008080] font-black flex items-center gap-2 hover:translate-x-[-5px] transition-transform"
        >
          ← Back to Explore
        </button>

        <div className="bg-white p-8 md:p-14 rounded-[50px] shadow-2xl border border-white/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#008080]/5 rounded-bl-[100px]"></div>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#e0f0eb] text-[#008080] px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest">
              {request.category}
            </span>
            <span className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest ${request.urgency === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
              Urgency: {request.urgency}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-8 text-[#222a28] leading-tight">
            {request.title}
          </h1>
          
          <div className="bg-gray-50 p-8 rounded-[40px] mb-6 border-2 border-dashed border-gray-200">
            <h4 className="font-black text-gray-300 text-[10px] uppercase tracking-[0.2em] mb-4">Detailed Description</h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap font-medium italic">
              "{request.description}"
            </p>

            {/* --- AI BUTTON INSIDE CARD --- */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={askAI}
                disabled={aiLoading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {aiLoading ? "AI is Thinking... 🧠" : "✨ Get AI Solution"}
              </button>

              {aiResponse && (
                <div className="mt-6 p-6 bg-indigo-50 border border-indigo-100 rounded-[30px] animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🤖</span>
                    <h5 className="font-black text-indigo-900 text-xs uppercase tracking-widest">Gemini AI Analysis:</h5>
                  </div>
                  <div className="text-indigo-800 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                    {aiResponse}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {request.tags && request.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#f0f0f0] text-gray-500 px-5 py-2 rounded-2xl text-xs font-bold hover:bg-[#008080] hover:text-white transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center bg-[#222a28] p-10 rounded-[40px] text-white shadow-xl">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-2">Request Owner</p>
              <h3 className="text-2xl font-black">{request.author || "Umer Farooq"}</h3>
              <p className="text-[#008080] text-sm font-bold flex items-center justify-center md:justify-start gap-1">
                📍 {request.location || "Karachi, Pakistan"}
              </p>
            </div>
            
            <button 
              onClick={handleHelpClick}
              className="bg-[#008080] hover:bg-[#00b3b3] text-white px-12 py-5 rounded-[25px] font-black text-lg transition-all shadow-[0_10px_20px_rgba(0,128,128,0.4)] transform hover:scale-105 active:scale-95 group"
            >
              I Can Help! 🤝 
              <span className="ml-3 bg-white/20 px-3 py-1 rounded-lg group-hover:bg-white/40 transition-colors">
                {request.helpers || 0}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;