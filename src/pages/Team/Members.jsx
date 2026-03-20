import { useState } from 'react';
import { Mail, Linkedin, Maximize, Minimize } from 'lucide-react';

// --- THE ARRAY METHOD: 3 Separate Team Arrays ---

const strategicTeamData = [
  { id: 1, name: "Alice Turing", role: "Strategy Head", image: "", email: "alice@jnnce.ac.in" },
  { id: 2, name: "Bob Lovelace", role: "Planning Lead", image: "", email: "bob@jnnce.ac.in" },
];

const technicalTeamData = [
  { id: 1, name: "Charlie Code", role: "Tech Lead", image: "", email: "charlie@jnnce.ac.in" },
  { id: 2, name: "Dave Bug", role: "Senior Developer", image: "", email: "dave@jnnce.ac.in" },
  { id: 3, name: "Eve Hack", role: "UI/UX Designer", image: "", email: "eve@jnnce.ac.in" },
];

const managementTeamData = [
  { id: 1, name: "Frank Event", role: "Operations Head", image: "", email: "frank@jnnce.ac.in" },
  { id: 2, name: "Grace Host", role: "PR Lead", image: "", email: "grace@jnnce.ac.in" },
];

export default function Members() {
  const [cardSize, setCardSize] = useState('medium'); 

  const gridClasses = {
    large: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    medium: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    small: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  };

  // Helper function to dynamically render a section
  const renderTeamSection = (title, teamArray) => (
    <div className="mb-20">
      {/* Category Heading */}
      <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-100 border-b-2 border-teal-500/30 pb-3 inline-block">
        {title}
      </h2>
      
      {/* Dynamic Grid */}
      <div className={`grid gap-6 transition-all duration-500 ${gridClasses[cardSize]}`}>
        {teamArray.map(member => (
          <div 
            key={member.id} 
            className="glass-card rounded-[1.5rem] overflow-hidden group hover:-translate-y-3 transition-all duration-500 flex flex-col hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] dark:hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:border-teal-400/50"
          >
            {/* Image Section */}
            <div className={`w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden ${cardSize === 'small' ? 'h-32' : 'h-56'}`}>
               {member.image ? (
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               ) : (
                 <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-500 font-medium">Photo Gap</span>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Details Section */}
            <div className={`text-center flex-grow flex flex-col justify-between bg-white/40 dark:bg-slate-900/40 ${cardSize === 'small' ? 'px-2 py-4' : 'p-6'}`}>
              <div>
                <h3 className={`font-bold mb-1 ${cardSize === 'small' ? 'text-sm' : 'text-xl'}`}>{member.name}</h3>
                <p className={`text-teal-600 dark:text-teal-400 font-semibold ${cardSize === 'small' ? 'text-[10px] mb-3' : 'mb-5'}`}>{member.role}</p>
              </div>
              
              {/* Social/Contact Icons */}
              <div className="flex justify-center gap-3">
                <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300">
                  <Mail size={cardSize === 'small' ? 14 : 18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <Linkedin size={cardSize === 'small' ? 14 : 18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        
        {/* Header & Size Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-7">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
              Our Core Team
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">The brilliant minds powering our chapter.</p>
          </div>
          
          {/* Card Size Controls */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 glass-card p-2 rounded-xl shadow-lg">
            <span className="text-sm text-slate-600 dark:text-slate-300 mr-2 font-bold px-2">Size:</span>
            <button onClick={() => setCardSize('small')} className={`p-2 rounded-lg transition-colors ${cardSize === 'small' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}><Minimize size={18} /></button>
            <button onClick={() => setCardSize('medium')} className={`px-4 py-1.5 rounded-lg transition-colors font-bold text-sm ${cardSize === 'medium' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}>M</button>
            <button onClick={() => setCardSize('large')} className={`p-2 rounded-lg transition-colors ${cardSize === 'large' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}><Maximize size={18} /></button>
          </div>
        </div>

        {/* Rendering the Categories using our helper function! */}
        {renderTeamSection("Strategic Planning Team", strategicTeamData)}
        {renderTeamSection("Technical Team", technicalTeamData)}
        {renderTeamSection("Management Committee", managementTeamData)}

      </div>
    </div>
  );
}