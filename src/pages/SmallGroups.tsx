import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      description: "Join us for our weekly bilingual worship service featuring contemporary and traditional music, inspiring messages, and fellowship.",
      date: "Every Sunday at 8:30 AM",
      time: "8:30–10:30 AM",
      location: "3637 Graham Park Road, Triangle VA 22172 (Amharic & English)",
      category: "Worship",
      image: "/Copy of _I0B7303.png",
      featured: true,
      when: "weekly",
      region: "church",
      campus: "main",
      locationType: "in-person",
      ageGroup: "all",
      frequency: "weekly",
      language: "bilingual",
      gender: "all"
    },
    {
      id: 2,
      title: "Young Adult Bible Study",
      description: "A dynamic Bible study for young adults focusing on relevant topics and building community through faith discussions.",
      date: "Every Tuesday at 8pm via Zoom",
      time: "8:00 PM",
      location: "Online",
      category: "Bible Study",
      image: "/nema.png",
      when: "weekly",
      region: "online",
      campus: "online",
      locationType: "online",
      ageGroup: "young-adult",
      frequency: "weekly",
      language: "english",
      gender: "all"
    },
    {
      id: 6,
      title: "Fellowship Lunch",
      description: "Stay after service for a delicious meal and meaningful conversations with our church family.",
      date: "Directly after Sunday Service",
      time: "Directly after Sunday Service",
      category: "Fellowship",
      image: "/IMG_1210.jpg",
      when: "weekly",
      region: "church",
      campus: "main",
      locationType: "in-person",
      ageGroup: "all",
      frequency: "weekly",
      language: "any",
      gender: "all"
    }
];

