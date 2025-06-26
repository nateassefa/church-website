
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Heart, HandHeart } from 'lucide-react';

const Ministries = () => {
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
        title="Ministries - Living Hope Church"
        description="Discover our ministries at Living Hope Church including Sunday worship, children's programs, small groups, and community outreach."
        keywords={['ministries', 'sunday worship', 'children', 'youth', 'small groups', 'outreach']}
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
                ይሣተፉ
              </motion.h1>
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl text-[#d9b062] mb-6"
              >
                Our Ministries
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                Join us in worship, fellowship, and service across all generations
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Sunday Worship */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#244363]">Sunday Worship</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      Authentic worship, uplifting messages, and a welcoming community.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-3 text-[#d9b062]" />
                        <span>Sundays, 8:00 – 10:00 AM</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-[#244363] mb-2">Service includes:</p>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Worship in English & Amharic</li>
                          <li>• English Sermon</li>
                          <li>• Amharic Sermon</li>
                          <li>• Community Fellowship</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Children, Youth & Young Adults */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#4c3219] rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#4c3219]">Children, Youth & Young Adults</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      Age-appropriate, Christ-centered programs for every stage of growth.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#4c3219] mb-2">Children's Ministry</h4>
                        <p className="text-gray-600 text-sm">Bible stories, songs, and activities designed for young hearts</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#4c3219] mb-2">Youth Programs</h4>
                        <p className="text-gray-600 text-sm">Relevant discussions and activities for teenagers</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#4c3219] mb-2">Young Adults</h4>
                        <p className="text-gray-600 text-sm">Life application and community for college age and beyond</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Small Groups */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#d9b062]">Small Groups</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      Weekly gatherings for Bible study, prayer, and authentic community.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#d9b062] mb-2">What to Expect</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• In-depth Bible study</li>
                          <li>• Prayer and support</li>
                          <li>• Meaningful relationships</li>
                          <li>• Spiritual growth</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#d9b062] mb-2">Meeting Times</h4>
                        <p className="text-gray-600 text-sm">Various times throughout the week to accommodate different schedules</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Outreach & Service */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mr-4">
                        <HandHeart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#244363]">Outreach & Service</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      Mentorship, career support, prayer, and compassionate outreach to our community.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#244363] mb-2">Community Services</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Mentorship programs</li>
                          <li>• Career guidance and support</li>
                          <li>• Prayer ministry</li>
                          <li>• Community outreach events</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#244363] mb-2">Ways to Serve</h4>
                        <p className="text-gray-600 text-sm">
                          Join us in serving both within our church family and in the broader community
                        </p>
                      </div>
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
                Get Involved Today
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Whether you're looking to grow in faith, build relationships, or serve others, there's a place for you in our ministries. Come as you are and discover where you belong.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Ministries;
