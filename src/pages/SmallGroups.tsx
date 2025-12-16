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

// Helper to encode image paths with special characters
const encodeImagePath = (path: string): string => {
  if (!path) return '';
  // For paths starting with /, encode only the filename part
  if (path.startsWith('/')) {
    const lastSlashIndex = path.lastIndexOf('/');
    const dirPath = path.substring(0, lastSlashIndex + 1); // Keep leading slash
    const filename = path.substring(lastSlashIndex + 1);
    // Encode only the filename to handle spaces, commas, colons, etc.
    return dirPath + encodeURIComponent(filename);
  }
  // If no leading slash, encode the whole path
  return encodeURIComponent(path);
};

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
      image: "/public.png",
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
      date: "Every Monday at 7pm via Zoom",
      time: "7:00 PM",
      location: "Online",
      category: "Bible Study",
      image: "/ChatGPT Image Nov 21, 2025, 05_05_29 PM.png",
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
      image: "/37ef91a4-a452-4e5f-a4de-f260106e9b17.png",
      when: "weekly",
      region: "church",
      campus: "main",
      locationType: "in-person",
      ageGroup: "all",
      frequency: "weekly",
      language: "any",
      gender: "all"
    },
    {
      id: 3,
      title: "Dumfries Amharic Bible Study",
      description: "Join us for Bible study in Amharic at our Dumfries location.",
      date: "Every Thursday at 6:00-8:00 PM",
      time: "6:00-8:00 PM",
      location: "Dumfries, VA",
      category: "Bible Study",
      image: "/ChatGPT Image Nov 21, 2025, 04_27_38 PM.png",
      when: "weekly",
      region: "dumfries",
      campus: "dumfries",
      locationType: "in-person",
      ageGroup: "adult-young-adult",
      frequency: "weekly",
      language: "amharic",
      gender: "all"
    },
    {
      id: 4,
      title: "Woodbridge Amharic Bible Study",
      description: "Join us for Bible study in Amharic at our Woodbridge location.",
      date: "Every Thursday at 7:00 PM",
      time: "7:00 PM",
      location: "Woodbridge, VA",
      category: "Bible Study",
      image: "/ChatGPT Image Nov 21, 2025, 04_49_12 PM.png",
      when: "weekly",
      region: "woodbridge",
      campus: "woodbridge",
      locationType: "in-person",
      ageGroup: "adult-young-adult",
      frequency: "weekly",
      language: "amharic",
      gender: "all"
    },
    {
      id: 5,
      title: "Fredericksburg Amharic Bible Study",
      description: "Join us for Bible study in Amharic at our Fredericksburg location.",
      date: "Every Monday at 3:00-5:00 PM",
      time: "3:00-5:00 PM",
      location: "Fredericksburg, VA",
      category: "Bible Study",
      image: "/ChatGPT Image Nov 21, 2025, 04_32_25 PM.png",
      when: "weekly",
      region: "fredericksburg",
      campus: "fredericksburg",
      locationType: "in-person",
      ageGroup: "adult-young-adult",
      frequency: "weekly",
      language: "amharic",
      gender: "all"
    },
    {
      id: 7,
      title: "Stafford Amharic Bible Study",
      description: "Join us for Bible study in Amharic at our Stafford location.",
      date: "Every Thursday at 6:00-8:00 PM",
      time: "6:00-8:00 PM",
      location: "Stafford, VA",
      category: "Bible Study",
      image: "/ChatGPT Image Nov 21, 2025, 04_36_33 PM.png",
      when: "weekly",
      region: "stafford",
      campus: "stafford",
      locationType: "in-person",
      ageGroup: "adult-young-adult",
      frequency: "weekly",
      language: "amharic",
      gender: "all"
    }
];

