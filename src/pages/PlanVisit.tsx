
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Car, Users, Shirt, ArrowRight } from 'lucide-react';

const PlanVisit = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Plan Your Visit - Living Hope Church"
        description="Plan your first visit to Living Hope for Generations Church. Service times, location, parking, and everything you need to know for a welcoming experience."
        keywords={['plan visit', 'first time', 'service times', 'location', 'Triangle VA', 'church visit']}
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
                We Can't Wait to Meet You!
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                We make your first visit easy and meaningful
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Visit Information */}
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
                What to Expect
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {/* Service Time */}
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#244363]">Service Time</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      Sundays, 8:00 – 10:00 AM
                    </p>
                    <div className="text-gray-600 space-y-2">
                      <p>• Worship in English & Amharic</p>
                      <p>• English Sermon</p>
                      <p>• Amharic Sermon</p>
                      <p>• Fellowship time included</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#4c3219] rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#4c3219]">Location</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      3637 Graham Park Rd.
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mb-4">
                      Triangle, VA 22172
                    </p>
                    <p className="text-gray-600">
                      Conveniently located along the 95-Highway Corridor, serving Ethiopian and Eritrean families in the area.
                    </p>
                  </CardContent>
                </Card>

                {/* Parking */}
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mr-4">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#d9b062]">Parking</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Ample parking available
                    </p>
                    <div className="text-gray-600 space-y-2">
                      <p>• Free parking on-site</p>
                      <p>• Accessible parking spaces</p>
                      <p>• Well-lit and safe</p>
                      <p>• Close to main entrance</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Kids' Church */}
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#244363]">Kids' Church</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Available for all ages
                    </p>
                    <div className="text-gray-600 space-y-2">
                      <p>• Age-appropriate programs</p>
                      <p>• Safe and supervised</p>
                      <p>• Christ-centered activities</p>
                      <p>• Runs during main service</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Dress Code */}
                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#4c3219] rounded-full flex items-center justify-center mr-4">
                        <Shirt className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#4c3219]">Dress Code</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Casual or comfortable attire
                    </p>
                    <div className="text-gray-600 space-y-2">
                      <p>• Come as you are</p>
                      <p>• No formal dress required</p>
                      <p>• Comfort is key</p>
                      <p>• Focus on worship, not wardrobe</p>
                    </div>
                  </CardContent>
                </Card>

                {/* What to Expect */}
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mr-4">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#d9b062]">First Visit</h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      Warm welcome awaits
                    </p>
                    <div className="text-gray-600 space-y-2">
                      <p>• Friendly greeters at the door</p>
                      <p>• Help finding seats</p>
                      <p>• No pressure to participate</p>
                      <p>• You belong here</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
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
                className="text-3xl md:text-4xl font-bold text-[#244363] mb-6"
              >
                Questions About Your Visit?
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                We're here to help make your first visit comfortable and meaningful. Don't hesitate to reach out with any questions.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button 
                  onClick={scrollToContact}
                  className="bg-[#d9b062] hover:bg-[#d9b062]/90 text-white px-8 py-3 text-lg"
                >
                  Contact Us Today
                </Button>
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
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                You Are Family Here
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Living Hope for Generations Church is a spiritual home for Ethiopian and Eritrean families along the 95-Highway Corridor. You belong here, and we can't wait to welcome you into our church family.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#d9b062]">This Sunday</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  <div className="flex items-center justify-center md:justify-start">
                    <Clock className="w-5 h-5 mr-3 text-[#d9b062]" />
                    <span>8:00 – 10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="w-5 h-5 mr-3 text-[#d9b062]" />
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

export default PlanVisit;
