import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const NeighborhoodBibleStudyInterest = () => {
  return (
    <PageLayout>
      <SEO 
        title="Neighborhood Bible Study Interest - Living Hope for Generations Church" 
        description="Join a Neighborhood Bible Study in your area. Fill out the form to get connected with a Bible study group near you."
        keywords={['neighborhood bible study', 'bible study', 'dumfries', 'woodbridge', 'stafford', 'fredericksburg']}
      />
      
      <section className="py-24 bg-[#244363] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Neighborhood Bible Study Interest
              </h1>
              <p className="text-lg text-white mb-2">
                Please take a second and fill out the below information and we will get you involved in a Neighborhood Bible Study!
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
              {/* Google Form Embed */}
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdb9Kyw09I4ifLNayHH0e8fes8sODBzM-uhfUTZrij0HR-GwA/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Neighborhood Bible Study Interest Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-8 text-sm text-white opacity-80">
              <p>This form was created inside of Living Hope Lutheran Church.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NeighborhoodBibleStudyInterest;

