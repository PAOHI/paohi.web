import Empty from '@/components/Empty';
import { Button } from '@/components/ui/button';
import { FolderGit2, ArrowDownNarrowWide } from 'lucide-react';

const Projects = () => {
  // Projects-themed decorative SVG
  const ProjectsSVG = () => (
    <svg viewBox='0 0 100 100' className='w-24 h-24 text-gray-300'>
      <rect x='20' y='20' width='60' height='60' fill='none' stroke='currentColor' strokeWidth='2' rx='8' />
      <line x1='40' y1='40' x2='60' y2='40' stroke='currentColor' strokeWidth='2' />
      <line x1='40' y1='50' x2='60' y2='50' stroke='currentColor' strokeWidth='2' />
      <line x1='40' y1='60' x2='60' y2='60' stroke='currentColor' strokeWidth='2' />
      <circle cx='30' cy='40' r='2' fill='currentColor' />
      <circle cx='30' cy='50' r='2' fill='currentColor' />
      <circle cx='30' cy='60' r='2' fill='currentColor' />
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
              <ProjectsSVG />
            </div>
            <div className='absolute bottom-10 left-10 text-secondary-foreground/5'>
              <ProjectsSVG />
            </div>
          </div>

          <div className='max-w-3xl mx-auto text-center z-10'>
            <h1 className='text-4xl md:text-5xl font-serif mb-4 text-primary'>
              Transforming <em className='font-medium'>Ideas</em> Into Impact
            </h1>

            <p className='text-lg md:text-xl text-secondary-foreground mb-12 max-w-2xl mx-auto'>
              Explore our portfolio of innovative projects addressing critical challenges in public health,
              environmental sustainability, and community development across Africa through collaborative and
              sustainable solutions.
            </p>

            <Button className='mx-auto bg-primary hover:bg-primary/90'>
              <ArrowDownNarrowWide className='mr-2 h-5 w-5' />
              View Our Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section with Empty State */}
      <div className='w-full bg-white'>
        <div className='max-w-3xl mx-auto px-4 pt-12 pb-[20vh]'>
          <div className='w-full flex items-center justify-center'>
            <Empty
              icon={FolderGit2}
              message='Our team is currently working on several impactful projects. Check back soon to explore our initiatives in public health, environmental conservation, and community development.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
