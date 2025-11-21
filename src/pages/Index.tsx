import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import { Clock, MapPin } from 'lucide-react';
import Player from 'lottie-react';
// @ts-ignore: Importing JSON for Lottie animation
import treeAnimation from '../tree.json';

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
      <section className="bg-gray-100 py-6 px-4 md:px-0">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Lottie Animated Tree */}
          <div className="mb-4 flex items-center justify-center">
            <Player autoplay loop animationData={treeAnimation} style={{ width: '192px', height: '192px' }} />
          </div>
          <div className="text-[#223046] text-xl md:text-2xl font-medium mb-1">We Are So Grateful Today That God Loves Us</div>
          <div className="text-[#223046] text-xl md:text-2xl font-medium">Just The Way We Are.</div>
        </div>
      </section>

      {/* About/Welcome Section */}
      <section className="bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About/Welcome Text */}
          <div className="flex flex-col items-start">
            <span className="text-[#d9b062] font-semibold text-lg mb-2">Welcome to</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#223046]">Living Hope for Generations Lutheran Church</h2>
            <p className="text-lg text-[#223046] mb-6 opacity-90">
              A vibrant church where generations and cultures grow together in Christ and live out the Gospel.<br/>
              We are especially committed to reaching second-generation children, youth, and young adults with the Gospel in ways that reflect their language, culture, and spiritual needs.
            </p>
          </div>
          {/* Right: Video */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <video 
                src="/short_home_page.mp4"
                controls
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="bg-[#244363] py-8 px-4 md:px-0">
        <div className="w-full mx-auto border border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-0">
            {/* Left: Two YouTube Videos Side by Side */}
            <div className="bg-[#244363] p-10 flex flex-row gap-10 items-center justify-center">
              {/* Video 1 - Nate Assefa | confession requires obedience */}
              <div className="relative flex-1 aspect-video rounded overflow-hidden min-w-0">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CP-rTFv-Dng"
                  title="Nate Assefa | confession requires obedience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              {/* Video 2 - Dr Mamusha Fenta Pt 1 */}
              <div className="relative flex-1 aspect-video rounded overflow-hidden min-w-0">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hZewNwz5eZs"
                  title="Dr Mamusha Fenta Pt 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Right: Text and Buttons */}
            <div className="bg-[#244363] p-6 md:p-8 flex flex-col justify-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Watch Last Week's Sermons!
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Watch last week's English and Amharic sermon!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-black px-6 py-3 text-sm font-semibold rounded hover:bg-gray-200 transition-colors">
                  WATCH NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full">
        <div className="grid grid-cols-4 gap-0">
          {/* Panel 1 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="/DSC00009.jpg"
              alt="Church Community"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Panel 2 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="/Copy of _I0B7291.png"
              alt="Worship Service"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Panel 3 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="/PHOTO-2025-03-29-14-31-16.jpg"
              alt="Community Gathering"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Panel 4 */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="/DSC00310.jpg"
              alt="Church Family"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes sproutTreeTrunk {
          0% { stroke-dasharray: 0 100; opacity: 0; }
          40% { opacity: 1; }
          100% { stroke-dasharray: 100 0; opacity: 1; }
        }
        @keyframes sproutTreeLeaf {
          0% { opacity: 0; transform: scale(0.7); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-sprout-tree path {
          stroke-dasharray: 100 0;
          stroke-dashoffset: 0;
          animation: sproutTreeTrunk 1.2s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
        .tree-leaf {
          animation: sproutTreeLeaf 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .tree-leaf-0 { animation-delay: 0.7s; }
        .tree-leaf-1 { animation-delay: 0.75s; }
        .tree-leaf-2 { animation-delay: 0.8s; }
        .tree-leaf-3 { animation-delay: 0.85s; }
        .tree-leaf-4 { animation-delay: 0.9s; }
        .tree-leaf-5 { animation-delay: 0.95s; }
        .tree-leaf-6 { animation-delay: 1.0s; }
        .tree-leaf-7 { animation-delay: 1.05s; }
        .tree-leaf-8 { animation-delay: 1.1s; }
        .tree-leaf-9 { animation-delay: 1.15s; }
        .tree-leaf-10 { animation-delay: 1.2s; }
        .tree-leaf-11 { animation-delay: 1.25s; }
        .tree-leaf-12 { animation-delay: 1.3s; }
        .tree-leaf-13 { animation-delay: 1.35s; }
        .tree-leaf-14 { animation-delay: 1.4s; }
        .tree-leaf-15 { animation-delay: 1.45s; }
        .tree-leaf-center { animation-delay: 1.5s; }
      `}</style>
    </PageLayout>
  );
};

export default Index;
