import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomeCarousel from '@/components/HomeCarousel'; // Import HomeCarousel

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with real video ID

const ministries = [
  {
    title: "Bilingual Worship",
    description: "Amharic & English"
  },
  {
    title: "Neighborhood Bible Study Groups",
    description: "Woodbridge, Dumfries, Stafford, Fredericksburg"
  },
  {
    title: "Young Adult Bible Study",
    description: "Mondays at 9-10PM on Zoom"
  }
];

const Features = () => {
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
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-0 sm:px-0 lg:px-0 max-w-[1800px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Transparent Welcome Box */}
          <motion.div variants={itemVariants} className="w-full mb-10 flex flex-col items-center">
            <div className="w-full max-w-5xl mx-auto text-center bg-transparent">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[#244363] drop-shadow-lg">Join us this Sunday</h2>
              <p className="text-2xl md:text-3xl text-[#d9b062] mb-8 max-w-3xl mx-auto font-bold tracking-widest uppercase">
                Equipping second-generation youth to grow in Christ and lead—in their language and culture.
              </p>
              <Button className="bg-[#d9b062] text-[#244363] px-12 py-6 text-2xl rounded-md font-extrabold shadow-lg hover:bg-[#bfa05a] transition-all">
                Plan Your Visit
              </Button>
            </div>
          </motion.div>

          {/* Large YouTube Video Frames */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 max-w-[1600px] mx-auto mb-16"
          >
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="relative w-full aspect-[16/12] min-h-[350px] md:min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/T8c-ecb5lrg?si=bxuJgOsqPADXASmV"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {/* Bottom Gradient Overlay with Label */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                  <div className="w-full bg-gradient-to-t from-black via-black/90 to-transparent rounded-b-lg px-4 py-3 flex items-end justify-start md:justify-center">
                    <span className="text-white text-lg md:text-2xl font-bold drop-shadow-lg text-left md:text-center w-full">ያለፈው እሁድ የአማርኛ ስብከት</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="relative w-full aspect-[16/12] min-h-[350px] md:min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/F9F30SWcDks?si=0QWY4u5hhVqsgKrg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {/* Bottom Gradient Overlay with Label */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                  <div className="w-full bg-gradient-to-t from-black via-black/90 to-transparent rounded-b-lg px-4 py-3 flex items-end justify-start md:justify-center">
                    <span className="text-white text-lg md:text-2xl font-bold drop-shadow-lg text-left md:text-center w-full">Last Sunday's English Sermon</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ministries Section - Three Horizontal Cards */}
          <motion.div variants={itemVariants} className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {ministries.map((ministry, idx) => (
              <Card key={idx} className="flex flex-col h-full bg-white rounded-2xl shadow-2xl border-0 items-center">
                <div className="w-full aspect-square bg-white flex items-center justify-center rounded-t-2xl overflow-hidden">
                  {ministry.title === "Bilingual Worship" ? (
                    <img src="/490103190_122106027620827914_5173506189753291620_n_PhotoGrid.png" alt="Bilingual Worship" className="object-cover w-full h-full" />
                  ) : ministry.title === "Neighborhood Bible Study Groups" ? (
                    <img src="/bible-study.png" alt="Neighborhood Bible Study Group" className="object-cover w-full h-full" />
                  ) : ministry.title === "Young Adult Bible Study" ? (
                    <img src="/IMG_6655_PhotoGrid.png" alt="Young Adult Bible Study" className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-gray-400 text-3xl">Image Placeholder</span>
                  )}
                </div>
                <CardContent className="flex flex-col flex-1 items-center text-center w-full px-8 py-8">
                  <h4 className="text-3xl font-extrabold text-[#244363] mb-3 mt-2">{ministry.title}</h4>
                  <p className="text-lg text-gray-700 mb-8">{ministry.description}</p>
                  <Button className="mt-auto w-full bg-[#244363] text-white font-bold rounded-md py-3 text-lg hover:bg-[#1a2e47] transition-all">
                    Button Placeholder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
