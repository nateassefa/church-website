import { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const eventImages = [
  'placeholder',
  'placeholder',
  'placeholder',
  'placeholder',
  'placeholder',
  'placeholder',
];

function HomeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideCount = eventImages.length;

  // Auto-rotate
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollTo((emblaApi.selectedScrollSnap() + 1) % slideCount);
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, slideCount]);

  // Sync selected index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Coverflow effect: calculate transform for each slide (show 5 at once)
  const getSlideStyle = (idx: number) => {
    let offset = idx - selectedIndex;
    // Handle looping
    if (offset > slideCount / 2) offset -= slideCount;
    if (offset < -slideCount / 2) offset += slideCount;
    if (offset === 0) {
      return {
        transform: 'scale(1) translateZ(0px) rotateY(0deg)',
        zIndex: 10,
        opacity: 1,
        filter: 'none',
      };
    } else if (offset === -1) {
      return {
        transform: 'scale(0.85) rotateY(25deg) translateX(-40%)',
        zIndex: 5,
        opacity: 0.7,
        filter: 'blur(0.5px)',
      };
    } else if (offset === 1) {
      return {
        transform: 'scale(0.85) rotateY(-25deg) translateX(40%)',
        zIndex: 5,
        opacity: 0.7,
        filter: 'blur(0.5px)',
      };
    } else if (offset === -2) {
      return {
        transform: 'scale(0.7) rotateY(40deg) translateX(-80%)',
        zIndex: 2,
        opacity: 0.4,
        filter: 'blur(1px)',
      };
    } else if (offset === 2) {
      return {
        transform: 'scale(0.7) rotateY(-40deg) translateX(80%)',
        zIndex: 2,
        opacity: 0.4,
        filter: 'blur(1px)',
      };
    } else {
      return {
        transform: 'scale(0.5) translateX(0px)',
        zIndex: 1,
        opacity: 0,
        filter: 'blur(2px)',
      };
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <div className="relative h-[440px] md:h-[480px] flex items-center justify-center">
        <div className="overflow-visible w-full h-full" ref={emblaRef}>
          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            {eventImages.map((src, idx) => (
              <div
                key={idx}
                className="min-w-0 shrink-0 grow-0 basis-auto flex items-center justify-center bg-white rounded-2xl overflow-visible shadow-lg transition-all duration-700 ease-in-out absolute top-0 left-0 right-0 mx-auto"
                style={{ ...getSlideStyle(idx), transition: 'all 0.7s cubic-bezier(.4,0,.2,1)', width: '320px', height: '420px' }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl">
                  <span className="text-gray-500 text-xl">[Event Image Placeholder]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2"
          onClick={() => emblaApi && emblaApi.scrollNext()}
          aria-label="Next slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {eventImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === idx ? 'bg-[#244363]' : 'bg-gray-300'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel; 