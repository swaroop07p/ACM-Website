import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import LazyImage from "../ui/LazyImage";
// Importing FontAwesome icons for the mobile menu
import {
  FaHome,
  FaImages,
  FaUserTie,
  FaUsers,
  FaCalendarAlt,
  FaBookOpen,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setTeamDropdownOpen(false);
  };

  // Color mapping for the different pages
  const colorStyles = {
    cyan: {
      bar: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
      beam: "from-cyan-400/50",
      text: "text-cyan-500 dark:text-cyan-300",
      mobileBg:
        "from-cyan-500 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    },
    fuchsia: {
      bar: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]",
      beam: "from-fuchsia-400/50",
      text: "text-fuchsia-500 dark:text-fuchsia-300",
      mobileBg:
        "from-fuchsia-500 to-purple-500 shadow-[0_0_20px_rgba(232,121,249,0.4)]",
    },
    purple: {
      bar: "bg-purple-400 shadow-[0_0_8px_#c084fc]",
      beam: "from-purple-400/50",
      text: "text-purple-500 dark:text-purple-300",
      mobileBg:
        "from-purple-500 to-indigo-500 shadow-[0_0_20px_rgba(192,132,252,0.4)]",
    },
    orange: {
      bar: "bg-orange-400 shadow-[0_0_8px_#fb923c]",
      beam: "from-orange-400/50",
      text: "text-orange-500 dark:text-orange-300",
      mobileBg:
        "from-orange-500 to-red-500 shadow-[0_0_20px_rgba(251,146,60,0.4)]",
    },
    lime: {
      bar: "bg-lime-400 shadow-[0_0_8px_#a3e635]",
      beam: "from-lime-400/50",
      text: "text-lime-500 dark:text-lime-300",
      mobileBg:
        "from-lime-500 to-green-500 shadow-[0_0_20px_rgba(163,230,53,0.4)]",
    },
    blue: {
      bar: "bg-blue-400 shadow-[0_0_8px_#60a5fa]",
      beam: "from-blue-400/50",
      text: "text-blue-500 dark:text-blue-300",
      mobileBg:
        "from-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(96,165,250,0.4)]",
    },
    rose: {
      bar: "bg-rose-400 shadow-[0_0_8px_#fb7185]",
      beam: "from-rose-400/50",
      text: "text-rose-500 dark:text-rose-300",
      mobileBg:
        "from-rose-500 to-pink-500 shadow-[0_0_20px_rgba(251,113,133,0.4)]",
    },
  };

  // Unified array with colors assigned
  const desktopNavItems = [
    { name: "Home", path: "/", color: "cyan" },
    { name: "Gallery", path: "/gallery", color: "fuchsia" },
    { name: "Team", isDropdown: true, color: "purple" },
    { name: "Events", path: "/events", color: "orange" },
    { name: "Magazines", path: "/magazines", color: "lime" },
    { name: "Certificate", path: "/certificate", color: "blue" },
    { name: "Contact", path: "/contact", color: "rose" },
  ];

  // Mobile nav array including Fa Icons
  const mobileNavItems = [
    { name: "Home", path: "/", icon: FaHome, color: "cyan" },
    { name: "Gallery", path: "/gallery", icon: FaImages, color: "fuchsia" },
    {
      name: "Faculty",
      path: "/team/faculty",
      icon: FaUserTie,
      color: "purple",
    },
    { name: "Members", path: "/team/members", icon: FaUsers, color: "purple" },
    { name: "Events", path: "/events", icon: FaCalendarAlt, color: "orange" },
    { name: "Magazines", path: "/magazines", icon: FaBookOpen, color: "lime" },
    {
      name: "Certificate",
      path: "/certificate",
      icon: FaCertificate,
      color: "blue",
    },
    { name: "Contact", path: "/contact", icon: FaEnvelope, color: "rose" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <LayoutGroup>
      {/* Added 'navbar-glow' class here for the pulsing edges! */}
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        className="fixed top-4 sm:top-6 left-1/2 z-[100] w-[95%] max-w-6xl bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl rounded-full p-2 border flex items-center justify-between transition-colors duration-300 navbar-glow"
      >
        {/* Left Side: Logo Area */}
        <Link
          to="/"
          className="flex items-center gap-3 pl-1 pr-4"
          onClick={closeMenu}
        >
          <div className="w-32 h-[60px] bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.4)] border border-teal-100 dark:border-slate-700 p-0.5">
            {/* Image for Light Mode */}
            <LazyImage
              src="/Home/ACMLOGO.png"
              alt="ACM Logo"
              className="dark:hidden w-full h-full object-cover rounded-full"
            />

            {/* Image for Dark Mode */}
            <LazyImage
              src="/Home/ACMLOGO1.png"
              alt="ACM Logo"
              className="hidden dark:block w-full h-full object-cover rounded-full"
            />
          </div>
        </Link>

        {/* Middle: Desktop Links (Mapped in one go to stop bouncing) */}
        <div className="hidden md:flex items-center space-x-1 relative">
          {desktopNavItems.map((item) => {
            // Handle Team Dropdown specifically
            if (item.isDropdown) {
              const isTeamActive = location.pathname.includes("/team");
              const activeStyle = colorStyles[item.color];

              return (
                <div
                  key={item.name}
                  className="relative group px-4 py-2"
                  onMouseEnter={() => setTeamDropdownOpen(true)}
                  onMouseLeave={() => setTeamDropdownOpen(false)}
                >
                  {/* Spotlight Effect for Dropdown */}
                  {isTeamActive && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-12 pointer-events-none flex flex-col items-center justify-start z-0">
                      <div
                        className={`w-12 h-[4px] rounded-full ${activeStyle.bar}`}
                      />
                      <div
                        className={`w-full h-full bg-gradient-to-b ${activeStyle.beam} to-transparent opacity-60`}
                        style={{
                          clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0% 100%)",
                        }}
                      />
                    </div>
                  )}

                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-colors z-10 relative ${isTeamActive ? activeStyle.text : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}`}
                  >
                    Team{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${teamDropdownOpen ? "rotate-180 text-purple-500" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {teamDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden py-2 shadow-2xl"
                      >
                        <Link
                          to="/team/faculty"
                          className="block px-4 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors"
                          onClick={closeMenu}
                        >
                          Faculty
                        </Link>
                        <Link
                          to="/team/members"
                          className="block px-4 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors"
                          onClick={closeMenu}
                        >
                          Members
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Handle Standard Links
            const isActive =
              location.pathname === item.path ||
              (location.pathname.startsWith("/events/") &&
                item.path === "/events");
            const activeStyle = colorStyles[item.color];

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 group text-sm font-bold transition-colors z-10 flex flex-col items-center"
              >
                {/* Spotlight Effect for Standard Links */}
                {isActive && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-12 pointer-events-none flex flex-col items-center justify-start z-0">
                    <div
                      className={`w-12 h-[4px] rounded-full ${activeStyle.bar}`}
                    />
                    <div
                      className={`w-full h-full bg-gradient-to-b ${activeStyle.beam} to-transparent opacity-60`}
                      style={{
                        clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0% 100%)",
                      }}
                    />
                  </div>
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${isActive ? activeStyle.text : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Side: Theme + Mobile Menu */}
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-full px-2 py-3 flex items-center gap-3 shrink-0 border border-slate-200 dark:border-slate-700/50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-yellow-500 transition-all shadow-sm"
          >
            {darkMode ? (
              <Sun
                size={18}
                className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]"
              />
            ) : (
              <Moon size={18} />
            )}
          </button>
          {/* <button className="md:hidden p-1.5 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-teal-500 rounded-full transition-all shadow-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} className="text-rose-500" /> : <Menu size={20} />}
          </button> */}
          {/* Button starts */}
          <button
            className={`md:hidden relative w-12 h-7 rounded-full transition-all duration-500 p-1 shadow-inner
    ${isOpen ? "bg-rose-500/20" : "bg-slate-200 dark:bg-slate-800"}
  `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* The Sliding Knob */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 transform shadow-md
    ${isOpen ? "translate-x-5 bg-rose-500 rotate-180" : "translate-x-0 bg-white dark:bg-slate-200"}
  `}
            >
              {/* Micro Icon inside the knob */}
              {isOpen ? (
                <X size={12} className="text-white" />
              ) : (
                <div className="flex flex-col gap-[2px]">
                  <span className="w-2 h-[1px] bg-slate-800" />
                  <span className="w-2 h-[1px] bg-slate-800" />
                </div>
              )}
            </div>
          </button>
          {/* button ends */}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-24 left-10 -translate-x-1/2 w-[90%] max-w-[350px] bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-2xl border border-teal-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(20,184,166,0.2)] z-[100] md:hidden flex flex-col gap-2"
            >
              {mobileNavItems.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (location.pathname.startsWith("/events/") &&
                    link.path === "/events");
                const Icon = link.icon;
                const activeMobileBg = colorStyles[link.color].mobileBg;

                return (
                  <motion.div variants={mobileItemVariants} key={link.name}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${activeMobileBg} text-white translate-x-2`
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:translate-x-2"
                      }`}
                    >
                      <Icon
                        className={`text-xl ${isActive ? "text-white drop-shadow-md" : "text-slate-400 dark:text-slate-500"}`}
                      />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
