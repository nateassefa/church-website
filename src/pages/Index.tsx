import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SEO from '@/components/SEO';
import HomeCarousel from '@/components/HomeCarousel';
import PastEventsCarousel from '@/components/PastEventsCarousel';
import { pastEvents as homePastEvents } from './Events';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Living Hope: A Home for Every Generation" 
        description="Living Hope for Generations Church is a spiritual home for Ethiopian and Eritrean families along the 95-Highway Corridor. Join us in discovering purpose, deepening your relationship with Christ, and building community."
        keywords={['church', 'Ethiopian', 'Eritrean', 'Triangle VA', 'Christian', 'worship', 'community', 'bilingual services']}
      />
      <div className="pt-0 pb-0">
        <Hero />
      </div>
      <Features />
      {/* Removed WhyWrlds and Process sections as requested */}

      {/* Past Events Carousel above Footer */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#244363] mb-8">
            Past Events
          </h2>
          <PastEventsCarousel events={homePastEvents} />
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
