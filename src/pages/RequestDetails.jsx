import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const askAI = async () => {
    if (!request?.description) return;
    setAiLoading(true);
    setAiResponse("");
    try {
      const res = await axios.post('http://localhost:5000/api/ai/analyze', { 
        description: request.description 
      });
      setAiResponse(res.data.analysis);
    } catch (err) {
      console.error("AI Error:", err);
      alert("Backend check karo jani!");
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
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f3ed]">
      <div className="font-bold text-[#0d9488]">Loading...</div>
    </div>
  );
  
  if (!request) return <div className="text-center py-20 font-bold text-red-500">Not found!</div>;

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex justify-center font-sans text-[#1a2622]">
      <div className="max-w-6xl w-full">
        
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8 relative">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 mb-6 block">Request Detail</span>
          <div className="flex gap-2 mb-8">
            <span className="bg-[#eef7f6]/10 text-[#0d9488] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">
              {request.category}
            </span>
            <span className="bg-[#eef7f6]/10 text-[#0d9488] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">
              {request.urgency}
            </span>
            <span className="bg-green-900/30 text-green-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">
              Open
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
            {request.title}
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            {request.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">AI Summary & Solution</span>
              <div className="flex gap-4 items-start mb-6">
                <div className="bg-[#0d9488] text-white h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0">H</div>
                <div className="w-full">
                  <p className="font-bold text-sm mb-3">HelpHub AI</p>
                  
                  {aiResponse ? (
                    <div className="bg-[#f9f9f9] p-5 rounded-2xl text-xs leading-relaxed text-gray-600 border border-gray-50">
                      {aiResponse}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm italic">Click the button below to get an AI-powered solution for this issue.</p>
                  )}

                  <button 
                    onClick={askAI}
                    disabled={aiLoading}
                    className="mt-6 bg-[#1a2622] text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-black transition-all disabled:opacity-50"
                  >
                    {aiLoading ? "Thinking..." : "✨ Ask AI for Solution"}
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mt-6">
                {request.tags && request.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#f9f9f9] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold border border-gray-50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">Actions</span>
              <div className="flex gap-4">
                <button 
                  onClick={handleHelpClick}
                  className="bg-[#0d9488] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#0b7a6f] shadow-md transition-all"
                >
                  I can help ({request.helpers || 0})
                </button>
                <button 
                  onClick={() => navigate('/explore')}
                  className="bg-white border border-gray-100 text-[#1a2622] px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-50"
                >
                  Back to feed
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-6 block">Requester Info</span>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Author</p>
                  <p className="font-bold text-sm">{request.author || "Anonymous"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Location</p>
                  <p className="font-bold text-sm">{request.location || "Not specified"}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[35px] shadow-sm">
              <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest mb-8 block">Navigation</span>
              <div className="flex flex-col gap-4 text-xs font-bold text-gray-400">
                <span className="cursor-pointer hover:text-[#0d9488]" onClick={() => navigate('/landing')}>Dashboard</span>
                <span className="cursor-pointer hover:text-[#0d9488]" onClick={() => navigate('/explore')}>Explore Feed</span>
                <span className="cursor-pointer hover:text-[#0d9488]" onClick={() => navigate('/messages')}>Direct Messages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;