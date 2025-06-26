
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Plan Your Visit */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#244363]">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#244363] mb-2">Plan Your Visit</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Living Hope for Generations Church is a spiritual home for Ethiopian and Eritrean families along the 95-Highway Corridor. You belong here.
                  </p>
                </div>
                <Link to="/plan-visit" className="block">
                  <Button className="w-full bg-[#244363] hover:bg-[#244363]/90 text-white">
                    Plan Your Visit →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Watch a Service */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#4c3219]">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#4c3219] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4c3219] mb-2">Watch a Service</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Bilingual services (English & Amharic) that connect, uplift, and grow faith across generations.
                  </p>
                </div>
                <Button className="w-full bg-[#4c3219] hover:bg-[#4c3219]/90 text-white">
                  Watch Now →
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Connect with Us */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#d9b062]">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#d9b062] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#d9b062] mb-2">Connect with Us</h3>
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/efb47d79-086d-4add-9b79-91fb775c2a0a.png" 
                      alt="Church community gathering" 
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <p className="text-gray-600 text-sm">
                      Whether new or long-time family, join us in worship, fellowship, and service.
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#d9b062] hover:bg-[#d9b062]/90 text-white"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Connected →
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Leadership Invitation */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#244363]">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#244363] rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#244363] mb-2">Leadership Invitation</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Join us this Sunday. Discover purpose, build community, and use your God-given gifts.
                  </p>
                  <p className="text-[#d9b062] font-semibold text-sm mb-4">
                    You are not just a guest — you are family.
                  </p>
                </div>
                <Link to="/give">
                  <Button className="w-full bg-[#244363] hover:bg-[#244363]/90 text-white">
                    Give Now →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
