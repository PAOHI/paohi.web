import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { ArrowDownNarrowWide, FileText } from 'lucide-react';

const ResearchPapers = () => {
  // Research-themed decorative SVG
  const ResearchSVG = () => (
    <svg viewBox='0 0 100 100' className='w-24 h-24'>
      <circle cx='50' cy='50' r='40' fill='none' stroke='currentColor' strokeWidth='2' />
      <path d='M30 50 C30 30, 70 30, 70 50 C70 70, 30 70, 30 50' fill='none' stroke='currentColor' strokeWidth='2' />
      <line x1='50' y1='30' x2='50' y2='70' stroke='currentColor' strokeWidth='2' />
      <circle cx='50' cy='40' r='3' fill='currentColor' />
      <circle cx='50' cy='60' r='3' fill='currentColor' />
    </svg>
  );

  return (
    <div className='min-h-screen w-full'>
      {/* Hero Section with background */}
      <div className='relative w-full'>
        <div className='w-full h-[70vh] flex items-center justify-center px-4 py-16 bg-secondary/10 relative overflow-hidden'>
          {/* Decorative elements */}
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-52 right-10 text-secondary-foreground/5'>
              <ResearchSVG />
            </div>
            <div className='absolute bottom-10 left-10 text-secondary-foreground/5'>
              <ResearchSVG />
            </div>
          </div>

          <div className='max-w-3xl mx-auto text-center z-10'>
            <h1 className='text-4xl md:text-5xl font-serif mb-4 text-primary'>
              Advancing <em className='font-medium'>One Health</em> Through Research
            </h1>

            <p className='text-lg md:text-xl text-secondary-foreground mb-12 max-w-2xl mx-auto'>
              Discover our transdisciplinary research integrating human, animal, and environmental health for
              sustainable development in Africa through evidence-based solutions and innovative approaches.
            </p>

            <Button className='mx-auto bg-primary hover:bg-primary/90'>
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

export default ResearchPapers;
