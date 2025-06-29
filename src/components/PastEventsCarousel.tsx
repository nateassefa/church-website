import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

interface PastEventsCarouselProps {
  events: PastEvent[];
}

const PastEventsCarousel: React.FC<PastEventsCarouselProps> = ({ events }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideCount = events.length;

  // Auto-rotate
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollTo((emblaApi.selectedScrollSnap() + 1) % slideCount);
    }, 3500);
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

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-10">
      <div className="relative flex items-center justify-center" style={{ height: '340px', maxWidth: '100%' }}>
        <div className="overflow-visible w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full items-center">
            {events.map((event, idx) => (
              <div
                key={event.id}
                className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex items-center justify-center bg-white rounded-2xl overflow-visible shadow-lg transition-all duration-700 ease-in-out mx-2"
                style={{ width: '340px', height: '340px' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-4">
                  <div className="w-full aspect-square flex items-center justify-center bg-gray-300 rounded-xl mb-4 overflow-hidden" style={{ maxWidth: '240px', maxHeight: '240px' }}>
                    <span className="text-gray-500 text-lg">[Event Image Placeholder]</span>
                  </div>
                  <div className="text-base font-bold text-[#244363] mb-1 text-center">{event.title}</div>
                  <div className="text-xs text-gray-700 mb-1 text-center">{event.date}</div>
                  <div className="text-xs text-gray-500 text-center">{event.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {events.map((_, idx) => (
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
};

export default PastEventsCarousel; 