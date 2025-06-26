
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StatementOfFaith = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const beliefs = [
    {
      title: "The Word of God",
      description: "We believe in the divine inspiration and authority of Scripture",
      reference: "2 Tim. 3:15–17"
    },
    {
      title: "The Trinity",
      description: "We believe in one God eternally existing in three persons",
      reference: "Matt. 28:19"
    },
    {
      title: "God the Father",
      description: "We believe in God the Father, creator and sustainer of all",
      reference: "Ps. 19:1; Rom. 1:20"
    },
    {
      title: "Jesus Christ",
      description: "We believe Jesus is fully God and fully man, our Lord and Savior",
      reference: "John 1:1–14; Phil. 2:5–11"
    },
    {
      title: "The Holy Spirit",
      description: "We believe in the Holy Spirit as our helper and guide",
      reference: "John 14:16–17"
    },
    {
      title: "Salvation",
      description: "We believe salvation is by grace through faith, not by works",
      reference: "Eph. 2:8–10"
    },
    {
      title: "The Church",
      description: "We believe the church is the body of Christ on earth",
      reference: "Eph. 1:22–23"
    },
    {
      title: "The Second Coming",
      description: "We believe in the return of Jesus Christ and eternal life",
      reference: "Matt. 25:31–46; Rev. 21:1–4"
    }
  ];

  const ordinances = [
    {
      title: "Baptism",
      description: "A public declaration of faith and obedience to Christ",
      references: ["Matt. 28:19", "Acts 2:38", "Titus 3:5"]
    },
    {
      title: "Lord's Supper",
      description: "A remembrance of Christ's sacrifice and our unity in Him",
      references: ["1 Cor. 10:16", "1 Cor. 11:23–26", "Matt. 26:26–28"]
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Statement of Faith - Living Hope Church"
        description="Our core beliefs and theological foundations at Living Hope for Generations Church, rooted in biblical truth."
        keywords={['statement of faith', 'beliefs', 'doctrine', 'theology', 'bible', 'Christian']}
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
                Statement of Faith
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                What We Believe - Our foundation rooted in Scripture
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Core Beliefs */}
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
                What We Believe
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {beliefs.map((belief, index) => (
                  <Card key={index} className="border-l-4 border-l-[#244363] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#244363] mb-3">
                        {belief.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {belief.description}
                      </p>
                      <Badge variant="outline" className="text-[#4c3219] border-[#4c3219]">
                        {belief.reference}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Ordinances */}
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
                The Ordinances
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {ordinances.map((ordinance, index) => (
                  <Card key={index} className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-[#d9b062] mb-4">
                        {ordinance.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        {ordinance.description}
                      </p>
                      <div className="space-y-2">
                        {ordinance.references.map((ref, refIndex) => (
                          <Badge 
                            key={refIndex}
                            variant="outline" 
                            className="text-[#4c3219] border-[#4c3219] mr-2"
                          >
                            {ref}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                Join Us in Faith
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                These beliefs form the foundation of our community. We invite you to explore faith with us and discover the hope found in Jesus Christ.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default StatementOfFaith;
