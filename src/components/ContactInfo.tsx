import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import YouTubeVideo from './YouTubeVideo';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Past Events
          </h2>
        </div>

        {/* Auto-scrolling image marquee (no text, no carousel controls) */}
        <div className="w-full flex items-center justify-center py-8">
          <div className="relative w-full max-w-6xl mx-auto overflow-x-hidden">
            <div className="image-marquee flex items-center gap-12 animate-image-marquee">
              {[1,2,3,4,5,6,7].map((n) => (
                <div key={n} className="w-80 h-80 bg-gray-200 rounded-xl shadow-xl overflow-hidden flex items-center justify-center" />
              ))}
              {/* Repeat for seamless loop */}
              {[1,2,3,4,5,6,7].map((n) => (
                <div key={n+100} className="w-80 h-80 bg-gray-200 rounded-xl shadow-xl overflow-hidden flex items-center justify-center" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
