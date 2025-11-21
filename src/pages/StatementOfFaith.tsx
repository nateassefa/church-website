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
      title: "The Bible",
      description: "The Bible is the inspired, inerrant, and infallible Word of God.",
      references: ["2 Tim. 3:15-17"]
    },
    {
      title: "The Trinity",
      description: "One God in three persons—Father, Son, and Holy Spirit.",
      references: ["Matt. 28:19"]
    },
    {
      title: "God the Father",
      description: "Creator and Sustainer of all things.",
      references: ["Ps. 19:1", "Rom. 1:20"]
    },
    {
      title: "Jesus Christ",
      description: "Fully God and fully man, who lived a sinless life, died for humanity's sins, rose from the dead, and will return to judge the living and the dead.",
      references: ["John 1:1-14", "Phil. 2:5-11"]
    },
    {
      title: "The Holy Spirit",
      description: "Empowers, teaches, and sanctifies believers.",
      references: ["John 14:16-17"]
    },
    {
      title: "Salvation",
      description: "By grace through faith in Jesus Christ alone.",
      references: ["Eph. 2:8-10"]
    },
    {
      title: "The Church",
      description: "A community of believers committed to worship, discipleship, and evangelism.",
      references: ["Eph. 1:22-23"]
    },
    {
      title: "The Second Coming",
      description: "Jesus will return visibly to establish His eternal kingdom.",
      references: ["Matt. 25:31-46", "Rev. 21:1-4"]
    }
  ];

  const ordinances = [
    {
      title: "Baptism",
      description: "Holy Baptism is a means of grace, through which God forgives sins, grants new life, and welcomes believers into His Church.",
      references: ["Matt. 28:19", "Acts 2:38", "Titus 3:5"]
    },
    {
      title: "Lord's Supper",
      description: "The Lord's Supper is the true body and blood of Christ, given under the bread and wine for the forgiveness of sins and the strengthening of faith.",
      references: ["1 Cor. 10:16", "1 Cor. 11:23–26", "Matt. 26:26–28"]
    }
  ];

  return (
    <PageLayout footerTall={true}>
      <SEO 
        title="Statement of Faith - Living Hope Church"
        description="Our core beliefs and theological foundations at Living Hope for Generations Church, rooted in biblical truth."
        keywords={['statement of faith', 'beliefs', 'doctrine', 'theology', 'bible', 'Christian']}
      />
      
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
      <div className="pb-4 bg-gradient-to-br from-[#244363] to-[#4c3219]">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
          <img 
            src="/DSC00287.JPG" 
            alt="Statement of Faith Background" 
            className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0"
            fetchPriority="high"
            decoding="async" 
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
                Statement of Faith
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="py-16 bg-white text-gray-900">
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
              <div className="h-1 w-16 bg-[#d9b062] mx-auto mb-2 rounded" />

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
              >
                {beliefs.map((belief, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-50 rounded-2xl shadow-lg p-8 border-l-8 border-[#d9b062] hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#244363] mb-4">{belief.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{belief.description}</p>
                    <div className="space-y-2">
                      {belief.references.map((ref, refIndex) => (
                        <Badge 
                          key={refIndex}
                          variant="outline" 
                          className="text-[#4c3219] border-[#4c3219] mr-2"
                        >
                          {ref}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Sacraments */}
        <section className="py-16 bg-[#244363] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              >
                The Sacraments
              </motion.h2>
              <div className="h-1 w-16 bg-[#d9b062] mx-auto mb-2 rounded" />

              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10"
              >
                {ordinances.map((ordinance, index) => (
                  <Card key={index} className="border-l-4 border-l-[#d9b062] hover:shadow-lg transition-shadow bg-gray-50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-[#244363] mb-4">
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

        {/* Additional Information */}
        <section className="py-16 bg-gray-50 mb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-[#244363] mb-8"
              >
                Our Theological Foundation
              </motion.h2>
              <div className="h-1 w-16 bg-[#d9b062] mx-auto mt-2 mb-6 rounded" />
              <p className="text-lg text-black leading-relaxed mb-8">
                At Living Hope for Generations Church, we hold to the historic Christian faith as revealed in Scripture. 
                Our beliefs are grounded in the Bible and align with the core doctrines that have been affirmed by 
                the Christian church throughout history.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We welcome questions and discussions about our beliefs. If you have any questions about our 
                statement of faith or would like to learn more about what we believe, please don't hesitate 
                to reach out to us.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default StatementOfFaith;
