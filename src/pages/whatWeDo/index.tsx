import { home3 } from '@/assets';
import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { ArrowDownNarrowWide, FileText } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className='min-h-screen w-full'>
      {/* Hero Section with background image */}
      <div className='relative w-full pt-20'>
        <div
          className='w-full h-[70vh] flex items-center justify-center px-4 py-16 bg-black bg-opacity-60 bg-blend-overlay'
          style={{
            backgroundImage: `url(${home3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
          }}
        >
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-serif  text-white mb-6 drop-shadow-lg'>
              Advancing <em className='font-medium'>One Health</em> Through Research
            </h1>

            <p className='text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto '>
              Discover our transdisciplinary research integrating human, animal, and environmental health for
              sustainable development in Africa through evidence-based solutions and innovative approaches.
            </p>

            <Button className=' mx-auto'>
              <ArrowDownNarrowWide className='mr-2 h-5 w-5' />
              Browse Our Research Papers
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section with Empty State */}
      <div className='w-full bg-white'>
        <div className='max-w-3xl mx-auto px-4 pt-12 pb-[20vh]'>
          <div className='w-full flex items-center justify-center'>
            <Empty
              icon={FileText}
              message='Our research team is currently working on groundbreaking studies in One Health. Check back soon for peer-reviewed publications on integrated approaches to human, animal, and environmental health in Africa.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
