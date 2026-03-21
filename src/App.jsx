import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Faculty from "./pages/Team/Faculty";
import Members from "./pages/Team/Members";
import EventsList from "./pages/Events/EventsList";
import Magazines from "./pages/Magazines";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import EventDetails from "./pages/Events/EventDetails";
import VantaBackground from "./components/layout/VantaBackground";
import ScrollToTop from "./components/layout/ScrollToTop";

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center pt-20">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
      {title} Page Coming Soon
    </h1>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />

      <div className="text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
        {/* ==============================================
            BACKGROUND ANIMATIONS TOGGLE ZONE 
            You can keep both, or comment one out to test!
        ============================================== */}

        {/* ANIMATION 1: The New CSS Cyber Grid (z-index: -5) */}
        <div className="animated-bg"></div>

        {/* ANIMATION 2: The 3D Flying Birds (z-index: -10) */}
        <VantaBackground darkMode={darkMode} />

        {/* App Content */}
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="px-4 md:px-8 lg:px-16 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team/faculty" element={<Faculty />} />
            <Route path="/team/members" element={<Members />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/team" element={<PlaceholderPage title="Team" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
