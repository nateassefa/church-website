
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-lg" : "bg-[#244363]"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn(
                "text-2xl font-bold",
                isScrolled ? "text-[#244363]" : "text-white"
              )}>
                Living Hope
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                About Us
              </Link>
              <Link 
                to="/statement-of-faith"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                Statement of Faith
              </Link>
              <Link 
                to="/ministries"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                Ministries
              </Link>
              <Link 
                to="/events"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                Events
              </Link>
              <Link 
                to="/plan-visit"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d9b062]",
                  isScrolled ? "text-gray-700" : "text-gray-200"
                )}
              >
                Plan Your Visit
              </Link>
              <Link 
                to="/give"
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled 
                    ? "bg-[#d9b062] text-white hover:bg-[#d9b062]/90" 
                    : "bg-[#d9b062] text-white hover:bg-[#d9b062]/90"
                )}
              >
                Give
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden w-full",
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn(
          "px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm",
          isScrolled ? "bg-white" : "bg-[#244363]"
        )}>
          <Link 
            to="/"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            About Us
          </Link>
          <Link 
            to="/statement-of-faith"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Statement of Faith
          </Link>
          <Link 
            to="/ministries"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Ministries
          </Link>
          <Link 
            to="/events"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Events
          </Link>
          <Link 
            to="/plan-visit"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-[#244363]/80"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Plan Your Visit
          </Link>
          <Link 
            to="/give"
            className={cn(
              "block px-3 py-2 rounded-md",
              isScrolled ? "bg-[#d9b062] text-white hover:bg-[#d9b062]/90" : "bg-[#d9b062] text-white hover:bg-[#d9b062]/90"
            )}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Give
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
