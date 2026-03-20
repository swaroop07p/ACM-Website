import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // The "Brute Force" scroll reset!
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Use 'smooth' if you want it to glide up, but 'instant' feels like a real page load
    });
  }, [pathname]);

  return null; // This component renders nothing to the screen
}