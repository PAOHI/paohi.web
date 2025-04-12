import { home3 } from '@/assets';
import WhatWeDo from '../home/WhatWeDo';

const OurServices = () => {
  return (
    <div className='min-h-screen w-full'>
      {/* Hero Section with background image */}
      <div className='relative w-full pt-[90px]'>
        <div
          className='w-full h-[70vh] flex items-center justify-center px-4 py-16 bg-black bg-opacity-60 bg-blend-overlay'
          style={{
            backgroundImage: `url(${home3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
          }}
        >
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg'>
              Advancing <em className='font-medium'>One Health</em> Through Research
            </h1>
            <p className='text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto'>
              Discover our transdisciplinary research integrating human, animal, and environmental health for
              sustainable development in Africa through evidence-based solutions and innovative approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with What We Do Cards */}
      <div className='w-full bg-white'>
        <div className='max-w-6xl mx-auto px-4 py-20'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl text-primary font-[800] mb-6'>
              What We <span className='italic'>Do</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Our integrated approach combines expertise and innovation to deliver comprehensive solutions across the
              One Health spectrum.
            </p>
          </div>

          {/* Cards Grid */}
          <div>
            <WhatWeDo showTitle={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
