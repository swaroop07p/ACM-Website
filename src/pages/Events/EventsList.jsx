import { Link } from "react-router-dom";
import { Calendar, Trophy, ArrowRight } from "lucide-react";

// 1. EXPORT the array so EventDetails.jsx can access it!
// 2. Add a 'memories' array inside each event dictionary.
export const eventsData = [
  {
    id: 1,
    title: "Code Relay 2025",
    date: "Oct 15, 2025",
    desc: "A thrilling 12-hour coding relay.",
    poster: "", // e.g., "/images/poster1.jpg"
    winners: "", // e.g., "/images/winners1.jpg"
    memories: [
      { id: 101, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
      { id: 102, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800" },
    ],
  },
  {
    id: 2,
    title: "AI & ML Summit 2026",
    date: "Nov 20, 2026",
    desc: "Exploring the bleeding edge of AI generation and forensics.",
    poster: "",
    winners: "",
    memories: [
      { id: 201, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800" },
      { id: 202, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800" },
      { id: 203, src: "/public/Faculty/aaliya.jpg" },
    ],
  },
];

export default function EventsList() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-center mt-5 mb-5 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500" data-aos="fade-down">
          Hall of Events
        </h1>

        <div className="space-y-12">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center group"
            >
              {/* Dual Image Display */}
              <div className="flex-shrink-0 w-full lg:w-1/2 flex gap-4">
                
                {/* Poster Container */}
                <div className="flex-1 aspect-[3/4] rounded-2xl bg-slate-200 dark:bg-slate-800 relative overflow-hidden shadow-lg border-2 border-slate-300 dark:border-slate-700">
                  {event.poster ? (
                    <img src={event.poster} alt="Poster" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                      <Calendar size={32} />
                      <span className="mt-2 text-sm font-bold">Poster</span>
                    </div>
                  )}
                </div>

                {/* Winners Container */}
                <div className="flex-1 aspect-[3/4] rounded-2xl bg-slate-200 dark:bg-slate-800 relative overflow-hidden shadow-lg border-2 border-yellow-400/50">
                  {event.winners ? (
                    <img src={event.winners} alt="Winners" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-600 dark:text-yellow-500">
                      <Trophy size={32} />
                      <span className="mt-2 text-sm font-bold">Winning Team</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info & Link */}
              <div className="flex-grow space-y-4">
                <h2 className="text-3xl font-bold">{event.title}</h2>
                <p className="text-teal-600 dark:text-teal-400 font-semibold">
                  {event.date}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {event.desc}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl hover:bg-teal-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300"
                >
                  View Memories <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}