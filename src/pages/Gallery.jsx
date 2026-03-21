import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import LazyImage from "../components/ui/LazyImage";

// Mock data - replace with your actual images!
const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105180/WhatsApp_Image_2026-03-21_at_8.20.25_PM_2_tgzkkt.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105180/WhatsApp_Image_2026-03-21_at_8.20.26_PM_2_jt3nsr.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105180/WhatsApp_Image_2026-03-21_at_8.20.26_PM_1_rtxdxo.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105179/WhatsApp_Image_2026-03-21_at_8.20.25_PM_1_w2d6ph.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105181/WhatsApp_Image_2026-03-21_at_8.20.26_PM_3_z36g78.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105180/WhatsApp_Image_2026-03-21_at_8.20.25_PM_u17jkj.jpg",
    event: "Falcon Inaugration 2025",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dsojrrb9j/image/upload/v1774105181/WhatsApp_Image_2026-03-21_at_8.20.26_PM_unlpn1.jpg",
    event: "Falcon Inaugration 2025",
  },
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const filteredImages = galleryImages.filter((img) =>
    img.event.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative z-10">
      {/* <div className="animated-bg"></div> */}

      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <h1
          className="text-5xl font-bold text-center pt-5 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 py-1"
          data-aos="fade-down"
        >
          Memory Gallery
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
            size={20}
          />
          <input
            type="text"
            placeholder="Search events by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full glass-card py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white/50 dark:bg-black/50"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="relative group rounded-xl overflow-hidden aspect-square"
            >
              <LazyImage
                src={img.src}
                alt={img.event}
                className="w-full h-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
                onClick={() => setSelectedImgIndex(index)}
              />
              <div className="absolute top-2 right-2 glass-card px-3 py-1 rounded-full text-xs font-bold shadow-md">
                {img.event}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImgIndex(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white hover:text-teal-400 p-2">
              <X size={32} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-10 text-white hover:text-teal-400 p-2"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              key={selectedImgIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={filteredImages[selectedImgIndex].src}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl md:mt-20"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-10 text-white hover:text-teal-400 p-2"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-11 text-white font-bold text-xl glass-card px-6 py-2 rounded-full">
              {filteredImages[selectedImgIndex].event}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
