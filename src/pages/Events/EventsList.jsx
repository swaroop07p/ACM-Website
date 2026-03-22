import { Link } from "react-router-dom";
import { Calendar, Trophy, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { eventArray } from "./EventsData";
import LazyImage from "../../components/ui/LazyImage";

// 1. EXPORT the array so EventDetails.jsx can access it!
// 2. Add a 'memories' array inside each event dictionary.
export const eventsData = eventArray;

export default function EventsList() {
  // 1. Add the state to track the search input
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Filter the events based on the search term matching the title
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        {/* data-aos="fade-up"> */}
        <h1 className="text-5xl font-bold text-center mt-5 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500" data-aos="fade-down">
          Hall of Events
        </h1>

        {/* 3. ADD THE SEARCH BAR HERE */}
        <div className="max-w-md mx-auto mb-3 relative" data-aos="fade-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
          <input 
            type="text" 
            placeholder="Search events by title..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full glass-card py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white/50 dark:bg-black/50"
          />
        </div>

        <div className="space-y-12">
          {/* 4. Change 'eventsData.map' to 'filteredEvents.map' */}
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center group hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-400/50"
              >
                {/* ... The rest of your exact same card code stays here! (Dual images, info, link, etc.) ... */}
                {/* Dual Image Display */}
                <div className="flex-shrink-0 w-full lg:w-1/2 flex gap-4">
                  {/* Poster Container */}
                  <div className="flex-1 aspect-[3/4] rounded-2xl bg-slate-200 dark:bg-slate-800 relative overflow-hidden shadow-lg border-2 border-slate-300 dark:border-slate-700">
                    {event.poster ? (
                      <LazyImage src={event.poster} alt="Poster" className="w-full h-full object-cover" />
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
                      <LazyImage src={event.winners} alt="Winners" className="w-full h-full object-cover" />
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
            ))
          ) : (
            /* Show a message if no events match the search */
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 font-medium text-xl">
              No events found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
