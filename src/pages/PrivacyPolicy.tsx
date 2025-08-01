import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <SEO 
        title="Privacy Policy - Living Hope Church" 
        description="Privacy policy for Living Hope for Generations Church."
        keywords={['privacy policy', 'data protection', 'cookies']}
      />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
          <p className="text-xl text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;