const SmallGroups = () => {
  const [regionFilter, setRegionFilter] = useState<string>("any");
  const [locationTypeFilter, setLocationTypeFilter] = useState<string>("any");
  const [ageGroupFilter, setAgeGroupFilter] = useState<string>("any");
  const [languageFilter, setLanguageFilter] = useState<string>("any");

  // Reset all filters
  const resetFilters = () => {
    setRegionFilter("any");
    setLocationTypeFilter("any");
    setAgeGroupFilter("any");
    setLanguageFilter("any");
  };

  const filteredEvents = useMemo(() => {
    let filtered = [...upcomingEvents];
    
    // Apply region filter
    if (regionFilter && regionFilter !== "any" && regionFilter.trim() !== "") {
      const filterValue = String(regionFilter).toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event?.region) return false;
        const eventRegion = String(event.region).toLowerCase().trim();
        return eventRegion === filterValue;
      });
    }
    
    // Apply location type filter
    if (locationTypeFilter && locationTypeFilter !== "any" && locationTypeFilter.trim() !== "") {
      const filterValue = String(locationTypeFilter).toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event?.locationType) return false;
        const eventLocationType = String(event.locationType).toLowerCase().trim();
        return eventLocationType === filterValue;
      });
    }
    
    // Apply age group filter
    if (ageGroupFilter && ageGroupFilter !== "any" && ageGroupFilter.trim() !== "") {
      const filterValue = String(ageGroupFilter).toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event?.ageGroup) return false;
        const eventAgeGroup = String(event.ageGroup).toLowerCase().trim();
        if (eventAgeGroup === "all") return true;
        if (eventAgeGroup === "adult-young-adult") {
          return filterValue === "young-adult" || filterValue === "adult";
        }
        return eventAgeGroup === filterValue;
      });
    }
    
    // Apply language filter
    if (languageFilter && languageFilter !== "any" && languageFilter.trim() !== "") {
      const filterValue = String(languageFilter).toLowerCase().trim();
      filtered = filtered.filter(event => {
        if (!event?.language) return false;
        const eventLanguage = String(event.language).toLowerCase().trim();
        // Match if event language is "any" (matches all) or matches the filter
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
          src="/DSC00436.JPG"
          alt="Small Groups Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          fetchpriority="high"
          decoding="async"
          style={{ filter: 'brightness(0.5)', objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#244363]/60 via-[#244363]/20 to-transparent z-10" />
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
              className="text-3xl md:text-4xl font-bold text-center text-[#244363] mb-8"
            >
              Weekly Events
            </motion.h2>
            
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
                } else if (event.location && (event.location === 'Dumfries' || event.location === 'Woodbridge' || event.location === 'Fredericksburg' || event.location === 'Stafford')) {
                  locationDisplay = event.location;
                }
                
                return (
                  <motion.div 
                    key={event.id}
                    variants={itemVariants}
                    className={filteredEvents.length === 1 ? 'md:col-start-1 md:col-span-1' : ''}
                  >
                    <div className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px] shadow-2xl group cursor-pointer">
                      {/* Event Image as background */}
                      <div className="absolute inset-0 bg-gray-800">
                        {event.image && event.image.trim() !== '' ? (
                          <img
                            key={`${event.id}-${event.image}`}
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              // Log detailed error information to help debug
                              const imgElement = e.currentTarget;
                              // Try encoded version as fallback
                              const encodedPath = encodeImagePath(event.image);
                              console.error('Image failed to load:', {
                                eventId: event.id,
                                eventTitle: event.title,
                                imagePath: event.image,
                                encodedPath: encodedPath,
                                attemptedSrc: imgElement.src,
                                currentSrc: imgElement.currentSrc,
                                fullURL: window.location.origin + event.image,
                                encodedURL: window.location.origin + encodedPath
                              });
                              // Try encoded version if direct path failed
                              if (imgElement.src !== window.location.origin + encodedPath) {
                                imgElement.src = encodedPath;
                              } else {
                                // Hide image on error, gray background will show through
                                imgElement.style.display = 'none';
                              }
                            }}
                            onLoad={(e) => {
                              // Ensure image is visible when loaded
                              e.currentTarget.style.display = 'block';
                              e.currentTarget.style.opacity = '1';
                            }}
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>
                      
                      {/* Content positioned at bottom */}
                      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                        <div className="flex items-end justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{event.title}</h3>
                            <div className="text-lg md:text-xl mb-3 opacity-95">{event.date}</div>
                            {locationDisplay && (
                              <div className="flex items-center gap-2 text-base md:text-lg opacity-85">
                                <MapPin size={16} className="flex-shrink-0" />
                                <span>{locationDisplay}</span>
                              </div>
                            )}
                          </div>
                          {(event.id === 2 || event.id === 3 || event.id === 4 || event.id === 5 || event.id === 7) && (
                            <Link 
                              to={event.id === 2 ? "/youth-bible-study-interest" : "/neighborhood-bible-study-interest"} 
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button className="bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] px-6 py-3 text-base font-semibold flex-shrink-0">
                                Join
                              </Button>
                            </Link>
                          )}
                        </div>
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

