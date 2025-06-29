import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Users, Car, Baby, Coffee, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlanVisit = () => {
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
      description: "Come as you are! We welcome casual, business casual, or traditional attire."
    },
    {
      title: "Parking",
      description: "Free parking available on-site. Handicap accessible spaces are clearly marked."
    },
    {
      title: "Childcare",
      description: "Nursery and Sunday School available for children ages 0-12 during service."
    },
    {
      title: "Accessibility",
      description: "Our facility is fully accessible with ramps, elevators, and hearing assistance available."
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#244363] to-[#1a2e47] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Plan Your Visit
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#d9b062] mb-8 max-w-3xl mx-auto"
            >
              We can't wait to welcome you to our church family
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 justify-center">
              <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                Connect with us!
              </Button>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/livinghopegenchurch?igsh=MWs4dXdnZ28xOHBidw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-[#d9b062] transition"><rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="5" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574837435090&sk=photos" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-[#d9b062] transition"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" strokeWidth="2"/></svg>
                </a>
                <a href="https://www.tiktok.com/@livinghopegenchurch" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white hover:text-[#d9b062] transition">
                    <path d="M41.5 17.5c-3.6 0-6.5-2.9-6.5-6.5h-5.5v23.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.5 0 1 .1 1.5.3v-5.2c-.5-.1-1-.1-1.5-.1-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2 9.2-4.1 9.2-9.2V22.2c1.9 1.2 4.1 1.8 6.5 1.8v-6.5z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Livinghopegenchurch" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white hover:text-[#d9b062] transition"><rect x="2" y="6" width="20" height="12" rx="4" strokeWidth="2"/><polygon points="10,9 16,12 10,15" fill="currentColor"/></svg>
                </a>
              </div>
            </motion.div>
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
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-12"
            >
              Join us this Weekend
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-center text-[#244363] mb-8 max-w-3xl mx-auto"
            >
              We believe that coming together to worship, pray, and connect with one another is an essential part of living a fulfilling life. We can't wait to see you!
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-center mb-12">
              <a href="https://maps.google.com/?q=3637+Graham+Park+Road+Triangle,+VA+22172" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                  <MapPin className="mr-2" />
                  Get Directions
                </Button>
              </a>
            </motion.div>
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sunday Services Card */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Sunday Services" className="w-full h-72 object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Sunday Service (Amharic & English)</h3>
                  <p className="text-white text-lg mb-1">8:30–10:30 AM</p>
                  <p className="text-white text-base mb-4">3637 Graham Park Road, Triangle, VA 22172</p>
                  <Link to="https://maps.google.com/?q=123+Church+Street,+Woodbridge,+VA+22191" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] font-bold">
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Young Adult Bible Study Card */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Watch Online" className="w-full h-72 object-cover object-center" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Young Adult Bible Study</h3>
                  <p className="text-white text-lg mb-1">Mondays at 9:00–10:00 PM (Zoom)</p>
                  <p className="text-white text-base mb-4">Meeting ID: 123-456-7890<br/>Passcode: YAStudy</p>
                  <a href="https://zoom.us/j/1234567890" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] font-bold">
                      Join on Zoom
                    </Button>
                  </a>
                </div>
              </div>
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

      {/* Visitor Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-12"
            >
              Visitor Information
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {visitorInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-gray-50 border border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-[#244363] mb-3">{info.title}</h3>
                      <p className="text-gray-700">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#244363] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're excited to meet you and welcome you into our church family. 
              Come experience the love of Christ in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ministries">
                <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                  Explore Our Ministries
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PlanVisit;
