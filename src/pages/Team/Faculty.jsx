import { useState, useEffect } from 'react';
import { Mail, Linkedin, Maximize, Minimize } from 'lucide-react';
import LazyImage from '../../components/ui/LazyImage';

const facultyMembers = [
  { id: 1, name: "Dr. Chetan K R", role: "Prof. and Head, Dept of AIML", image: "/Faculty/hod.jpg", email: "" },
  { id: 2, name: "Dr. Ashwini J P", role: "Associate Professor", image: "/Faculty/Dr Ashwini JP.jpg", email: "" },
  { id: 3, name: "Mr. Sayyed Johar", role: "Assistant Professor", image: "/Faculty/Mr Sayyed Johar.jpg", email: "" },
  { id: 4, name: "Mr. Ranjan V", role: "Assistant Prof. and team Coordinator", image: "/Faculty/ranjan.jpeg", email: "" },
  { id: 5, name: "Mrs. Shaziya Banu S", role: "Assistant Professor", image: "/Faculty/shaziya.jpg", email: "" },
  { id: 6, name: "Mr. Nishanth S", role: "Assistant Professor", image: "/Faculty/nishanth s.jpg", email: "" },
  { id: 7, name: "Ms. Aaliya Waseem", role: "Assistant Professor", image: "/Faculty/aaliya.jpg", email: "" },
];

export default function Faculty() {
  // Defaulting to 'large' to preserve the original 3-column prominent layout on load
  const [cardSize, setCardSize] = useState('medium'); 

  useEffect(() => {
    // Check if screen is wider than 768px (standard 'md' breakpoint)
    if (window.innerWidth >= 768) {
      setCardSize('large');
    } else {
      setCardSize('medium');
    }
  }, []); // Empty dependency array means this runs once on load

  const gridClasses = {
    large: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    medium: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    small: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
  };

  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10">
      {/* <div className="animated-bg"></div> */}
      <div className="max-w-7xl mx-auto px-1" data-aos="fade-up">
        
        {/* Header & Size Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 py-[3px]">
              Our Guiding Force
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Meet the exceptional faculty members who mentor and drive the <span className='text-cyan-400'>JNNCE ACM</span> Student Chapter towards <span className='text-cyan-400'>excellence</span>.
            </p>
          </div>
          
          {/* Card Size Controls */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 glass-card p-2 rounded-xl shadow-lg">
            <span className="text-sm text-slate-600 dark:text-slate-300 mr-2 font-bold px-2">Size:</span>
            <button onClick={() => setCardSize('small')} className={`p-2 rounded-lg transition-colors ${cardSize === 'small' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}><Minimize size={18} /></button>
            <button onClick={() => setCardSize('medium')} className={`px-4 py-1.5 rounded-lg transition-colors font-bold text-sm ${cardSize === 'medium' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}>M</button>
            <button onClick={() => setCardSize('large')} className={`p-2 rounded-lg transition-colors ${cardSize === 'large' ? 'bg-teal-500 text-white shadow-md' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}><Maximize size={18} /></button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className={`grid gap-6 transition-all duration-500 ${gridClasses[cardSize]}`}>
          {facultyMembers.map(faculty => (
            <div
              key={faculty.id} 
              className="glass-card rounded-[2rem] overflow-hidden group hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-400/50" 
              data-aos="fade-up"
            >
            
              {/* Dynamic Image Container */}
              <div className={`w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden ${cardSize === 'large' ? 'h-[350px]' : cardSize === 'medium' ? 'h-56' : 'h-32'}`}>
                 <LazyImage src={faculty.image} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                
                 {/* Hover overlay gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Dynamic Information Section */}
              <div className={`text-center flex-grow flex flex-col justify-between bg-white/50 dark:bg-slate-900/50 ${cardSize === 'large' ? 'p-8' : cardSize === 'medium' ? 'p-6' : 'px-2 py-4'}`}>
                <div>
                  <h3 className={`font-bold mb-2 ${cardSize === 'large' ? 'text-2xl' : cardSize === 'medium' ? 'text-xl' : 'text-sm'}`}>
                    {faculty.name}
                  </h3>
                  <p className={`text-teal-600 dark:text-teal-400 font-semibold ${cardSize === 'large' ? 'text-lg mb-6' : cardSize === 'medium' ? 'text-base mb-5' : 'text-[10px] mb-3'}`}>
                    {faculty.role}
                  </p>
                </div>
                
                {/* Social/Contact Icons */}
                <div className={`flex justify-center ${cardSize === 'large' ? 'gap-6' : 'gap-3'}`}>
                  <a href={`mailto:${faculty.email}`} className={`rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 ${cardSize === 'large' ? 'p-3' : 'p-2'}`}>
                    <Mail size={cardSize === 'large' ? 24 : cardSize === 'medium' ? 18 : 14} />
                  </a>
                  <a href="#" className={`rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300 ${cardSize === 'large' ? 'p-3' : 'p-2'}`}>
                    <Linkedin size={cardSize === 'large' ? 24 : cardSize === 'medium' ? 18 : 14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}