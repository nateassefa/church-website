
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Globe, Users, ArrowRight } from 'lucide-react';

const Give = () => {
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
        title="Give - Living Hope Church"
        description="Support Living Hope for Generations Church through secure online giving. Your generosity helps us serve across generations and communities."
        keywords={['giving', 'donations', 'tithe', 'support', 'generosity', 'stewardship']}
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
                Support Our Mission
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                Your generosity helps us serve across generations and communities
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Impact Areas */}
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
                How Your Giving Makes a Difference
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Community Impact */}
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#244363] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#244363] mb-4">
                      Community Ministry
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Supporting ministries for children, youth, young adults, and families. Creating programs that serve across all generations in our community.
                    </p>
                  </CardContent>
                </Card>

                {/* Outreach Programs */}
                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#4c3219] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#4c3219] mb-4">
                      Outreach & Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Funding mentorship programs, career support, prayer ministry, and compassionate outreach to serve our broader community.
                    </p>
                  </CardContent>
                </Card>

                {/* Mission Support */}
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#d9b062] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#d9b062] mb-4">
                      Mission & Growth
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expanding our reach to serve Ethiopian and Eritrean families along the 95-Highway Corridor and beyond.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Giving Options */}
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
                Ways to Give
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="max-w-4xl mx-auto"
              >
                {/* Online Giving */}
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow mb-8">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-[#d9b062] mb-4">
                        Give Securely Online via Tithe.ly
                      </h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        The easiest and most secure way to support Living Hope Church. Set up one-time or recurring gifts through our trusted giving platform.
                      </p>
                      <Button 
                        className="bg-[#d9b062] hover:bg-[#d9b062]/90 text-white px-8 py-3 text-lg"
                        onClick={() => {
                          // This would typically open Tithe.ly or redirect to giving page
                          window.open('https://tithe.ly', '_blank');
                        }}
                      >
                        Give Online Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* In-Person Giving */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#244363] mb-4">
                        Sunday Service
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Bring your gift during our Sunday worship service. Offering boxes are available for your convenience.
                      </p>
                      <div className="text-sm text-gray-500">
                        <p>Sundays, 8:00 – 10:00 AM</p>
                        <p>3637 Graham Park Rd., Triangle, VA</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#4c3219] mb-4">
                        Mail Your Gift
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Send your donation by mail to our church address. Please make checks payable to "Living Hope Church."
                      </p>
                      <div className="text-sm text-gray-500">
                        <p>Living Hope Church</p>
                        <p>3637 Graham Park Rd.</p>
                        <p>Triangle, VA 22172</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Biblical Foundation */}
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
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Biblical Stewardship
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8"
              >
                <blockquote className="text-xl italic text-gray-200 mb-4">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </blockquote>
                <cite className="text-[#d9b062] font-semibold">2 Corinthians 9:7</cite>
              </motion.div>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-200 leading-relaxed"
              >
                Giving is an act of worship and stewardship. We believe in faithful management of the resources God has entrusted to us, and we are committed to using every gift to further His kingdom and serve our community.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
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
                Join Us in Making a Difference
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Your partnership through giving enables us to continue our mission of proclaiming the gospel, growing disciples, building community, and serving others across generations.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <Button 
                  className="bg-[#244363] hover:bg-[#244363]/90 text-white px-8 py-3 text-lg mr-4"
                  onClick={() => {
                    window.open('https://tithe.ly', '_blank');
                  }}
                >
                  Give Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-gray-500 text-sm">
                  Thank you for your faithful support and generosity
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Give;
