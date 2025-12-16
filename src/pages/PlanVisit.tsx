import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Users, Car, Baby, Coffee, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from '@/components/FAQ';
import { useEffect, useState } from 'react';

interface SermonVideo {
  videoId: string;
  title: string;
  thumbnail?: string;
}

const PlanVisit = () => {
  const [englishVideo, setEnglishVideo] = useState<SermonVideo | null>(null);
  const [amharicVideo, setAmharicVideo] = useState<SermonVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      try {
        setLoading(true);
        
        const englishPlaylistId = import.meta.env.VITE_YOUTUBE_ENGLISH_PLAYLIST_ID || "PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho";
        const amharicPlaylistId = import.meta.env.VITE_YOUTUBE_AMHARIC_PLAYLIST_ID || "PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho";

        // Use API proxy route (works in both dev and production) - same mechanism as SermonGrid
        const isProduction = import.meta.env.PROD;

        // Fetch English video - using same pattern as SermonGrid
        try {
          const englishApiUrl = isProduction 
            ? `/api/youtube/playlist?playlistId=${englishPlaylistId}&maxResults=1`
            : `http://localhost:3000/api/youtube/playlist?playlistId=${englishPlaylistId}&maxResults=1`;
          
          const englishResponse = await fetch(englishApiUrl, {
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
            }
          }).catch((err) => {
            console.error('Fetch error for English video:', err);
            // If CORS fails, try the production route as fallback
            if (!isProduction) {
              console.log('Trying production route as fallback for English video...');
              return fetch(`/api/youtube/playlist?playlistId=${englishPlaylistId}&maxResults=1`).catch(() => null);
            }
            return null;
          });

          if (englishResponse && englishResponse.ok) {
            const englishData = await englishResponse.json();
            if (englishData.items && englishData.items.length > 0) {
              const item = englishData.items[0];
              setEnglishVideo({
                videoId: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
              });
            }
          }
        } catch (err) {
          console.warn('Error fetching English video:', err);
        }

        // Fetch Amharic video - using same pattern as SermonGrid
        try {
          const amharicApiUrl = isProduction 
            ? `/api/youtube/playlist?playlistId=${amharicPlaylistId}&maxResults=1`
            : `http://localhost:3000/api/youtube/playlist?playlistId=${amharicPlaylistId}&maxResults=1`;
          
          const amharicResponse = await fetch(amharicApiUrl, {
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
            }
          }).catch((err) => {
            console.error('Fetch error for Amharic video:', err);
            // If CORS fails, try the production route as fallback
            if (!isProduction) {
              console.log('Trying production route as fallback for Amharic video...');
              return fetch(`/api/youtube/playlist?playlistId=${amharicPlaylistId}&maxResults=1`).catch(() => null);
            }
            return null;
          });

          if (amharicResponse && amharicResponse.ok) {
            const amharicData = await amharicResponse.json();
            if (amharicData.items && amharicData.items.length > 0) {
              const item = amharicData.items[0];
              setAmharicVideo({
                videoId: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url
              });
            }
          }
        } catch (err) {
          console.warn('Error fetching Amharic video:', err);
        }
      } catch (err) {
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideos();
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
        title="Become a Member - Living Hope for Generations Church" 
        description="Become a member of Living Hope for Generations Church. Join our church family and get involved in our community."
        keywords={['become a member', 'membership', 'join church', 'church membership', 'living hope']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
        <img
          src="/DSC00439.jpg"
          alt="Plan Your Visit Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: '5% 20%' }}
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/25 z-10" />
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
              Become a Member
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
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdTotYN-CYx86aFnvLZFDzE5qF7e2W5gtk7w9y3i4HOeGKkYA/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Become a Member Form"
                >
                  Loading…
                </iframe>
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

      {/* FAQ Section */}
      <FAQ />

      {/* Stay Connected Section */}
      <section className="bg-[#244363] py-6 sm:py-8 px-4 sm:px-6 md:px-0">
        <div className="w-full mx-auto border border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-0">
            {/* Left: Two YouTube Videos Side by Side */}
            <div className="bg-[#244363] p-4 sm:p-6 lg:p-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-center">
              {/* Video 1 - English Sermon */}
              {loading ? (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-white">Loading...</p>
                </div>
              ) : englishVideo ? (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${englishVideo.videoId}`}
                    title={englishVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-white text-sm text-center px-4">English sermon unavailable</p>
                </div>
              )}
              {/* Video 2 - Amharic Sermon */}
              {loading ? (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-white">Loading...</p>
                </div>
              ) : amharicVideo ? (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${amharicVideo.videoId}`}
                    title={amharicVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full sm:flex-1 aspect-video rounded overflow-hidden min-w-0 bg-gray-800 flex items-center justify-center">
                  <p className="text-white text-sm text-center px-4">Amharic sermon unavailable</p>
                </div>
              )}
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
