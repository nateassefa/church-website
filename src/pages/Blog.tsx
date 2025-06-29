import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Blog = () => {
  return (
    <PageLayout>
      <SEO 
        title="Blog - Living Hope Church" 
        description="Read our latest blog posts and articles from Living Hope for Generations Church."
        keywords={['blog', 'articles', 'news', 'updates']}
      />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blog</h1>
          <p className="text-xl text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
