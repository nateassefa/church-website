
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Living Hope: A Home for Every Generation" 
        description="Living Hope for Generations Church is a spiritual home for Ethiopian and Eritrean families along the 95-Highway Corridor. Join us in discovering purpose, deepening your relationship with Christ, and building community."
        keywords={['church', 'Ethiopian', 'Eritrean', 'Triangle VA', 'Christian', 'worship', 'community', 'bilingual services']}
      />
      <Hero />
      <Features />
    </PageLayout>
  );
};

export default Index;
