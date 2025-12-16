import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Heart, Music, Calendar, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Ministries = () => {
  const ministries = [
    {
      title: "Bilingual Worship Services",
      description: "Join us every Sunday for worship in both Amharic and English, creating a bridge between generations and cultures.",
      details: [
        "Sunday Service: 8:30–10:30 AM (Amharic & English)",
        "Location: 3637 Graham Park Road, Triangle VA 22172"
      ],
      icon: <Music className="w-8 h-8" />, 
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Children's Ministry",
      description: "Nurturing the faith of our youngest members through age-appropriate learning and activities.",
      details: [
        "Sunday School during worship service",
        "Children's choir and activities"
      ],
      icon: <Heart className="w-8 h-8" />, 
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Young Adult Ministry",
      description: "A vibrant community for young adults to grow in faith, build relationships, and navigate life together.",
      details: [
        "Monday Bible Study: 7:00 pm (Zoom)"
      ],
      icon: <Users className="w-8 h-8" />, 
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Prayer Ministry",
      description: "Join our dedicated prayer warriors in lifting up our church, community, and world in prayer.",
      details: [
        "Saturday Prayer Meeting: 8:00 PM - 9:00 PM (Zoom)",
        "Prayer chain for urgent requests"
      ],
      icon: <Heart className="w-8 h-8" />, 
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Community Outreach",
      description: "Serving our local community through various outreach programs and initiatives.",
      details: [
        "Food pantry and assistance programs",
        "Local community service projects"
      ],
      icon: <Users className="w-8 h-8" />, 
      color: "bg-orange-50 border-orange-200"
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
        title="Ministries - Living Hope for Generations Church" 
        description="Explore our various ministries at Living Hope for Generations Church including worship services, Bible study groups, youth ministry, and community outreach."
        keywords={['ministries', 'worship services', 'bible study', 'youth ministry', 'children ministry', 'prayer', 'community outreach']}
      />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
          <img
            src="/WhatsApp Image 2025-03-29 at 14.31.16.png"
            alt="Ministries Background"
            className="absolute inset-0 w-full h-full object-cover object-[center_40%] z-0"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/80 via-[#244363]/40 to-transparent z-10" />
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
                Ministries
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* Call to Action (moved above cards) */}
        <section className="py-16 bg-[#f8f6f3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#244363] mb-2">
                Get Involved Today
              </h2>
              <div className="h-1 w-16 bg-[#d9b062] mx-auto my-4 rounded" />
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                There's a place for everyone in our church family. Find your ministry and start serving today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ministries Hero Cards */}
        <section className="w-full flex flex-col gap-12 py-12">
          {ministries.map((ministry, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={idx} className="relative w-full max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-xl flex">
                <img
                  src={
                    ministry.title === "Bilingual Worship Services"
                      ? "/Copy of _I0B7291.png"
                      : ministry.title === "Children's Ministry"
                        ? "/PHOTO-2025-06-15-14-20-21.jpg"
                        : ministry.title === "Prayer Ministry"
                          ? "/87c42148-e584-4fcf-b619-b36ab2a66e6e_PhotoGrid.png"
                          : ministry.title === "Community Outreach"
                            ? "/PHOTO-2025-03-29-14-31-16.jpg"
                            : ministry.title === "Young Adult Ministry"
                              ? "/DSC00655.png"
                              : "/placeholder.svg"
                  }
                  alt={ministry.title}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover ${
                    ministry.title === "Bilingual Worship Services"
                      ? ''
                      : ministry.title === "Children's Ministry"
                        ? 'object-right'
                      : ministry.title === "Prayer Ministry"
                        ? ''
                      : ministry.title === "Community Outreach"
                        ? ''
                        : 'object-center'
                  }`}
                  style={
                    ministry.title === "Bilingual Worship Services"
                      ? { objectPosition: 'center 5%' }
                      : ministry.title === "Prayer Ministry"
                        ? { objectPosition: 'right 20%' }
                        : ministry.title === "Community Outreach"
                          ? { objectPosition: 'center 35%' }
                          : ministry.title === "Young Adult Ministry"
                            ? { objectPosition: '90% 70%' }
                            : undefined
                  }
                />
                {/* Black gradient overlay for text readability */}
                {(() => {
                  // Override formatting for swapped ministries
                  const textOnRight = ministry.title === "Young Adult Ministry" 
                    ? false 
                    : ministry.title === "Children's Ministry" 
                      ? true 
                      : isEven;
                  return (
                    <>
                      <div className={`absolute inset-0 z-20 ${textOnRight ? 'bg-gradient-to-l from-[#244363]/70 via-[#244363]/30 to-transparent' : 'bg-gradient-to-r from-[#244363]/70 via-[#244363]/30 to-transparent'}`} />
                      <div className={`absolute inset-0 bg-black/35 flex flex-col justify-center ${textOnRight ? 'items-end pr-12' : 'items-start pl-12'} h-full w-full z-20`}>
                        <div className={`max-w-2xl ${textOnRight ? 'text-right' : 'text-left'}`}>
                          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">{ministry.title}</h2>
                          <p className="text-lg md:text-xl text-white mb-4 drop-shadow">{ministry.description}</p>
                          <ul className="mb-8 list-disc list-inside" style={{ color: '#f3c96b' }}>
                            {ministry.details.map((detail, i) => (
                              <li key={i} className="text-lg" style={{ color: '#fff', WebkitTextStroke: '0.2px #fff' }}>
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <Link to="/plan-visit">
                            <Button className="bg-white text-[#244363] hover:bg-[#d9b062] hover:text-[#244363] px-8 py-4 text-lg font-bold rounded-full shadow-lg">
                              LEARN MORE <span className="ml-2">&rarr;</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            );
          })}
        </section>
      </main>
    </PageLayout>
  );
};

export default Ministries;