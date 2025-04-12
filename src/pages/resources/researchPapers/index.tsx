import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { ArrowDownNarrowWide, FileText } from 'lucide-react';
import { ResearchSVG } from '@/components/ProjectIcons';

const ResearchPapers = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      {/* Hero Section with background */}
      <div className='relative w-full'>
        <div className='w-full min-h-[60vh] sm:h-[70vh] flex items-center justify-center px-4 py-8 sm:py-16 bg-secondary/10 relative overflow-hidden'>
          {/* Decorative elements with responsive positioning */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute top-32 sm:top-52 right-4 sm:right-10 text-secondary-foreground/5 transform scale-75 sm:scale-100'>
              <ResearchSVG />
            </div>
            <div className='absolute bottom-4 sm:bottom-10 left-4 sm:left-10 text-secondary-foreground/5 transform scale-75 sm:scale-100'>
              <ResearchSVG />
            </div>
          </div>

          <div className='max-w-3xl mx-auto text-center z-10 px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-[800] mb-4 text-primary'>
              Advancing <em className='not-italic'>One Health</em> Through Research
            </h1>

            <p className='text-base sm:text-lg md:text-xl text-secondary-foreground mb-8 sm:mb-12 max-w-2xl mx-auto'>
              Discover our transdisciplinary research integrating human, animal, and environmental health for
              sustainable development in Africa through evidence-based solutions and innovative approaches.
            </p>

            <Button className='mx-auto bg-primary hover:bg-primary/90 w-full sm:w-auto'>
              <ArrowDownNarrowWide className='mr-2 h-4 w-4 sm:h-5 sm:w-5' />
              Browse Our Research Papers
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section with Empty State */}
      <div className='w-full bg-white'>
        <div className='max-w-3xl mx-auto px-4 pt-8 sm:pt-12 pb-16 sm:pb-[20vh]'>
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
