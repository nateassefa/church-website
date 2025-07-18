import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomeCarousel from '@/components/HomeCarousel'; // Import HomeCarousel

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with real video ID

const ministries = [
  {
    title: "Kids Life",
    description: "Kids Life has a variety of avenues to help your children pre-school to 5th grade learn about Jesus’ love for them.",
    image: "/490103190_122106027620827914_5173506189753291620_n_PhotoGrid.png",
    button: "Learn More"
  },
  {
    title: "Life Groups",
    description: "Groups offer a fantastic opportunity to deepen your faith, build meaningful connections, and grow in community.",
    image: "/bible-study.png",
    button: "Find Your Group"
  },
  {
    title: "Life Connect",
    description: "Life Connect is your pathway to involvement and finding your fit in our vibrant church family.",
    image: "/IMG_6655_PhotoGrid.png",
    button: "Save Your Seat"
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
    <section className="bg-[#244363]">
      <>
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
                <h2 className="text-5xl md:text-7xl font-extrabold mt-10 mb-6 tracking-tight text-white drop-shadow-lg">Join us this Sunday</h2>
                <p className="text-2xl md:text-3xl text-[#d9b062] mb-8 max-w-3xl mx-auto font-normal tracking-widest uppercase">
                  Equipping second-generation youth to grow in Christ and lead—in their language and culture.
                </p>
                <Link to="/plan-visit">
                  <Button className="bg-[#d9b062] text-[#244363] px-12 py-6 text-2xl rounded-md font-extrabold shadow-lg hover:bg-[#bfa05a] transition-all">
                    Plan Your Visit
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Large YouTube Video Frames - Full Bleed, Outside Container */}
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 bg-white py-8 px-0 mb-0 z-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row gap-6 w-full max-w-[1600px] mx-auto px-6 z-10 relative"
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
        </div>

        {/* Extremely skinny gold line separator between videos and cards */}
        <div className="w-screen h-1 bg-[#d9b062]" style={{margin: 0, padding: 0, lineHeight: 0}}></div>

        {/* Full-width navy background for cards section, flush with separators */}
        <div className="w-full bg-white py-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 text-[#181818]">What are you looking for?</h2>
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4 items-stretch">
            {["Sunday Service", "Neighborhood Bible Study", "Young Adult Bible Study"].map((title, idx) => (
              <div key={idx} className="relative overflow-hidden group aspect-[4/3] w-full mx-auto flex flex-col justify-end h-full">
                <img src={ministries[idx].image} alt={title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-300" />
                {/* 20% black overlay for extra contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Navy gradient overlay, increased spread */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/95 15% via-[#244363]/80 30% to-transparent z-20" style={{maskImage: 'linear-gradient(to top, #244363F2 15%, #244363CC 30%, transparent 50%)'}} />
                {/* Text content */}
                <div className="relative z-20 p-8 pb-0 w-full flex flex-col justify-end flex-1">
                  <div className="flex flex-col justify-end flex-1">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">{title}</h3>
                    <p className={`text-white text-xl md:text-2xl font-normal leading-snug mb-1 ${idx === 1 ? 'mt-12' : ''}`}>
                      {[
                        "Join us at 8:30 AM on Sundays",
                        "Bible Study Groups across Woodbridge, Dumfries, Stafford, and Fredericksburg",
                        "Join us on Zoom every Monday at 9pm!"
                      ][idx]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thicker gold line separator between cards and Past Events */}
        <div className="w-screen h-1 bg-[#d9b062]" style={{margin: 0, padding: 0, lineHeight: 0}}></div>
      </>
    </section>
  );
};

export default Features;
