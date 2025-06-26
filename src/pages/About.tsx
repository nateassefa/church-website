
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

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
        description="Learn about Living Hope for Generations Church, our mission, vision, and core values. A spiritual home for Ethiopian and Eritrean families."
        keywords={['about', 'mission', 'vision', 'values', 'Ethiopian church', 'Eritrean church', 'Christian community']}
      />
      
      <div className="pt-20 pb-16 bg-gradient-to-br from-[#244363] to-[#4c3219]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A vibrant, multicultural church where Christ's life flourishes across generations
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <img 
                src="/lovable-uploads/9c02c3ad-467e-4e34-b390-1fdb0fc95062.png" 
                alt="Church leadership and community members" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-[#244363] mb-6">Our Church Family</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Living Hope for Generations Church is more than a place of worship—it's a spiritual home 
                where Ethiopian and Eritrean families along the 95-Highway Corridor come together to 
                grow in faith, build lasting relationships, and serve our community with Christ's love.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe that you are not just a guest—you are family. Our doors are open to all 
                who seek to discover their purpose, deepen their relationship with Christ, and be part 
                of a loving, supportive community.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#244363] mb-4">Mission Statement</h2>
              <p className="text-xl text-gray-600">Living Hope exists to:</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Proclaim the gospel",
                "Grow as disciples", 
                "Build community",
                "Serve others",
                "Live out our faith and reflect Christ's love"
              ].map((mission, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#d9b062]">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <p className="text-lg font-semibold text-[#244363]">{mission}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full border-l-4 border-l-[#244363]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#244363] mb-4">Purpose Highlights</h3>
                  <ul className="space-y-3">
                    <li className="text-gray-700">
                      <strong>Spiritual Growth & Discipleship</strong> – Acts 2:42–47
                    </li>
                    <li className="text-gray-700">
                      <strong>Evangelism & Outreach</strong> – Matt. 28:19–20; Acts 1:8
                    </li>
                    <li className="text-gray-700">
                      <strong>Next-Gen Leaders</strong> – 1 Tim. 4:12; 2 Tim. 2:2
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-l-4 border-l-[#4c3219]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#4c3219] mb-4">Vision Statement</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A vibrant, multicultural church where Christ's life flourishes across generations.
                    Rooted in Scripture, celebrating diversity, and serving with love.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#244363] mb-4">Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide our church family</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Rooted", verse: "1 Cor. 4:2" },
                { title: "Community", verse: "Acts 2:42; Rom. 12:13" },
                { title: "Empowerment", verse: "1 Pet. 4:10–11; Eph. 4:12" },
                { title: "Excellence", verse: "Col. 3:23–24" },
                { title: "Stewardship", verse: "2 Cor. 9:6–7" },
                { title: "Generational", verse: "Psalm 78:4–6" }
              ].map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#d9b062]">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-[#244363] mb-2">{value.title}</h4>
                        <p className="text-sm text-[#4c3219] font-medium">{value.verse}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
