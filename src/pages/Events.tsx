import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Heart, Music, BookOpen, Coffee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PastEventsCarousel from '@/components/PastEventsCarousel';

export const pastEvents = [
  {
    id: 7,
    title: "Easter Celebration Service",
    description: "A special Easter service celebrating the resurrection of Jesus Christ with special music and message.",
    date: "April 9, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    category: "Holiday",
    image: "easter-placeholder"
  },
  {
    id: 8,
    title: "Christmas Caroling",
    description: "Spreading joy through the community with traditional Christmas carols and warm fellowship.",
    date: "December 23, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Various Neighborhoods",
    category: "Outreach",
    image: "caroling-placeholder"
  },
  {
    id: 9,
    title: "Thanksgiving Community Dinner",
    description: "A community-wide Thanksgiving dinner serving those in need and celebrating God's blessings.",
    date: "November 23, 2023",
    time: "2:00 PM - 6:00 PM",
    location: "Fellowship Hall",
    category: "Community",
    image: "thanksgiving-placeholder"
  }
];

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
      date: "Every Sunday",
      time: "8:30–10:30 AM",
      location: "3637 Graham Park Road, Triangle VA 22172 (Amharic & English)",
      category: "Worship",
      image: "worship-placeholder",
      featured: true
    },
    {
      id: 2,
      title: "Young Adult Bible Study",
      description: "A dynamic Bible study for young adults focusing on relevant topics and building community through faith discussions.",
      date: "Every Monday",
      time: "9:00 PM - 10:00 PM",
      location: "Zoom Meeting",
      category: "Bible Study",
      image: "bible-study-placeholder"
    },
    {
      id: 3,
      title: "Prayer Meeting",
      description: "Join our prayer warriors for an evening of powerful prayer, intercession, and spiritual warfare.",
      date: "Every Saturday",
      time: "8:00 PM - 9:00 PM",
      location: "Zoom Meeting",
      category: "Prayer",
      image: "prayer-placeholder"
    },
    {
      id: 4,
      title: "Neighborhood Bible Study - Woodbridge",
      description: "Connect with fellow believers in your area through our neighborhood Bible study group.",
      date: "Every Tuesday",
      time: "7:00 PM - 8:30 PM",
      location: "Woodbridge Community Center",
      category: "Small Groups",
      image: "small-group-placeholder"
    },
    {
      id: 5,
      title: "Children's Ministry Activities",
      description: "Fun and educational activities for children including Sunday School, crafts, and Bible stories.",
      date: "Every Sunday",
      time: "10:30 AM - 12:00 PM",
      location: "Children's Wing",
      category: "Children",
      image: "children-placeholder"
    },
    {
      id: 6,
      title: "Fellowship Lunch",
      description: "Stay after service for a delicious meal and meaningful conversations with our church family.",
      date: "First Sunday of Month",
      time: "12:00 PM - 2:00 PM",
      location: "Fellowship Hall",
      category: "Fellowship",
      image: "fellowship-placeholder"
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
              Church Events
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#d9b062] mb-8 max-w-3xl mx-auto"
            >
              Join us for worship, fellowship, and spiritual growth
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/plan-visit">
                <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                  Plan Your Visit
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-center text-[#244363] mb-8"
            >
              Event Categories
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {eventCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Badge className={`${category.color} px-4 py-2 text-sm font-medium flex items-center gap-2`}>
                    {category.icon}
                    {category.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#f8f6f3]">
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
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {upcomingEvents.map((event, index) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className={`h-full bg-white hover:shadow-lg transition-all duration-300 ${event.featured ? 'ring-2 ring-[#d9b062]' : ''}`}>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className={`${getCategoryColor(event.category)} mb-3`}>
                          {event.category}
                        </Badge>
                        {event.featured && (
                          <Badge className="bg-[#d9b062] text-[#244363] ml-2">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#244363] mb-3">{event.title}</h3>
                      <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-[#244363] text-white hover:bg-[#1a2e47]">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
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

      {/* Past Events Carousel (restored) */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#244363] mb-8">
            Past Events
          </h2>
          {Array.isArray(pastEvents) && pastEvents.length > 0 && (
            <PastEventsCarousel events={pastEvents} />
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
