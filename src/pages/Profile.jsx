import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('Ayesha Khan');
  const [role, setRole] = useState('Both');
  const [location, setLocation] = useState('Karachi');
  const [skillsStr, setSkillsStr] = useState('Figma, UI/UX, HTML/CSS, Career Guidance');
  const [interestsStr, setInterestsStr] = useState('Hackathons, UI/UX, Community Building');

  useEffect(() => {
    const savedUser = localStorage.getItem('helplytics_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setName(parsedUser.name || 'Ayesha Khan');
      setRole(parsedUser.role || 'Both');
      setLocation(parsedUser.location || 'Karachi');
    }
  }, []);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    
    const existingData = JSON.parse(localStorage.getItem('helplytics_user')) || {};
    const updatedData = {
      ...existingData,
      name: name,
      location: location,
      skills: skillsStr,
      interests: interestsStr
    };
    
    localStorage.setItem('helplytics_user', JSON.stringify(updatedData));
    alert('Profile updated successfully!');
  };

  const skillsArray = skillsStr.split(',').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="min-h-screen bg-[#f6f3ed] p-10 flex flex-col items-center font-sans">
      <div className="max-w-6xl w-full">
        <div className="bg-[#1a2622] text-white p-12 rounded-[30px] mb-8 shadow-sm">
          <span className="uppercase text-[10px] font-bold tracking-widest text-gray-400 block mb-4">Profile</span>
          <h1 className="text-6xl font-bold mb-4">{name}</h1>
          <p className="text-gray-400 text-sm font-medium">{role} • {location}</p>
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#0d9488] text-white h-8 w-8 flex items-center justify-center rounded-lg font-bold text-sm">H</div>
            <span className="font-bold text-sm text-[#1a2622]">HelpHub AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Dashboard</span>
            <span className="cursor-pointer hover:text-black" onClick={() => navigate('/landing')}>Onboarding</span>
            <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-1.5 rounded-full font-bold">Profile</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white p-10 rounded-[35px] shadow-sm">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Public Profile</span>
            <h2 className="text-4xl font-bold mb-10 text-[#1a2622]">Skills and reputation</h2>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between border-b border-gray-50 pb-4">
                <span className="text-gray-500 text-sm">Trust score</span>
                <span className="font-bold text-sm text-[#1a2622]">100%</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-4">
                <span className="text-gray-500 text-sm">Contributions</span>
                <span className="font-bold text-sm text-[#1a2622]">35</span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xs font-bold text-[#1a2622] uppercase tracking-widest mb-6">Skills</h3>
              <div className="flex gap-2 flex-wrap">
                {skillsArray.map((skill, index) => (
                  <span key={index} className="bg-[#eef7f6] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#1a2622] uppercase tracking-widest mb-6">Badges</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold">Design Ally</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold">Fast Responder</span>
                <span className="bg-[#eef7f6] text-[#0d9488] px-4 py-2 rounded-full text-[10px] font-bold">Top Mentor</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-10 rounded-[35px] shadow-sm h-fit">
            <span className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest block mb-6">Edit Profile</span>
            <h2 className="text-3xl font-bold mb-10 text-[#1a2622]">Update your identity</h2>

            <form className="space-y-6" onSubmit={handleSaveProfile}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm focus:border-[#0d9488]" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">Location</label>
                  <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm focus:border-[#0d9488]" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Skills</label>
                <input 
                  type="text" 
                  value={skillsStr} 
                  onChange={(e) => setSkillsStr(e.target.value)}
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm focus:border-[#0d9488]" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2">Interests</label>
                <input 
                  type="text" 
                  value={interestsStr} 
                  onChange={(e) => setInterestsStr(e.target.value)}
                  className="w-full p-4 bg-[#f9f9f9] border border-gray-100 rounded-2xl outline-none text-sm focus:border-[#0d9488]" 
                />
              </div>

              <button type="submit" className="w-full bg-[#0d9488] text-white py-4 rounded-full font-bold text-sm hover:bg-[#0b7a6f] transition-all shadow-md">
                Save profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;