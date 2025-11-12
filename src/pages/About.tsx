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
      
      <div className="relative pt-20 pb-16 bg-gradient-to-br from-[#244363] to-[#4c3219] overflow-hidden">
        {/* Hero background image */}
        <img 
          src="/DSC00310.JPG" 
          alt="Living Hope for Generations Church family" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-60 z-0" 
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#244363]/70 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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

      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <div className="w-full h-96 flex items-center justify-center bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/image (3).jpg" 
                  alt="Living Hope for Generations Church family" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
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

          {/* Vision Statement & Values Section (visually sophisticated version) */}
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] bg-[#244363] min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 flex flex-col items-center">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">Vision Statement</h2>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-14 font-light leading-relaxed drop-shadow">
                Living Hope aspires to be a vibrant community where Christ's life flourishes in everyone across generations and cultures. Rooted in the Word, we cultivate Christ-like life, celebrate diversity, and serve each other and the world, reflecting the love of God.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Value Card 1 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Rooted</h3>
                  <p className="text-white text-center font-light">Committed to God's Word and prayer as the foundation of all activities <span className="text-[#d9b062]">(1 Corinthians 4:2)</span>.</p>
                </div>
                {/* Value Card 2 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Community</h3>
                  <p className="text-white text-center font-light">Creating a welcoming space for all generations, reflecting Christ's love <span className="text-[#d9b062]">(Acts 2:42; Romans 12:13)</span>.</p>
                </div>
                {/* Value Card 3 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Empowerment</h3>
                  <p className="text-white text-center font-light">Encouraging members to develop and use their spiritual gifts for service <span className="text-[#d9b062]">(1 Peter 4:10-11; Ephesians 4:12)</span>.</p>
                </div>
                {/* Value Card 4 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Excellence</h3>
                  <p className="text-white text-center font-light">Pursuing excellence in ministry planning, worship services, and church operations <span className="text-[#d9b062]">(Colossians 3:23-24)</span>.</p>
                </div>
                {/* Value Card 5 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Stewardship</h3>
                  <p className="text-white text-center font-light">Using talents, resources, and spiritual gifts according to God's instructions <span className="text-[#d9b062]">(2 Corinthians 9:6-7)</span>.</p>
                </div>
                {/* Value Card 6 */}
                <div className="bg-[#6b4a27] bg-opacity-95 rounded-2xl shadow-xl flex flex-col items-center p-8 border-t-4 border-[#d9b062]">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Generational</h3>
                  <p className="text-white text-center font-light">Staying relevant to the unique needs of each generation with culturally, linguistically, and age-appropriate presentation of the gospel <span className="text-[#d9b062]">(Psalm 78:4-6)</span>.</p>
                </div>
              </div>
            </div>
          </section>
        </div> {/* End of container for Vision Statement */}
        {/* Skinny gold line separator directly after Vision Statement and before Mission, outside container */}
        <div className="w-screen h-1 bg-[#d9b062]" style={{margin: 0, padding: 0}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="w-screen left-1/2 right-1/2 -ml-[50vw] relative bg-[#244363] py-24 flex flex-col items-center justify-center text-center shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">Mission</h2>
              <div className="w-24 h-1 bg-[#d9b062] mb-8"></div>
              <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow">
                Living Hope exists to fulfill the biblical mandate of the church by proclaiming the gospel, growing as disciples, building community, serving others, and living out our faith in daily life, demonstrating the transformative power of Christ's love.
              </p>
            </div>
            {/* Purpose Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-20 bg-transparent"
            >
              <div className="container mx-auto px-4">
                <h3 className="text-4xl md:text-5xl font-bold text-[#244363] text-center mb-16 tracking-wide">Purpose Highlights</h3>
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-gray-50 rounded-2xl shadow-lg flex flex-col items-center p-8 border-l-8 border-[#d9b062] hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path stroke="#d9b062" strokeWidth="2" d="M12 2v20m0 0l-4-4m4 4l4-4"/></svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#244363] mb-2 text-center">Spiritual Growth and Discipleship</h4>
                    <p className="text-gray-700 mb-2 text-center">Strengthening members' spiritual lives through teaching, prayer, and fellowship.</p>
                    <span className="text-[#d9b062] text-sm font-semibold">Acts 2:42-47</span>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-gray-50 rounded-2xl shadow-lg flex flex-col items-center p-8 border-l-8 border-[#d9b062] hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path stroke="#d9b062" strokeWidth="2" d="M12 2v20m0 0l-4-4m4 4l4-4"/></svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#244363] mb-2 text-center">Evangelism and Outreach</h4>
                    <p className="text-gray-700 mb-2 text-center">Sharing the gospel with individuals and communities across generations, locally and globally.</p>
                    <span className="text-[#d9b062] text-sm font-semibold">Matthew 28:19-20; Acts 1:8</span>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-gray-50 rounded-2xl shadow-lg flex flex-col items-center p-8 border-l-8 border-[#d9b062] hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
                      <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path stroke="#d9b062" strokeWidth="2" d="M12 2v20m0 0l-4-4m4 4l4-4"/></svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#244363] mb-2 text-center">Developing the Next Generation Christian Leaders</h4>
                    <p className="text-gray-700 mb-2 text-center">Identifying and equipping leaders of the next generation to serve in church ministries and beyond.</p>
                    <span className="text-[#d9b062] text-sm font-semibold">1 Timothy 4:12; 2 Timothy 2:2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
