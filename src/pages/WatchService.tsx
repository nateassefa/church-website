import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import SermonGrid from '@/components/SermonGrid';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const WatchService = () => {
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
        title="Watch a Service - Living Hope for Generations Church" 
        description="Watch our weekly sermons in English and Amharic. Join us for worship and teaching from Living Hope for Generations Church."
        keywords={['watch service', 'sermons', 'worship', 'church service', 'online service', 'English sermon', 'Amharic sermon']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
        <img
          src="/DSC00565.png"
          alt="Watch Service Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchpriority="high"
          decoding="async"
          style={{ filter: 'brightness(0.5)', objectPosition: 'center 40%' }}
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
              Recent Sermons
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#244363] mb-2">
              Watch Our Sermons
            </h2>
            <div className="h-1 w-16 bg-[#d9b062] mx-auto my-4 rounded" />
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              At Living Hope, we prioritize reaching both the second and first generation. Take a look at both of our English and Amharic Sermons from the past few Sundays!
            </p>
          </motion.div>
        </div>
      </section>

      {/* English Sermons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SermonGrid 
            playlistId={import.meta.env.VITE_YOUTUBE_ENGLISH_PLAYLIST_ID || "PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho"} 
            title="ENGLISH SERMONS"
            maxResults={9}
          />
        </div>
      </section>

      {/* Amharic Sermons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SermonGrid 
            playlistId={import.meta.env.VITE_YOUTUBE_AMHARIC_PLAYLIST_ID || "PL5CuL39GGp2Lah6z9GM6RNX7YC8Srziho"} 
            title="AMHARIC SERMONS"
            maxResults={9}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default WatchService;

