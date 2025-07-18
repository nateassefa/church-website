import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import { Clock, MapPin } from 'lucide-react';

function getNextSunday830AM() {
  const now = new Date();
  const result = new Date(now);
  result.setHours(8, 30, 0, 0); // Set to 8:30 AM
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const day = now.getDay();
  if (day === 0 && now < result) {
    // Today is Sunday, but before 8:30 AM
    return result;
  } else {
    // Next Sunday
    const daysUntilSunday = (7 - day) % 7 || 7;
    result.setDate(now.getDate() + daysUntilSunday);
    return result;
  }
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const Index = () => {
  const nextSunday = getNextSunday830AM();
  const { days, hours, minutes, seconds } = useCountdown(nextSunday);
  return (
    <PageLayout>
      <SEO 
        title="Living Hope: A Home for Every Generation" 
        description="Living Hope for Generations Church is a spiritual home for Ethiopian and Eritrean families along the 95-Highway Corridor. Join us in discovering purpose, deepening your relationship with Christ, and building community."
        keywords={['church', 'Ethiopian', 'Eritrean', 'Triangle VA', 'Christian', 'worship', 'community', 'bilingual services']}
      />
      {/* Hero Section */}
      <div className="pt-0 pb-0">
        <Hero />
      </div>

      {/* Centered gratitude banner (replaces countdown) */}
      <section className="bg-gray-100 py-16 px-4 md:px-0">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Stained glass icon placeholder */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
            <rect x="16" y="2" width="8" height="36" rx="4" fill="#bfa05a" />
            <rect x="8" y="10" width="24" height="8" rx="4" fill="#244363" />
            <rect x="8" y="22" width="24" height="8" rx="4" fill="#2ec4b6" />
            <rect x="16" y="34" width="8" height="4" rx="2" fill="#d9b062" />
          </svg>
          <div className="text-[#223046] text-xl md:text-2xl font-medium mb-1">We Are So Grateful Today That God Loves Us</div>
          <div className="text-[#223046] text-xl md:text-2xl font-medium">Just The Way We Are.</div>
        </div>
      </section>

      {/* About/Welcome Section */}
      <section className="bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About/Welcome Text */}
          <div className="flex flex-col items-start">
            <span className="text-[#2ec4b6] font-semibold text-lg mb-2">Welcome</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#223046]">About Our Church</h2>
            <p className="text-lg text-[#223046] mb-6 opacity-90">At Modern Church, you won't be met with shame, guilt, or condemnation. No matter what you've been through or what questions you might have, our church is a place where you'll find the grace, mercy, and forgiveness Jesus gives to everyone.</p>
            <p className="text-lg text-[#223046] mb-6 opacity-90">Come and be part of our family this Sunday.</p>
            <a href="#" className="text-[#2ec4b6] font-semibold text-base flex items-center gap-2 hover:underline">
              <span>Watch Video</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5,3 19,10 5,17" /></svg>
            </a>
          </div>
          {/* Right: Image/Video with Play Button */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src="/church_placeholder.jpg" alt="Church" className="w-full h-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 hover:bg-black/40 transition">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#fff" fillOpacity="0.8" />
                  <polygon points="26,20 48,32 26,44" fill="#2ec4b6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
