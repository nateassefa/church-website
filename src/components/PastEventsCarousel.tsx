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
      <div className="relative flex items-center justify-center w-full min-h-[80vh] max-w-full">
        <div className="overflow-visible w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full items-center">
            {events.map((event, idx) => (
              <div
                key={event.id}
                className="flex items-center justify-center w-full h-full overflow-visible mx-2"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-contain mx-auto my-0 max-h-[70vh] max-w-[90vw]"
                />
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