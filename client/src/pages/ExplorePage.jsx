import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExplorePage = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/requests');
      setRequests(res.data);
    } catch (err) {
      console.log("Data fetching error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] font-sans">
      <div className="bg-[#1a2622] text-white pt-24 pb-16 px-12 mx-10 mt-5 rounded-[30px]">
        <div className="max-w-7xl">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Explore / Feed</span>
          <h1 className="text-5xl font-bold leading-tight max-w-3xl mb-6">
            Browse help requests with filterable community context.
          </h1>
          <p className="text-gray-400 text-sm">
            Filter by category, urgency, skills, and location to surface the best matches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-80 space-y-10 bg-white p-10 rounded-[35px] h-fit shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-2">Filters</span>
            <h2 className="text-4xl font-bold text-[#1a2622]">Refine the feed</h2>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-4">Category</label>
              <select className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm appearance-none">
                <option>All categories</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Career</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-4">Urgency</label>
              <select className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm appearance-none">
                <option>All urgency levels</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-4">Skills</label>
              <input 
                type="text" 
                placeholder="React, Figma, Git/GitHub" 
                className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm" 
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-4">Location</label>
              <input 
                type="text" 
                placeholder="Karachi, Lahore, Remote" 
                className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm" 
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {requests.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[35px] border border-gray-100">
              <p className="text-gray-400 font-bold">No requests found yet!</p>
            </div>
          ) : (
            requests.map((item) => (
              <div key={item._id} className="bg-white p-8 rounded-[35px] border border-gray-50 shadow-sm">
                <div className="flex gap-2 mb-4">
                  <span className="bg-[#eef7f6] text-[#0d9488] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${item.urgency === 'High' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                    {item.urgency}
                  </span>
                  <span className="bg-[#eef7f6] text-[#0d9488] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    Solved
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1a2622] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <div>
                    <p className="font-bold text-sm text-[#1a2622] mb-1">{item.author}</p>
                    <p className="text-[11px] text-gray-400 font-medium italic">
                      {item.location} • {item.helpers || 0} helper interested
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate(`/request/${item._id}`)}
                    className="bg-white border border-gray-100 hover:bg-gray-50 text-[#1a2622] font-bold py-3 px-6 rounded-2xl text-xs transition-all shadow-sm"
                  >
                    Open details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;