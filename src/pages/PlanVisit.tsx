import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Users, Car, Baby, Coffee, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from '@/components/FAQ';
import { useEffect } from 'react';

const PlanVisit = () => {
  useEffect(() => {
    // Load Breeze form script
    const script = document.createElement('script');
    script.src = 'https://app.breezechms.com/js/form_embed.js';
    script.async = true;
    script.onload = () => {
      console.log('Breeze form script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Breeze form script');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://app.breezechms.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const serviceInfo = {
    time: "10:00 AM - 12:00 PM",
    day: "Every Sunday",
    address: "123 Church Street, Woodbridge, VA 22191",
    phone: "(703) 555-0123",
    email: "info@livinghopechurch.org"
  };

  const whatToExpect = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Welcoming Community",
      description: "You'll be greeted with warm smiles and genuine hospitality from our diverse congregation."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Fellowship Time",
      description: "Stay after service for coffee, refreshments, and meaningful conversations."
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Children's Ministry",
      description: "Safe, engaging programs for children of all ages during the service."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bilingual Services",
      description: "Worship in both Amharic and English, celebrating our multicultural community."
    }
  ];

  const visitorInfo = [
    {
      title: "What to Wear",
      description: "Casual or Comfortable Attire."
    },
    {
      title: "Parking",
      description: "Free parking available on-site."
    },
    {
      title: "Childcare",
      description: "Nursery and Sunday School available for children ages 0-12 during service."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <PageLayout>
      <style>{`
        .hero-text-mobile {
          transform: translateY(120px);
        }
        @media (min-width: 768px) {
          .hero-text-mobile {
            transform: translateY(360px);
          }
        }
      `}</style>
      <SEO 
        title="Plan Your Visit - Living Hope for Generations Church" 
        description="Plan your visit to Living Hope for Generations Church. Find service times, location, what to expect, and visitor information."
        keywords={['plan visit', 'service times', 'location', 'first time', 'welcome', 'church visit']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
        <img
          src="/DSC00270.png"
          alt="Plan Your Visit Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: '5% 40%' }}
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/70 via-[#244363]/30 to-transparent z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-end justify-center pb-8 sm:pb-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl hero-text-mobile"
          >
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-8xl font-bold"
            >
              Plan Your Visit
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-center text-[#244363] mb-8 max-w-3xl mx-auto"
            >
              We're excited to meet you and welcome you into our church family. Come experience the love of Christ in our community.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-12 w-full">
              <div 
                style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <div class="breeze_form_embed" 
                         data-subdomain="livinghopeforgenerationschurch" 
                         data-address="4ecc0c" 
                         data-width="100%" 
                         data-border_width="0" 
                         data-border_color="000000" 
                         data-background_color="ffffff" 
                         data-button_color="92b765">
                    </div>
                    <script src="https://app.breezechms.com/js/form_embed.js"></script>
                  `
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[#244363]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
              What to Expect
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {whatToExpect.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-0">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#244363] mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Stay Connected Section */}
      <section className="bg-[#244363] py-6 sm:py-8 px-4 sm:px-6 md:px-0">
        <div className="w-full mx-auto border border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-0">
            {/* Left: Two YouTube Videos Side by Side */}
            <div className="bg-[#244363] p-4 sm:p-6 lg:p-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-center">
              {/* Video 1 - Nate Assefa | confession requires obedience */}
              <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CP-rTFv-Dng"
                  title="Nate Assefa | confession requires obedience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              {/* Video 2 - Dr Mamusha Fenta Pt 1 */}
              <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hZewNwz5eZs"
                  title="Dr Mamusha Fenta Pt 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Right: Text and Buttons */}
            <div className="bg-[#244363] p-6 sm:p-8 flex flex-col justify-center text-white text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Watch Last Week's Sermons!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Watch last week's English and Amharic sermon!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a 
                  href="https://www.youtube.com/@Livinghopegenchurch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 text-sm font-semibold rounded hover:bg-gray-200 transition-colors text-center"
                >
                  WATCH NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default PlanVisit;
