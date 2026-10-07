import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const YouthBibleStudyInterest = () => {
  return (
    <PageLayout>
      <SEO 
        title="Middle & High School Bible Study Interest - Living Hope for Generations Church" 
        description="Join our Middle & High School Bible Study via Zoom every Monday at 7:00 PM. Sign up to get connected with our WhatsApp chat."
        keywords={['youth bible study', 'middle school', 'high school', 'bible study', 'zoom', 'whatsapp']}
      />
      
      <section className="py-24 bg-[#244363] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Middle & High School Bible Study
              </h1>
              <p className="text-lg text-white mb-2">
                We have Middle & High School Bible Study via Zoom every Monday at 7:00 PM!
              </p>
              <p className="text-lg text-white">
                Join our WhatsApp chat by giving us your info below.
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
              {/* Google Form Embed */}
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfHe_jw_Br9BQb0bup0TcgkYN5gdfA1p5gbXUv_agvV0WxPoA/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Youth Bible Study Interest Form"
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

export default YouthBibleStudyInterest;

