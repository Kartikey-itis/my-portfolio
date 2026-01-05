import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactSlide from './components/ContactSlide';
import WipeTransition from './components/WipeTransition';
import BlobCursor from './components/BlobCursor';


function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (targetId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  return (
    <div className="w-full min-h-screen bg-brand-black text-white selection:bg-brand-orange-start selection:text-white">
      <WipeTransition isTransitioning={isTransitioning} />
      <Navbar onNavClick={handleNavClick} />

      <main>

        <Hero />

        <About />
        <Projects />
        {/* Overlapping Section: Contact slides OVER Services */}
        <div className="relative">
          {/* Services Background Layer (Sticky) */}
          <div className="sticky top-0 h-screen w-full z-10">
            <Services />
          </div>

          {/* Contact Slide Foreground Layer */}
          <div className="relative z-20 -mt-[100vh]">
            <ContactSlide>
              <div className="w-full h-screen flex items-center justify-center">
                <Footer />
              </div>
            </ContactSlide>
          </div>
        </div>

        {/*
        <BlobCursor
          blobType="circle"
          fillColor="#ff3c00ff"
          trailCount={3}
          sizes={[60, 125, 75]}
          innerSizes={[20, 35, 25]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={100}
        />
        */}
      </main>
    </div>
  );
}

export default App;