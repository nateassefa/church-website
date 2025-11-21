import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Heart, Music, BookOpen, Coffee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const eventCategories = [
  { name: "Worship", icon: <Music className="w-5 h-5" />, color: "bg-blue-100 text-blue-800" },
  { name: "Bible Study", icon: <BookOpen className="w-5 h-5" />, color: "bg-green-100 text-green-800" },
  { name: "Prayer", icon: <Heart className="w-5 h-5" />, color: "bg-red-100 text-red-800" },
  { name: "Small Groups", icon: <Users className="w-5 h-5" />, color: "bg-purple-100 text-purple-800" },
  { name: "Children", icon: <Heart className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-800" },
  { name: "Fellowship", icon: <Coffee className="w-5 h-5" />, color: "bg-orange-100 text-orange-800" },
  { name: "Outreach", icon: <Users className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-800" },
  { name: "Holiday", icon: <Calendar className="w-5 h-5" />, color: "bg-pink-100 text-pink-800" }
];

export const pastEvents = [
  {
    id: 1,
    title: "Thanksgiving Service",
    date: "Nov 26",
    time: "6:00 PM",
    location: "3637 Graham Park Rd, Triangle VA 22172",
    image: "/9093e918-84b5-47fd-92e5-87c464ab6c73.png"
  },
  {
    id: 2,
    title: "Vision Sharing Dinner",
    date: "Nov 29",
    time: "6:00 PM",
    location: "3637 Graham Park Rd, Triangle VA 22172",
    image: "/upcoming_1.png"
  },
  {
    id: 5,
    title: "Urbana Conference",
    date: "Dec 28 - Dec 31",
    time: "",
    location: "Phoenix, AZ",
    image: "/1971102936-30a536de1d9a3c88178e1e1170d4818dfd5ac3271924621dff855dbc50735068-d.webp"
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

const getCategoryColor = (category: string) => {
  const cat = eventCategories.find(c => c.name === category);
  return cat ? cat.color : "bg-gray-100 text-gray-800";
};

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      description: "Join us for our weekly bilingual worship service featuring contemporary and traditional music, inspiring messages, and fellowship.",
      date: "Every Sunday at 8:30 AM",
      time: "8:30–10:30 AM",
      location: "3637 Graham Park Road, Triangle VA 22172 (Amharic & English)",
      category: "Worship",
      image: "/Copy of _I0B7303.png",
      featured: true
    },
    {
      id: 2,
      title: "Young Adult Bible Study",
      description: "A dynamic Bible study for young adults focusing on relevant topics and building community through faith discussions.",
      date: "Every Monday at 9pm via Zoom",
      time: "9:00 PM - 10:00 PM",
      location: "Zoom Meeting",
      category: "Bible Study",
      image: "/nema.png"
    },
    {
      id: 6,
      title: "Fellowship Lunch",
      description: "Stay after service for a delicious meal and meaningful conversations with our church family.",
      date: "Directly after Sunday Service",
      time: "Directly after Sunday Service",
      category: "Fellowship",
      image: "/IMG_1210.jpg"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Events - Living Hope for Generations Church" 
        description="Stay updated with upcoming events, Bible studies, worship services, and community activities at Living Hope for Generations Church."
        keywords={['events', 'church events', 'bible study', 'worship services', 'community activities', 'fellowship']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-white overflow-hidden min-h-[70vh]">
        <img
          src="/Copy of _I0B7294.png"
          alt="Events Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.5)', objectPosition: 'center 10%' }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/70 via-[#244363]/30 to-transparent z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-end justify-center pb-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl"
            style={{ transform: 'translateY(360px)' }}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-8xl font-bold"
            >
              Church Events
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-12"
            >
              Weekly Events
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {upcomingEvents.map((event, index) => {
                let moreInfoHref = '/ministries';
                if (event.title === 'Sunday Worship Service') {
                  moreInfoHref = '/ministries#bilingual-worship';
                } else if (event.title === 'Young Adult Bible Study') {
                  moreInfoHref = '/ministries#young-adult';
                } else if (event.title === 'Fellowship Lunch') {
                  moreInfoHref = '/ministries#fellowship';
                }
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                      {/* Event Image Placeholder */}
                      <div className="w-full h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
                        {/* Replace with real image if available */}
                        <img
                          src={
                            event.image && event.image !== 'worship-placeholder' && event.image !== 'bible-study-placeholder' && event.image !== 'fellowship-placeholder'
                              ? event.image
                              : '/placeholder.svg'
                          }
                          alt={event.title}
                          className={`w-full h-full object-cover object-center`}
                        />
                      </div>
                      <div className="p-12 flex flex-col flex-1">
                        <h3 className="text-4xl font-bold text-black mb-4">{event.title}</h3>
                        <div className="text-2xl text-black mb-8">{event.date}</div>
                        <div className="mt-auto">
                          <a href={moreInfoHref} className="font-semibold text-black underline underline-offset-2 hover:text-[#d9b062] flex items-center gap-1 group text-xl">
                            MORE INFO <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skinny gold line separator between Upcoming Events and Stay Connected */}
      <div className="w-screen h-0.5 bg-[#d9b062] mx-auto" style={{margin: 0, padding: 0}}></div>

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
              Stay Connected
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss out on our upcoming events and activities. 
              Join our community and grow in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plan-visit">
                <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/ministries">
                <Button variant="outline" className="border-white text-[#244363] hover:bg-white hover:text-[#244363] px-8 py-4 text-lg">
                  Explore Ministries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-12"
            >
              Upcoming Events
            </motion.h2>
            <div className="max-w-7xl mx-auto border border-gray-300 rounded-lg p-8">
              {/* Single row - 3 cards */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {pastEvents.map((event, index) => (
                  <motion.div 
                    key={event.id} 
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                      {/* Event Image */}
                      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src={event.image || '/placeholder.svg'}
                          alt={event.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{event.title}</h3>
                        <div className="text-lg text-black mb-2">
                          <span className="font-semibold">{event.date}</span> {event.time && <span className="text-gray-600">{event.time}</span>}
                        </div>
                        {event.location && (
                          <div className="text-lg text-gray-600 mb-4">
                            {event.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
