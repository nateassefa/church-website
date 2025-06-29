import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Careers = () => {
  return (
    <PageLayout>
      <SEO 
        title="Careers - Living Hope Church" 
        description="Career opportunities at Living Hope for Generations Church."
        keywords={['careers', 'jobs', 'employment', 'opportunities']}
      />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Careers</h1>
          <p className="text-xl text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
