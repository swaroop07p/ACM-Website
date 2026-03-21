import { useEffect } from "react";
import { gsap } from "gsap";
import LazyImage from "../components/ui/LazyImage";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// import aimlLogo from '../assets/images/AIMLLOGO.jpg'; // <-- IMPORT HERE

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
    );
  }, []);

  const upcomingEventsData = [
    {
      id: 1,
      heading: "Campus Micro-Disruption Hackathon",
      description:
        "Join us to build alert and resolution systems! A 24-hour coding marathon to solve real campus issues and win prizes.",
      imagePath: "/Home/UpcommingEvents/CANVAPOSTER.jpeg", // e.g., "/Home/hackathon-poster.jpg"
      link: "google.com",
    },
    {
      id: 2,
      heading: "AI Audio Forensic Showcase",
      description:
        "Explore the bleeding edge of AI-generated voice detection and audio forensics in our upcoming technical showcase.",
      imagePath: "/Home/UpcommingEvents/ACMPOSTER.jpeg",
      link: "YOUR_GOOGLE_FORM_LINK_HERE",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-12 relative">
      {/* Background container */}
      {/* <div className="animated-bg"></div> */}

      {/* Div 1: Hero & AIML Logo */}
      {/* 1. Wrap everything in a container to handle the background "frame" */}
      {/* Outer wrapper - keeps the small margin/frame */}
      <div className="p-0 md:p-4 w-full min-h-screen">
        <section
          style={{
            backgroundImage: "url('/Home/JNNCEAIML1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          /* ADDED py-16 (Mobile) and md:py-32 (Laptop) below */
          className="relative min-h-[80vh] py-10 md:py-25 flex flex-col items-center justify-center text-center space-y-8 rounded-3xl overflow-hidden shadow-2xl navbar-glow"
          data-aos="fade-up"
        >
          {/* <div className="absolute inset-0 bg-white/60 dark:bg-black/50 -z-10"></div> */}
          {/* This uses a consistent 40% dark tint for both modes */}
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          {/* --- YOUR ORIGINAL CONTENT (UNTOUCHED) --- */}
          <div className="w-48 h-48 rounded-full glass-card flex items-center justify-center p-1 shadow-2xl hero-text overflow-hidden navbar-glow">
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <LazyImage
                src="/Home/AIMLLOGO.png"
                alt="AIML Logo"
                className="w-full h-full object-cover cursor-default"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight hero-text bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
            Department of AIML
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-2xl hero-text shadow-sm">
            Empowering the future through Artificial Intelligence and Machine
            Learning at JNNCE.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("upcoming-events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1 transition-all duration-300 hero-text"
          >
            Register for Upcoming Event
          </button>
        </section>
      </div>

      {/* Div 2: About Us */}
      <section className="py-10" data-aos="flip-down">
        <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center navbar-glow">
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 font-bold">
              About Our Chapter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <span className="text-cyan-400">Where Innovation Takes Flight.</span> <br />
              JNNACM is a student-driven organization dedicated to fostering
              innovation and technical excellence. We organize events,
              workshops, and hackathons to empower students with the skills they
              need to succeed in the tech industry.
            </p>
          </div>
          <div className="flex-1 w-full h-64 md:h-96 rounded-2xl border-2 border-solid border-gray-400 dark:border-gray-600 flex items-center justify-center relative overflow-hidden">
            {/* Upload your About Us group image here */}
            <div className="flex-1 w-full h-64 md:h-96 rounded-2xl border-1 border-solid border-gray-400 dark:border-gray-600 flex items-center justify-center relative overflow-hidden bg-slate-950">
              <img
                src="/Home/falcon logo.jpg"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10" data-aos="flip-up">
        <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center navbar-glow">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-teal-600 dark:text-teal-400">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                To be a premier center of excellence with research in artificial
                intelligence through unique interdisciplinary partnerships and
                positive contribution to the community, organizations and
                society as a whole.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                Our Mission
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 leading-relaxed space-y-2">
                <li>
                  To impart knowledge in cutting edge Artificial Intelligence
                  technologies in par with industrial standards.
                </li>
                <li>
                  To collaborate with industry to uplift innovative research and
                  development in Artificial Intelligence and Machine Learning
                  and its allied fields to serve the needs of society.
                </li>
                <li>
                  To produce successful Computer Science and Engineering
                  graduates with a specialization in AI/ML with personal and
                  professional responsibilities and commitment to lifelong
                  learning.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full h-64 md:h-[400px] rounded-2xl border-2 border-solid border-gray-400 dark:border-slate-600 flex items-center justify-center relative overflow-hidden">
            {/* Upload your Vision/Mission illustration here */}
            <LazyImage
              src="/Home/AIimage.jpg"
              className="w-full h-full object-cover rounded-xl cursor-default"
            />
          </div>
        </div>
      </section>

      {/* Div 3: Recent Events & Registration */}
      {/* Div 3: Recent Events & Registration */}
      <section id="upcoming-events" className="py-3" data-aos="fade-up">
        <h2 className="text-4xl py-1 md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEventsData.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-[2rem] p-5 flex flex-col h-full group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] dark:hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:border-teal-400/50"
            >
              {/* Image Container */}
              {/* Image Container - Updated to Poster Aspect Ratio (3:4) */}
              <div className="w-full aspect-[3/4] bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 overflow-hidden relative border border-slate-300 dark:border-slate-700">
                {event.imagePath ? (
                  /* We can use object-cover now because the container is properly shaped! */
                  <LazyImage
                    src={event.imagePath}
                    alt={event.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-default"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                    Poster Image Gap
                  </span>
                )}
                {/* Subtle overlay glow on the image */}
                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Event Info */}
              <h3 className="text-2xl font-bold mb-3">{event.heading}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                {event.description}
              </p>

              {/* Registration Button */}
              <a
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white rounded-xl font-bold text-center transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 inline-flex justify-center items-center gap-2"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-full hover:bg-teal-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-xl hover:shadow-teal-500/30 hover:-translate-y-1 group"
          >
            View All Events
            {/* The arrow will gently slide to the right on hover! */}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
