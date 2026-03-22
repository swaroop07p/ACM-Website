import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import LazyImage from '../../components/ui/LazyImage';

// 1. IMPORT the shared data array from your EventsList file!
import { eventsData } from './EventsList'; 

export default function EventDetails() {
  const { eventId } = useParams(); // Gets the ID from the URL (e.g., "1" or "2")
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  // 2. Find the exact event dictionary that matches the URL ID
  const currentEvent = eventsData.find((e) => e.id === parseInt(eventId));

  // 3. Fallback: If the user types a bad URL, show a "Not Found" message
  if (!currentEvent) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Event Not Found</h1>
        <Link to="/events" className="px-6 py-2 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400">
          Return to Events
        </Link>
      </div>
    );
  }

  // Use the specific memories for this event!
  const eventMemories = currentEvent.memories || [];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === eventMemories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev === 0 ? eventMemories.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link to="/events" className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold mb-4 transition-colors">
              <ArrowLeft size={20} /> Back to All Events
            </Link>
            
            {/* Dynamically display the correct event title! */}
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Memories: {currentEvent.title}
            </h1>
          </div>
        </div>

        {/* Memory Gallery Grid */}
        {eventMemories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventMemories.map((img, index) => (
              <div key={img.id} className="relative group rounded-2xl overflow-hidden aspect-square shadow-lg border border-white/20 dark:border-slate-700/50 cursor-pointer">
                <LazyImage 
                  src={img.src} 
                  alt={`Memory ${img.id}`} 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  onClick={() => setSelectedImgIndex(index)}
                />
                <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400 font-medium text-xl">
            No memories uploaded for this event yet!
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImgIndex(null)}
            className="fixed inset-0 z-[110] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-teal-400 p-2 transition-colors"><X size={36} /></button>
            <button onClick={handlePrev} className="absolute left-4 md:left-10 text-white/70 hover:text-teal-400 p-2 transition-colors"><ChevronLeft size={48} /></button>
            
            <motion.img 
              key={selectedImgIndex}
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={eventMemories[selectedImgIndex].src}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl md:mt-20"
              onClick={(e) => e.stopPropagation()} 
            />

            <button onClick={handleNext} className="absolute right-4 md:right-10 text-white/70 hover:text-teal-400 p-2 transition-colors"><ChevronRight size={48} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}