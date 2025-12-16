import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNextStepsDropdownOpen, setIsNextStepsDropdownOpen] = useState(false);
  const [isNewHereDropdownOpen, setIsNewHereDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top, hide when scrolling down
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] w-full bg-transparent shadow-sm transition-transform duration-300"
      )}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3 }
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto bg-transparent overflow-visible">
        <div className="flex items-center justify-between h-16 bg-transparent overflow-visible">
          <div className="flex-shrink-0 bg-transparent overflow-visible">
            <Link to="/" className="flex items-center bg-transparent -ml-4 md:-ml-8 mt-16 md:mt-16">
              <img src="/church_logo_lutheran.png" alt="Living Hope Logo" className="h-40 md:h-52 w-auto object-contain max-w-[280px] md:max-w-none" loading="eager" fetchpriority="high" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block bg-transparent">
            <div className="ml-10 flex items-baseline space-x-8 bg-transparent">
              <Link 
                to="/"
                className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white"
              >
                About Us
              </Link>
              <Link 
                to="/statement-of-faith"
                className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white"
              >
                Statement of Faith
              </Link>
              <Link 
                to="/events"
                className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white"
              >
                Events
              </Link>
              <div
                onMouseEnter={() => setIsNewHereDropdownOpen(true)}
                onMouseLeave={() => setIsNewHereDropdownOpen(false)}
              >
                <DropdownMenu open={isNewHereDropdownOpen} onOpenChange={setIsNewHereDropdownOpen}>
                  <DropdownMenuTrigger className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white focus:outline-none">
                    New Here
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black border-gray-700"
                    onMouseEnter={() => setIsNewHereDropdownOpen(true)}
                    onMouseLeave={() => setIsNewHereDropdownOpen(false)}
                  >
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/watch-service"
                        className="cursor-pointer text-white hover:text-[#d9b062]"
                      >
                        Watch a Service
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/ministries"
                        className="cursor-pointer text-white hover:text-[#d9b062]"
                      >
                        Ministries
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div
                onMouseEnter={() => setIsNextStepsDropdownOpen(true)}
                onMouseLeave={() => setIsNextStepsDropdownOpen(false)}
              >
                <DropdownMenu open={isNextStepsDropdownOpen} onOpenChange={setIsNextStepsDropdownOpen}>
                  <DropdownMenuTrigger className="px-3 py-2 text-lg font-semibold transition-colors hover:text-[#d9b062] text-white focus:outline-none">
                    Next Steps
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-black border-gray-700"
                    onMouseEnter={() => setIsNextStepsDropdownOpen(true)}
                    onMouseLeave={() => setIsNextStepsDropdownOpen(false)}
                  >
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/plan-visit"
                        className="cursor-pointer text-white hover:text-[#d9b062]"
                      >
                        Become a Member
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link 
                        to="/small-groups"
                        className="cursor-pointer text-white hover:text-[#d9b062]"
                      >
                        Small Groups
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <a 
                href="https://give.tithe.ly/?formId=b6bf17e5-ad05-4f8f-bb12-55d1da8b3ce3&context=modal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md text-lg font-bold transition-colors bg-[#d9b062] text-[#244363] hover:bg-[#bfa05a] shadow-md"
              >
                Give
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden w-full bg-transparent",
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm bg-[#244363]/90 backdrop-blur-sm">
          <Link 
            to="/"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            About Us
          </Link>
          <Link 
            to="/statement-of-faith"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Statement of Faith
          </Link>
          <Link 
            to="/events"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Events
          </Link>
          <div className="px-3 py-2 text-lg font-semibold text-white">
            New Here
          </div>
          <Link 
            to="/watch-service"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80 pl-8"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Watch a Service
          </Link>
          <Link 
            to="/ministries"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80 pl-8"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Ministries
          </Link>
          <div className="px-3 py-2 text-lg font-semibold text-white">
            Next Steps
          </div>
          <Link 
            to="/plan-visit"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80 pl-8"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Become a Member
          </Link>
          <Link 
            to="/small-groups"
            className="block px-3 py-3 rounded-md text-lg font-semibold text-white hover:bg-[#244363]/80 pl-8"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Small Groups
          </Link>
          <a 
            href="https://give.tithe.ly/?formId=b6bf17e5-ad05-4f8f-bb12-55d1da8b3ce3&context=modal"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-3 rounded-md bg-[#d9b062] text-lg font-bold text-[#244363] hover:bg-[#bfa05a] shadow-md"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Give
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


