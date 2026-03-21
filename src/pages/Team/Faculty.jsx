import { Mail, Linkedin } from 'lucide-react';
import LazyImage from '../../components/ui/LazyImage';

const facultyMembers = [
  { id: 1, name: "Dr. Chetan K R", role: "Prof. and Head, Dept of AIML", image: "/Faculty/hod.jpg", email: "" },
  { id: 2, name: "Dr. Ashwini J P", role: "Associate Professor", image: "/Faculty/Dr Ashwini JP.jpg", email: "" },
  { id: 3, name: "Mr. Sayyed Johar", role: "Assistant Professor", image: "/Faculty/Mr Sayyed Johar.jpg", email: "" },
  { id: 4, name: "Mr. Ranjan V", role: "Assistant Prof. and team Coordinator", image: "/Faculty/ranjan.jpeg", email: "" },
  { id: 5, name: "Mrs. Shaziya Banu S", role: "Assistant Professor", image: "/Faculty/shaziya.jpg", email: "" },
  { id: 6, name: "Mr. Nishanth S", role: "Assistant Professor", image: "/Faculty/nishanth s.jpg", email: "" },
  { id: 7, name: "Ms. Aaliya Waseem", role: "Assistant Professor", image: "/Faculty/aaliya.jpg", email: "" },
  // Add your 5 other faculty members here!
];

// const ProfileCard = ({ person }) => (
//   <div className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
//     <div className="h-64 w-full bg-gray-200 dark:bg-slate-700 relative">
//        {/* Use LazyImage once you have the photos! */}
//        <span className="absolute inset-0 flex items-center justify-center text-slate-500">Photo Gap</span>
//     </div>
//     <div className="p-6 text-center">
//       <h3 className="text-xl font-bold mb-1">{person.name}</h3>
//       <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">{person.role}</p>
//       <div className="flex justify-center gap-4">
//         <a href={`mailto:${person.email}`} className="text-slate-500 hover:text-teal-500 transition-colors"><Mail size={20} /></a>
//         <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
//       </div>
//     </div>
//   </div>
// );

export default function Faculty() {
    return (
      <div className="min-h-screen pt-32 pb-12 relative z-10">
        {/* <div className="animated-bg"></div> */}
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          
          <div className="text-center mb-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 py-[3px]">Our Guiding Force</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Meet the exceptional faculty members who mentor and drive the <span className='text-cyan-400'>JNNCE ACM</span> Student Chapter towards <span className='text-cyan-400'>excellence</span>.
            </p>
          </div>
  
          {/* Using a 3-column grid for large, prominent cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facultyMembers.map(faculty => (
              <div key={faculty.id} className="glass-card rounded-[2rem] overflow-hidden group hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-400/50" data-aos="fade-up">
                
                {/* Large Image Container */}
                <div className="w-full h-[350px] bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                   {/* Upload Faculty images here! */}
                   <LazyImage src={faculty.image} className="w-full h-full object-cover rounded-xl" />
                   
                   {/* Hover overlay gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Information Section */}
                <div className="p-8 text-center flex-grow flex flex-col justify-between bg-white/50 dark:bg-slate-900/50">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{faculty.name}</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-semibold text-lg mb-6">{faculty.role}</p>
                  </div>
                  
                  {/* Social/Contact Icons */}
                  <div className="flex justify-center gap-6">
                    <a href={`mailto:${faculty.email}`} className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                      <Linkedin size={24} />
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