
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Events - Living Hope Church"
        description="Stay connected with upcoming events at Living Hope for Generations Church. Join us for worship, fellowship, and community activities."
        keywords={['events', 'calendar', 'church events', 'worship', 'community', 'fellowship']}
      />
      
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-[#244363] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Upcoming Events
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                Stay connected to the Word of God and our community
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Regular Events */}
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
                className="text-3xl md:text-4xl font-bold text-[#244363] text-center mb-12"
              >
                Regular Weekly Events
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {/* Sunday Worship */}
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#244363] rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#244363]">Sunday Worship</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-[#d9b062]" />
                        <span>Sundays, 8:00 – 10:00 AM</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-[#d9b062]" />
                        <span>3637 Graham Park Rd., Triangle, VA</span>
                      </div>
                      <p className="text-gray-600 mt-3">
                        Join us for bilingual worship, English and Amharic sermons, and fellowship.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Small Group Bible Study */}
                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#4c3219] rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#4c3219]">Small Groups</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-[#d9b062]" />
                        <span>Various times during the week</span>
                      </div>
                      <p className="text-gray-600 mt-3">
                        Weekly gatherings for Bible study, prayer, and building authentic community.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Youth Programs */}
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#d9b062] rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#d9b062]">Youth & Children</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-[#d9b062]" />
                        <span>During Sunday service</span>
                      </div>
                      <p className="text-gray-600 mt-3">
                        Age-appropriate programs running during worship service for children and youth.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Special Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-[#244363] text-center mb-12"
              >
                Special Events & Announcements
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="max-w-4xl mx-auto"
              >
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-semibold text-[#244363] mb-4">
                      Stay Connected
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      We regularly update our community with special events, guest speakers, community outreach opportunities, and seasonal celebrations.
                    </p>
                    <div className="bg-[#d9b062] text-white p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-3">How to Stay Updated</h4>
                      <ul className="text-left space-y-2 max-w-md mx-auto">
                        <li>• Join us for Sunday announcements</li>
                        <li>• Connect with our small groups</li>
                        <li>• Contact us for our newsletter</li>
                        <li>• Follow our community bulletin</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#4c3219] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Join Us This Sunday
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Experience worship, fellowship, and community at Living Hope. We can't wait to meet you and welcome you into our church family.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto"
              >
                <h3 className="text-lg font-semibold mb-3">Next Service</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2 text-[#d9b062]" />
                    <span>This Sunday</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 mr-2 text-[#d9b062]" />
                    <span>8:00 – 10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#d9b062]" />
                    <span>Triangle, VA</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Events;
