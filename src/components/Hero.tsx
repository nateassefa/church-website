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
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-output-098B4F39-C289-492B-B115-94229490A07A-1.mov"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Black overlay for text readability */}
        <div 
          className="absolute inset-0 w-full"
          style={{ 
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,0.35)'
          }}
        ></div>
        {/* Full-width bottom text banner */}
      </div>
      <style>{`@keyframes blinker { 50% { opacity: 0; } }`}</style>
    </motion.div>
  );
};

export default Hero;
