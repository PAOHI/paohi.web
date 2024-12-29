import { publicationPatern } from '@/assets';
import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const Publications = () => {
  const isEmpty = true;

  return (
    <nav className='w-full overflow-x-hidden'>
      {/* Hero Section in Nav */}
      <div className='w-full min-h-[60vh] sm:h-[70vh] flex items-center justify-center px-4 py-8 sm:py-16 bg-primary/10 relative overflow-hidden '>
        {/* Decorative patterns with improved responsiveness */}
        <div
          style={{ backgroundImage: `url(${publicationPatern})` }}
          className='absolute -top-10 sm:-top-20 right-0 w-[60px] sm:w-[100px] h-[80%] bg-no-repeat bg-right bg-contain rotate-180 opacity-70 pointer-events-none'
          aria-hidden='true'
        />
        <div
          style={{ backgroundImage: `url(${publicationPatern})` }}
          className='absolute bottom-0 left-0 w-[60px] sm:w-[100px] h-[50%] bg-no-repeat bg-left bg-contain opacity-70 pointer-events-none'
          aria-hidden='true'
        />

        <div className='max-w-3xl mx-auto text-center mt-8 sm:mt-20 z-10'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-[800] mb-4 text-primary'>
            Advancing Knowledge:{' '}
            <span className='block sm:inline italic mt-2 sm:mt-0'>Insights Through Publications</span>
          </h1>

          <p className='text-base sm:text-lg text-gray-700 mb-6 sm:mb-10 max-w-2xl mx-auto px-4'>
            Dive into our collection of research and thought leadership publications. Explore insights that drive
            innovation and promote evidence-based practices in technology, healthcare, and sustainability across Africa.
          </p>

          <Button className='mx-auto w-full sm:w-auto' disabled={isEmpty}>
            Browse Publications
          </Button>
        </div>
      </div>

      {/* Publications or Empty State */}
      <div className='py-16 sm:py-32 px-4'>
        {isEmpty ? (
          <Empty message='No publications found at the moment' icon={AlertCircle} />
        ) : (
          <div className='max-w-3xl mx-auto'>{/* Publications content goes here */}</div>
        )}
      </div>
    </nav>
  );
};

export default Publications;
