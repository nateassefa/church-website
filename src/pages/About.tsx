
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
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
        title="About Us - Living Hope Church"
        description="Learn about Living Hope for Generations Church's mission, vision, and core values. A vibrant, multicultural church serving Ethiopian and Eritrean families."
        keywords={['about', 'mission', 'vision', 'values', 'church', 'Ethiopian', 'Eritrean']}
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
                About Us
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                Living Hope exists to proclaim the gospel, grow as disciples, build community, and serve others
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#244363] mb-6">
                  Mission Statement
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Living Hope exists to:
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#244363] mb-2">Proclaim</h3>
                    <p className="text-gray-600">the gospel</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#4c3219] mb-2">Grow</h3>
                    <p className="text-gray-600">as disciples</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#d9b062] mb-2">Build</h3>
                    <p className="text-gray-600">community</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#244363] mb-2">Serve</h3>
                    <p className="text-gray-600">others</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center mt-12">
                <p className="text-lg text-gray-700 italic">
                  Live out our faith and reflect Christ's love
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Purpose Highlights */}
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
                Purpose Highlights
              </motion.h2>

              <motion.div 
                variants={itemVariants}  
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#244363] mb-4">
                      Spiritual Growth & Discipleship
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Fostering deep spiritual growth and discipleship in our community
                    </p>
                    <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                      Acts 2:42–47
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#244363] mb-4">
                      Evangelism & Outreach
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sharing the good news and reaching out to our community
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219] mr-2">
                        Matt. 28:19–20
                      </Badge>
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                        Acts 1:8
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#244363] mb-4">
                      Next-Gen Leaders
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Developing and empowering the next generation of leaders
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219] mr-2">
                        1 Tim. 4:12
                      </Badge>
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                        2 Tim. 2:2
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
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
                Vision Statement
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl leading-relaxed mb-6"
              >
                A vibrant, multicultural church where Christ's life flourishes across generations.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-200"
              >
                Rooted in Scripture, celebrating diversity, and serving with love.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
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
                Core Values
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#244363] mb-3">Rooted</h3>
                    <p className="text-gray-600 mb-3">Grounded in God's truth and faithfulness</p>
                    <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                      1 Cor. 4:2
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#4c3219] mb-3">Community</h3>
                    <p className="text-gray-600 mb-3">Building authentic relationships and fellowship</p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219] mr-2">
                        Acts 2:42
                      </Badge>
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                        Rom. 12:13
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#d9b062] mb-3">Empowerment</h3>
                    <p className="text-gray-600 mb-3">Using our gifts to serve God and others</p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219] mr-2">
                        1 Pet. 4:10–11
                      </Badge>
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                        Eph. 4:12
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#244363] mb-3">Excellence</h3>
                    <p className="text-gray-600 mb-3">Doing everything with excellence for God's glory</p>
                    <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                      Col. 3:23–24
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#4c3219] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#4c3219] mb-3">Stewardship</h3>
                    <p className="text-gray-600 mb-3">Faithful management of God's resources</p>
                    <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                      2 Cor. 9:6–7
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#d9b062] mb-3">Generational</h3>
                    <p className="text-gray-600 mb-3">Passing faith to the next generation</p>
                    <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                      Psalm 78:4–6
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
