import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Give = () => {
  return (
    <PageLayout>
      <SEO 
        title="Give - Living Hope Church" 
        description="Support the ministry of Living Hope for Generations Church through online giving."
        keywords={['give', 'donate', 'tithe', 'offering', 'support']}
      />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Give</h1>
          <p className="text-xl text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Give;
