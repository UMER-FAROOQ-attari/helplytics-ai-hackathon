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
    <div className="min-h-screen bg-[#f4ece1] font-sans">
      {/* Black Header Area */}
      <div className="bg-[#222a28] text-white pt-20 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Explore / Feed</span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Browse help requests with filterable community context.
          </h1>
          <p className="text-gray-400 text-sm font-medium">
            Filter by category, urgency, skills, and location to surface the best matches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-80 space-y-8 bg-white p-8 rounded-[40px] border border-gray-100 h-fit shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-[#008080] uppercase tracking-widest block mb-2">Filters</span>
            <h2 className="text-3xl font-bold text-[#222a28]">Refine the feed</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-3">Category</label>
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none text-sm font-medium">
                <option>All categories</option>
                <option>Web Development</option>
                <option>Design</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-3">Urgency</label>
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none text-sm font-medium">
                <option>All urgency levels</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-3">Skills</label>
              <input type="text" placeholder="React, Figma, Git..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none text-sm" />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase mb-3">Location</label>
              <input type="text" placeholder="Karachi, Lahore, Remote" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none text-sm" />
            </div>
          </div>
        </div>

        {/* Right Side - Request Cards */}
        <div className="flex-1 space-y-6">
          {requests.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-bold">No requests found yet, jani!</p>
            </div>
          ) : (
            requests.map((item) => (
              <div key={item._id} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 mb-4">
                  <span className="bg-[#008080]/10 text-[#008080] text-[10px] font-bold px-3 py-1 rounded-full uppercase">{item.category}</span>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${item.urgency === 'High' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                    {item.urgency}
                  </span>
                  <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Open</span>
                </div>

                <h3 className="text-xl font-bold text-[#222a28] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{item.description}</p>

                <div className="flex justify-between items-end pt-6 border-t border-gray-50">
                  <div>
                    <p className="font-bold text-sm text-[#222a28]">{item.author}</p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {item.location} • {item.helpers || 0} helper interested
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate(`/request/${item._id}`)}
                    className="bg-gray-50 hover:bg-gray-100 text-[#222a28] font-bold py-3 px-6 rounded-2xl text-xs transition-colors"
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