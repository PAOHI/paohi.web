import { Button } from '@/components/ui/button';
import Empty from '@/components/Empty';
import { AlertCircle, Heart, Activity } from 'lucide-react';

const News = () => {
  const isEmpty = true;

  // Health-focused SVG components with responsive sizing
  const HealthCareSVG = () => (
    <svg viewBox='0 0 100 100' className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'>
      <circle cx='50' cy='50' r='45' fill='none' stroke='#3B82F6' strokeWidth='2' />
      <path d='M30 50 h40 M50 30 v40' stroke='#3B82F6' strokeWidth='8' strokeLinecap='round' />
      <circle cx='50' cy='50' r='35' fill='none' stroke='#3B82F6' strokeWidth='1' opacity='0.5' />
    </svg>
  );

  const GlobalHealthSVG = () => (
    <svg viewBox='0 0 100 100' className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'>
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
    <nav className='w-full overflow-x-hidden'>
      {/* Hero Section */}
      <div className='w-full min-h-[60vh] sm:h-[70vh] flex items-center justify-center px-4 py-8 sm:py-16 bg-accent/10 relative overflow-hidden '>
        {/* Decorative SVGs with responsive positioning */}
        <div
          className='absolute top-10 sm:top-20 right-0 opacity-10 transform rotate-12 scale-75 sm:scale-100 pointer-events-none'
          aria-hidden='true'
        >
          <HealthCareSVG />
        </div>
        <div
          className='absolute -bottom-4 sm:bottom-0 left-0 opacity-10 -rotate-12 scale-75 sm:scale-100 pointer-events-none'
          aria-hidden='true'
        >
          <GlobalHealthSVG />
        </div>

        {/* Icon row with responsive spacing */}
        <div
          className='absolute bottom-16 sm:bottom-32 right-0 flex justify-center space-x-8 sm:space-x-16 opacity-10 pointer-events-none'
          aria-hidden='true'
        >
          <Heart className='w-8 h-8 sm:w-12 sm:h-12 text-accent' />
          <Activity className='w-8 h-8 sm:w-12 sm:h-12 text-accent' />
        </div>

        <div className='max-w-3xl mx-auto text-center mt-8 sm:mt-20 z-10'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-[800] mb-4 text-primary'>
            Global Health Updates: <span className='block sm:inline italic mt-2 sm:mt-0'>One Health, One World</span>
          </h1>

          <p className='text-base sm:text-lg text-gray-700 mb-6 sm:mb-10 max-w-2xl mx-auto'>
            Stay informed about the latest developments in global health, community wellness initiatives, and
            breakthrough medical research. Our comprehensive coverage connects healthcare professionals, researchers,
            and communities worldwide.
          </p>

          <Button className='mx-auto bg-accent hover:bg-accent/90 w-full sm:w-auto' disabled={isEmpty}>
            Explore Health News
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className='py-16 sm:py-32 px-4 bg-white'>
        {isEmpty ? (
          <div className='max-w-3xl mx-auto'>
            <Empty
              message="We're preparing our latest health insights. Check back soon for updates on global health initiatives and breakthroughs!"
              icon={AlertCircle}
            />
          </div>
        ) : (
          <div className='max-w-6xl mx-auto'>{/* Article grid would go here */}</div>
        )}
      </div>
    </nav>
  );
};

export default News;
