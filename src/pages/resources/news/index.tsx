import { Button } from '@/components/ui/button';
import Empty from '@/components/Empty';
import { AlertCircle, Heart, Activity } from 'lucide-react';

const News = () => {
  const isEmpty = true;

  // Health-focused SVG components
  const HealthCareSVG = () => (
    <svg viewBox='0 0 100 100' className='w-24 h-24'>
      <circle cx='50' cy='50' r='45' fill='none' stroke='#3B82F6' strokeWidth='2' />
      <path d='M30 50 h40 M50 30 v40' stroke='#3B82F6' strokeWidth='8' strokeLinecap='round' />
      <circle cx='50' cy='50' r='35' fill='none' stroke='#3B82F6' strokeWidth='1' opacity='0.5' />
    </svg>
  );

  const GlobalHealthSVG = () => (
    <svg viewBox='0 0 100 100' className='w-24 h-24'>
      <circle cx='50' cy='50' r='45' fill='none' stroke='#3B82F6' strokeWidth='2' />
      <path
        d='M50 5 v90 M5 50 h90 M20 20 Q50 5, 80 20 Q95 50, 80 80 Q50 95, 20 80 Q5 50, 20 20'
        fill='none'
        stroke='#3B82F6'
        strokeWidth='2'
      />
      <circle cx='50' cy='50' r='8' fill='#3B82F6' />
    </svg>
  );

  return (
    <nav className='w-full'>
      {/* Hero Section */}
      <div className='relative h-[65vh] flex flex-col items-center justify-center bg-accent/10'>
        {/* Decorative SVGs */}
        <div className='absolute top-20 right-0 opacity-10 transform rotate-12'>
          <HealthCareSVG />
        </div>
        <div className='absolute bottom-0 left-0 opacity-10 -rotate-12'>
          <GlobalHealthSVG />
        </div>

        {/* Icon row */}
        <div className='absolute bottom-32 right-0 flex justify-center space-x-16 opacity-10'>
          <Heart className='w-12 h-12 text-accent' />
          <Activity className='w-12 h-12 text-accent' />
        </div>

        <div className='max-w-3xl mx-auto text-center mt-20 z-10 px-4'>
          <h1 className='text-4xl md:text-5xl font-serif mb-4 text-primary'>
            Global Health Updates: <span className='italic'>One Health, One World</span>
          </h1>

          <p className='text-lg mb-10 text-gray-700'>
            Stay informed about the latest developments in global health, community wellness initiatives, and
            breakthrough medical research. Our comprehensive coverage connects healthcare professionals, researchers,
            and communities worldwide.
          </p>

          <Button className='mx-auto bg-accent hover:bg-accent/90' disabled={isEmpty}>
            Explore Health News
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className='py-32 px-4 bg-white'>
        {isEmpty ? (
          <Empty
            message="We're preparing our latest health insights. Check back soon for updates on global health initiatives and breakthroughs!"
            icon={AlertCircle}
          />
        ) : (
          <div className='max-w-6xl mx-auto'>{/* Article grid would go here */}</div>
        )}
      </div>
    </nav>
  );
};

export default News;
