import { BookOpen } from "lucide-react";
import LazyImage from "../components/ui/LazyImage";

// Your dynamic array - add your real data here later!
const magazinesData = [
  {
    id: 15,
    title: "AIML MATTERS",
    date: "November 2025",
    description:
      "The future is not about man versus machine, but man with machine. \n— Geoffrey Hinton",
    coverImage: "/Magazine/MagazineImage/15Nov-Dec-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1r9r0Ag_GK01NEDxMNOIW4bH9DIeqniJa/view?usp=drive_link",
  },
  {
    id: 14,
    title: "AIML MATTERS",
    date: "October 2025",
    description:
      "Artificial intelligence is a mirror it shows us who we are and how we think.\n— Margaret Mitchell",
    coverImage: "/Magazine/MagazineImage/14Oct-Nov-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1NChT3cf8oZXh1DF4gvx_d5b4aQ8-9i5A/view?usp=drive_link",
  },
  {
    id: 13,
    title: "AIML MATTERS",
    date: "August 2023",
    description:
      "Understanding computers will no longer be required they’ll understand us. \n— Ginni Rometty",
    coverImage: "/Magazine/MagazineImage/13Aug-Sep-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1EuzdXulBC4wCH-tLJ1w_7snOTBL70Jo4/view?usp=drive_link",
  },
  {
    id: 12,
    title: "AIML MATTERS",
    date: "April 2025",
    description:
      "Machine intelligence is the last invention that humanity will ever need to make. \n— Nick Bostrom",
    coverImage: "/Magazine/MagazineImage/12Apr-May-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1SWU-7wzeF0Ck2yvV53jxfzQcmpt9idPy/view?usp=drive_link",
  },
  {
    id: 11,
    title: "AIML MATTERS",
    date: "February 2025",
    description:
      "The idea that machines can’t do things humans can is a pure myth. \n— Marvin Minsky",
    coverImage: "/Magazine/MagazineImage/11Feb-Mar-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/106WzW46kLOXuv15J8j35GGpIpHD-mZwm/view?usp=drive_link",
  },
  {
    id: 10,
    title: "AIML MATTERS",
    date: "January 2025",
    description:
      "Our future success hinges on our ability to embrace AI and use it for good. \n— Brad Smith",
    coverImage: "/Magazine/MagazineImage/10Dec-Jan-2025-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1wk0ulVDMZxDkEKJ3QyB18A0zTCgOQNbR/view?usp=drive_link",
  },
  {
    id: 9,
    title: "AIML MATTERS",
    date: "December 2024",
    description:
      "AI doesn’t hate you, nor does it love you—but you are made of atoms it can use. \n— Eliezer Yudkowsky",
    coverImage: "/Magazine/MagazineImage/7Dec-Jan-2024-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1hL-3pg9Nlp12Fo3tLtoBRne22TgxmGij/view?usp=drive_link",
  },
  {
    id: 8,
    title: "AIML MATTERS",
    date: "October 2024",
    description:
      "Artificial intelligence is only as ethical as the humans who design it. \n— Joy Buolamwini",
    coverImage: "/Magazine/MagazineImage/9Oct-Nov-2024-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1Q23YJ0DHWK1PjDB_QXZ_jxotL-w0Pvn0/view?usp=drive_link",
  },
  {
    id: 7,
    title: "AIML MATTERS",
    date: "August 2024",
    description:
      "AI is likely to be either the best or worst thing to happen to humanity.\n— Stephen Hawking",
    coverImage: "/Magazine/MagazineImage/8Aug-Sep-2024-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1smLtrSAARy6v8WeD6Hx2qMcjZXzk8Z11/view?usp=drive_link",
  },
  {
    id: 6,
    title: "AIML MATTERS",
    date: "July 2023",
    description:
      "The goal of AI is not to replace humans, but to work alongside them. \n— Satya Nadella",
    coverImage: "/Magazine/MagazineImage/6Jul-Aug-2023-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1wbiq-zpLqfw3Pk-z8M0DFT2C29pVFZk8/view?usp=drive_link",
  },
  {
    id: 5,
    title: "AIML MATTERS",
    date: "May 2023",
    description:
      "AI systems learn patterns, but humans give them purpose. \n— Stuart Russell",
    coverImage: "/Magazine/MagazineImage/5May-Jun-2023-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1A_ehAQD1eRFfAZQgJDcz1_4AkNd2AOHj/view?usp=drive_link",
  },
  {
    id: 4,
    title: "AIML MATTERS",
    date: "March 2023",
    description:
      "A year spent in Artificial Intelligence is enough for one to believe in God. \n— Alan Perlis",
    coverImage: "/Magazine/MagazineImage/4Mar-Apr-2023-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1njGrlZ2CgRVp2RQ3i6NqB7_RlV9JfECy/view?usp=drive_link",
  },
  {
    id: 3,
    title: "AIML MATTERS",
    date: "February 2023",
    description:
      "The important thing is not to stop questioning. Curiosity has its own reason for existing. \n— Albert Einstein",
    coverImage: "/Magazine/MagazineImage/3Feb-Mar-2023-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1w8Ah4QH__X7GFkudPa0NreJTeAUa4kJx/view?usp=drive_link",
  },
  {
    id: 2,
    title: "AIML MATTERS",
    date: "January 2023",
    description:
      "Intelligence is the ability to adapt to change!! \n— Stephen Hawking",
    coverImage: "/Magazine/MagazineImage/2Jan-Feb-2023-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1Q6kCMLgctqMTaRpLEae5LK0rYzNyfF4_/view?usp=drive_link",
  },
  {
    id: 1,
    title: "AIML MATTERS",
    date: "December 2022",
    description:
      "Predicting the future Isn't magic,It's Artificial Intelligence.\n— Dave Waters",
    coverImage: "/Magazine/MagazineImage/1Dec-Jan-2022-images-0.jpg",
    readLink:
      "https://drive.google.com/file/d/1MahROGg4rDRd9mVRf_kIXfN2srIamSRp/view?usp=drive_link",
  },
];

export default function Magazines() {
  return (
    <div className="min-h-screen pt-32 pb-12 relative z-10">
      {/* Fallback animated background */}
      {/* <div className="animated-bg"></div> */}

      <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
        <h1
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500"
          data-aos="fade-down"
        >
          Chapter Publications
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {magazinesData.map((mag) => (
            <div
              key={mag.id}
              className="glass-card rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 text-left group hover:shadow-teal-500/20 hover:border-teal-500/50 transition-all duration-300"
            >
              {/* Cover Image Section */}
              <div className="w-full sm:w-1/3 shrink-0 bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 font-bold overflow-hidden border border-slate-300 dark:border-slate-700 relative">
                {mag.coverImage ? (
                  <LazyImage
                    src={mag.coverImage}
                    alt={mag.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <BookOpen size={32} />
                    <span className="text-sm">Cover Gap</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <h3 className="text-2xl font-bold mb-3 truncate">
                  {mag.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed  line-clamp-3 flex-grow whitespace-pre-line">
                  {mag.description}
                </p>
                <p className="text-sm font-medium mb-4 text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <span className="opacity-80 text-xs uppercase tracking-wider">
                    Published:
                  </span>{" "}
                  {mag.date}
                </p>
                <a
                  href={mag.readLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-xl hover:bg-teal-500 hover:text-white transition-all w-max inline-flex items-center gap-2"
                >
                  <BookOpen size={18} /> Read Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
