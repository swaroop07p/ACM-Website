import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// VITE WORKAROUND: Force THREE to be global
window.THREE = THREE;
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function VantaBackground() { 
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      const VantaBirds = BIRDS.default || BIRDS;

      setVantaEffect(VantaBirds({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        
        backgroundColor: 0x000000,
        backgroundAlpha: 0.00, 
        
        color1: 0x065f46,       
        color2: 0x9f1239,       
        colorMode: "variance",
        shininess: 0.00,       
        specularColor: 0x000000,
        
        quantity: 2.00,   
        birdSize: 1.20,   
        wingSpan: 20.00,
        speedLimit: 4.00, 
        separation: 40.00,
        alignment: 50.00,
        cohesion: 50.00,
      }));
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={myRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50"
    ></div>
  );
}