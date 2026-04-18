import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const [requests] = useState([
    {
      id: 1,
      category: 'Web Development',
      urgency: 'High',
      status: 'Solved',
      title: 'Need help',
      description: 'helpn needed',
      tags: [],
      author: 'Ayesha Khan',
      location: 'Karachi',
      helpers: 1
    },
    {
      id: 2,
      category: 'Web Development',
      urgency: 'High',
      status: 'Solved',
      title: 'Need help making my portfolio responsive before demo day',
      description: 'My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.',
      tags: ['HTML/CSS', 'Responsive', 'Portfolio'],
      author: 'Sara Noor',
      location: 'Karachi',
      helpers: 1
    },
    {
      id: 3,
      category: 'Design',
      urgency: 'Medium',
      status: 'Open',
      title: 'Looking for Figma feedback on a volunteer event poster',
      description: 'I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.',
      tags: ['Figma', 'Poster', 'Design Review'],
      author: 'Ayesha Khan',
      location: 'Lahore',
      helpers: 1
    },
    {
      id: 4,
      category: 'Career',
      urgency: 'Low',
      status: 'Solved',
      title: 'Need mock interview support for internship applications',
      description: 'Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.',
      tags: ['Interview Prep', 'Career', 'Frontend'],
      author: 'Sara Noor',
      location: 'Remote',
      helpers: 2
    }
  ]);

  const [filterCategory, setFilterCategory] = useState('All categories');
  const [filterUrgency, setFilterUrgency] = useState('All urgency levels');
  const [filterSkills, setFilterSkills] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const filteredRequests = requests.filter(req => {
    const matchCategory = filterCategory === 'All categories' || req.category === filterCategory;
    const matchUrgency = filterUrgency === 'All urgency levels' || req.urgency === filterUrgency;
    const matchLocation = filterLocation === '' || req.location.toLowerCase().includes(filterLocation.toLowerCase());
    const matchSkills = filterSkills === '' || req.tags.some(t => t.toLowerCase().includes(filterSkills.toLowerCase())) || req.title.toLowerCase().includes(filterSkills.toLowerCase());
    return matchCategory && matchUrgency && matchLocation && matchSkills;
  });

  return (
    <div className="min-h-screen bg-[#f4ece1] font-sans p-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-[#2a302e] text-white p-12 rounded-[40px] mb-8">
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400">Explore / Feed</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">Browse help requests with filterable<br/>community context.</h1>
          <p className="text-gray-400">Filter by category, urgency, skills, and location to surface the best matches.</p>
        </div>

        <div className="flex gap-8">
          <div className="w-[300px] bg-white p-8 rounded-[32px] h-fit">
            <span className="text-xs font-bold text-[#008080] uppercase tracking-widest">Filters</span>
            <h2 className="text-3xl font-bold mt-2 mb-8">Refine the feed</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none"
                >
                  <option value="All categories">All categories</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Design">Design</option>
                  <option value="Career">Career</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgency</label>
                <select 
                  value={filterUrgency}
                  onChange={(e) => setFilterUrgency(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none"
                >
                  <option value="All urgency levels">All urgency levels</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Skills</label>
                <textarea 
                  value={filterSkills}
                  onChange={(e) => setFilterSkills(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-24 resize-none" 
                  placeholder="React, Figma, Git/GitHub"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <textarea 
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full p-4 border border-gray-100 rounded-2xl bg-white outline-none h-24 resize-none" 
                  placeholder="Karachi, Lahore, Remote"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {filteredRequests.map((request) => (
              <div key={request.id} className="bg-white p-8 rounded-[32px]">
                <div className="flex gap-2 mb-4">
                  <span className="bg-[#e0f0eb] text-[#008080] px-3 py-1 rounded-full text-xs font-bold">{request.category}</span>
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">{request.urgency}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${request.status === 'Solved' ? 'bg-green-50 text-green-600' : 'bg-[#e0f0eb] text-[#008080]'}`}>{request.status}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{request.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{request.description}</p>
                
                {request.tags.length > 0 && (
                  <div className="flex gap-2 mb-6">
                    {request.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">{request.author}</p>
                    <p className="text-xs text-gray-400">{request.location} • {request.helpers} helper interested</p>
                  </div>
                  <button onClick={() => navigate('/request-detail')} className="border border-gray-200 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-50 transition-all">Open details</button>
                </div>
              </div>
            ))}

            {filteredRequests.length === 0 && (
              <div className="bg-white p-8 rounded-[32px] text-center text-gray-500 font-medium">
                No requests found for these filters.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Explore;