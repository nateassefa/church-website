import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

// Typing effect hook
function useTypingEffect(text: string, speed: number = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      console.log('Video element found, attempting to load');
      console.log('Video element:', videoRef.current);
      console.log('Video src:', videoRef.current.src);
      
      // Add event listeners for debugging
      videoRef.current.addEventListener('loadstart', () => console.log('Video load started'));
      videoRef.current.addEventListener('loadeddata', () => console.log('Video data loaded'));
      videoRef.current.addEventListener('canplay', () => console.log('Video can play'));
      videoRef.current.addEventListener('error', (e) => console.error('Video error:', e));
      videoRef.current.addEventListener('play', () => console.log('Video started playing'));
    } else {
      console.log('Video element not found');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headline = "Living Hope for Generations Church";
  const typedHeadline = useTypingEffect(headline, 60);

  return (
    <motion.div 
      className="relative mt-16 md:mt-0 w-full"
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="banner-container relative overflow-hidden h-[70vh] sm:h-[80vh] md:h-[85vh] w-full bg-[#244363] flex items-center justify-center">
        {/* Hero Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/video-output-37BFB8D5-1DDB-4941-B6DD-EA6D6371FCDA-1 2.mov"
        />
        {/* Black overlay for text readability */}
        <div 
          className="absolute inset-0 w-full"
          style={{ 
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)'
          }}
        ></div>
        
        {/* Text Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto w-full"
          >
            {/* Large WELCOME text */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 sm:mb-12"
            >
              WELCOME
            </motion.h1>
            
            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
            >
              {/* Plan a Visit Button */}
              <Link to="/plan-visit" className="w-full sm:w-auto">
                <Button className="bg-[#d9b062] hover:bg-[#bfa05a] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-md shadow-lg transition-colors w-full sm:w-auto">
                  PLAN A VISIT
                </Button>
              </Link>
              
              {/* Get Directions Link */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3637+Graham+Park+Rd,+Triangle,+VA+22172"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white text-base sm:text-lg font-semibold hover:text-[#d9b062] transition-colors bg-black/30 sm:bg-transparent px-4 py-3 sm:px-0 sm:py-0 rounded-md sm:rounded-none w-full sm:w-auto"
              >
                GET DIRECTIONS
                <MapPin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes blinker { 50% { opacity: 0; } }`}</style>
    </motion.div>
  );
};

export default Hero;
