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
      <SEO 
        title="Plan Your Visit - Living Hope for Generations Church" 
        description="Plan your visit to Living Hope for Generations Church. Find service times, location, what to expect, and visitor information."
        keywords={['plan visit', 'service times', 'location', 'first time', 'welcome', 'church visit']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-white overflow-hidden min-h-[80vh]">
        <img
          src="/DSC00270.PNG"
          alt="Plan Your Visit Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: '5% 40%' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/45 via-[#244363]/15 to-transparent z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            {/* Social media icons removed */}
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
            <motion.h2 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold text-center text-[#244363] mb-12"
            >
              Plan a Visit
            </motion.h2>
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


    </PageLayout>
  );
};

export default PlanVisit;
