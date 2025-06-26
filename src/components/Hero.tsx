
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
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

  return (
    <motion.div 
      className="relative mt-16 md:mt-0 w-full"
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="banner-container bg-[#244363] relative overflow-hidden h-[70vh] sm:h-[80vh] md:h-[85vh] w-full">
        <div className="absolute inset-0 bg-[#244363] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#244363]/90 via-[#4c3219]/70 to-[#d9b062]/30"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-5xl text-center" variants={itemVariants}>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                variants={itemVariants}
              >
                Welcome to Living Hope
              </motion.h1>
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl text-[#d9b062] mb-6 sm:mb-8 font-semibold"
                variants={itemVariants}
              >
                A Home for Every Generation
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
                variants={itemVariants}
              >
                Join us in discovering purpose, deepening your relationship with Christ, and building community.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                variants={itemVariants}
              >
                <Link to="/plan-visit">
                  <Button className="w-full sm:w-auto min-h-[48px] px-8 py-3 bg-[#d9b062] text-[#244363] rounded-md hover:bg-[#d9b062]/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base font-semibold">
                    Plan Your Visit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button 
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-[#244363] transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-base font-semibold"
                  onClick={() => scrollToSection('contact')}
                >
                  Connect with Us
                </Button>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-white"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Clock className="w-6 h-6 text-[#d9b062]" />
                  <div className="text-left">
                    <p className="font-semibold">Service Time</p>
                    <p className="text-sm text-gray-300">Sundays, 8:00 – 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="w-6 h-6 text-[#d9b062]" />
                  <div className="text-left">
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-gray-300">Triangle, VA</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Users className="w-6 h-6 text-[#d9b062]" />
                  <div className="text-left">
                    <p className="font-semibold">Languages</p>
                    <p className="text-sm text-gray-300">English & Amharic</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
