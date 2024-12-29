import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, GraduationCap, LineChart, Users, LucideIcon } from 'lucide-react';

interface WhatWeDoCardProps {
  title: string;
  description: string;
  className?: string;
  icon: LucideIcon;
  slug: string;
}

interface Service extends WhatWeDoCardProps {
  hoverClass: string;
}

const WhatWeDoCard = ({ title, description, className, icon: Icon, slug }: WhatWeDoCardProps) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/services/${slug}`);
  };

  return (
    <Card
      onClick={handleClick}
      className={`
        p-[4vw] sm:p-[3vw] lg:p-[2rem] 
        bg-primary/5 
        transition-colors 
        h-fit 
        border-none 
        hover:cursor-pointer 
        text-black 
        ${className} 
        lg:transition-all 
        lg:duration-500 
        lg:hover:-translate-y-3 
        shadow-md 
        shadow-white 
        rounded-3xl 
        group
      `}
    >
      <div className='mb-[3vh] lg:mb-[2vh]'>
        <Icon className='w-[2rem] h-[2rem] lg:w-[2.5rem] lg:h-[2.5rem]' strokeWidth={1.5} />
      </div>
      <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-[1vh] lg:mb-[2vh]'>{title}</h2>
      <p className='text-base lg:text-lg'>{description}</p>
      <div className='mt-[3vh] lg:mt-[2vh] flex items-center'>
        <span className='text-base lg:text-lg font-medium underline lg:group-hover:no-underline cursor-pointer'>
          Read More
        </span>
        <ArrowRight className='ml-[0.25rem] w-[1.25rem] h-[1.25rem] lg:group-hover:translate-x-[0.3rem] lg:transition-all lg:duration-500' />
      </div>
    </Card>
  );
};

interface WhatWeDoProps {
  showTitle: boolean;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ showTitle }) => {
  const services: Service[] = [
    {
      title: 'Situation Analysis',
      description:
        'We provide support in implementation of comprehensive situation analysis and risk assessment exercise to identify priorities in One Health context.',
      icon: BookOpen,
      hoverClass: 'lg:hover:bg-[#fff1e6]',
      slug: 'situation-analysis',
    },
    {
      title: 'Capacity Building',
      description:
        'Through innovative training programs, we support building the institutional, national, and regional capacity in scientific and implementation health research.',
      icon: GraduationCap,
      hoverClass: 'lg:hover:bg-[#e6f7ff]',
      slug: 'capacity-building',
    },
    {
      title: 'Research & Evidence',
      description:
        'We generate accurate and up to date evidence through transdisciplinary scientific, health systems, and operational research to guide policymaking and planning.',
      icon: LineChart,
      hoverClass: 'lg:hover:bg-[#fff7e6]',
      slug: 'research-and-evidence',
    },
    {
      title: 'Technical Support',
      description:
        'We provide timely and high quality technical, scientific, and leadership support to institutes and entities working on human, animal, and environmental health.',
      icon: Users,
      hoverClass: 'lg:hover:bg-[#f3e8ff]',
      slug: 'technical-support',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-[4vw] sm:px-[3vw] lg:px-0 my-[4vh] sm:my-[5vh] lg:my-[6vh]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[6vw] md:gap-[1.5vw]'>
        <div className='space-y-[3vh]'>
          {showTitle && (
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-primary font-[800] text-center lg:text-left'>
              What We <br /> Do
            </h1>
          )}
          <WhatWeDoCard {...services[2]} className={services[2].hoverClass} />
          <WhatWeDoCard {...services[3]} className={services[3].hoverClass} />
        </div>
        <div className='space-y-[3vh]'>
          <WhatWeDoCard {...services[0]} className={services[0].hoverClass} />
          <WhatWeDoCard {...services[1]} className={services[1].hoverClass} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
