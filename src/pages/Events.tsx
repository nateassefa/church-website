import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const Events = () => {

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
        title="Events - Living Hope for Generations Church" 
        description="Stay updated with upcoming events, Bible studies, worship services, and community activities at Living Hope for Generations Church."
        keywords={['events', 'church events', 'bible study', 'worship services', 'community activities', 'fellowship']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
        <img
          src="/Copy of _I0B7294.png"
          alt="Events Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchpriority="high"
          decoding="async"
          style={{ filter: 'brightness(0.5)', objectPosition: 'center 10%' }}
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
              Events
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
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
    </PageLayout>
  );
};

export default Events;
