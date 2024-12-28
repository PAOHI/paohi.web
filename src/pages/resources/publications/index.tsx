import { publicationPatern } from '@/assets';
import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const Publications = () => {
  const isEmpty = true;

  return (
    <nav className='w-full'>
      {/* Hero Section in Nav */}
      <div className='relative h-[65vh] flex flex-col items-center justify-center bg-primary/10'>
        <div
          style={{ backgroundImage: `url(${publicationPatern})` }}
          className='absolute -top-20 right-0 w-[100px] h-[80%] bg-no-repeat bg-right bg-contain rotate-180'
        />
        <div
          style={{ backgroundImage: `url(${publicationPatern})` }}
          className='absolute bottom-0 left-0 w-[100px] h-[50%] bg-no-repeat bg-left bg-contain'
        />

        <div className='max-w-3xl mx-auto text-center mt-20 z-10'>
          <h1 className='text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-b from-primary to-accent inline-block text-transparent bg-clip-text'>
            Advancing Knowledge: <span className='italic'>Insights Through Publications</span>
          </h1>

          <p className='text-lg mb-10 text-gray-700'>
            Dive into our collection of research and thought leadership publications. Explore insights that drive
            innovation and promote evidence-based practices in technology, healthcare, and sustainability across Africa.
          </p>

          <Button className='mx-auto' disabled={isEmpty}>
            Browse Publications
          </Button>
        </div>
      </div>

      {/* Publications or Empty State */}
      <div className='py-32'>
        {isEmpty ? (
          <Empty message='No publications found at the moment' icon={AlertCircle} />
        ) : (
          <div>{/* Publications content goes here */}</div>
        )}
      </div>
    </nav>
  );
};

export default Publications;