const SmallGroups = () => {
  const [regionFilter, setRegionFilter] = useState("any");
  const [locationTypeFilter, setLocationTypeFilter] = useState("any");
  const [ageGroupFilter, setAgeGroupFilter] = useState("any");
  const [languageFilter, setLanguageFilter] = useState("any");

  // Reset all filters
  const resetFilters = () => {
    setRegionFilter("any");
    setLocationTypeFilter("any");
    setAgeGroupFilter("any");
    setLanguageFilter("any");
  };

  const filteredEvents = useMemo(() => {
    // Start with all events
    let filtered = [...upcomingEvents];
    
    // Apply region filter
    if (regionFilter && regionFilter !== "any" && regionFilter.trim() !== "") {
      const filterValue = regionFilter.toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event.region) return false;
        const eventRegion = event.region.toLowerCase().trim();
        // If event region is "any", it matches all regions
        if (eventRegion === "any") return true;
        // Case-insensitive match
        return eventRegion === filterValue;
      });
    }
    
    // Apply location type filter
    if (locationTypeFilter && locationTypeFilter !== "any" && locationTypeFilter.trim() !== "") {
      const filterValue = locationTypeFilter.toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event.locationType) return false;
        const eventLocationType = event.locationType.toLowerCase().trim();
        return eventLocationType === filterValue;
      });
    }
    
    // Apply age group filter
    if (ageGroupFilter && ageGroupFilter !== "any" && ageGroupFilter.trim() !== "") {
      const filterValue = ageGroupFilter.toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event.ageGroup) return false;
        const eventAgeGroup = event.ageGroup.toLowerCase().trim();
        return eventAgeGroup === filterValue;
      });
    }
    
    // Apply language filter
    if (languageFilter && languageFilter !== "any" && languageFilter.trim() !== "") {
      const filterValue = languageFilter.toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event.language) return false;
        const eventLanguage = event.language.toLowerCase().trim();
        // If event language is "any", it matches all languages
        if (eventLanguage === "any") return true;
        return eventLanguage === filterValue;
      });
    }
    
    return filtered;
  }, [regionFilter, locationTypeFilter, ageGroupFilter, languageFilter]);

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
        title="Small Groups - Living Hope for Generations Church" 
        description="Join our small groups and weekly events to grow in faith and build community at Living Hope for Generations Church."
        keywords={['small groups', 'weekly events', 'bible study', 'fellowship', 'community groups']}
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pb-32 text-white overflow-hidden min-h-[85vh] sm:min-h-[70vh]">
        <img
          src="/Copy of _I0B7294.png"
          alt="Small Groups Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchPriority="high"
          decoding="async"
          style={{ filter: 'brightness(0.5)', objectPosition: 'center 10%' }}
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
              Small Groups
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Weekly Events */}
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
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-4"
            >
              Weekly Events
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-lg"
            >
              These groups gather to discuss the previous message that was shared on Sunday. Groups will usually review major themes and key points, as well as answer questions.
            </motion.p>
            
            {/* Search and Filter Bar */}
            <motion.div
              variants={itemVariants}
              className="mb-8 max-w-7xl mx-auto"
            >
              <div className="flex flex-wrap gap-3 items-center justify-center">
                {/* Location */}
                <Select 
                  value={regionFilter || "any"} 
                  onValueChange={(value) => {
                    setRegionFilter(value || "any");
                  }}
                >
                  <SelectTrigger className="w-[140px] bg-white border-gray-300 rounded-md">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Location</SelectItem>
                    <SelectItem value="church">Church</SelectItem>
                    <SelectItem value="dumfries">Dumfries</SelectItem>
                    <SelectItem value="woodbridge">Woodbridge</SelectItem>
                    <SelectItem value="fredericksburg">Fredericksburg</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Location Type */}
                <Select 
                  value={locationTypeFilter || "any"} 
                  onValueChange={(value) => {
                    setLocationTypeFilter(value || "any");
                  }}
                >
                  <SelectTrigger className="w-[180px] bg-white border-gray-300 rounded-md">
                    <SelectValue placeholder="Online or In Person" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Online or In Person</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-person">In Person</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Age Group */}
                <Select 
                  value={ageGroupFilter || "any"} 
                  onValueChange={(value) => {
                    setAgeGroupFilter(value || "any");
                  }}
                >
                  <SelectTrigger className="w-[140px] bg-white border-gray-300 rounded-md">
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Age</SelectItem>
                    <SelectItem value="young-adult">Young Adult</SelectItem>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="children">Children</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Language */}
                <Select 
                  value={languageFilter || "any"} 
                  onValueChange={(value) => {
                    setLanguageFilter(value || "any");
                  }}
                >
                  <SelectTrigger className="w-[150px] bg-white border-gray-300 rounded-md">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Language</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="amharic">Amharic</SelectItem>
                    <SelectItem value="bilingual">Bilingual</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Reset Button */}
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="bg-white border-gray-300 rounded-md"
                >
                  Reset Filters
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => {
                // Format location for display
                let locationDisplay = event.location;
                if (event.location && event.location.includes('Zoom')) {
                  locationDisplay = 'Zoom Meeting';
                } else if (event.location && event.location.includes('Graham Park')) {
                  locationDisplay = 'Living Hope for Generations Lutheran Church';
                }
                
                return (
                  <motion.div key={event.id} variants={itemVariants}>
                    <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px] shadow-2xl group cursor-pointer">
                      {/* Event Image as background */}
                      {event.image && event.image !== 'worship-placeholder' && event.image !== 'bible-study-placeholder' && event.image !== 'fellowship-placeholder' ? (
                        <div className="absolute inset-0">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Dark overlay for text readability */}
                          <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gray-800"></div>
                      )}
                      
                      {/* Content positioned at bottom */}
                      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{event.title}</h3>
                        <div className="text-lg md:text-xl mb-3 opacity-95">{event.date}</div>
                        {locationDisplay && (
                          <div className="flex items-center gap-2 text-base md:text-lg opacity-85">
                            <MapPin size={16} className="flex-shrink-0" />
                            <span>{locationDisplay}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              }))
              : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-600 text-lg">No events found matching your search criteria.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skinny gold line separator */}
      <div className="w-screen h-0.5 bg-[#d9b062] mx-auto" style={{margin: 0, padding: 0}}></div>

      {/* Call to Action */}
      <section className="py-16 bg-[#244363] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss out on our upcoming events and activities. 
              Join our community and grow in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/plan-visit">
                <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-8 py-4 text-lg font-bold">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/ministries">
                <Button variant="outline" className="border-white text-[#244363] hover:bg-white hover:text-[#244363] px-8 py-4 text-lg">
                  Explore Ministries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SmallGroups;

